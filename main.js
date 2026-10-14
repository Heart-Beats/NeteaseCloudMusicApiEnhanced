const fs = require('fs')
const path = require('path')
const tmpPath = require('os').tmpdir()
const { cookieToJson } = require('./util')

const anonymousTokenPath = path.resolve(tmpPath, 'anonymous_token')
if (!fs.existsSync(anonymousTokenPath)) {
  fs.writeFileSync(anonymousTokenPath, '', 'utf-8')
}

/** @type {Record<string, any>} */
let obj = {}

const modulePath = path.join(__dirname, 'module')

/**
 * Serverless 打包环境（如 EdgeOne 云函数）不会随函数产物携带 module 目录，
 * 此时回退到构建期生成的静态清单（cloud-functions/_ncm-manifest.js），
 * 清单内的 require 会在打包时被静态内联。
 */
let moduleFiles
let loadModuleFile
try {
  moduleFiles = fs.readdirSync(modulePath).reverse()
  loadModuleFile = (file) => require(path.join(modulePath, file))
} catch (err) {
  const manifest = require('./cloud-functions/_ncm-manifest.js')
  moduleFiles = Object.keys(manifest.files).reverse()
  loadModuleFile = (file) => manifest.files[file]
}

let requestModule = null

moduleFiles.forEach((file) => {
  if (!file.endsWith('.js')) return

  let fn = file.split('.').shift() || ''

  obj[fn] = function (data = {}) {
    // 延迟到首次调用时加载对应模块（Serverless 冷启动友好，
    // 避免打包环境在启动阶段加载无关模块）
    const fileModule = loadModuleFile(file)
    const cookie =
      typeof data.cookie === 'string'
        ? cookieToJson(data.cookie)
        : data.cookie || {}

    return fileModule(
      {
        ...data,
        cookie,
      },
      async (...args) => {
        if (!requestModule) {
          requestModule = require('./util/request')
        }

        return requestModule(...args)
      },
    )
  }
})

let serverModule = null

/**
 * @type {Record<string, any> & import("./server")}
 */
module.exports = {
  get server() {
    if (!serverModule) {
      serverModule = require('./server')
    }
    return serverModule
  },
  ...obj,
}

Object.assign(module.exports, require('./server'))
