/*! This file is modified at:1524560004289 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-console: "off" */
const $$tools = __webpack_require__(7);
// console.log('NODE_ENV: ', NODE_ENV);
let log = function () {};
if (true) {
  log = console.log;
}

const alertIE = function (str) {
  if ($$tools.isIE() && window.alertIEopen) {
    //alert.apply(this, arguments);
    alert(str);
  }
  // alert.apply(this, arguments);
};

module.exports = {
  log,
  alertIE
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var moduleReady = function (callback) {
    // let logReady = "module header ready!"
    callback && callback();
    // console.log(logReady);
};

module.exports = {
    init: moduleReady
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_log_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_log_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_log_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_header_header_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_header_header_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__module_header_header_js__);

__WEBPACK_IMPORTED_MODULE_0__lib_log_js___default.a.log('page: index');
// QT.config({
//     environment: {source:"testbridge"}
// });

__webpack_require__(3);



// console.log('jq', $);

$(document).ready(function () {
  const env = "dev";
  (x => {
    __WEBPACK_IMPORTED_MODULE_0__lib_log_js___default.a.log('NODE_ENV: ', x);
  })(env);
  __WEBPACK_IMPORTED_MODULE_1__module_header_header_js___default.a.init();
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// cookie

/**
 * 设置cookie
 */
module.exports.setCookie = function (cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
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
    while (c.charAt(0) === ' ') c = c.substring(1);
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
  if (!hash || typeof hash === 'undefined' || hash === '') {
    return hashObj;
  }
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
  if (!param || typeof param === 'undefined' || param === '') {
    return paramObj;
  }
  let kAndvArr = param.split('&');
  $.each(kAndvArr, function (i, v) {
    paramObj[v.split('=')[0]] = decodeURIComponent(v.split('=')[1]);
  });
  return paramObj;
};

/**
 * 判断是否为IE
 */
module.exports.isIE = function () {
  return navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Edge') > -1;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);