(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("darkmode-js", [], factory);
	else if(typeof exports === 'object')
		exports["darkmode-js"] = factory();
	else
		root["darkmode-js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IS_BROWSER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    if (!IS_BROWSER) {
      return;
    }

    var defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };
    options = Object.assign({}, defaultOptions, options);
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(options.mixColor, ";\n        transition: all ").concat(options.time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(options.buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(options.buttonColorLight, ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(options.backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    ");
    var layer = document.createElement('div');
    var button = document.createElement('button');
    var background = document.createElement('div');
    button.setAttribute('type', 'button');
    button.innerHTML = options.label;
    button.classList.add('darkmode-toggle--inactive');
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
    var preferedThemeOs = options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

    if (darkmodeActivated === true && options.saveInCookies || darkmodeNeverActivatedByAction && preferedThemeOs) {
      layer.classList.add('darkmode-layer--expanded', 'darkmode-layer--simple', 'darkmode-layer--no-transition');
      button.classList.add('darkmode-toggle--white');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);
    this.addStyle(css);
    this.button = button;
    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "showWidget",
    value: function showWidget() {
      var _this = this;

      if (!IS_BROWSER) {
        return;
      }

      var button = this.button;
      var layer = this.layer;
      var time = parseFloat(this.time) * 1000;
      button.classList.add('darkmode-toggle');
      button.classList.remove('darkmode-toggle--inactive');
      button.setAttribute('aria-label', 'Activate dark mode');
      button.setAttribute('aria-checked', 'false');
      button.setAttribute('role', 'checkbox');
      layer.classList.add('darkmode-layer--button');
      button.addEventListener('click', function () {
        var isDarkmode = _this.isActivated();

        if (!isDarkmode) {
          layer.classList.add('darkmode-layer--expanded');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.add('darkmode-layer--no-transition');
            layer.classList.add('darkmode-layer--simple');
            button.removeAttribute('disabled');
          }, time);
        } else {
          layer.classList.remove('darkmode-layer--simple');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.remove('darkmode-layer--no-transition');
            layer.classList.remove('darkmode-layer--expanded');
            button.removeAttribute('disabled');
          }, 1);
        }

        button.classList.toggle('darkmode-toggle--white');
        document.body.classList.toggle('darkmode--activated');
        window.localStorage.setItem('darkmode', !isDarkmode);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!IS_BROWSER) {
        return;
      }

      var layer = this.layer;
      var isDarkmode = this.isActivated();
      var button = this.button;
      layer.classList.toggle('darkmode-layer--simple');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
      button.setAttribute('aria-label', 'De-activate dark mode');
      button.setAttribute('aria-checked', 'true');
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      if (!IS_BROWSER) {
        return null;
      }

      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireWildcard(__webpack_require__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

if (_darkmode.IS_BROWSER) {
  (function (window) {
    window.Darkmode = _darkmode.default;
  })(window);
}
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImF1dG9NYXRjaE9zVGhlbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjc3MiLCJsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrbW9kZUFjdGl2YXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJlZFRoZW1lT3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5n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LENBQUNPLFNBQU4sQ0FBZ0J3QixNQUFoQixDQUF1Qix3QkFBdkI7QUFDQTlCLGNBQVEsQ0FBQ2UsSUFBVCxDQUFjVCxTQUFkLENBQXdCd0IsTUFBeEIsQ0FBK0IscUJBQS9CO0FBQ0FqRCxZQUFNLENBQUM0QixZQUFQLENBQW9Cc0IsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0MsQ0FBQ0wsVUFBekM7QUFDQXhCLFlBQU0sQ0FBQ0UsWUFBUCxDQUFvQixZQUFwQixFQUFrQyx1QkFBbEM7QUFDQUYsWUFBTSxDQUFDRSxZQUFQLENBQW9CLGNBQXBCLEVBQW9DLE1BQXBDO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUksQ0FBQ3hCLFVBQUwsRUFBaUI7QUFDZixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPb0IsUUFBUSxDQUFDZSxJQUFULENBQWNULFNBQWQsQ0FBd0IwQixRQUF4QixDQUFpQyxxQkFBakMsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU5IOzs7OztBQUdBOzs7O0FBQ0EsMEJBQWdCO0FBQ2QsR0FBQyxVQUFVbkQsTUFBVixFQUFrQjtBQUNqQkEsVUFBTSxDQUFDQyxRQUFQO0FBQ0QsR0FGRCxFQUVHRCxNQUZIO0FBR0Q7QUFDRCIsImZpbGUiOiJkYXJrbW9kZS1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGFya21vZGUtanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXJrbW9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGJvdHRvbTogJzMycHgnLFxuICAgICAgcmlnaHQ6ICczMnB4JyxcbiAgICAgIGxlZnQ6ICd1bnNldCcsXG4gICAgICB0aW1lOiAnMC4zcycsXG4gICAgICBtaXhDb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBidXR0b25Db2xvckRhcms6ICcjMTAwZjJjJyxcbiAgICAgIGJ1dHRvbkNvbG9yTGlnaHQ6ICcjZmZmJyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHNhdmVJbkNvb2tpZXM6IHRydWUsXG4gICAgICBhdXRvTWF0Y2hPc1RoZW1lOiB0cnVlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBjc3MgPSBgXG4gICAgICAuZGFya21vZGUtbGF5ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAke29wdGlvbnMubWl4Q29sb3J9O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHtvcHRpb25zLnRpbWV9IGVhc2U7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyLjlyZW07XG4gICAgICAgIGhlaWdodDogMi45cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAke29wdGlvbnMucmlnaHR9O1xuICAgICAgICBib3R0b206ICR7b3B0aW9ucy5ib3R0b219O1xuICAgICAgICBsZWZ0OiAke29wdGlvbnMubGVmdH07XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tc2ltcGxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tZXhwYW5kZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke29wdGlvbnMuYnV0dG9uQ29sb3JEYXJrfTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICByaWdodDogJHtvcHRpb25zLnJpZ2h0fTtcbiAgICAgICAgYm90dG9tOiAke29wdGlvbnMuYm90dG9tfTtcbiAgICAgICAgbGVmdDogJHtvcHRpb25zLmxlZnR9O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5idXR0b25Db2xvckxpZ2h0fTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgaW1nLCAuZGFya21vZGUtaWdub3JlIHtcbiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICAgIC5kYXJrbW9kZS10b2dnbGUge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudH1cbiAgICAgIH1cblxuICAgICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pLCAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuICAgICAgfVxuICAgIGA7XG5cbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgZGFya21vZGVBY3RpdmF0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09ICd0cnVlJztcbiAgICBjb25zdCBwcmVmZXJlZFRoZW1lT3MgPVxuICAgICAgb3B0aW9ucy5hdXRvTWF0Y2hPc1RoZW1lICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBjb25zdCBkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoXG4gICAgICAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzKSB8fFxuICAgICAgKGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpXG4gICAgKSB7XG4gICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyxcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nXG4gICAgICApO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0td2hpdGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsYXllciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuc2F2ZUluQ29va2llcyA9IG9wdGlvbnMuc2F2ZUluQ29va2llcztcbiAgICB0aGlzLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIH1cblxuICBhZGRTdHlsZShjc3MpIHtcbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gIH1cblxuICBzaG93V2lkZ2V0KCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0FjdGl2YXRlIGRhcmsgbW9kZScpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY2hlY2tib3gnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tYnV0dG9uJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcblxuICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGUtYWN0aXZhdGUgZGFyayBtb2RlJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcbiAgfVxuXG4gIGlzQWN0aXZhdGVkKCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgRGFya21vZGUsIHsgSVNfQlJPV1NFUiB9IGZyb20gJy4vZGFya21vZGUnO1xuZXhwb3J0IGRlZmF1bHQgRGFya21vZGU7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pZiAoSVNfQlJPV1NFUikge1xuICAoZnVuY3Rpb24gKHdpbmRvdykge1xuICAgIHdpbmRvdy5EYXJrbW9kZSA9IERhcmttb2RlO1xuICB9KSh3aW5kb3cpO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==