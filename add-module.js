var fs = require('fs');
var path = require('path');
var util = require('util');
var _ = require('underscore');
var projectSrcPath = path.join(__dirname, 'src');
var wbPages = require('./wb-pages.json');


// var htmlTpl = '<div node-type="module" class="module-%s">\r\n\    %s\r\n\</div>';
var htmlTpl = '<div wb-type="module" wb-module="%s" class="%s">\r\n\    module %s\n</div>';
var cssTpl = '.%s {}';
var jsTpl = 'var moduleReady = function(callback){\r\n    console.log("module %s ready!");\n};\n\nmodule.exports = {\r\n    init: moduleReady\n};';


var addModule = function (moduleName) {
    var moduleDir = path.join(projectSrcPath, 'module');
    if (!fs.existsSync(moduleDir)) {
        console.log('please enter "src" dir');
        return;
    }
    var modulePath = path.join(moduleDir, moduleName);
    if (fs.existsSync(modulePath)) {
        console.log('module ' + moduleName + ' has already exists');
        return;
    }
    fs.mkdirSync(modulePath);
    var htmlPath = path.join(modulePath, moduleName+'.ejs');
    fs.writeFileSync(htmlPath, util.format(htmlTpl, moduleName, moduleName, moduleName), 'utf8');
    var cssPath = path.join(modulePath, moduleName + '.scss');
    fs.writeFileSync(cssPath, util.format(cssTpl, moduleName), 'utf8');
    var jsPath = path.join(modulePath, moduleName + '.js');
    fs.writeFileSync(jsPath, util.format(jsTpl, moduleName), 'utf8');
    console.log('module ' + moduleName + ' has added');
};
// var moduleList = [
// 	'header',
// 	'footer'
// ];


// moduleList.forEach(function (item) {
//     addModule(item);
// });
_.each(wbPages.pages, function (v_page, k_page){
    console.log('\r\ncheck modules in page '+k_page+':   ');
    v_page.modules.forEach(function (v_mod){
        addModule(v_mod);
    });
    // _.each(v_page.modules, function (v_mod, i_mod){
    //     addModule(v_mod);
    // });
});

