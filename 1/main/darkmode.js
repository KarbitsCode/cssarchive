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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;
var Darkmode = /*#__PURE__*/function () {
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


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _darkmode = _interopRequireWildcard(__webpack_require__(/*! ./darkmode */ "./src/darkmode.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) { if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } } return n.default = e, t && t.set(e, n), n; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsImV4cG9ydHMiLCJEYXJrbW9kZSIsIm9wdGlvbnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJkZWZhdWx0T3B0aW9ucyIsImJvdHRvbSIsInJpZ2h0IiwibGVmdCIsInRpbWUiLCJtaXhDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvbkNvbG9yRGFyayIsImJ1dHRvbkNvbG9yTGlnaHQiLCJsYWJlbCIsInNhdmVJbkNvb2tpZXMiLCJhdXRvTWF0Y2hPc1RoZW1lIiwiT2JqZWN0IiwiYXNzaWduIiwiY3NzIiwiY29uY2F0IiwibGF5ZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGFya21vZGVBY3RpdmF0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJlZmVyZWRUaGVtZU9zIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24iLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImFkZFN0eWxlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJsaW5rRWxlbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNob3dXaWRnZXQiLCJfdGhpcyIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyIsImRlZmF1bHQiLCJfZGFya21vZGUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfZGVmYXVsdCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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Q0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQTFELE1BQUEsQ0FBQTJELGNBQUEsSUFBQTNELE1BQUEsQ0FBQTRELHdCQUFBLFdBQUFDLENBQUEsSUFBQWIsQ0FBQSxzQkFBQWEsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWYsQ0FBQSxFQUFBYSxDQUFBLFNBQUFHLENBQUEsR0FBQU4sQ0FBQSxHQUFBMUQsTUFBQSxDQUFBNEQsd0JBQUEsQ0FBQVosQ0FBQSxFQUFBYSxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVCxHQUFBLElBQUFTLENBQUEsQ0FBQUMsR0FBQSxJQUFBakUsTUFBQSxDQUFBMkQsY0FBQSxDQUFBSCxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxJQUFBUixDQUFBLENBQUFLLENBQUEsSUFBQWIsQ0FBQSxDQUFBYSxDQUFBLGNBQUFMLENBQUEsQ0FBQWIsT0FBQSxHQUFBSyxDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBYyxHQUFBLENBQUFqQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLElBQUFVLFFBQUEsR0FBQXRCLFNBQUEsQ0FBQUQsT0FBQTtBQUdsRDtBQUFBM0QsT0FBQSxDQUFBMkQsT0FBQSxHQUFBdUIsUUFBQTtBQUNBLElBQUF0QixTQUFBLENBQUE5RCxVQUFBLEVBQWdCO0VBQ2QsQ0FBQyxVQUFVQyxNQUFNLEVBQUU7SUFDakJBLE1BQU0sQ0FBQ0UsUUFBUSxHQUFBMkQsU0FBQSxDQUFBRCxPQUFXO0VBQzVCLENBQUMsRUFBRTVELE1BQU0sQ0FBQztBQUNaO0FBQ0E7QUFBQW9GLE1BQUEsQ0FBQW5GLE9BQUEsR0FBQUEsT0FBQSxZIiwiZmlsZSI6ImRhcmttb2RlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXJrbW9kZS1qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGNzcyA9IGBcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5taXhDb2xvcn07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke29wdGlvbnMudGltZX0gZWFzZTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDIuOXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjlyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcmlnaHQ6ICR7b3B0aW9ucy5yaWdodH07XG4gICAgICAgIGJvdHRvbTogJHtvcHRpb25zLmJvdHRvbX07XG4gICAgICAgIGxlZnQ6ICR7b3B0aW9ucy5sZWZ0fTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1leHBhbmRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5idXR0b25Db2xvckRhcmt9O1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIHJpZ2h0OiAke29wdGlvbnMucmlnaHR9O1xuICAgICAgICBib3R0b206ICR7b3B0aW9ucy5ib3R0b219O1xuICAgICAgICBsZWZ0OiAke29wdGlvbnMubGVmdH07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHR9O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuICAgICAgfVxuXG4gICAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byksICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XG4gICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gb3B0aW9ucy5sYWJlbDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICBjb25zdCBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xuICAgIGNvbnN0IHByZWZlcmVkVGhlbWVPcyA9XG4gICAgICBvcHRpb25zLmF1dG9NYXRjaE9zVGhlbWUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gbnVsbDtcblxuICAgIGlmIChcbiAgICAgIChkYXJrbW9kZUFjdGl2YXRlZCA9PT0gdHJ1ZSAmJiBvcHRpb25zLnNhdmVJbkNvb2tpZXMpIHx8XG4gICAgICAoZGFya21vZGVOZXZlckFjdGl2YXRlZEJ5QWN0aW9uICYmIHByZWZlcmVkVGhlbWVPcylcbiAgICApIHtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLXNpbXBsZScsXG4gICAgICAgICdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbidcbiAgICAgICk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYnV0dG9uLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJhY2tncm91bmQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgICB0aGlzLmFkZFN0eWxlKGNzcyk7XG5cbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5zYXZlSW5Db29raWVzID0gb3B0aW9ucy5zYXZlSW5Db29raWVzO1xuICAgIHRoaXMudGltZSA9IG9wdGlvbnMudGltZTtcbiAgfVxuXG4gIGFkZFN0eWxlKGNzcykge1xuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvY3NzO2NoYXJzZXQ9VVRGLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3MpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcbiAgfVxuXG4gIHNob3dXaWRnZXQoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcbiAgICBjb25zdCB0aW1lID0gcGFyc2VGbG9hdCh0aGlzLnRpbWUpICogMTAwMDtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQWN0aXZhdGUgZGFyayBtb2RlJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdjaGVja2JveCcpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1idXR0b24nKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XG5cbiAgICAgIGlmICghaXNEYXJrbW9kZSkge1xuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcjtcbiAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuXG4gICAgbGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdEZS1hY3RpdmF0ZSBkYXJrIG1vZGUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xuICB9XG5cbiAgaXNBY3RpdmF0ZWQoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXJrbW9kZSwgeyBJU19CUk9XU0VSIH0gZnJvbSAnLi9kYXJrbW9kZSc7XG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmlmIChJU19CUk9XU0VSKSB7XG4gIChmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LkRhcmttb2RlID0gRGFya21vZGU7XG4gIH0pKHdpbmRvdyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9