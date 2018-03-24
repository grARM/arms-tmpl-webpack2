var get = function(url, data, successCb, errorCb){
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        data: data,
        success: function(res) {
            successCb && successCb(res);
        },
        error: function(xhr) {
            errorCb && errorCb(xhr);
        }
    });
};

var post = function(url, data, successCb, errorCb){
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        data: data,
        success: function(res) {
            successCb && successCb(res);
        },
        error: function(xhr) {
            errorCb && errorCb(xhr);
        }
    });
};

var jsonp = function(url, data, successCb, errorCb){
    $.ajax({
        dataType:'jsonp',
        url: url,
        data: data,
        jsonp: 'callback',
        async: true,
        contentType: "application/jsonp; charset=utf-8",
        success: function(res) {
            successCb && successCb(res);
        },
        error: function(xhr) {
            errorCb && errorCb(xhr);
        }
    });
};



module.exports = {
    get: get,
    post: post,
    jsonp: jsonp
};