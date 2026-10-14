/**
 * EdgeOne Makers 云函数适配入口（catch-all 路由）
 * 所有请求都会进入 NeteaseCloudMusicApiEnhanced 的 Express app
 *
 * 启动流程与 app.js 保持一致：
 *   1. 保证 anonymous_token 文件存在
 *   2. generateConfig()（随机中国 IP / 匿名 token / 请求密钥）
 *   3. constructServer()（构建 Express app，不监听端口，适配 Serverless）
 */
import fs from 'node:fs'
import path from 'node:path'
import { tmpdir } from 'node:os'

const tokenPath = path.resolve(tmpdir(), 'anonymous_token')
if (!fs.existsSync(tokenPath)) {
  fs.writeFileSync(tokenPath, '', 'utf-8')
}

const { default: generateConfig } = await import('../generateConfig.js')
await generateConfig()

const { constructServer } = await import('../server.js')
const app = await constructServer()

export default app
