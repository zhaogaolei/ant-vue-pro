const path = require('path')
const webpack = require('webpack')
const MniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackCommonConf = require('./webpack.common')
const { smart } = require('webpack-merge')
const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')
module.exports = smart(webpackCommonConf, {
  mode: 'production',
  optimization:{
    // 压缩js/css
    minimizer:[
      new TerserJsPlugin(),
      new OptimizeCssAssetsPlugin()
    ],
    // 分割代码块
    splitChunks:{
      // 缓存分组
      cacheGroups:{
        // 公共模块
        common:{
          chunks:'initial',
          name:'commons', // 公共模块名称
          minSize:0, // 公共模块的大小限制 ,必须，webpack默认值30kb
          minChunks:2 // 公共模块最少复用几次
        },
        // 第三方模块
        vender:{
          priority:1, // 权限更高，优先抽离，重要！！！
          test:/node_modules/,
          chunks:'initial',
          name:'venders',
          minSize:0,
          minChunks:1
        }
      }
    }
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        use:[
          MniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:{
              modules: true,
              camelCase:true, // 如果想要驼峰化(camelize)类名（有助于在 JS 中使用），通过设置  camelCase 即可实现。class-name==>className
              localIdentName: '[name]__[local]--[hash:base64:5]', // '[path][name]__[local]--[hash:base64:5]',
            }
          },
          'less-loader',
          'postcss-loader'] // loader 的执行顺序是：从后往前
      },
      {
        test:/\.css$/,
        use:[
          MniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:{
              modules: false,
            }
          },
          'postcss-loader'] // loader 的执行顺序是：从后往前
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('by github.com/zhaogaolei \r'),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production'),
      HOST_URL:JSON.stringify('生产环境地址')
    }),
    new MniCssExtractPlugin({
      filename:'css/[name].[contentHash:8].css'
    })
  ],
  output: {
    filename: 'js/[name].[contentHash:8].js',
    path: distPath,
    // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    // production ? 'http://cdn.abc.com' : '/'
    publicPath: '/'
  }
})
