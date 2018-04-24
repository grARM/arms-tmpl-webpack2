/* eslint no-console: "off" */
let $$tools = require('./tools.js');
// console.log('NODE_ENV: ', NODE_ENV);
let log = function(){};
if(NODE_ENV != 'prodution'){
    log = console.log;
}

let alertIE = function(str){
    if($$tools.isIE() && window.alertIEopen){
        //alert.apply(this, arguments);
        alert(str);
    }
    
    // alert.apply(this, arguments);
    
};


module.exports = {
    log: log,
    alertIE: alertIE
};