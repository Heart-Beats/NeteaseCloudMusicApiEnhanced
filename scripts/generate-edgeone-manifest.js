/* eslint-disable */
/**
 * 生成 EdgeOne 云函数用的静态模块清单：cloud-functions/_ncm-manifest.js
 *
 * 背景：Serverless 打包环境（EdgeOne 云函数）不会把 module/ 目录带到函数产物里，
 *       而 main.js / server.js 原本依赖运行时扫描 module/ 目录 + 动态 require。
 *       本脚本在构建期扫描 module/*.js，生成静态 require 清单，供打包器静态内联。
 *
 * 注意：清单采用「getter 懒加载」写法 —— 模块在首次被访问时才 require，
 *       避免冷启动一次性加载全部模块，也让 jsdom 等特殊依赖只在对应接口被调用时加载。
 *
 * 用法：node scripts/generate-edgeone-manifest.js
 *       （module/ 目录新增/删除接口文件后需要重新生成）
 */
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const moduleDir = path.join(root, 'module')
const outFile = path.join(root, 'cloud-functions', '_ncm-manifest.js')

const files = fs
  .readdirSync(moduleDir)
  .filter((f) => f.endsWith('.js'))
  .sort()

const requires = files
  .map(
    (f) =>
      `  get ${JSON.stringify(f)}() {\n    return require('../module/${f}')\n  },`,
  )
  .join('\n')

const content = `/* eslint-disable */
// ============================================================
// ⚠️ 自动生成文件，请勿手动修改！
// 生成器：scripts/generate-edgeone-manifest.js
// 重新生成：node scripts/generate-edgeone-manifest.js
//
// 用途：EdgeOne 云函数（Serverless 打包环境）没有 module/ 目录，
//       用本静态清单替代运行时的目录扫描与动态 require，
//       使全部接口模块在打包时被静态内联。
// 懒加载：所有 require 都放在 getter 中，模块在首次被访问时才加载。
// ============================================================
const files = {
${requires}
}

const special = {
  'daily_signin.js': '/daily_signin',
  'fm_trash.js': '/fm_trash',
  'personal_fm.js': '/personal_fm',
}

// 与 server.js 中 getModulesDefinitions 的路由规则保持一致
// module 属性同样是懒加载（继承自 files 的 getter）
const moduleDefs = Object.keys(files)
  .reverse()
  .map((file) => ({
    identifier: file.split('.').shift(),
    route:
      special[file] || '/' + file.replace(/\\.js$/i, '').replace(/_/g, '/'),
    get module() {
      return files[file]
    },
  }))

module.exports = { files, moduleDefs }
`

fs.writeFileSync(outFile, content)
console.log(`[edgeone-manifest] 已生成 ${path.relative(root, outFile)}（${files.length} 个模块，getter 懒加载）`)
