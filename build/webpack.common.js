const path = require('path')
const webpack = require('webpack')
const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index:path.join(srcPath, 'index')
  },
  resolve:{
    alias: {
      '@':srcPath
    }, // 创建 import 或 require 的别名，来确保模块引入变得更简单
    // extensions:[]   // 自动解析确定的扩展，默认值：['.wasm', '.mjs', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options: {
              // 小于 5kb 的图片用 base64 格式产出
              // 否则，依然延用 file-loader 的形式，产出 url 格式
              limit: 8 * 1024,
              // 打包到 img 目录下
              outputPath: 'images/',
              // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
              // publicPath: 'http://cdn.abc.com'
            }
          }
        ]
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)/,
        use: {
          loader:'file-loader',
          options:{
            limit: 8192,
            outputPath:'fonts/',
            name: '[name]-[hash].[ext]'
          }
        }
      },
      {
        test: /\.mp4$/,
        use: {
          loader:'file-loader',
          options:{
            limit: 8192,
            outputPath:'videos/',
            name: '[name]-[hash].[ext]'
          }
        }
      },
      {
        test:/\.html$/,
        use:'html-withimg-loader'
      }
    ]
  },
  plugins:[
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new HtmlWebpackPlugin({
      template:path.join(srcPath, 'index.html'),
      filename:'index.html',
      favicon:srcPath + '/favicon.ico'
    })
  ]
}
