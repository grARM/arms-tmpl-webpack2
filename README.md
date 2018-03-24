# arms前端页面工程模板

 基于webpack2 的模块化工程

## 开发模式

模板有5种开发模式： 
* local  -->	本地开发模式，不依赖express 工程纯前端工程，可用于新建项目的切图
* dev  -->	本地node环境，页面渲染和异步接口都依赖nodejs（express或koa），静态文件不压缩
* production  -->		发布线上前使用，node服务同nodejs模式，但是静态文件会压缩

三种模式的命令均采用 npm scripts 的方式（比如：npm[tnpm] run local ）

## 文件夹说明
.
|____act
| |____.gitignore
| |____add-module.js          -用于添加模块
| |____package.json
| |____product.js             -用于启动命令（不需要改）
| |____public				  -输出文件夹
| | |____css
| | | |____index.css
| | | |____list.css
| | |____index.ejs
| | |____index.html
| | |____js
| | | |____index.js
| | | |____list.js
| | |____list.ejs
| | |____list.html
| |____README.md
| |____src					  -开发文件夹
| | |____images
| | | |____big-star.png
| | | |____big-star@3x.png
| | |____js					   |-通用js & js入口
| | | |____dlg.js
| | | |____index.js
| | | |____list.js
| | |____module                |-模块
| | | |____header
| | | | |____header.ejs
| | | | |____header.js
| | | | |____header.scss
| | |____page                  |-页面入口
| | | |____index.ejs
| | | |____list.ejs
| | |____sass                  |-scss（样式）入口
| | | |____common.scss
| | | |____index-layout.scss
| | | |____index.scss
| | | |____list-layout.scss
| | | |____list.scss
| | | |____reset.scss
| |____webpack.config.js   -|
| |____webpack.dev.js       |- webpack配置文件
| |____webpack.prod.js     -|


## 静态语法检查
项目中加入了jshint，error输出在浏览器中查看
 

## 改进
如果您有什么问题，请我（grARM），发送邮件至gricode@126.com

If you have any questions, please contact me (grARM) ,send email to gricode@126.com

请以PR的形式，贡献您的改进方案
Please contribute your improvement plan in the form of PR











