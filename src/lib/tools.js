// cookie

/**
 * 设置cookie
 */
module.exports.setCookie = function (cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
};

/**
 * 获取cookie
 */
module.exports.getCookie = function (cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0)===' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return '';
};

/**
 * 清除cookie
 */
module.exports.clearCookie = function (name) {
  this.setCookie(name, '', -1);  
};


// url

/**
 * 获取url hash map
 */
module.exports.getUrlHash = function () {
  let hashObj = {};
  let hash = window.location.hash.split('#')[1];
  if (!hash || typeof hash === 'undefined' || hash === ''){return hashObj;}
  let kAndvArr = hash.split('&');
  $.each(kAndvArr, function (i, v) {
    hashObj[v.split('=')[0]] = decodeURIComponent(v.split('=')[1]);
  });
  return hashObj;
};

/**
 * 获取url search 参数
 */
module.exports.getUrlSearch = function () {
  let paramObj = {};
  let param = window.location.search.split('?')[1];
  if (!param || typeof param === 'undefined' || param === ''){return paramObj;}
  let kAndvArr = param.split('&');
  $.each(kAndvArr, function (i, v){
    paramObj[v.split('=')[0]] = decodeURIComponent(v.split('=')[1]);
  });
  return paramObj;
};

/**
 * 判断是否为IE
 */
module.exports.isIE = function () {
  return (navigator.userAgent.indexOf('MSIE') > -1) || (navigator.userAgent.indexOf('Edge') > -1);
};

