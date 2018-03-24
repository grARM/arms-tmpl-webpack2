var moduleReady = function(callback){
    let logReady = "module header ready!"
    console.log(logReady);
};

module.exports = {
    init: moduleReady
};