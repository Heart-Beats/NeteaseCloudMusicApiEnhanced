/**
 * EdgeOne Makers 云函数适配入口（catch-all 路由）
 * 所有请求都会进入 NeteaseCloudMusicApiEnhanced 的 Express app
 *
 * 设计说明：
 *   1. EdgeOne 函数打包器使用 esbuild(target=node14)，不允许顶层 await，
 *      因此用「懒初始化」：首个请求到来时才异步构建内部 app。
 *   2. 打包产物会在每个请求重新执行本模块（平台运行时行为），
 *      因此初始化结果通过 globalThis 缓存，保证同一进程内只初始化一次。
 *   3. require.resolve 兜底必须最先执行（见下方注释），
 *      业务模块（generateConfig / server / manifest）全部改为动态导入，
 *      确保兜底在任何业务代码加载之前生效。
 */
import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { tmpdir } from 'node:os'

// ============================================================
// 【必须最先执行】require.resolve 兜底
// jsdom 在模块加载时执行 require.resolve('./xhr-sync-worker.js')
// （同步 XHR 的 fork 工作文件），该相对路径在打包产物中无法解析、
// 会直接抛错并导致整个函数加载失败。这里仅对这一个文件做兜底，
// 其余解析行为完全不变；用标记位保证只补丁一次。
// ============================================================
const rawRequire = globalThis.require
if (
  rawRequire &&
  typeof rawRequire.resolve === 'function' &&
  !rawRequire.__edgeoneResolvePatched
) {
  rawRequire.__edgeoneResolvePatched = true
  const origResolve = rawRequire.resolve.bind(rawRequire)
  rawRequire.resolve = (id, opts) => {
    try {
      return origResolve(id, opts)
    } catch (err) {
      if (id === './xhr-sync-worker.js') {
        return path.resolve('xhr-sync-worker.js')
      }
      throw err
    }
  }
}

// 保证 anonymous_token 文件存在（与 app.js 行为一致）
const tokenPath = path.resolve(tmpdir(), 'anonymous_token')
if (!fs.existsSync(tokenPath)) {
  fs.writeFileSync(tokenPath, '', 'utf-8')
}

// ============================================================
// 跨请求状态缓存（平台按请求重新执行本模块，挂到 globalThis 复用）
// ============================================================
const g = globalThis
if (!g.__NCM_EDGEONE_STATE__) {
  g.__NCM_EDGEONE_STATE__ = { innerApp: null, initPromise: null }
}
const state = g.__NCM_EDGEONE_STATE__

function initApp() {
  if (!state.initPromise) {
    state.initPromise = (async () => {
      // 启动流程与 app.js 保持一致：
      // generateConfig()（随机中国 IP / 匿名 token / 请求密钥）→ constructServer()
      const { default: generateConfig } = await import('../generateConfig.js')
      await generateConfig()

      const { constructServer } = await import('../server.js')
      const { default: manifest } = await import('./_ncm-manifest.js')
      state.innerApp = await constructServer(manifest.moduleDefs)
      return state.innerApp
    })().catch((err) => {
      // 初始化失败时允许下次请求重试
      state.initPromise = null
      throw err
    })
  }
  return state.initPromise
}

const app = express()

app.use((req, res, next) => {
  if (state.innerApp) {
    return state.innerApp(req, res, next)
  }
  initApp().then(
    () => state.innerApp(req, res, next),
    (err) => {
      res.status(500).json({
        code: 500,
        msg: 'EdgeOne adapter: init failed',
        error: err && err.message ? err.message : String(err),
      })
    },
  )
})

export default app
