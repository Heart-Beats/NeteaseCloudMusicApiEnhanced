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

// 根路径欢迎页：打包环境不携带 public/ 文档目录，原版根路径会 404，
// 这里直接在外层 app 返回一个轻量服务信息页
const ROOT_PAGE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NeteaseCloudMusicApiEnhanced</title>
<style>
  body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
         background: #f6f7f9; color: #1f2328; font: 15px/1.7 -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif; }
  main { max-width: 640px; padding: 32px; background: #fff; border: 1px solid #e3e6ea; border-radius: 12px; }
  h1 { font-size: 20px; margin: 0 0 8px; }
  p.sub { color: #57606a; margin: 0 0 20px; }
  code { background: #f0f2f5; border: 1px solid #e3e6ea; border-radius: 4px; padding: 1px 6px; font-size: 13px; }
  a { color: #1a6dd4; text-decoration: none; }
  a:hover { text-decoration: underline; }
  li { margin: 4px 0; }
</style>
</head>
<body>
<main>
  <h1>NeteaseCloudMusicApiEnhanced</h1>
  <p class="sub">网易云音乐 API 服务 · 部署于 EdgeOne Makers（全球可用区）</p>
  <ul>
    <li>接口示例：<code>GET /search?keywords=你好</code></li>
    <li>登录态：由调用方随请求携带（cookie 参数或 Cookie 头）</li>
    <li>接口文档：<a href="https://neteasecloudmusicapienhanced.js.org/" target="_blank" rel="noopener">官方文档</a></li>
    <li>项目仓库：<a href="https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced" target="_blank" rel="noopener">GitHub</a></li>
  </ul>
</main>
</body>
</html>`

app.use((req, res, next) => {
  if (req.method === 'GET' && (req.path === '/' || req.path === '')) {
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.status(200).send(ROOT_PAGE)
  }
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
