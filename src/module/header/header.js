var moduleReady = function(callback){
    // let logReady = "module header ready!"
    callback && callback();
    // console.log(logReady);
};

module.exports = {
    init: moduleReady
};