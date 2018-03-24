var path = require('path')
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.config.js');

var modifiedDate = +(new Date());
var webpackConfig = merge(baseWebpackConfig, {
  devtool: true,
  watch: true,
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    // host: "0.0.0.0",
    // port: 80,
    proxy: {
      "/api": {target: "http://fanyi.qq.com", changeOrigin: true}
    }
  }
});

module.exports = webpackConfig