const path = require('path')
const ip = require('ip')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common')
const { smart } = require('webpack-merge')
const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')
module.exports = smart(webpackCommonConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer:{
    port:8090,
    host: `${ip.address()}`,
    progress:true, // 显示打包的进度条 %
    hot: true,
    contentBase:distPath, // 根目录
    open:true, // 自动打开浏览器
    compress:false, // 启动gzip压缩
    historyApiFallback: true, // // 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；
    // 解决跨域 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
      '/api': 'http://192.168.1.3:3000', // 本地模拟接口地址
      '/static':'http://192.168.1.3:5000', // 本地模拟图片视频地址
      // 将本地 /api2/xxx 代理到 localhost:3000/xxx
      '/api2': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api2': ''
        }
      }
    },
    disableHostCheck: true // 配置花生壳域名需要配置此项  否则花生壳域名访问报： Invalid Host header
  },
  module:{
    rules:[
      {
        test:/\.(less)$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules: true,
              camelCase:true, // 如果想要驼峰化(camelize)类名（有助于在 JS 中使用），通过设置  camelCase 即可实现。class-name==>className
              localIdentName: '[name]__[local]--[hash:base64:5]', // '[path][name]__[local]--[hash:base64:5]',
            }
          },
          'less-loader',
          'postcss-loader']
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development'),
      HOST_URL:JSON.stringify('https://mfpdeve.minsh.cn/wechat/visit/')
    }),
  ],
  output: {
    // filename: 'js/[name].js',
    publicPath:'/' //  设置 ‘/’ 或者 为空，相对于 HTML 页面（目录相同），解决二级，三级路由刷新404问题
  },
})
