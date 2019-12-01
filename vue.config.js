const path = require('path')
const webpack = require('webpack')
const VconsolePlugin = require('vconsole-webpack-plugin')
const createThemeColorReplacerPlugin = require('./config/plugin.config')

function resolve (dir) {
  return path.join(__dirname, dir)
}

/**
 * check production or preview(pro.loacg.com only)
 * @returns {boolean}
 */
function isProd () {
  return process.env.NODE_ENV === 'production'
}

const assetsCDN = {
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}

// webpack build externals
const prodExternals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}
const objectProject = {
  index: {
    entry: 'src/main.js', // page 的入口
    template: 'public/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: '',
    // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  m: {
    entry: 'src/m/main.js',
    template: 'src/m/mobile.html',
    filename: process.env.NODE_ENV === 'development' ? 'm.html' : 'index.html',
    title: '',
    chunks: ['chunk-vendors', 'chunk-common', 'm']
  }
}
let page = {}
const projectname = process.argv[3] // 获取执行哪个文件
if (process.env.NODE_ENV === 'development') {
  page = objectProject
} else {
  page[projectname] = objectProject[projectname]
}
console.log('start building.......')
// vue.config.js
const vueConfig = {
  publicPath: isProd() ? './' : '/', // 部署应用包时的基本 URL
  outputDir: 'dist/' + projectname, // 标识是打包哪个文件
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  pages: page,
  configureWebpack: {
    devtool: 'source-map', // 配置后，开发环境方便调试
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new VconsolePlugin({
        filter: [],
        enable: !isProd() // 生产环境去除
      })
    ]
    // if prod is on, add externals
    // externals: isProd() ? prodExternals : {}
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@m', resolve('src/m'))// m项目直接使用@m

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })

    // if prod is on
    // assets require on cdn
    if (isProd()) {
      // config.plugin('html').tap(args => {
      //   args[0].cdn = assetsCDN
      //   return args
      // })
    }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        // do not remove this line
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // development server port 8000
    port: 8000
    // open: true
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/api': {
    //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: isProd(),
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
  console.log('VUE_APP_PREVIEW', true)
  // add `ThemeColorReplacer` plugin to webpack plugins
  vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
}
console.log('构建项目======================>：' + (projectname || '开发环境'))
/* 打包发布时：需要加入以下判断，if (projectname === 'm')  PC端不需要rem，M端需要rem！！！
 * dev开发时：
 * 开发pc时-> if (projectname === 'm') ;
 * 开发M时-> if (projectname === 'm' || process.env.NODE_ENV === 'development')
 */
if (projectname === 'm' || process.env.NODE_ENV === 'development') {
  vueConfig.css.loaderOptions.postcss = {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 37.5, // 换算的基数
        propList: ['*']
      })
    ]
  }
}
module.exports = vueConfig
