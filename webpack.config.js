var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 打包css插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 编译后自动打开浏览器

var ROOT_PATH = path.resolve(__dirname); // 项目跟路径
var APP_PATH = path.resolve(ROOT_PATH, './src'); // 项目开发目录src
var APP_FILE = path.resolve(ROOT_PATH, './dist'); // 项目入口的index.js

module.exports = {
  entry: {
    bundle : path.resolve(ROOT_PATH, "index.js")
  },
  output: {
    path: ROOT_PATH,
    filename: 'bundle.js'
  },
  // 可以在sources里调试
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'autoprefixer-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url'
      }
    ]
  },

  performance: {
    hints: false
  }
  

}
;