var webpack  = require('webpack');
var webpackProdConfig = require('./webpack.prod.js');
var fs = require('fs');
var wbPages = require('./wb-pages.json');
var path = require('path');
var _ = require('underscore');


// console.log('NODE_ENV:  ',process.env.NODE_ENV);

webpack(webpackProdConfig, function (err, stats){
    if(err){
        console.log('\n编译失败err: ', err);
    }else{
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
          chunks: false,
          chunkModules: false
        }) + '\n\n')

        // if (stats.hasErrors()) {
        //   console.log(('  Build failed with errors.\n'))
        //   console.log('\n编译失败err: ');
        //   process.exit(1)
        // }
        if(process.env.NODE_ENV == 'dev'){
            console.log('\n编译成功！   继续监听文件修改...');
        }else{
            console.log('\n编译成功！');
        }
        
    }
});


// remove temporary file for /public/*.html
_.each(wbPages.pages, function (v, k){
    var htmlPath = path.resolve(__dirname, './public/'+k+'.html');
    if(fs.existsSync(htmlPath)){
        fs.unlink(htmlPath, function(){
            console.log('remove temporary file: ', htmlPath);
        });
    }
});