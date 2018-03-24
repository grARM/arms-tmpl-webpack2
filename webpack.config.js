const path = require('path');
var fs = require('fs');
var _ = require('underscore');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const wbPages = require('./wb-pages.json');
var proPath = process.cwd();
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './src');

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'local';
}

console.log('当前环境-----process.env.NODE_ENV: ', process.env.NODE_ENV)
var getModuleTpl = function(moduleName){ 
    var rtTpl = '';
    if(process.env.NODE_ENV == 'local'){
        // dev and others
        rtTpl = fs.readFileSync(path.resolve(proPath, './src/module/'+moduleName+'/'+moduleName+'.ejs'), 'UTF-8');
        //todo render data
    }else{
        // 服务端渲染
        rtTpl = '<% include ../src/module/'+moduleName+'/'+moduleName+' %>';
    }
    // console.log('rtTpl:  ', rtTpl)
    return rtTpl;
}

wbPages.entry = {};
wbPages.pageHtmlPlugin = [];

var getWbCon = function(){

    _.each(wbPages.pages, function (v_page, k_page) {
        //entry
        wbPages.entry[k_page] = v_page.entry;
        //modules
        var pMods = {};
        _.each(v_page.modules, function (v_mod, i_mod) {
            pMods[v_mod] = getModuleTpl(v_mod);
        });

        var filename = './'+k_page+'.'+'html';
        if(process.env.NODE_ENV != 'local'){
            filename = '../views/'+k_page+'.'+'ejs'
        }

        var pageHtmlConf = (new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/page/'+k_page+'.ejs'),
            title: v_page.title,
            // filename: './'+k_page+'.'+((process.env.NODE_ENV != 'local') ? 'ejs' : 'html'),
            filename: filename,
            inject: (process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'local2'),//false,
            chunks: [k_page],
            modules: pMods,
            data: {
                'NODE_ENV': process.env.NODE_ENV
            }
        }));
        wbPages.pageHtmlPlugin.push(pageHtmlConf);
    });

}
getWbCon();


if(process.env.NODE_ENV == 'local'){
    var fileName = './src/module/header/header.ejs';  
    fs.watch(fileName, function (eventType, filename){
        console.log('watch ,eventType', eventType, ', filename: ', filename);
        getWbCon();
        // console.log('wbPages.pageHtmlPlugin: ', wbPages.pageHtmlPlugin);
    });

}


module.exports = {
    entry: wbPages.entry,
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: "css-loader!autoprefixer-loader!sass-loader"
                })
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '/images/[name].[hash:8].[ext]'
                }
                // test: /\.(png|jpg|gif|svg)$/,
                // loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
            // {
            //     test: /\.js$/, // 对.js文件进行处理
            //     exclude: /node_modules/, // 排除掉node_modules文件夹下的所有文件
            //     include: APP_PATH,
            //     use: {
            //         loader:'jshint-loader',
            //         options: {esnext: true}
            //     },
            //     enforce: 'pre'
            // }
        ]
    },
    externals: {
      "jquery": 'jQuery'
    },
    plugins:([
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
        }),
        new ExtractTextPlugin("css/[name].css")
    ]).concat(wbPages.pageHtmlPlugin)//,
    // devServer: {
    //  inline:true,
    //  proxy: {
    //    "/api": {target: "http://fanyi.qq.com", changeOrigin: true}
    //  }
    // }
}