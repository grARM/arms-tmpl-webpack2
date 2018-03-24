var path = require('path')
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.config.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var modifiedDate = +(new Date());
var prodConf = {};

if(process.env.NODE_ENV == 'prodution'){
  prodConf = {
    devtool: false,
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        // cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
      }),
      new webpack.BannerPlugin('This file is modified at:' + modifiedDate)//,
    ]
  };
}else if(process.env.NODE_ENV == 'testing' || process.env.NODE_ENV == 'dev147' || process.env.NODE_ENV == 'dev'){
  prodConf = {
    watch: (process.env.NODE_ENV == 'dev'),
    plugins: [
      new webpack.BannerPlugin('This file is modified at:' + modifiedDate)//,
    ]
  };
}

var webpackConfig = merge(baseWebpackConfig, prodConf);

module.exports = webpackConfig

