/*! eruda v3.2.1 https://eruda.liriliri.io/ */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["eruda"] = factory();
	else
		root["eruda"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ BoxModel; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
var isNum_default = /*#__PURE__*/__webpack_require__.n(licia_isNum);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(toNum);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-box-model/esm/share/util.js









function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
function drag(name) {
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum_default()(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
;// CONCATENATED MODULE: ./node_modules/luna-box-model/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      this.destroySubComponents();
      var c = this.c;
      this.$container.rmClass("luna-".concat(this.compName)).rmClass(c("platform-".concat(getPlatform()))).rmClass(c("theme-".concat(this.options.theme)));
      this.$container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this2 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this2.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

;// CONCATENATED MODULE: ./node_modules/luna-box-model/esm/box-model/index.js
/* module decorator */ module = __webpack_require__.hmd(module);





function box_model_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, box_model_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function box_model_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (box_model_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var BoxModel = /*#__PURE__*/function (_Component) {
  function BoxModel(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, BoxModel);
    _this = box_model_callSuper(this, BoxModel, [container, {
      compName: 'box-model'
    }]);
    _this.initOptions(options);
    if (_this.options.element) {
      _this.render();
    }
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(BoxModel, _Component);
  return (0,createClass/* default */.A)(BoxModel, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;
      this.on('optionChange', function (name) {
        switch (name) {
          case 'element':
            _this2.render();
            break;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var c = this.c;
      var boxModel = this.getBoxModelData();
      this.$container.html(["<div class=\"".concat(c('box-model'), "\">"), boxModel.position ? "<div class=\"".concat(c('position'), "\">") : '', boxModel.position ? "<div class=\"".concat(c('label'), "\">position</div><div class=\"").concat(c('top'), "\">").concat(boxModel.position.top, "</div><br><div class=\"").concat(c('left'), "\">").concat(boxModel.position.left, "</div>") : '', "<div class=\"".concat(c('margin'), "\">"), "<div class=\"".concat(c('label'), "\">margin</div><div class=\"").concat(c('top'), "\">").concat(boxModel.margin.top, "</div><br><div class=\"").concat(c('left'), "\">").concat(boxModel.margin.left, "</div>"), "<div class=\"".concat(c('border'), "\">"), "<div class=\"".concat(c('label'), "\">border</div><div class=\"").concat(c('top'), "\">").concat(boxModel.border.top, "</div><br><div class=\"").concat(c('left'), "\">").concat(boxModel.border.left, "</div>"), "<div class=\"".concat(c('padding'), "\">"), "<div class=\"".concat(c('label'), "\">padding</div><div class=\"").concat(c('top'), "\">").concat(boxModel.padding.top, "</div><br><div class=\"").concat(c('left'), "\">").concat(boxModel.padding.left, "</div>"), "<div class=\"".concat(c('content'), "\">"), "<span>".concat(boxModel.content.width, "</span>&nbsp;\xD7&nbsp;<span>").concat(boxModel.content.height, "</span>"), '</div>', "<div class=\"".concat(c('right'), "\">").concat(boxModel.padding.right, "</div><br><div class=\"").concat(c('bottom'), "\">").concat(boxModel.padding.bottom, "</div>"), '</div>', "<div class=\"".concat(c('right'), "\">").concat(boxModel.border.right, "</div><br><div class=\"").concat(c('bottom'), "\">").concat(boxModel.border.bottom, "</div>"), '</div>', "<div class=\"".concat(c('right'), "\">").concat(boxModel.margin.right, "</div><br><div class=\"").concat(c('bottom'), "\">").concat(boxModel.margin.bottom, "</div>"), '</div>', boxModel.position ? "<div class=\"".concat(c('right'), "\">").concat(boxModel.position.right, "</div><br><div class=\"").concat(c('bottom'), "\">").concat(boxModel.position.bottom, "</div>") : '', boxModel.position ? '</div>' : '', '</div>'].join(''));
    }
  }, {
    key: "getBoxModelData",
    value: function getBoxModelData() {
      var element = this.options.element;
      var computedStyle = window.getComputedStyle(element);
      function getBoxModelValue(type) {
        var keys = ['top', 'left', 'right', 'bottom'];
        if (type !== 'position') {
          keys = map_default()(keys, function (key) {
            return "".concat(type, "-").concat(key);
          });
        }
        if (type === 'border') {
          keys = map_default()(keys, function (key) {
            return "".concat(key, "-width");
          });
        }
        return {
          top: boxModelValue(computedStyle[keys[0]], type),
          left: boxModelValue(computedStyle[keys[1]], type),
          right: boxModelValue(computedStyle[keys[2]], type),
          bottom: boxModelValue(computedStyle[keys[3]], type)
        };
      }
      var boxModel = {
        margin: getBoxModelValue('margin'),
        border: getBoxModelValue('border'),
        padding: getBoxModelValue('padding'),
        content: {
          width: boxModelValue(computedStyle['width']),
          height: boxModelValue(computedStyle['height'])
        }
      };
      if (computedStyle['position'] !== 'static') {
        boxModel.position = getBoxModelValue('position');
      }
      return boxModel;
    }
  }]);
}(Component);

function boxModelValue(val, type) {
  if (isNum_default()(val)) return val;
  if (!isStr_default()(val)) return '‒';
  var ret = pxToNum(val);
  if (isNaN(ret)) return val;
  if (type === 'position') return ret;
  return ret === 0 ? '‒' : ret;
}
if (true) {
  exportCjs(module, BoxModel);
}

/***/ }),

/***/ 8988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Console; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(7528);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(7800);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || (0,unsupportedIterableToArray/* default */.A)(r, e) || _nonIterableRest();
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/toStr.js
var toStr = __webpack_require__(2561);
var toStr_default = /*#__PURE__*/__webpack_require__.n(toStr);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
// EXTERNAL MODULE: ./node_modules/licia/escapeJsStr.js
var escapeJsStr = __webpack_require__(4950);
var escapeJsStr_default = /*#__PURE__*/__webpack_require__.n(escapeJsStr);
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/endWith.js
var endWith = __webpack_require__(1580);
var endWith_default = /*#__PURE__*/__webpack_require__.n(endWith);
// EXTERNAL MODULE: ./node_modules/licia/isEmpty.js
var isEmpty = __webpack_require__(9464);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/licia/truncate.js
var truncate = __webpack_require__(15);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/licia/upperFirst.js
var upperFirst = __webpack_require__(9931);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/console/util.js

function getObjType(obj) {
  if (obj.constructor && obj.constructor.name) return obj.constructor.name;
  return upperFirst_default()({}.toString.call(obj).replace(/(\[object )|]/g, ''));
}
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
var isNum_default = /*#__PURE__*/__webpack_require__.n(licia_isNum);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(licia_toNum);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
var isHidden_default = /*#__PURE__*/__webpack_require__.n(licia_isHidden);
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/console/getPreview.js











var c = classPrefix('console');
function getPreview(obj) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    topObj = _ref.topObj,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? 0 : _ref$level,
    _ref$getterVal = _ref.getterVal,
    getterVal = _ref$getterVal === void 0 ? false : _ref$getterVal,
    _ref$unenumerable = _ref.unenumerable,
    unenumerable = _ref$unenumerable === void 0 ? true : _ref$unenumerable;
  var json = '';
  var type = '';
  var keyNum = 5;
  var parts = [];
  var names = [];
  var objEllipsis = '';
  var circular = false;
  var i;
  topObj = topObj || obj;
  var passOpts = {
    getterVal: getterVal,
    unenumerable: unenumerable,
    level: level + 1
  };
  var doStringify = level === 0;
  var keyWrapper = "<span class=\"".concat(c('key'), "\">");
  var numWrapper = "<span class=\"".concat(c('number'), "\">");
  var nullWrapper = "<span class=\"".concat(c('null'), "\">");
  var strWrapper = "<span class=\"".concat(c('string'), "\">");
  var boolWrapper = "<span class=\"".concat(c('boolean'), "\">");
  var specialWrapper = "<span class=\"".concat(c('special'), "\">");
  var strEscape = function strEscape(str) {
    return escape_default()(str).replace(/\\n/g, '↵').replace(/\\f|\\r|\\t/g, '').replace(/\\/g, '');
  };
  var wrapperEnd = '</span>';
  var wrapKey = function wrapKey(key) {
    return keyWrapper + strEscape(key) + wrapperEnd;
  };
  var wrapNum = function wrapNum(num) {
    return numWrapper + num + wrapperEnd;
  };
  var wrapRegExp = function wrapRegExp(str) {
    return strWrapper + str + wrapperEnd;
  };
  var wrapBool = function wrapBool(bool) {
    return boolWrapper + bool + wrapperEnd;
  };
  var wrapNull = function wrapNull(str) {
    return nullWrapper + str + wrapperEnd;
  };
  function wrapStr(str) {
    str = toStr_default()(str);
    if (contain_default()(SPECIAL_VAL, str) || startWith_default()(str, 'Array[')) {
      return specialWrapper + strEscape(str) + wrapperEnd;
    }
    if (str.length > 100) {
      str = truncate_default()(str, 100, {
        separator: ' ',
        ellipsis: '…'
      });
    }
    return strWrapper + strEscape("\"".concat(str, "\"")) + wrapperEnd;
  }
  function objIteratee(name) {
    if (i > keyNum) {
      objEllipsis = ', …';
      return;
    }
    var key = wrapKey(escapeJsonStr(name));
    if (!getterVal) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, name);
      if (descriptor && descriptor.get) {
        parts.push("".concat(key, ": ").concat(wrapStr('(...)')));
        i++;
        return;
      }
    }
    parts.push("".concat(key, ": ").concat(getPreview(topObj[name], passOpts)));
    i++;
  }
  try {
    type = {}.toString.call(obj);
  } catch (e) {
    type = '[object Object]';
  }
  var isStr = type == '[object String]';
  var isArr = type == '[object Array]';
  var isObj = type == '[object Object]';
  var isNum = type == '[object Number]';
  var isRegExp = type == '[object RegExp]';
  var isSymbol = type == '[object Symbol]';
  var isFn = type == '[object Function]';
  var isBool = type == '[object Boolean]';
  if (circular) {
    json = wrapStr('[circular]');
  } else if (isStr) {
    json = wrapStr(escapeJsonStr(obj));
  } else if (isRegExp) {
    json = wrapRegExp(escapeJsonStr(obj.toString()));
  } else if (isFn) {
    json = wrapStr('ƒ');
  } else if (isArr) {
    if (doStringify) {
      json = '[';
      var len = obj.length;
      var arrEllipsis = '';
      if (len > 100) {
        len = 100;
        arrEllipsis = ', …';
      }
      for (var _i = 0; _i < len; _i++) {
        parts.push("".concat(getPreview(obj[_i], passOpts)));
      }
      json += parts.join(', ') + arrEllipsis + ']';
    } else {
      json = "Array(".concat(obj.length, ")");
    }
  } else if (isObj) {
    if (canBeProto(obj)) {
      obj = Object.getPrototypeOf(obj);
    }
    names = unenumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    if (doStringify) {
      i = 1;
      json = '{';
      each_default()(names, objIteratee);
      json += parts.join(', ') + objEllipsis + '}';
    } else {
      json = getObjType(obj);
      if (json === 'Object') json = '{…}';
    }
  } else if (isNum) {
    json = obj + '';
    if (endWith_default()(json, 'Infinity') || json === 'NaN') {
      json = "\"".concat(json, "\"");
    } else {
      json = wrapNum(json);
    }
  } else if (isBool) {
    json = wrapBool(obj ? 'true' : 'false');
  } else if (obj === null) {
    json = wrapNull('null');
  } else if (isSymbol) {
    json = wrapStr('Symbol');
  } else if (obj === undefined) {
    json = wrapStr('undefined');
  } else {
    try {
      if (canBeProto(obj)) {
        obj = Object.getPrototypeOf(obj);
      }
      if (doStringify) {
        i = 1;
        json = '{';
        names = unenumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        each_default()(names, objIteratee);
        json += parts.join(', ') + objEllipsis + '}';
      } else {
        json = getObjType(obj);
        if (json === 'Object') json = '{…}';
      }
    } catch (e) {
      json = wrapStr(obj);
    }
  }
  return json;
}
var SPECIAL_VAL = ['(...)', 'undefined', 'Symbol', 'Object', 'ƒ'];
function canBeProto(obj) {
  var emptyObj = isEmpty_default()(Object.getOwnPropertyNames(obj));
  var proto = Object.getPrototypeOf(obj);
  return emptyObj && proto && proto !== Object.prototype;
}
function escapeJsonStr(str) {
  return escapeJsStr_default()(str).replace(/\\'/g, "'").replace(/\t/g, '\\t');
}
// EXTERNAL MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/index.js + 5 modules
var object_viewer = __webpack_require__(3390);
// EXTERNAL MODULE: ./node_modules/luna-data-grid/esm/data-grid/index.js + 2 modules
var data_grid = __webpack_require__(92);
// EXTERNAL MODULE: ./node_modules/luna-dom-viewer/esm/dom-viewer/index.js + 2 modules
var dom_viewer = __webpack_require__(5452);
// EXTERNAL MODULE: ./node_modules/licia/ResizeSensor.js
var ResizeSensor = __webpack_require__(4095);
var ResizeSensor_default = /*#__PURE__*/__webpack_require__.n(ResizeSensor);
// EXTERNAL MODULE: ./node_modules/licia/isObj.js
var isObj = __webpack_require__(9760);
var isObj_default = /*#__PURE__*/__webpack_require__.n(isObj);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/isErr.js
var isErr = __webpack_require__(2650);
var isErr_default = /*#__PURE__*/__webpack_require__.n(isErr);
// EXTERNAL MODULE: ./node_modules/licia/isPrimitive.js
var isPrimitive = __webpack_require__(7696);
var isPrimitive_default = /*#__PURE__*/__webpack_require__.n(isPrimitive);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/isEl.js
var isEl = __webpack_require__(2708);
var isEl_default = /*#__PURE__*/__webpack_require__.n(isEl);
// EXTERNAL MODULE: ./node_modules/licia/toInt.js
var toInt = __webpack_require__(6631);
var toInt_default = /*#__PURE__*/__webpack_require__.n(toInt);
// EXTERNAL MODULE: ./node_modules/licia/concat.js
var concat = __webpack_require__(4069);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);
// EXTERNAL MODULE: ./node_modules/licia/isNull.js
var isNull = __webpack_require__(4236);
var isNull_default = /*#__PURE__*/__webpack_require__.n(isNull);
// EXTERNAL MODULE: ./node_modules/licia/isUndef.js
var isUndef = __webpack_require__(8971);
var isUndef_default = /*#__PURE__*/__webpack_require__.n(isUndef);
// EXTERNAL MODULE: ./node_modules/licia/isFn.js
var isFn = __webpack_require__(3957);
var isFn_default = /*#__PURE__*/__webpack_require__.n(isFn);
// EXTERNAL MODULE: ./node_modules/licia/toArr.js
var toArr = __webpack_require__(769);
var toArr_default = /*#__PURE__*/__webpack_require__.n(toArr);
// EXTERNAL MODULE: ./node_modules/licia/isArr.js
var isArr = __webpack_require__(6214);
var isArr_default = /*#__PURE__*/__webpack_require__.n(isArr);
// EXTERNAL MODULE: ./node_modules/licia/unique.js
var unique = __webpack_require__(438);
var unique_default = /*#__PURE__*/__webpack_require__.n(unique);
// EXTERNAL MODULE: ./node_modules/licia/clone.js
var clone = __webpack_require__(8420);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ./node_modules/licia/lowerCase.js
var lowerCase = __webpack_require__(96);
var lowerCase_default = /*#__PURE__*/__webpack_require__.n(lowerCase);
// EXTERNAL MODULE: ./node_modules/licia/keys.js
var keys = __webpack_require__(3145);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/debounce.js
var debounce = __webpack_require__(4534);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/licia/stringify.js
var stringify = __webpack_require__(8032);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);
// EXTERNAL MODULE: ./node_modules/licia/copy.js
var licia_copy = __webpack_require__(4844);
var copy_default = /*#__PURE__*/__webpack_require__.n(licia_copy);
// EXTERNAL MODULE: ./node_modules/licia/stringifyAll.js
var stringifyAll = __webpack_require__(4801);
var stringifyAll_default = /*#__PURE__*/__webpack_require__.n(stringifyAll);
// EXTERNAL MODULE: ./node_modules/licia/nextTick.js
var nextTick = __webpack_require__(9041);
var nextTick_default = /*#__PURE__*/__webpack_require__.n(nextTick);
// EXTERNAL MODULE: ./node_modules/licia/linkify.js
var linkify = __webpack_require__(8091);
var linkify_default = /*#__PURE__*/__webpack_require__.n(linkify);
// EXTERNAL MODULE: ./node_modules/licia/highlight.js
var highlight = __webpack_require__(4249);
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);
// EXTERNAL MODULE: ./node_modules/licia/some.js
var some = __webpack_require__(2797);
var some_default = /*#__PURE__*/__webpack_require__.n(some);
// EXTERNAL MODULE: ./node_modules/licia/stripIndent.js
var stripIndent = __webpack_require__(5773);
var stripIndent_default = /*#__PURE__*/__webpack_require__.n(stripIndent);
// EXTERNAL MODULE: ./node_modules/licia/toEl.js
var toEl = __webpack_require__(4433);
var toEl_default = /*#__PURE__*/__webpack_require__.n(toEl);
// EXTERNAL MODULE: ./node_modules/licia/uniqId.js
var uniqId = __webpack_require__(5630);
var uniqId_default = /*#__PURE__*/__webpack_require__.n(uniqId);
// EXTERNAL MODULE: ./node_modules/licia/isBool.js
var isBool = __webpack_require__(6493);
var isBool_default = /*#__PURE__*/__webpack_require__.n(isBool);
// EXTERNAL MODULE: ./node_modules/licia/isSymbol.js
var isSymbol = __webpack_require__(9350);
var isSymbol_default = /*#__PURE__*/__webpack_require__.n(isSymbol);
// EXTERNAL MODULE: ./node_modules/licia/isRegExp.js
var isRegExp = __webpack_require__(1976);
var isRegExp_default = /*#__PURE__*/__webpack_require__.n(isRegExp);
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/console/Log.js







var _templateObject;
function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



















































var regJsUrl = /https?:\/\/([0-9.\-A-Za-z]+)(?::(\d+))?\/[A-Z.a-z0-9/]*\.js/g;
var emptyHighlightStyle = {
  comment: '',
  string: '',
  number: '',
  keyword: '',
  operator: ''
};
var Log = /*#__PURE__*/function (_Emitter) {
  function Log(console, _ref) {
    var _this;
    var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'log' : _ref$type,
      _ref$args = _ref.args,
      args = _ref$args === void 0 ? [] : _ref$args,
      id = _ref.id,
      group = _ref.group,
      targetGroup = _ref.targetGroup,
      header = _ref.header,
      _ref$ignoreFilter = _ref.ignoreFilter,
      ignoreFilter = _ref$ignoreFilter === void 0 ? false : _ref$ignoreFilter,
      accessGetter = _ref.accessGetter,
      unenumerable = _ref.unenumerable,
      lazyEvaluation = _ref.lazyEvaluation;
    (0,classCallCheck/* default */.A)(this, Log);
    _this = _callSuper(this, Log);
    _this.container = h_default()('div');
    _this.count = 1;
    _this.width = 0;
    _this.height = 0;
    _this.isHidden = false;
    _this.columns = [];
    _this.elements = {};
    _this.objects = {};
    _this.console = console;
    _this.type = type;
    _this.group = group;
    _this.targetGroup = targetGroup;
    _this.args = args;
    _this.id = id;
    _this.header = header;
    _this.ignoreFilter = ignoreFilter;
    _this.collapsed = false;
    _this.container.log = _this;
    _this.height = 0;
    _this.width = 0;
    _this.$container = $_default()(_this.container);
    _this.accessGetter = accessGetter;
    _this.unenumerable = unenumerable;
    _this.lazyEvaluation = lazyEvaluation;
    var level = 'info';
    switch (type) {
      case 'debug':
        level = 'verbose';
        break;
      case 'error':
        level = 'error';
        break;
      case 'warn':
        level = 'warning';
        break;
    }
    _this.level = level;
    _this.resizeSensor = new (ResizeSensor_default())(_this.container);
    _this.onResize = debounce_default()(function () {
      if (isHidden_default()(_this.container)) {
        _this.isHidden = true;
      } else {
        if (!_this.isHidden) {
          _this.updateSize(false);
        }
        _this.isHidden = false;
      }
    }, 16);
    _this.formatMsg();
    if (_this.group) {
      _this.checkGroup();
    }
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(Log, _Emitter);
  return (0,createClass/* default */.A)(Log, [{
    key: "checkGroup",
    value: function checkGroup() {
      var group = this.group;
      var collapsed = false;
      while (group) {
        if (group.collapsed) {
          collapsed = true;
          break;
        }
        group = group.parent;
      }
      if (collapsed !== this.collapsed) {
        this.collapsed = collapsed;
        return true;
      }
      return false;
    }
  }, {
    key: "updateIcon",
    value: function updateIcon(icon) {
      var c = this.console.c;
      var $icon = this.$container.find(c('.icon-container')).find(c('.icon'));
      $icon.rmAttr('class').addClass([c('icon'), c("icon-".concat(icon))]);
      return this;
    }
  }, {
    key: "addCount",
    value: function addCount() {
      this.count++;
      var $container = this.$container,
        count = this.count;
      var c = this.console.c;
      var $countContainer = $container.find(c('.count-container'));
      var $icon = $container.find(c('.icon-container'));
      var $count = $countContainer.find(c('.count'));
      if (count === 2) {
        $countContainer.rmClass(c('hidden'));
      }
      $count.text(toStr_default()(count));
      $icon.addClass(c('hidden'));
      return this;
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      var $container = this.$container;
      var c = this.console.c;
      var $lastNesting = $container.find(".".concat(c('nesting-level'), ":not(.").concat(c('group-closed'), ")")).last();
      $lastNesting.addClass(c('group-closed'));
      return this;
    }
  }, {
    key: "updateTime",
    value: function updateTime(time) {
      var $timeContainer = this.$container.find(this.console.c('.time-container'));
      if (this.header) {
        $timeContainer.find('span').eq(0).text(time);
        this.header.time = time;
      }
      return this;
    }
  }, {
    key: "isAttached",
    value: function isAttached() {
      return !!this.container.parentNode;
    }
  }, {
    key: "isSimple",
    value: function isSimple() {
      return !some_default()(this.args, function (arg) {
        return isObj_default()(arg);
      });
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$container$getBo = this.container.getBoundingClientRect(),
        width = _this$container$getBo.width,
        height = _this$container$getBo.height;
      var newHeight = height - 1;
      if (this.height !== newHeight) {
        this.height = newHeight;
        if (!silent) {
          this.emit('updateHeight');
        }
      }
      if (this.width !== width) {
        this.width = width;
      }
    }
  }, {
    key: "html",
    value: function html() {
      return this.container.outerHTML;
    }
  }, {
    key: "text",
    value: function text() {
      return this.content.textContent || '';
    }
  }, {
    key: "select",
    value: function select() {
      this.$container.addClass(this.console.c('selected'));
    }
  }, {
    key: "deselect",
    value: function deselect() {
      this.$container.rmClass(this.console.c('selected'));
    }
  }, {
    key: "copy",
    value: function copy() {
      var args = this.args;
      var str = '';
      each_default()(args, function (arg, idx) {
        if (idx !== 0) {
          str += ' ';
        }
        if (isObj_default()(arg)) {
          str += stringify_default()(arg);
        } else {
          str += toStr_default()(arg);
        }
      });
      copy_default()(str);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;
      var c = this.console.c;
      var self = this;
      this.resizeSensor.addListener(this.onResize);
      this.$container.on('click', c('.dom-viewer'), function (e) {
        return e.stopPropagation();
      }).on('click', c('.preview'), function (e) {
        e.stopPropagation();
        var $this = $_default()(this);
        var $icon = $this.find(c('.preview-icon-container')).find(c('.icon'));
        var icon = 'caret-down';
        if ($icon.hasClass(c('icon-caret-down'))) {
          icon = 'caret-right';
        }
        $icon.rmAttr('class').addClass([c('icon'), c("icon-".concat(icon))]);
        self.renderObjectViewer(this);
      }).on('click', function () {
        return _this2.click();
      });
    }
  }, {
    key: "renderEl",
    value: function renderEl() {
      var elements = this.elements;
      var c = this.console.c;
      var self = this;
      this.$container.find(c('.dom-viewer')).each(function () {
        var $this = $_default()(this);
        var id = $this.data('id');
        new dom_viewer/* default */.A(this, {
          node: elements[id],
          theme: self.console.getOption('theme')
        });
      });
    }
  }, {
    key: "renderObjectViewer",
    value: function renderObjectViewer(preview) {
      var console = this.console,
        unenumerable = this.unenumerable,
        accessGetter = this.accessGetter,
        lazyEvaluation = this.lazyEvaluation;
      var c = console.c;
      var $container = $_default()(preview);
      var id = $container.data('id');
      if (!id) {
        return;
      }
      var obj = this.objects[id];
      var $json = $container.find(c('.json'));
      if ($json.hasClass(c('hidden'))) {
        if ($json.data('init') !== 'true') {
          if (!lazyEvaluation) {
            var staticViewer = new object_viewer/* Static */.j($json.get(0));
            staticViewer.setOption('theme', console.getOption('theme'));
            staticViewer.set(obj);
          } else {
            var objViewer = new object_viewer/* default */.A($json.get(0), {
              unenumerable: unenumerable,
              accessGetter: accessGetter
            });
            objViewer.setOption('theme', console.getOption('theme'));
            objViewer.set(obj);
          }
          $json.data('init', 'true');
        }
        $json.rmClass(c('hidden'));
      } else {
        $json.addClass(c('hidden'));
      }
    }
  }, {
    key: "renderTable",
    value: function renderTable(args) {
      var _this3 = this;
      var Value = '__LunaConsoleValue';
      var columns = this.columns,
        $container = this.$container,
        console = this.console;
      var c = console.c;
      var $dataGrid = $container.find(c('.data-grid'));
      var table = args[0];
      var dataGrid = new data_grid/* default */.A($dataGrid.get(0), {
        columns: concat_default()([{
          id: '(index)',
          title: '(index)',
          sortable: true
        }], map_default()(columns, function (column) {
          return {
            id: column,
            title: column === Value ? 'Value' : column,
            sortable: true
          };
        })),
        theme: console.getOption('theme')
      });
      each_default()(table, function (obj, idx) {
        var data = {
          '(index)': toStr_default()(idx)
        };
        columns.forEach(function (column) {
          if (isObj_default()(obj)) {
            data[column] = column === Value ? '' : _this3.formatTableVal(obj[column]);
          } else if (isPrimitive_default()(obj)) {
            data[column] = column === Value ? _this3.formatTableVal(obj) : '';
          }
        });
        dataGrid.append(data);
      });
    }
  }, {
    key: "extractObj",
    value: function extractObj(obj) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var accessGetter = this.accessGetter,
        unenumerable = this.unenumerable;
      defaults_default()(options, {
        accessGetter: accessGetter,
        unenumerable: unenumerable,
        symbol: unenumerable,
        timeout: 1000
      });
      Log_stringify(obj, options, function (result) {
        return cb(JSON.parse(result));
      });
    }
  }, {
    key: "click",
    value: function click() {
      var type = this.type,
        $container = this.$container,
        console = this.console;
      var c = console.c;
      switch (type) {
        case 'log':
        case 'warn':
        case 'info':
        case 'debug':
        case 'output':
        case 'table':
        case 'dir':
          break;
        case 'group':
        case 'groupCollapsed':
          console.toggleGroup(this);
          break;
        case 'error':
          $container.find(c('.stack')).toggleClass(c('hidden'));
          break;
      }
    }
  }, {
    key: "formatMsg",
    value: function formatMsg() {
      var args = this.args;
      var type = this.type,
        id = this.id,
        header = this.header,
        group = this.group;
      var c = this.console.c;
      args = clone_default()(args);
      var msg = '';
      var icon;
      var err;
      if (type === 'group' || type === 'groupCollapsed') {
        if (args.length === 0) {
          args = ['console.group'];
        }
      }
      switch (type) {
        case 'log':
        case 'info':
        case 'debug':
          msg = this.formatCommon(args);
          break;
        case 'dir':
          msg = this.formatDir(args);
          break;
        case 'warn':
          icon = 'warn';
          msg = this.formatCommon(args);
          break;
        case 'error':
          if (isStr_default()(args[0]) && args.length !== 1) args = this.substituteStr(args);
          err = args[0];
          icon = 'error';
          err = isErr_default()(err) ? err : new Error(this.formatCommon(args));
          msg = this.formatErr(err);
          break;
        case 'table':
          msg = this.formatTable(args);
          break;
        case 'html':
          msg = args[0];
          break;
        case 'input':
          msg = this.formatJs(args[0]);
          icon = 'input';
          break;
        case 'output':
          msg = this.formatCommon(args);
          icon = 'output';
          break;
        case 'groupCollapsed':
          msg = this.formatCommon(args);
          icon = 'caret-right';
          break;
        case 'group':
          msg = this.formatCommon(args);
          icon = 'caret-down';
          break;
      }
      if (contain_default()(['log', 'debug', 'warn'], type) && this.isSimple()) {
        msg = linkify_default()(msg, function (url) {
          return "<a href=\"".concat(url, "\" target=\"_blank\">").concat(url, "</a>");
        });
      }
      msg = this.render({
        msg: msg,
        type: type,
        icon: icon,
        id: id,
        header: header,
        group: group
      });
      this.$container.addClass("".concat(c('log-container'))).html(msg);
      switch (type) {
        case 'table':
          if (!isEmpty_default()(this.columns)) {
            this.renderTable(args);
          }
          break;
      }
      if (!isEmpty_default()(this.elements)) {
        this.renderEl();
      }
      this.$content = this.$container.find(c('.log-content'));
      this.content = this.$content.get(0);
    }
  }, {
    key: "render",
    value: function render(data) {
      var c = this.console.c;
      var html = '';
      var indent = '';
      if (data.group) {
        var indentLevel = data.group.indentLevel;
        for (var i = 0; i < indentLevel; i++) {
          indent += "<div class=\"".concat(c('nesting-level'), "\"></div>");
        }
      }
      if (data.header) {
        html += stripIndent_default()(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n      <div class=\"", "\">\n        ", "\n        <div class=\"", "\">\n          <span>", "</span> <span>", "</span>\n        </div>\n      </div>"])), c('header'), indent, c('time-from-container'), data.header.time, data.header.from);
      }
      var icon = '';
      if (data.icon) {
        icon = "<div class=\"".concat(c('icon-container'), "\"><span class=\"").concat(c('icon icon-' + data.icon), "\"></span></div>");
      }
      html += "\n    <div class=\"".concat(c(data.type + ' log-item'), "\">\n      ").concat(indent, "\n      ").concat(icon, "\n      <div class=\"").concat(c('count-container hidden'), "\">\n        <div class=\"").concat(c('count'), "\"></div>\n      </div>    \n      <div class=\"").concat(c('log-content-wrapper'), "\">\n        <div class=\"").concat(c('log-content'), "\">").concat(data.msg, "</div>\n      </div>\n    </div>");
      return html;
    }
  }, {
    key: "formatTable",
    value: function formatTable(args) {
      var Value = '__LunaConsoleValue';
      var table = args[0];
      var filter = args[1];
      var columns = [];
      if (isStr_default()(filter)) filter = toArr_default()(filter);
      if (!isArr_default()(filter)) filter = null;
      if (!isObj_default()(table)) return this.formatCommon(args);
      each_default()(table, function (val) {
        if (isPrimitive_default()(val)) {
          columns.push(Value);
        } else if (isObj_default()(val)) {
          columns = columns.concat(keys_default()(val));
        }
      });
      columns = unique_default()(columns);
      columns.sort();
      if (filter) columns = columns.filter(function (val) {
        return contain_default()(filter, val);
      });
      if (columns.length > 20) columns = columns.slice(0, 20);
      if (isEmpty_default()(columns)) return this.formatCommon(args);
      this.columns = columns;
      return this.console.c('<div class="data-grid"></div>') + this.formatPreview(table);
    }
  }, {
    key: "formatErr",
    value: function formatErr(err) {
      var lines = err.stack ? err.stack.split('\n') : [];
      var msg = "".concat(err.message || lines[0], "<br/>");
      lines = lines.map(function (val) {
        return escape_default()(val);
      });
      var stack = "<div class=\"".concat(this.console.c('stack hidden'), "\">").concat(lines.slice(1).join('<br/>'), "</div>");
      return msg + stack.replace(regJsUrl, function (match) {
        return "<a href=\"".concat(match, "\" target=\"_blank\">").concat(match, "</a>");
      });
    }
  }, {
    key: "formatCommon",
    value: function formatCommon(args) {
      var c = this.console.c;
      var needStrSubstitution = isStr_default()(args[0]) && args.length !== 1;
      if (needStrSubstitution) args = this.substituteStr(args);
      for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (isEl_default()(val)) {
          args[i] = this.formatEl(val);
        } else if (isFn_default()(val)) {
          args[i] = this.formatFn(val);
        } else if (isRegExp_default()(val)) {
          args[i] = "<span class=\"".concat(c('regexp'), "\">").concat(escape_default()(toStr_default()(val)), "</span>");
        } else if (isObj_default()(val)) {
          args[i] = this.formatPreview(val);
        } else if (isUndef_default()(val)) {
          args[i] = "<span class=\"".concat(c('undefined'), "\">undefined</span>");
        } else if (isNull_default()(val)) {
          args[i] = "<span class=\"".concat(c('null'), "\">null</span>");
        } else if (isNum_default()(val)) {
          args[i] = "<span class=\"".concat(c('number'), "\">").concat(toStr_default()(val), "</span>");
        } else if (typeof val === 'bigint') {
          args[i] = "<span class=\"".concat(c('number'), "\">").concat(toStr_default()(val), "n</span>");
        } else if (isBool_default()(val)) {
          args[i] = "<span class=\"".concat(c('boolean'), "\">").concat(toStr_default()(val), "</span>");
        } else if (isSymbol_default()(val)) {
          args[i] = "<span class=\"".concat(c('symbol'), "\">").concat(escape_default()(toStr_default()(val)), "</span>");
        } else {
          val = toStr_default()(val);
          if (i !== 0 || !needStrSubstitution) {
            val = escape_default()(val);
          }
          if (val.length > 5000) {
            val = truncate_default()(val, 5000, {
              separator: ' ',
              ellipsis: '…'
            });
          }
          args[i] = val;
        }
      }
      return args.join(' ');
    }
  }, {
    key: "formatDir",
    value: function formatDir(args) {
      if (isObj_default()(args[0])) {
        return this.formatPreview(args[0]);
      }
      return this.formatCommon(args);
    }
  }, {
    key: "formatTableVal",
    value: function formatTableVal(val) {
      var c = this.console.c;
      if (isObj_default()(val)) return '{…}';
      if (isPrimitive_default()(val)) return toEl_default()("<div class=\"".concat(c('preview'), "\">").concat(getPreview(val), "</div>"));
      return toStr_default()(val);
    }
  }, {
    key: "formatPreview",
    value: function formatPreview(obj) {
      var _this4 = this;
      var c = this.console.c;
      var id = uniqId_default()();
      if (this.lazyEvaluation) {
        this.objects[id] = obj;
      } else {
        this.extractObj(obj, {}, function (result) {
          _this4.objects[id] = result;
        });
      }
      var noPreview = contain_default()(['dir', 'table'], this.type);
      var type = getObjType(obj);
      if (type === 'Array' && obj.length > 1) {
        type = "(".concat(obj.length, ")");
        if (noPreview) {
          type = "Array".concat(type);
        }
      } else if (type === 'RegExp') {
        type = toStr_default()(obj);
      } else if (isEl_default()(obj)) {
        type = this.formatElName(obj);
      }
      return "<div class=\"".concat(c('preview'), "\" data-id=\"").concat(id, "\">") + "<div class=\"".concat(c('preview-container'), "\">") + "<div class=\"".concat(c('preview-icon-container'), "\"><span class=\"").concat(c('icon icon-caret-right'), "\"></span></div>") + "<span class=\"".concat(c('preview-content-container'), "\">") + "<span class=\"".concat(c('descriptor'), "\">").concat(escape_default()(type), "</span> ") + "<span class=\"".concat(c('object-preview'), "\">").concat(noPreview ? '' : getPreview(obj, {
        getterVal: this.accessGetter,
        unenumerable: false
      }), "</span>") + '</span></div>' + "<div class=\"".concat(c('json hidden'), "\"></div></div>");
    }
  }, {
    key: "substituteStr",
    value: function substituteStr(args) {
      var str = escape_default()(args[0]);
      var isInCss = false;
      var newStr = '';
      args.shift();
      for (var i = 0, len = str.length; i < len; i++) {
        var c = str[i];
        if (c === '%' && args.length !== 0) {
          i++;
          var arg = args.shift();
          switch (str[i]) {
            case 'i':
            case 'd':
              newStr += toInt_default()(arg);
              break;
            case 'f':
              newStr += toNum_default()(arg);
              break;
            case 's':
              newStr += toStr_default()(arg);
              break;
            case 'O':
              if (isObj_default()(arg)) {
                newStr += this.formatPreview(arg);
              } else {
                newStr += toStr_default()(arg);
              }
              break;
            case 'o':
              if (isEl_default()(arg)) {
                newStr += this.formatEl(arg);
              } else if (isObj_default()(arg)) {
                newStr += this.formatPreview(arg);
              } else {
                newStr += toStr_default()(arg);
              }
              break;
            case 'c':
              if (str.length <= i + 1) {
                break;
              }
              if (isInCss) newStr += '</span>';
              isInCss = true;
              newStr += "<span style=\"".concat(correctStyle(arg), "\">");
              break;
            default:
              i--;
              args.unshift(arg);
              newStr += c;
          }
        } else {
          newStr += c;
        }
      }
      if (isInCss) newStr += '</span>';
      args.unshift(newStr);
      return args;
    }
  }, {
    key: "formatJs",
    value: function formatJs(val) {
      return "<pre class=\"".concat(this.console.c('code'), "\">").concat(this.console.c(highlight_default()(val, 'js', emptyHighlightStyle)), "</pre>");
    }
  }, {
    key: "formatFn",
    value: function formatFn(val) {
      return "<pre style=\"display:inline\">".concat(this.formatJs(val.toString()), "</pre>");
    }
  }, {
    key: "formatElName",
    value: function formatElName(val) {
      var id = val.id,
        className = val.className;
      var ret = val.tagName.toLowerCase();
      if (id !== '') ret += "#".concat(id);
      if (isStr_default()(className)) {
        var classes = '';
        each_default()(className.split(/\s+/g), function (val) {
          if (val.trim() === '') return;
          classes += ".".concat(val);
        });
        ret += classes;
      }
      return ret;
    }
  }, {
    key: "formatEl",
    value: function formatEl(val) {
      var id = uniqId_default()();
      this.elements[id] = val;
      return this.console.c("<div class=\"dom-viewer\" data-id=\"".concat(id, "\"></div>"));
    }
  }]);
}((Emitter_default()));

function correctStyle(val) {
  val = lowerCase_default()(val);
  var rules = val.split(';');
  var style = {};
  each_default()(rules, function (rule) {
    if (!contain_default()(rule, ':')) return;
    var _rule$split = rule.split(':'),
      _rule$split2 = _slicedToArray(_rule$split, 2),
      name = _rule$split2[0],
      val = _rule$split2[1];
    style[trim_default()(name)] = trim_default()(val);
  });
  style['display'] = 'inline-block';
  style['max-width'] = '100%';
  delete style.width;
  delete style.height;
  var ret = '';
  each_default()(style, function (val, key) {
    ret += "".concat(key, ":").concat(val, ";");
  });
  return ret;
}
function Log_stringify(obj, options, cb) {
  var result = stringifyAll_default()(obj, options);
  nextTick_default()(function () {
    return cb(result);
  });
}
// EXTERNAL MODULE: ./node_modules/licia/perfNow.js
var perfNow = __webpack_require__(5820);
var perfNow_default = /*#__PURE__*/__webpack_require__.n(perfNow);
// EXTERNAL MODULE: ./node_modules/licia/now.js
var now = __webpack_require__(3981);
var now_default = /*#__PURE__*/__webpack_require__.n(now);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/Stack.js
var Stack = __webpack_require__(7005);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack);
// EXTERNAL MODULE: ./node_modules/licia/last.js
var last = __webpack_require__(3497);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/licia/throttle.js
var throttle = __webpack_require__(5865);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/licia/xpath.js
var xpath = __webpack_require__(8862);
var xpath_default = /*#__PURE__*/__webpack_require__.n(xpath);
// EXTERNAL MODULE: ./node_modules/licia/dateFormat.js
var dateFormat = __webpack_require__(7030);
var dateFormat_default = /*#__PURE__*/__webpack_require__.n(dateFormat);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/share/Component.js





function Component_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Component_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Component_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Component_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = Component_callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/raf.js
var raf = __webpack_require__(2228);
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);
;// CONCATENATED MODULE: ./node_modules/luna-console/esm/console/index.js
/* module decorator */ module = __webpack_require__.hmd(module);








var console_templateObject;
function console_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, console_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function console_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (console_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





























var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var id = 0;
var Console = /*#__PURE__*/function (_Component) {
  function Console(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, Console);
    _this = console_callSuper(this, Console, [container, {
      compName: 'console'
    }, options]);
    _this.spaceHeight = 0;
    _this.topSpaceHeight = 0;
    _this.bottomSpaceHeight = 0;
    _this.lastScrollTop = 0;
    _this.lastTimestamp = 0;
    _this.speedToleranceFactor = 100;
    _this.maxSpeedTolerance = 2000;
    _this.minSpeedTolerance = 100;
    _this.logs = [];
    _this.displayLogs = [];
    _this.timer = {};
    _this.counter = {};
    _this.asyncList = [];
    _this.asyncTimer = null;
    _this.isAtBottom = true;
    _this.groupStack = new (Stack_default())();
    _this.selectedLog = null;
    _this.onScroll = function () {
      var _this$container = _this.container,
        scrollHeight = _this$container.scrollHeight,
        offsetHeight = _this$container.offsetHeight,
        scrollTop = _this$container.scrollTop;
      if (scrollTop <= 0) return;
      if (offsetHeight + scrollTop > scrollHeight) return;
      var isAtBottom = false;
      if (scrollHeight === offsetHeight) {
        isAtBottom = true;
      } else if (Math.abs(scrollHeight - offsetHeight - scrollTop) < 1) {
        isAtBottom = true;
      }
      _this.isAtBottom = isAtBottom;
      var lastScrollTop = _this.lastScrollTop;
      var lastTimestamp = _this.lastTimestamp;
      var timestamp = now_default()();
      var duration = timestamp - lastTimestamp;
      var distance = scrollTop - lastScrollTop;
      var speed = Math.abs(distance / duration);
      var speedTolerance = speed * _this.speedToleranceFactor;
      if (duration > 1000) {
        speedTolerance = 1000;
      }
      if (speedTolerance > _this.maxSpeedTolerance) {
        speedTolerance = _this.maxSpeedTolerance;
      }
      if (speedTolerance < _this.minSpeedTolerance) {
        speedTolerance = _this.minSpeedTolerance;
      }
      _this.lastScrollTop = scrollTop;
      _this.lastTimestamp = timestamp;
      var topTolerance = 0;
      var bottomTolerance = 0;
      if (lastScrollTop < scrollTop) {
        topTolerance = _this.minSpeedTolerance;
        bottomTolerance = speedTolerance;
      } else {
        topTolerance = speedTolerance;
        bottomTolerance = _this.minSpeedTolerance;
      }
      if (_this.topSpaceHeight < scrollTop - topTolerance && _this.topSpaceHeight + _this.el.offsetHeight > scrollTop + offsetHeight + bottomTolerance) {
        return;
      }
      _this.renderViewport({
        topTolerance: topTolerance * 2,
        bottomTolerance: bottomTolerance * 2
      });
    };
    _this.initTpl();
    _this.initOptions(options, {
      maxNum: 0,
      asyncRender: true,
      showHeader: false,
      filter: '',
      level: ['verbose', 'info', 'warning', 'error'],
      accessGetter: false,
      unenumerable: true,
      lazyEvaluation: true
    });
    _this.$el = _this.find('.logs');
    _this.el = _this.$el.get(0);
    _this.$fakeEl = _this.find('.fake-logs');
    _this.fakeEl = _this.$fakeEl.get(0);
    _this.$space = _this.find('.logs-space');
    _this.space = _this.$space.get(0);
    if (isAndroid) {
      _this.speedToleranceFactor = 800;
      _this.maxSpeedTolerance = 3000;
      _this.minSpeedTolerance = 800;
    }
    _this.resizeSensor = new (ResizeSensor_default())(container);
    _this.renderViewport = throttle_default()(function (options) {
      _this._renderViewport(options);
    }, 16);
    _this.global = {
      copy: function copy(value) {
        if (!isStr_default()(value)) value = JSON.stringify(value, null, 2);
        copy_default()(value);
      },
      $: function $(selectors) {
        return document.querySelector(selectors);
      },
      $$: function $$(selectors) {
        return toArr_default()(document.querySelectorAll(selectors));
      },
      $x: function $x(path) {
        return xpath_default()(path);
      },
      clear: function clear() {
        _this.clear();
      },
      dir: function dir(value) {
        _this.dir(value);
      },
      table: function table(data, columns) {
        _this.table(data, columns);
      },
      keys: (keys_default())
    };
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(Console, _Component);
  return (0,createClass/* default */.A)(Console, [{
    key: "setGlobal",
    value: function setGlobal(name, val) {
      this.global[name] = val;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$container.off('scroll', this.onScroll);
      this.resizeSensor.destroy();
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Console.prototype), "destroy", this).call(this);
    }
  }, {
    key: "count",
    value: function count() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var counter = this.counter;
      !isUndef_default()(counter[label]) ? counter[label]++ : counter[label] = 1;
      this.info("".concat(label, ": ").concat(counter[label]));
    }
  }, {
    key: "countReset",
    value: function countReset() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      this.counter[label] = 0;
    }
  }, {
    key: "assert",
    value: function assert() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (isEmpty_default()(args)) return;
      var exp = args.shift();
      if (!exp) {
        if (args.length === 0) args.unshift('console.assert');
        args.unshift('Assertion failed: ');
        this.insert('error', args);
      }
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (isEmpty_default()(args)) return;
      this.insert('log', args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (isEmpty_default()(args)) return;
      this.insert('debug', args);
    }
  }, {
    key: "dir",
    value: function dir(obj) {
      if (isUndef_default()(obj)) return;
      this.insert('dir', [obj]);
    }
  }, {
    key: "table",
    value: function table() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (isEmpty_default()(args)) return;
      this.insert('table', args);
    }
  }, {
    key: "time",
    value: function time() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      if (this.timer[name]) {
        return this.insert('warn', ["Timer '".concat(name, "' already exists")]);
      }
      this.timer[name] = perfNow_default()();
    }
  }, {
    key: "timeLog",
    value: function timeLog() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var startTime = this.timer[name];
      if (!startTime) {
        return this.insert('warn', ["Timer '".concat(name, "' does not exist")]);
      }
      this.info("".concat(name, ": ").concat(perfNow_default()() - startTime, "ms"));
    }
  }, {
    key: "timeEnd",
    value: function timeEnd() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      this.timeLog(name);
      delete this.timer[name];
    }
  }, {
    key: "clear",
    value: function clear() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.logs = [];
      this.displayLogs = [];
      this.selectLog(null);
      this.lastLog = undefined;
      this.counter = {};
      this.timer = {};
      this.groupStack = new (Stack_default())();
      this.asyncList = [];
      if (this.asyncTimer) {
        clearTimeout(this.asyncTimer);
        this.asyncTimer = null;
      }
      if (silent) {
        this.render();
      } else {
        this.insert('log', ['%cConsole was cleared', 'color:#808080;font-style:italic;']);
      }
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      if (isEmpty_default()(args)) return;
      this.insert('info', args);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      if (isEmpty_default()(args)) return;
      this.insert('error', args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      if (isEmpty_default()(args)) return;
      this.insert('warn', args);
    }
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this.insert({
        type: 'group',
        args: args,
        ignoreFilter: true
      });
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this.insert({
        type: 'groupCollapsed',
        args: args,
        ignoreFilter: true
      });
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this.insert('groupEnd');
    }
  }, {
    key: "evaluate",
    value: function evaluate(code) {
      this.insert({
        type: 'input',
        args: [code],
        ignoreFilter: true
      });
      try {
        this.output(this.evalJs(code));
      } catch (e) {
        this.insert({
          type: 'error',
          ignoreFilter: true,
          args: [e]
        });
      }
    }
  }, {
    key: "html",
    value: function html() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      this.insert('html', args);
    }
  }, {
    key: "toggleGroup",
    value: function toggleGroup(log) {
      var targetGroup = log.targetGroup;
      targetGroup.collapsed ? this.openGroup(log) : this.collapseGroup(log);
    }
  }, {
    key: "output",
    value: function output(val) {
      this.insert({
        type: 'output',
        args: [val],
        ignoreFilter: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var logs = this.logs,
        selectedLog = this.selectedLog;
      this.$el.html('');
      this.isAtBottom = true;
      this.updateBottomSpace(0);
      this.updateTopSpace(0);
      this.displayLogs = [];
      for (var i = 0, len = logs.length; i < len; i++) {
        this.attachLog(logs[i]);
      }
      if (selectedLog) {
        if (!contain_default()(this.displayLogs, selectedLog)) {
          this.selectLog(null);
        }
      }
    }
  }, {
    key: "insert",
    value: function insert(type, args) {
      var _this$options = this.options,
        showHeader = _this$options.showHeader,
        asyncRender = _this$options.asyncRender;
      var header;
      if (showHeader) {
        header = {
          time: getCurTime(),
          from: getFrom()
        };
      }
      if (asyncRender) {
        return this.insertAsync(type, args, header);
      }
      this.insertSync(type, args, header);
    }
  }, {
    key: "insertAsync",
    value: function insertAsync(type, args, header) {
      this.asyncList.push([type, args, header]);
      this.handleAsyncList();
    }
  }, {
    key: "insertSync",
    value: function insertSync(type, args, header) {
      var _this2 = this;
      var logs = this.logs,
        groupStack = this.groupStack;
      var _this$options2 = this.options,
        maxNum = _this$options2.maxNum,
        accessGetter = _this$options2.accessGetter,
        unenumerable = _this$options2.unenumerable,
        lazyEvaluation = _this$options2.lazyEvaluation;
      var options;
      if (isStr_default()(type)) {
        options = {
          type: type,
          args: args,
          header: header
        };
      } else {
        options = type;
      }
      if (options.type === 'groupEnd') {
        var _lastLog = this.lastLog;
        _lastLog.groupEnd();
        this.groupStack.pop();
        return;
      }
      if (groupStack.size > 0) {
        options.group = groupStack.peek();
      }
      extend_default()(options, {
        id: ++id,
        accessGetter: accessGetter,
        unenumerable: unenumerable,
        lazyEvaluation: lazyEvaluation
      });
      if (options.type === 'group' || options.type === 'groupCollapsed') {
        var group = {
          id: uniqId_default()('group'),
          collapsed: false,
          parent: groupStack.peek(),
          indentLevel: groupStack.size + 1
        };
        if (options.type === 'groupCollapsed') group.collapsed = true;
        options.targetGroup = group;
        groupStack.push(group);
      }
      var log = new Log(this, options);
      log.on('updateHeight', function () {
        _this2.isAtBottom = false;
        _this2.renderViewport();
      });
      var lastLog = this.lastLog;
      if (lastLog && !contain_default()(['html', 'group', 'groupCollapsed'], log.type) && lastLog.type === log.type && log.isSimple() && lastLog.text() === log.text()) {
        lastLog.addCount();
        if (log.header) lastLog.updateTime(log.header.time);
        log = lastLog;
        this.detachLog(lastLog);
      } else {
        logs.push(log);
        this.lastLog = log;
      }
      if (maxNum !== 0 && logs.length > maxNum) {
        var firstLog = logs[0];
        this.detachLog(firstLog);
        logs.shift();
      }
      this.attachLog(log);
      this.emit('insert', log);
    }
  }, {
    key: "updateTopSpace",
    value: function updateTopSpace(height) {
      this.topSpaceHeight = height;
      this.el.style.top = height + 'px';
    }
  }, {
    key: "updateBottomSpace",
    value: function updateBottomSpace(height) {
      this.bottomSpaceHeight = height;
    }
  }, {
    key: "updateSpace",
    value: function updateSpace(height) {
      if (this.spaceHeight === height) return;
      this.spaceHeight = height;
      this.space.style.height = height + 'px';
    }
  }, {
    key: "detachLog",
    value: function detachLog(log) {
      var displayLogs = this.displayLogs;
      var idx = displayLogs.indexOf(log);
      if (idx > -1) {
        displayLogs.splice(idx, 1);
        this.renderViewport();
      }
    }
  }, {
    key: "attachLog",
    value: function attachLog(log) {
      if (!this.filterLog(log) || log.collapsed) return;
      var displayLogs = this.displayLogs;
      if (displayLogs.length === 0) {
        displayLogs.push(log);
        this.renderViewport();
        return;
      }
      var lastDisplayLog = last_default()(displayLogs);
      if (log.id > lastDisplayLog.id) {
        displayLogs.push(log);
        this.renderViewport();
        return;
      }
      var startIdx = 0;
      var endIdx = displayLogs.length - 1;
      var middleLog;
      var middleIdx = 0;
      while (startIdx <= endIdx) {
        middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
        middleLog = displayLogs[middleIdx];
        if (middleLog.id === log.id) {
          return;
        }
        if (middleLog.id < log.id) {
          startIdx = middleIdx + 1;
        } else {
          endIdx = middleIdx - 1;
        }
      }
      if (middleLog.id < log.id) {
        displayLogs.splice(middleIdx + 1, 0, log);
      } else {
        displayLogs.splice(middleIdx, 0, log);
      }
      this.renderViewport();
    }
  }, {
    key: "handleAsyncList",
    value: function handleAsyncList() {
      var _this3 = this;
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var asyncList = this.asyncList;
      if (this.asyncTimer) return;
      this.asyncTimer = setTimeout(function () {
        _this3.asyncTimer = null;
        var done = false;
        var len = asyncList.length;
        var timeout, num;
        if (len < 1000) {
          num = 200;
          timeout = 400;
        } else if (len < 5000) {
          num = 500;
          timeout = 800;
        } else if (len < 10000) {
          num = 800;
          timeout = 1000;
        } else if (len < 25000) {
          num = 1000;
          timeout = 1200;
        } else if (len < 50000) {
          num = 1500;
          timeout = 1500;
        } else {
          num = 2000;
          timeout = 2500;
        }
        if (num > len) {
          num = len;
          done = true;
        }
        for (var i = 0; i < num; i++) {
          var _asyncList$shift = asyncList.shift(),
            _asyncList$shift2 = _slicedToArray(_asyncList$shift, 3),
            type = _asyncList$shift2[0],
            args = _asyncList$shift2[1],
            header = _asyncList$shift2[2];
          _this3.insertSync(type, args, header);
        }
        if (!done) {
          raf_default()(function () {
            return _this3.handleAsyncList(timeout);
          });
        }
      }, timeout);
    }
  }, {
    key: "injectGlobal",
    value: function injectGlobal() {
      each_default()(this.global, function (val, name) {
        if (window[name]) return;
        window[name] = val;
      });
    }
  }, {
    key: "clearGlobal",
    value: function clearGlobal() {
      each_default()(this.global, function (val, name) {
        if (window[name] && window[name] === val) {
          delete window[name];
        }
      });
    }
  }, {
    key: "evalJs",
    value: function evalJs(jsInput) {
      var ret;
      this.injectGlobal();
      try {
        ret = eval.call(window, "(".concat(jsInput, ")"));
      } catch (e) {
        ret = eval.call(window, jsInput);
      }
      this.setGlobal('$_', ret);
      this.clearGlobal();
      return ret;
    }
  }, {
    key: "filterLog",
    value: function filterLog(log) {
      var level = this.options.level;
      var filter = this.options.filter;
      if (log.ignoreFilter) {
        return true;
      }
      if (!contain_default()(level, log.level)) {
        return false;
      }
      if (filter) {
        if (isFn_default()(filter)) {
          return filter(log);
        } else if (isRegExp_default()(filter)) {
          return filter.test(lowerCase_default()(log.text()));
        } else if (isStr_default()(filter)) {
          filter = trim_default()(filter);
          if (filter) {
            return contain_default()(lowerCase_default()(log.text()), lowerCase_default()(filter));
          }
        }
      }
      return true;
    }
  }, {
    key: "collapseGroup",
    value: function collapseGroup(log) {
      var targetGroup = log.targetGroup;
      targetGroup.collapsed = true;
      log.updateIcon('caret-right');
      this.updateGroup(log);
    }
  }, {
    key: "openGroup",
    value: function openGroup(log) {
      var targetGroup = log.targetGroup;
      targetGroup.collapsed = false;
      log.updateIcon('caret-down');
      this.updateGroup(log);
    }
  }, {
    key: "updateGroup",
    value: function updateGroup(log) {
      var targetGroup = log.targetGroup;
      var logs = this.logs;
      var len = logs.length;
      var i = logs.indexOf(log) + 1;
      while (i < len) {
        var _log = logs[i];
        if (!_log.checkGroup() && _log.group === targetGroup) {
          break;
        }
        _log.collapsed ? this.detachLog(_log) : this.attachLog(_log);
        i++;
      }
    }
  }, {
    key: "selectLog",
    value: function selectLog(log) {
      if (this.selectedLog) {
        this.selectedLog.deselect();
        this.selectedLog = null;
      }
      if (!isNull_default()(log)) {
        var _this$selectedLog;
        this.selectedLog = log;
        (_this$selectedLog = this.selectedLog) === null || _this$selectedLog === void 0 || _this$selectedLog.select();
        this.emit('select', log);
      } else {
        this.emit('deselect');
      }
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this4 = this;
      var $el = this.$el,
        c = this.c;
      this.resizeSensor.addListener(this.renderViewport);
      var self = this;
      $el.on('click', c('.log-container'), function () {
        self.selectLog(this.log);
      });
      this.on('optionChange', function (name, val) {
        var logs = _this4.logs;
        switch (name) {
          case 'maxNum':
            if (val > 0 && logs.length > val) {
              _this4.logs = logs.slice(logs.length - val);
              _this4.render();
            }
            break;
          case 'filter':
            _this4.render();
            break;
          case 'level':
            _this4.options.level = toArr_default()(val);
            _this4.render();
            break;
        }
      });
      this.$container.on('scroll', this.onScroll);
    }
  }, {
    key: "_renderViewport",
    value: function _renderViewport() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$topTolerance = _ref.topTolerance,
        topTolerance = _ref$topTolerance === void 0 ? 500 : _ref$topTolerance,
        _ref$bottomTolerance = _ref.bottomTolerance,
        bottomTolerance = _ref$bottomTolerance === void 0 ? 500 : _ref$bottomTolerance;
      var el = this.el,
        container = this.container,
        space = this.space;
      if (isHidden_default()(container)) return;
      var scrollTop = container.scrollTop,
        offsetHeight = container.offsetHeight;
      var containerWidth = space.getBoundingClientRect().width;
      var top = scrollTop - topTolerance;
      var bottom = scrollTop + offsetHeight + bottomTolerance;
      var displayLogs = this.displayLogs;
      var topSpaceHeight = 0;
      var bottomSpaceHeight = 0;
      var currentHeight = 0;
      var len = displayLogs.length;
      var fakeEl = this.fakeEl;
      var fakeFrag = document.createDocumentFragment();
      var logs = [];
      for (var i = 0; i < len; i++) {
        var log = displayLogs[i];
        var width = log.width,
          height = log.height;
        if (height === 0 || width !== containerWidth) {
          fakeFrag.appendChild(log.container);
          logs.push(log);
        }
      }
      if (logs.length > 0) {
        fakeEl.appendChild(fakeFrag);
        for (var _i = 0, _len11 = logs.length; _i < _len11; _i++) {
          logs[_i].updateSize();
        }
        fakeEl.textContent = '';
      }
      var frag = document.createDocumentFragment();
      for (var _i2 = 0; _i2 < len; _i2++) {
        var _log2 = displayLogs[_i2];
        var _container = _log2.container,
          _height = _log2.height;
        if (currentHeight > bottom) {
          bottomSpaceHeight += _height;
        } else if (currentHeight + _height > top) {
          frag.appendChild(_container);
        } else if (currentHeight < top) {
          topSpaceHeight += _height;
        }
        currentHeight += _height;
      }
      this.updateSpace(currentHeight);
      this.updateTopSpace(topSpaceHeight);
      this.updateBottomSpace(bottomSpaceHeight);
      while (el.firstChild) {
        if (el.lastChild) {
          el.removeChild(el.lastChild);
        }
      }
      el.appendChild(frag);
      var scrollHeight = container.scrollHeight;
      if (this.isAtBottom && scrollTop <= scrollHeight - offsetHeight) {
        container.scrollTop = 10000000;
      }
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      this.$container.html(this.c(stripIndent_default()(console_templateObject || (console_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n      <div class=\"logs-space\">\n        <div class=\"fake-logs\"></div>\n        <div class=\"logs\"></div>\n      </div>\n    "])))));
    }
  }]);
}(Component);

var getCurTime = function getCurTime() {
  return dateFormat_default()('HH:MM:ss ');
};
function getFrom() {
  var e = new Error();
  var ret = '';
  var lines = e.stack ? e.stack.split('\n') : '';
  for (var i = 0, len = lines.length; i < len; i++) {
    ret = lines[i];
    if (ret.indexOf('winConsole') > -1 && i < len - 1) {
      ret = lines[i + 1];
      break;
    }
  }
  return ret;
}
if (true) {
  exportCjs(module, Console);
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ DataGrid; }
});

// UNUSED EXPORTS: DataGridNode

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(7528);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/stripIndent.js
var stripIndent = __webpack_require__(5773);
var stripIndent_default = /*#__PURE__*/__webpack_require__.n(stripIndent);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(toNum);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-data-grid/esm/share/util.js









function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum_default()(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-data-grid/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/toStr.js
var toStr = __webpack_require__(2561);
var toStr_default = /*#__PURE__*/__webpack_require__.n(toStr);
// EXTERNAL MODULE: ./node_modules/licia/isEl.js
var isEl = __webpack_require__(2708);
var isEl_default = /*#__PURE__*/__webpack_require__.n(isEl);
// EXTERNAL MODULE: ./node_modules/licia/isUndef.js
var isUndef = __webpack_require__(8971);
var isUndef_default = /*#__PURE__*/__webpack_require__.n(isUndef);
// EXTERNAL MODULE: ./node_modules/licia/ResizeSensor.js
var ResizeSensor = __webpack_require__(4095);
var ResizeSensor_default = /*#__PURE__*/__webpack_require__.n(ResizeSensor);
// EXTERNAL MODULE: ./node_modules/licia/throttle.js
var throttle = __webpack_require__(5865);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/licia/isNull.js
var isNull = __webpack_require__(4236);
var isNull_default = /*#__PURE__*/__webpack_require__.n(isNull);
// EXTERNAL MODULE: ./node_modules/licia/isFn.js
var isFn = __webpack_require__(3957);
var isFn_default = /*#__PURE__*/__webpack_require__.n(isFn);
// EXTERNAL MODULE: ./node_modules/licia/isRegExp.js
var isRegExp = __webpack_require__(1976);
var isRegExp_default = /*#__PURE__*/__webpack_require__.n(isRegExp);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/lowerCase.js
var lowerCase = __webpack_require__(96);
var lowerCase_default = /*#__PURE__*/__webpack_require__.n(lowerCase);
// EXTERNAL MODULE: ./node_modules/licia/clamp.js
var clamp = __webpack_require__(6026);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);
// EXTERNAL MODULE: ./node_modules/licia/max.js
var max = __webpack_require__(3539);
var max_default = /*#__PURE__*/__webpack_require__.n(max);
// EXTERNAL MODULE: ./node_modules/licia/min.js
var min = __webpack_require__(8785);
var min_default = /*#__PURE__*/__webpack_require__.n(min);
;// CONCATENATED MODULE: ./node_modules/luna-data-grid/esm/data-grid/index.js
/* module decorator */ module = __webpack_require__.hmd(module);







var _templateObject;
function data_grid_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, data_grid_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function data_grid_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (data_grid_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

























var $document = $_default()(document);
var MIN_COL_WIDTH = 24;
var DataGrid = /*#__PURE__*/function (_Component) {
  function DataGrid(container, options) {
    var _this;
    (0,classCallCheck/* default */.A)(this, DataGrid);
    _this = data_grid_callSuper(this, DataGrid, [container, {
      compName: 'data-grid'
    }, options]);
    _this.resizeIdx = 0;
    _this.resizeStartX = 0;
    _this.resizeStartLeft = 0;
    _this.resizeDeltaX = 0;
    _this.nodes = [];
    _this.colWidthsInitialized = false;
    _this.colMap = {};
    _this.selectedNode = null;
    _this.isAscending = true;
    _this.colWidths = [];
    _this.onResizeColMove = function (e) {
      var _this2 = _this,
        resizeIdx = _this2.resizeIdx,
        $resizers = _this2.$resizers,
        colWidths = _this2.colWidths,
        $colgroup = _this2.$colgroup;
      e = e.origEvent;
      var deltaX = eventClient('x', e) - _this.resizeStartX;
      var leftColWidth = colWidths[resizeIdx];
      var rightColWidth = colWidths[resizeIdx + 1];
      var lowerBound = min_default()(-leftColWidth + MIN_COL_WIDTH, 0);
      var upperBound = max_default()(rightColWidth - MIN_COL_WIDTH, 0);
      deltaX = clamp_default()(deltaX, lowerBound, upperBound);
      $colgroup.each(function () {
        var $cols = $_default()(this).find('col');
        $cols.eq(resizeIdx).css('width', leftColWidth + deltaX + 'px');
        $cols.eq(resizeIdx + 1).css('width', rightColWidth - deltaX + 'px');
      });
      _this.resizeDeltaX = deltaX;
      var newLeft = _this.resizeStartLeft + deltaX;
      $resizers.eq(resizeIdx).css('left', "".concat(newLeft, "px"));
    };
    _this.onResizeColEnd = function (e) {
      _this.onResizeColMove(e);
      var _this3 = _this,
        c = _this3.c,
        colWidths = _this3.colWidths,
        resizeIdx = _this3.resizeIdx,
        resizeDeltaX = _this3.resizeDeltaX;
      var columns = _this.options.columns;
      var leftCol = columns[resizeIdx];
      var rightCol = columns[resizeIdx + 1];
      var leftColWidth = colWidths[resizeIdx] + resizeDeltaX;
      var rightColWidth = colWidths[resizeIdx + 1] - resizeDeltaX;
      var totalWidth = leftColWidth + rightColWidth;
      var totalWeight = leftCol.weight + rightCol.weight;
      var leftWeight = totalWeight * (leftColWidth / totalWidth);
      var rightWeight = totalWeight - leftWeight;
      leftCol.weight = leftWeight;
      rightCol.weight = rightWeight;
      _this.applyColWeights();
      $_default()(document.body).rmClass(c('resizing'));
      $document.off(drag('move'), _this.onResizeColMove);
      $document.off(drag('end'), _this.onResizeColEnd);
    };
    _this.$container.attr('tabindex', '0');
    _this.resizeSensor = new (ResizeSensor_default())(container);
    _this.onResize = throttle_default()(function () {
      _this.updateHeight();
      _this.updateWeights();
    }, 16);
    if (options.height) {
      options.maxHeight = options.height;
      options.minHeight = options.height;
    }
    _this.initOptions(options, {
      minHeight: 41,
      maxHeight: Infinity,
      filter: ''
    });
    var _this$options = _this.options,
      columns = _this$options.columns,
      minHeight = _this$options.minHeight,
      maxHeight = _this$options.maxHeight;
    each_default()(columns, function (column) {
      defaults_default()(column, {
        sortable: false
      });
      _this.colMap[column.id] = column;
    });
    if (maxHeight < minHeight) {
      _this.setOption('maxHeight', minHeight);
    }
    ;
    'width';
    _this.initTpl();
    _this.$headerRow = _this.find('.header').find('tr');
    _this.$fillerRow = _this.find('.filler-row');
    _this.fillerRow = _this.$fillerRow.get(0);
    _this.$tableBody = _this.find('.data').find('tbody');
    _this.tableBody = _this.$tableBody.get(0);
    _this.$colgroup = _this.$container.find('colgroup');
    _this.$dataContainer = _this.find('.data-container');
    _this.renderHeader();
    _this.renderResizers();
    _this.updateWeights();
    _this.updateHeight();
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(DataGrid, _Component);
  return (0,createClass/* default */.A)(DataGrid, [{
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(DataGrid.prototype), "destroy", this).call(this);
      this.resizeSensor.destroy();
      this.$container.rmAttr('tabindex');
    }
  }, {
    key: "remove",
    value: function remove(node) {
      var nodes = this.nodes;
      var pos = nodes.indexOf(node);
      if (pos > -1) {
        node.detach();
        nodes.splice(pos, 1);
        if (node === this.selectedNode) {
          this.selectNode(nodes[pos] || nodes[pos - 1] || null);
        }
        this.updateHeight();
      }
    }
  }, {
    key: "append",
    value: function append(data, options) {
      var node = new DataGridNode(this, data, options);
      this.nodes.push(node);
      if (this.sortId) {
        this.sortNodes(this.sortId, this.isAscending);
      } else {
        if (this.filterNode(node)) {
          this.tableBody.insertBefore(node.container, this.fillerRow);
          this.updateHeight();
        }
      }
      return node;
    }
  }, {
    key: "clear",
    value: function clear() {
      each_default()(this.nodes, function (node) {
        return node.detach();
      });
      this.nodes = [];
      this.selectNode(null);
      this.updateHeight();
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var $fillerRow = this.$fillerRow,
        c = this.c,
        $container = this.$container;
      var _this$options2 = this.options,
        maxHeight = _this$options2.maxHeight,
        minHeight = _this$options2.minHeight;
      this.$dataContainer.css({
        height: 'auto'
      });
      var headerHeight = this.$headerRow.offset().height;
      var borderTopWidth = pxToNum($container.css('border-top-width'));
      var borderBottomWidth = pxToNum($container.css('border-bottom-width'));
      var minusHeight = headerHeight + borderTopWidth + borderBottomWidth;
      minHeight -= minusHeight;
      if (minHeight < 0) {
        minHeight = 0;
      }
      maxHeight -= minusHeight;
      var $tr = this.$dataContainer.find(c('.node'));
      var len = $tr.length;
      var height = 0;
      if (len > 0) {
        var rowHeight = $tr.offset().height;
        height = rowHeight * len;
      }
      if (height > minHeight) {
        $fillerRow.hide();
      } else {
        $fillerRow.show();
      }
      if (height < minHeight) {
        height = minHeight;
      } else if (height >= maxHeight) {
        height = maxHeight;
      }
      this.$dataContainer.css({
        height: height
      });
    }
  }, {
    key: "selectNode",
    value: function selectNode(node) {
      if (!isNull_default()(node) && !(node !== null && node !== void 0 && node.selectable)) {
        return;
      }
      if (this.selectedNode) {
        this.selectedNode.deselect();
        this.selectedNode = null;
      }
      if (!isNull_default()(node)) {
        var _this$selectedNode;
        this.selectedNode = node;
        (_this$selectedNode = this.selectedNode) === null || _this$selectedNode === void 0 || _this$selectedNode.select();
        this.emit('select', node);
      } else {
        this.emit('deselect');
      }
    }
  }, {
    key: "onResizeColStart",
    value: function onResizeColStart(e) {
      var c = this.c,
        resizeIdx = this.resizeIdx,
        $resizers = this.$resizers;
      e.stopPropagation();
      e.preventDefault();
      e = e.origEvent;
      this.resizeStartX = eventClient('x', e);
      this.resizeStartLeft = pxToNum($resizers.eq(resizeIdx).css('left'));
      $_default()(document.body).addClass(c('resizing'));
      $document.on(drag('move'), this.onResizeColMove);
      $document.on(drag('end'), this.onResizeColEnd);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this4 = this;
      var c = this.c,
        $headerRow = this.$headerRow,
        $tableBody = this.$tableBody,
        $resizers = this.$resizers;
      this.resizeSensor.addListener(this.onResize);
      var self = this;
      $tableBody.on('click', c('.node'), function () {
        self.selectNode(this.dataGridNode);
      });
      $headerRow.on('click', c('.sortable'), function (e) {
        e.stopPropagation();
        var $this = $_default()(this);
        var id = $this.data('id');
        var order = $this.data('order');
        var isAscending = order !== 'descending';
        $this.data('order', isAscending ? 'descending' : 'ascending');
        self.sortNodes(id, isAscending);
        $headerRow.find('th').each(function () {
          var $this = $_default()(this);
          if ($this.data('id') !== id) {
            $this.rmAttr('data-order');
          }
        });
      });
      $resizers.on(drag('start'), function (e) {
        var $this = $_default()(this);
        self.resizeIdx = toNum_default()($this.data('idx'));
        self.onResizeColStart(e);
      });
      this.on('optionChange', function (name) {
        switch (name) {
          case 'minHeight':
          case 'maxHeight':
            _this4.updateHeight();
            break;
          case 'filter':
            _this4.renderData();
            break;
        }
      });
    }
  }, {
    key: "sortNodes",
    value: function sortNodes(id, isAscending) {
      var column = this.colMap[id];
      var comparator = column.comparator || naturalOrderComparator;
      this.nodes.sort(function (a, b) {
        var aVal = a.data[id];
        var bVal = b.data[id];
        if (isEl_default()(aVal)) {
          aVal = aVal.innerText;
        }
        if (isEl_default()(bVal)) {
          bVal = bVal.innerText;
        }
        return isAscending ? comparator(aVal, bVal) : comparator(bVal, aVal);
      });
      this.renderData();
      this.sortId = id;
      this.isAscending = isAscending;
    }
  }, {
    key: "updateWeights",
    value: function updateWeights() {
      var container = this.container,
        $headerRow = this.$headerRow;
      var columns = this.options.columns;
      var tableWidth = container.offsetWidth;
      if (!this.colWidthsInitialized && tableWidth) {
        for (var i = 0, len = columns.length; i < len; i++) {
          var column = columns[i];
          if (!column.weight) {
            var thWidth = $headerRow.find('th').get(i).offsetWidth;
            column.weight = 100 * thWidth / tableWidth;
          }
        }
        this.colWidthsInitialized = true;
      }
      this.applyColWeights();
    }
  }, {
    key: "applyColWeights",
    value: function applyColWeights() {
      var container = this.container,
        $colgroup = this.$colgroup;
      var columns = this.options.columns;
      var tableWidth = container.offsetWidth;
      if (tableWidth <= 0) {
        return;
      }
      var sumOfWeights = 0;
      var len = columns.length;
      for (var i = 0; i < len; i++) {
        sumOfWeights += columns[i].weight;
      }
      var minColumnWidth = 14;
      var html = '';
      var sum = 0;
      var lastOffset = 0;
      this.colWidths = [];
      for (var _i = 0; _i < len; _i++) {
        var column = columns[_i];
        sum += column.weight;
        var offset = sum * tableWidth / sumOfWeights | 0;
        var width = Math.max(offset - lastOffset, minColumnWidth);
        lastOffset = offset;
        html += "<col style=\"width:".concat(width, "px\"></col>");
        this.colWidths[_i] = width;
      }
      $colgroup.html(html);
      this.positionResizers();
    }
  }, {
    key: "positionResizers",
    value: function positionResizers() {
      var colWidths = this.colWidths;
      var resizerLeft = [];
      var len = colWidths.length - 1;
      for (var i = 0; i < len; i++) {
        resizerLeft[i] = (resizerLeft[i - 1] || 0) + colWidths[i];
      }
      for (var _i2 = 0; _i2 < len; _i2++) {
        this.$resizers.eq(_i2).css('left', resizerLeft[_i2] + 'px');
      }
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var _this5 = this;
      var tableBody = this.tableBody,
        nodes = this.nodes,
        fillerRow = this.fillerRow;
      each_default()(nodes, function (node) {
        return node.detach();
      });
      each_default()(nodes, function (node) {
        if (_this5.filterNode(node)) {
          tableBody.insertBefore(node.container, fillerRow);
        }
      });
      if (this.selectedNode && !this.filterNode(this.selectedNode)) {
        this.selectNode(null);
      }
      this.updateHeight();
    }
  }, {
    key: "filterNode",
    value: function filterNode(node) {
      var filter = this.options.filter;
      if (filter) {
        if (isFn_default()(filter)) {
          return filter(node);
        } else if (isRegExp_default()(filter)) {
          return filter.test(node.text());
        } else if (isStr_default()(filter)) {
          filter = trim_default()(filter);
          if (filter) {
            return contain_default()(lowerCase_default()(node.text()), lowerCase_default()(filter));
          }
        }
      }
      return true;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var c = this.c;
      var html = '';
      var fillerRowHtml = '';
      each_default()(this.options.columns, function (column) {
        var title = escape_default()(column.title);
        if (column.sortable) {
          html += c("<th class=\"sortable\" data-id=\"".concat(column.id, "\">").concat(title, "</th>"));
        } else {
          html += "<th>".concat(title, "</th>");
        }
        fillerRowHtml += '<td></td>';
      });
      this.$headerRow.html(html);
      this.$fillerRow.html(fillerRowHtml);
    }
  }, {
    key: "renderResizers",
    value: function renderResizers() {
      var resizers = '';
      var len = this.options.columns.length - 1;
      for (var i = 0; i < len; i++) {
        resizers += this.c("<div class=\"resizer\" data-idx=\"".concat(i, "\"></div>"));
      }
      this.$container.append(resizers);
      this.$resizers = this.find('.resizer');
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      this.$container.html(this.c(stripIndent_default()(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n        <div class=\"header-container\">\n          <table class=\"header\">\n            <colgroup></colgroup>\n            <tbody>\n              <tr></tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"data-container\">\n          <table class=\"data\">\n            <colgroup></colgroup>\n            <tbody>\n              <tr class=\"filler-row\"></tr>\n            </tbody>\n          </table>\n        </div>\n      "])))));
    }
  }]);
}(Component);

var DataGridNode = /*#__PURE__*/function () {
  function DataGridNode(dataGrid, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      selectable: false
    };
    (0,classCallCheck/* default */.A)(this, DataGridNode);
    this.container = h_default()('tr');
    this.selectable = false;
    ;
    this.container.dataGridNode = this;
    this.$container = $_default()(this.container);
    this.$container.addClass(dataGrid.c('node'));
    this.dataGrid = dataGrid;
    this.data = data;
    if (options.selectable) {
      this.selectable = options.selectable;
    }
    this.render();
  }
  return (0,createClass/* default */.A)(DataGridNode, [{
    key: "text",
    value: function text() {
      return this.$container.text();
    }
  }, {
    key: "detach",
    value: function detach() {
      this.$container.remove();
    }
  }, {
    key: "select",
    value: function select() {
      this.$container.addClass(this.dataGrid.c('selected'));
    }
  }, {
    key: "deselect",
    value: function deselect() {
      this.$container.rmClass(this.dataGrid.c('selected'));
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.data,
        $container = this.$container,
        container = this.container;
      var columns = this.dataGrid.getOption('columns');
      $container.html('');
      each_default()(columns, function (column) {
        var td = h_default()('td');
        var val = data[column.id];
        if (!isUndef_default()(val)) {
          if (isEl_default()(val)) {
            td.appendChild(val);
          } else {
            td.innerText = toStr_default()(val);
          }
        }
        container.appendChild(td);
      });
    }
  }]);
}();
function naturalOrderComparator(a, b) {
  a = toStr_default()(a);
  b = toStr_default()(b);
  if (startWith_default()(a, '_') && !startWith_default()(b, '_')) {
    return 1;
  }
  if (startWith_default()(b, '_') && !startWith_default()(a, '_')) {
    return -1;
  }
  var chunk = /^\d+|^\D+/;
  var chunka, chunkb, anum, bnum;
  while (true) {
    if (a) {
      if (!b) {
        return 1;
      }
    } else {
      if (b) {
        return -1;
      }
      return 0;
    }
    chunka = a.match(chunk)[0];
    chunkb = b.match(chunk)[0];
    anum = !isNaN(chunka);
    bnum = !isNaN(chunkb);
    if (anum && !bnum) {
      return -1;
    }
    if (bnum && !anum) {
      return 1;
    }
    if (anum && bnum) {
      var diff = chunka - chunkb;
      if (diff) {
        return diff;
      }
      if (chunka.length !== chunkb.length) {
        if (!+chunka && !+chunkb) {
          return chunka.length - chunkb.length;
        }
        return chunkb.length - chunka.length;
      }
    } else if (chunka !== chunkb) {
      return chunka < chunkb ? -1 : 1;
    }
    a = a.substring(chunka.length);
    b = b.substring(chunkb.length);
  }
}
if (true) {
  exportCjs(module, DataGrid);
}

/***/ }),

/***/ 5452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ DomViewer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(7528);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-dom-viewer/esm/share/util.js









function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-dom-viewer/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/filter.js
var filter = __webpack_require__(2571);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./node_modules/licia/stripIndent.js
var stripIndent = __webpack_require__(5773);
var stripIndent_default = /*#__PURE__*/__webpack_require__.n(stripIndent);
// EXTERNAL MODULE: ./node_modules/licia/toArr.js
var toArr = __webpack_require__(769);
var toArr_default = /*#__PURE__*/__webpack_require__.n(toArr);
// EXTERNAL MODULE: ./node_modules/licia/MutationObserver.js
var MutationObserver = __webpack_require__(2208);
var MutationObserver_default = /*#__PURE__*/__webpack_require__.n(MutationObserver);
// EXTERNAL MODULE: ./node_modules/licia/highlight.js
var highlight = __webpack_require__(4249);
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);
// EXTERNAL MODULE: ./node_modules/licia/truncate.js
var truncate = __webpack_require__(15);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/licia/last.js
var last = __webpack_require__(3497);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/every.js
var every = __webpack_require__(8098);
var every_default = /*#__PURE__*/__webpack_require__.n(every);
// EXTERNAL MODULE: ./node_modules/licia/hotkey.js
var hotkey = __webpack_require__(4307);
var hotkey_default = /*#__PURE__*/__webpack_require__.n(hotkey);
;// CONCATENATED MODULE: ./node_modules/luna-dom-viewer/esm/dom-viewer/index.js
/* module decorator */ module = __webpack_require__.hmd(module);







var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function dom_viewer_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, dom_viewer_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function dom_viewer_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (dom_viewer_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


















var emptyHighlightStyle = {
  comment: '',
  string: '',
  number: '',
  keyword: '',
  operator: ''
};
var DomViewer = /*#__PURE__*/function (_Component) {
  function DomViewer(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, DomViewer);
    _this = dom_viewer_callSuper(this, DomViewer, [container, {
      compName: 'dom-viewer'
    }, options]);
    _this.isExpanded = false;
    _this.childNodes = [];
    _this.childNodeDomViewers = [];
    _this.expand = function () {
      if (!_this.isExpandable() || _this.isExpanded) {
        return;
      }
      _this.isExpanded = true;
      _this.renderExpandTag();
      _this.renderChildNodes();
    };
    _this.collapse = function () {
      if (!_this.isExpandable() || !_this.isExpanded) {
        return;
      }
      _this.isExpanded = false;
      _this.renderCollapseTag();
    };
    _this.toggle = function () {
      if (_this.isExpanded) {
        _this.collapse();
      } else {
        _this.expand();
      }
    };
    _this.onKeyRight = function () {
      if (_this.isExpanded) {
        _this.childNodeDomViewers[0].select();
      } else {
        _this.expand();
      }
    };
    _this.onKeyLeft = function () {
      if (_this.isExpanded) {
        _this.collapse();
      } else {
        var _this$options$parent;
        (_this$options$parent = _this.options.parent) === null || _this$options$parent === void 0 || _this$options$parent.select();
      }
    };
    _this.onKeyDown = function () {
      var _this2 = _this,
        options = _this2.options;
      if (_this.isExpanded) {
        _this.childNodeDomViewers[0].select();
        return;
      }
      var parent = options.parent;
      if (!parent) {
        return;
      }
      if (options.isEndTag) {
        parent = parent.getOption('parent');
        if (!parent) {
          return;
        }
        var _parent = parent,
          childNodes = _parent.childNodes,
          childNodeDomViewers = _parent.childNodeDomViewers,
          endTagDomViewer = _parent.endTagDomViewer;
        var idx = childNodes.indexOf(options.node);
        if (childNodes[idx + 1]) {
          childNodeDomViewers[idx + 1].select();
        } else if (endTagDomViewer) {
          endTagDomViewer.select();
        }
      } else {
        var _parent2 = parent,
          _childNodeDomViewers = _parent2.childNodeDomViewers,
          _endTagDomViewer = _parent2.endTagDomViewer;
        var _idx = _childNodeDomViewers.indexOf(_this);
        if (_childNodeDomViewers[_idx + 1]) {
          _childNodeDomViewers[_idx + 1].select();
        } else if (_endTagDomViewer) {
          _endTagDomViewer.select();
        }
      }
    };
    _this.onKeyUp = function () {
      var _this3 = _this,
        options = _this3.options;
      var parent = options.parent;
      if (!parent) {
        return;
      }
      var domViewer;
      if (options.isEndTag) {
        domViewer = last_default()(parent.childNodeDomViewers);
      } else {
        var idx = parent.childNodeDomViewers.indexOf(_this);
        if (idx < 1) {
          parent.select();
        } else {
          domViewer = parent.childNodeDomViewers[idx - 1];
        }
      }
      if (domViewer) {
        if (domViewer.isExpanded) {
          var _domViewer$endTagDomV;
          (_domViewer$endTagDomV = domViewer.endTagDomViewer) === null || _domViewer$endTagDomV === void 0 || _domViewer$endTagDomV.select();
        } else {
          domViewer.select();
        }
      }
    };
    _this.initOptions(options, {
      node: document.documentElement,
      parent: null,
      isEndTag: false,
      rootContainer: container,
      rootDomViewer: _this,
      ignore: function ignore() {
        return false;
      },
      hotkey: true
    });
    _this.initTpl();
    _this.bindEvent();
    if (!_this.options.isEndTag) {
      _this.initObserver();
    }
    return _this;
  }
  (0,inherits/* default */.A)(DomViewer, _Component);
  return (0,createClass/* default */.A)(DomViewer, [{
    key: "select",
    value: function select(node) {
      var c = this.c,
        options = this.options;
      if (!node || node && options.node === node) {
        if (this.$tag.hasClass(c('selected'))) {
          return;
        }
        $_default()(this.options.rootContainer).find(c('.selected')).rmClass(c('selected')).rmAttr('tabindex');
        this.$tag.attr('tabindex', '0').get(0).focus();
        this.$tag.addClass(c('selected'));
        options.rootDomViewer.emit('select', options.node);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      var childNode = node;
      var curNode = node.parentElement;
      while (curNode) {
        if (curNode === options.node) {
          this.expand();
          var childNodeDomViewer = this.childNodeDomViewers[this.childNodes.indexOf(childNode)];
          childNodeDomViewer.select(node);
          break;
        }
        childNode = curNode;
        curNode = curNode.parentElement;
      }
    }
  }, {
    key: "attach",
    value: function attach() {
      this.container.appendChild(this.$tag.get(0));
      if (this.$children) {
        this.container.appendChild(this.$children.get(0));
      }
    }
  }, {
    key: "isAttached",
    value: function isAttached() {
      return !!this.$tag.get(0).parentNode;
    }
  }, {
    key: "detach",
    value: function detach() {
      this.$tag.remove();
      if (this.$children) {
        this.$children.remove();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var c = this.c;
      if (this.$tag.hasClass(c('selected'))) {
        this.options.rootDomViewer.emit('deselect');
      }
      this.detach();
      if (this.observer) {
        this.observer.disconnect();
      }
      this.destroySubComponents();
      if (this.options.rootDomViewer === this) {
        this.$container.rmClass("luna-dom-viewer").rmClass(c("platform-".concat(getPlatform()))).rmClass(c("theme-".concat(this.options.theme)));
      }
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "renderExpandTag",
    value: function renderExpandTag() {
      var $tag = this.$tag,
        c = this.c;
      var node = this.options.node;
      $tag.html(this.renderHtmlTag(_objectSpread(_objectSpread({}, getHtmlTagData(node)), {}, {
        hasTail: false,
        hasToggleButton: true
      })));
      $tag.addClass(c('expanded'));
      this.$children.rmClass(c('hidden'));
    }
  }, {
    key: "renderCollapseTag",
    value: function renderCollapseTag() {
      var $tag = this.$tag,
        c = this.c;
      var node = this.options.node;
      this.$children.addClass(c('hidden'));
      this.$tag.html(this.renderHtmlTag(_objectSpread(_objectSpread({}, getHtmlTagData(node)), {}, {
        hasTail: true,
        hasToggleButton: true
      })));
      $tag.rmClass(c('expanded'));
    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var _this4 = this;
      this.observer = new (MutationObserver_default())(function (mutations) {
        each_default()(mutations, function (mutation) {
          _this4.handleMutation(mutation);
        });
      });
      this.observer.observe(this.options.node, {
        attributes: true,
        childList: true,
        characterData: true
      });
    }
  }, {
    key: "handleMutation",
    value: function handleMutation(mutation) {
      var $tag = this.$tag,
        c = this.c;
      var _this$options = this.options,
        node = _this$options.node,
        ignore = _this$options.ignore;
      if (contain_default()(['attributes', 'childList'], mutation.type)) {
        if (mutation.type === 'childList') {
          if (every_default()(mutation.addedNodes, ignore) && every_default()(mutation.removedNodes, ignore)) {
            return;
          }
          this.renderChildNodes();
        }
        if (this.isExpandable()) {
          this.isExpanded ? this.renderExpandTag() : this.renderCollapseTag();
        } else {
          this.$children.addClass(c('hidden'));
          $tag.html(this.renderHtmlTag(_objectSpread(_objectSpread({}, getHtmlTagData(node)), {}, {
            hasTail: false
          })));
        }
      } else if (mutation.type === 'characterData') {
        if (node.nodeType === Node.TEXT_NODE) {
          $tag.html(this.renderTextNode(node));
        } else if (node.nodeType === Node.COMMENT_NODE) {
          $tag.html(this.renderHtmlComment(node.nodeValue));
        }
      }
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this5 = this;
      var c = this.c,
        $tag = this.$tag;
      var node = this.options.node;
      if (node.nodeType === Node.ELEMENT_NODE) {
        $tag.on('click', c('.toggle'), function (e) {
          e.stopPropagation();
          _this5.toggle();
        });
      }
      if (hasTouchSupport) {
        $tag.on('click', function () {
          return _this5.select();
        });
      } else {
        $tag.on('mousedown', function () {
          return _this5.select();
        });
      }
      if (this.options.hotkey) {
        var options = {
          element: $tag.get(0)
        };
        hotkey_default().on('right', options, this.onKeyRight);
        hotkey_default().on('left', options, this.onKeyLeft);
        hotkey_default().on('down', options, this.onKeyDown);
        hotkey_default().on('up', options, this.onKeyUp);
      }
    }
  }, {
    key: "isExpandable",
    value: function isExpandable() {
      var node = this.options.node;
      return node.nodeType === Node.ELEMENT_NODE && this.getChildNodes().length > 0;
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      var _this$options2 = this.options,
        rootContainer = _this$options2.rootContainer,
        ignore = _this$options2.ignore;
      var node = this.options.node;
      var childNodes = toArr_default()(node.childNodes);
      childNodes = filter_default()(childNodes, function (child) {
        if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.COMMENT_NODE) {
          var value = child.nodeValue;
          if (trim_default()(value) === '') {
            return false;
          }
        }
        return child !== rootContainer && !ignore(child);
      });
      return childNodes;
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      var container = this.container,
        c = this.c;
      var _this$options3 = this.options,
        node = _this$options3.node,
        isEndTag = _this$options3.isEndTag;
      var $tag = $_default()(h_default()('li'));
      $tag.addClass(c('tree-item'));
      this.$tag = $tag;
      if (isEndTag) {
        $tag.html(c("<span class=\"html-tag\" style=\"margin-left: -15px;\">&lt;<span class=\"tag-name\">/".concat(node.tagName.toLocaleLowerCase(), "</span>&gt;</span><span class=\"selection\"></span>")));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        var isExpandable = this.isExpandable();
        var data = _objectSpread(_objectSpread({}, getHtmlTagData(node)), {}, {
          hasTail: isExpandable,
          hasToggleButton: isExpandable
        });
        $tag.html(this.renderHtmlTag(data));
      } else if (node.nodeType === Node.TEXT_NODE) {
        $tag.html(this.renderTextNode(node));
      } else if (node.nodeType === Node.COMMENT_NODE) {
        var value = node.nodeValue;
        if (value.trim() === '') return;
        $tag.html(this.renderHtmlComment(value));
      } else {
        return;
      }
      container.appendChild($tag.get(0));
      if (node.nodeType === node.ELEMENT_NODE) {
        var $children = $_default()(h_default()('ul'));
        $children.addClass([c('children'), c('hidden')]);
        container.appendChild($children.get(0));
        this.$children = $children;
      }
    }
  }, {
    key: "renderChildNodes",
    value: function renderChildNodes() {
      var _this6 = this;
      var node = this.options.node;
      var _this$options4 = this.options,
        rootContainer = _this$options4.rootContainer,
        ignore = _this$options4.ignore,
        rootDomViewer = _this$options4.rootDomViewer;
      var $container = this.$children;
      var container = $container.get(0);
      var oldChildNodes = this.childNodes;
      var oldChildNodeDomViewers = this.childNodeDomViewers;
      each_default()(oldChildNodeDomViewers, function (domViewer) {
        domViewer.detach();
        _this6.removeSubComponent(domViewer);
      });
      if (this.endTagDomViewer) {
        this.endTagDomViewer.detach();
      }
      var childNodes = this.getChildNodes();
      this.childNodes = childNodes;
      var childNodeDomViewers = [];
      this.childNodeDomViewers = childNodeDomViewers;
      each_default()(childNodes, function (node, idx) {
        var pos = oldChildNodes.indexOf(node);
        var domViewer;
        if (pos > -1) {
          domViewer = oldChildNodeDomViewers[pos];
        } else {
          domViewer = new DomViewer(container, {
            node: node,
            parent: _this6,
            rootContainer: rootContainer,
            rootDomViewer: rootDomViewer,
            ignore: ignore
          });
        }
        domViewer.attach();
        childNodeDomViewers[idx] = domViewer;
        _this6.addSubComponent(domViewer);
      });
      each_default()(oldChildNodeDomViewers, function (domViewer) {
        if (!domViewer.isAttached()) {
          domViewer.destroy();
        }
      });
      if (node) {
        if (this.endTagDomViewer) {
          this.endTagDomViewer.attach();
        } else {
          this.endTagDomViewer = new DomViewer(container, {
            node: node,
            parent: this,
            isEndTag: true,
            rootContainer: rootContainer,
            rootDomViewer: rootDomViewer,
            ignore: ignore
          });
          this.addSubComponent(this.endTagDomViewer);
        }
      }
    }
  }, {
    key: "renderHtmlTag",
    value: function renderHtmlTag(data) {
      var attributes = map_default()(data.attributes, function (attribute) {
        var name = attribute.name,
          value = attribute.value,
          isLink = attribute.isLink;
        return "<span class=\"attribute\">\n          <span class=\"attribute-name\">".concat(escape_default()(name), "</span>").concat(value ? "=\"<span class=\"attribute-value".concat(isLink ? ' attribute-underline' : '', "\">").concat(escape_default()(value), "</span>\"") : '', "</span>");
      }).join('');
      var tail = '';
      if (data.hasTail) {
        tail = "".concat(data.hasTail ? '…' : '', "<span class=\"html-tag\">&lt;<span class=\"tag-name\">/").concat(data.tagName, "</span>&gt;</span>");
      } else if (!this.isExpandable()) {
        tail = "<span class=\"html-tag\">&lt;<span class=\"tag-name\">/".concat(data.tagName, "</span>&gt;</span>");
      }
      var toggle = '';
      if (data.hasToggleButton) {
        toggle = '<div class="toggle "><span class="icon icon-arrow-right"></span><span class="icon icon-arrow-down"></span></div>';
      }
      return this.c(stripIndent_default()(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n      ", "\n      <span class=\"html-tag\">&lt;<span class=\"tag-name\">", "</span>", "&gt;</span>", "\n      <span class=\"selection\"></span>"])), toggle, data.tagName, attributes, tail));
    }
  }, {
    key: "renderTextNode",
    value: function renderTextNode(node) {
      var c = this.c;
      var value = node.nodeValue;
      var parent = node.parentElement;
      var prepend = '<span class="text-node">';
      var append = '</span><span class="selection"></span>';
      if (parent && value.length < 10000) {
        if (parent.tagName === 'STYLE') {
          return c("".concat(prepend).concat(highlight_default()(value, 'css', emptyHighlightStyle)).concat(append));
        } else if (parent.tagName === 'SCRIPT') {
          return c("".concat(prepend).concat(highlight_default()(value, 'js', emptyHighlightStyle)).concat(append));
        }
      }
      return c("\"".concat(prepend).concat(escape_default()(truncate_default()(value, 10000, {
        separator: ' ',
        ellipsis: '…'
      }))).concat(append, "\""));
    }
  }, {
    key: "renderHtmlComment",
    value: function renderHtmlComment(value) {
      return this.c("<span class=\"html-comment\">&lt;!-- ".concat(escape_default()(value), " --&gt;</span><span class=\"selection\"></span>"));
    }
  }]);
}(Component);

function getHtmlTagData(el) {
  var ret = {
    tagName: '',
    attributes: []
  };
  ret.tagName = el.tagName.toLocaleLowerCase();
  var attributes = [];
  each_default()(el.attributes, function (attribute) {
    var name = attribute.name,
      value = attribute.value;
    attributes.push({
      name: name,
      value: value,
      isLink: isUrlAttribute(el, name)
    });
  });
  ret.attributes = attributes;
  return ret;
}
function isUrlAttribute(el, name) {
  var tagName = el.tagName;
  if (tagName === 'SCRIPT' || tagName === 'IMAGE' || tagName === 'VIDEO' || tagName === 'AUDIO') {
    if (name === 'src') return true;
  }
  if (tagName === 'LINK') {
    if (name === 'href') return true;
  }
  return false;
}
if (true) {
  exportCjs(module, DomViewer);
}

/***/ }),

/***/ 9152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(7528);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-modal/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-modal/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/stripIndent.js
var stripIndent = __webpack_require__(5773);
var stripIndent_default = /*#__PURE__*/__webpack_require__.n(stripIndent);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/I18n.js
var I18n = __webpack_require__(6741);
var I18n_default = /*#__PURE__*/__webpack_require__.n(I18n);
;// CONCATENATED MODULE: ./node_modules/luna-modal/esm/modal/index.js
/* module decorator */ module = __webpack_require__.hmd(module);









var _templateObject;
function modal_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, modal_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function modal_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (modal_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var Modal = /*#__PURE__*/function (_Component) {
  function Modal(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, Modal);
    _this = modal_callSuper(this, Modal, [container, {
      compName: 'modal'
    }, options]);
    _this.render = function () {
      var _this2 = _this,
        options = _this2.options,
        c = _this2.c,
        $body = _this2.$body;
      if (!options.title) {
        $body.addClass(c('no-title'));
      } else {
        $body.rmClass(c('no-title'));
        _this.$title.text(options.title);
      }
      if (!options.footer) {
        $body.addClass(c('no-footer'));
      } else {
        $body.rmClass(c('no-footer'));
        _this.$footer.html('').append(options.footer);
      }
      if (!options.showClose) {
        _this.$close.hide();
      } else {
        _this.$close.show();
      }
      _this.$body.css('width', options.width + 'px');
      _this.renderContent();
    };
    _this.hide();
    _this.initOptions(options, {
      title: '',
      content: '',
      footer: '',
      showClose: true,
      width: getDefaultWidth()
    });
    _this.initTpl();
    _this.$title = _this.find('.title');
    _this.$content = _this.find('.content');
    _this.$body = _this.find('.body');
    _this.$footer = _this.find('.footer');
    _this.$close = _this.find('.icon-close');
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(Modal, _Component);
  return (0,createClass/* default */.A)(Modal, [{
    key: "show",
    value: function show() {
      this.render();
      this.$container.rmClass(this.c('hidden'));
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$container.addClass(this.c('hidden'));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Modal.prototype), "destroy", this).call(this);
      this.$container.rmClass(this.c('hidden'));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      this.$content.html('').append(this.options.content);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this3 = this;
      this.$body.on('click', this.c('.icon-close'), function () {
        return _this3.hide();
      });
      this.on('optionChange', this.render);
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      this.$container.html(this.c(stripIndent_default()(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n      <div class=\"body\">\n        <span class=\"icon icon-close\"></span>\n        <div class=\"title\"></div>\n        <div class=\"content\"></div>\n        <div class=\"footer\"></div>\n      </div>\n      "])))));
    }
  }], [{
    key: "alert",
    value: function alert(msg) {
      return new Promise(function (resolve) {
        var modal = getGlobalModal();
        var c = modal.c;
        modal.setOption({
          title: '',
          content: msg,
          width: getDefaultWidth(),
          footer: createButtons((0,defineProperty/* default */.A)({}, Modal.i18n.t('ok'), {
            type: 'primary',
            onclick: function onclick() {
              modal.hide();
              resolve();
            }
          }), c)
        });
        modal.show();
      });
    }
  }, {
    key: "confirm",
    value: function confirm(msg) {
      return new Promise(function (resolve) {
        var modal = getGlobalModal();
        var c = modal.c;
        modal.setOption({
          title: '',
          content: msg,
          width: getDefaultWidth(),
          footer: createButtons((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, Modal.i18n.t('cancel'), {
            type: 'secondary',
            onclick: function onclick() {
              modal.hide();
              resolve(false);
            }
          }), Modal.i18n.t('ok'), {
            type: 'primary',
            onclick: function onclick() {
              modal.hide();
              resolve(true);
            }
          }), c)
        });
        modal.show();
      });
    }
  }, {
    key: "prompt",
    value: function prompt() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var defaultText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Promise(function (resolve) {
        var modal = getGlobalModal();
        var c = modal.c;
        var input = h_default()('input' + c('.input'), {
          value: defaultText
        });
        function ok() {
          modal.hide();
          resolve(input.value);
        }
        $_default()(input).on('keypress', function (e) {
          e = e.origEvent;
          if (e.key === 'Enter') {
            ok();
          }
        });
        modal.setOption({
          title: title,
          content: input,
          width: getDefaultWidth(),
          footer: createButtons((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, Modal.i18n.t('cancel'), {
            type: 'secondary',
            onclick: function onclick() {
              modal.hide();
              resolve(null);
            }
          }), Modal.i18n.t('ok'), {
            type: 'primary',
            onclick: ok
          }), c)
        });
        modal.show();
        var end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
      });
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      globalContainer = container;
    }
  }]);
}(Component);

Modal.i18n = new (I18n_default())(navigator.language !== 'zh-CN' ? 'en-US' : 'zh-CN', {
  'en-US': {
    ok: 'OK',
    cancel: 'Cancel'
  },
  'zh-CN': {
    ok: '确定',
    cancel: '取消'
  }
});
var globalModal = null;
var globalContainer = null;
function getGlobalModal() {
  if (!globalContainer) {
    globalContainer = h_default()('div');
    document.body.append(globalContainer);
  }
  if (!globalModal) {
    globalModal = new Modal(globalContainer, {
      showClose: false
    });
  }
  return globalModal;
}
function createButtons(buttons, c) {
  var buttonEls = map_default()(buttons, function (button, key) {
    return h_default()(c('.button') + c('.' + button.type), {
      onclick: button.onclick
    }, key);
  });
  return h_default().apply(void 0, [c('.button-group'), {}].concat((0,toConsumableArray/* default */.A)(buttonEls)));
}
function getDefaultWidth() {
  if (window.innerWidth < 500) {
    return window.innerWidth - 16 * 2;
  }
  return 500;
}
if (true) {
  exportCjs(module, Modal);
}

/***/ }),

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Notification; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/uniqId.js
var uniqId = __webpack_require__(5630);
var uniqId_default = /*#__PURE__*/__webpack_require__.n(uniqId);
// EXTERNAL MODULE: ./node_modules/licia/find.js
var find = __webpack_require__(8438);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-notification/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-notification/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/isUndef.js
var isUndef = __webpack_require__(8971);
var isUndef_default = /*#__PURE__*/__webpack_require__.n(isUndef);
;// CONCATENATED MODULE: ./node_modules/luna-notification/esm/notification/index.js
/* module decorator */ module = __webpack_require__.hmd(module);





function notification_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, notification_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function notification_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (notification_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var Notification = /*#__PURE__*/function (_Component) {
  function Notification(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, Notification);
    _this = notification_callSuper(this, Notification, [container, {
      compName: 'notification'
    }, options]);
    _this.notifications = [];
    _this.initOptions(options, {
      position: {
        x: 'right',
        y: 'bottom'
      },
      inline: false,
      duration: 2000
    });
    if (!_this.options.inline) {
      _this.$container.addClass(_this.c('full'));
    }
    _this.initTpl();
    return _this;
  }
  (0,inherits/* default */.A)(Notification, _Component);
  return (0,createClass/* default */.A)(Notification, [{
    key: "notify",
    value: function notify(content) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (isUndef_default()(options.duration)) {
        options.duration = this.options.duration;
      }
      var notification = new NotificationItem(this, content, {
        icon: options.icon || 'none'
      });
      this.notifications.push(notification);
      this.add(notification);
      setTimeout(function () {
        return _this2.remove(notification.id);
      }, options.duration);
    }
  }, {
    key: "dismissAll",
    value: function dismissAll() {
      var notifications = this.notifications;
      var notification = notifications[0];
      while (notification) {
        this.remove(notification.id);
        notification = notifications[0];
      }
    }
  }, {
    key: "add",
    value: function add(notification) {
      this.container.appendChild(notification.container);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var notifications = this.notifications;
      var notification = find_default()(notifications, function (notification) {
        return notification.id === id;
      });
      if (!notification) return;
      notification.destroy();
      var idx = notifications.indexOf(notification);
      notifications.splice(idx, 1);
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      var $container = this.$container;
      var _this$options$positio = this.options.position,
        x = _this$options$positio.x,
        y = _this$options$positio.y;
      var justifyContent = 'flex-end';
      var alignItems = 'flex-end';
      switch (x) {
        case 'center':
          alignItems = 'center';
          break;
        case 'left':
          alignItems = 'flex-start';
          break;
      }
      if (y === 'top') justifyContent = 'flex-start';
      $container.attr('style', "justify-content: ".concat(justifyContent, "; align-items: ").concat(alignItems));
    }
  }]);
}(Component);

var NotificationItem = /*#__PURE__*/function () {
  function NotificationItem(notification, content, options) {
    (0,classCallCheck/* default */.A)(this, NotificationItem);
    this.container = h_default()('div');
    this.$container = $_default()(this.container);
    this.notification = notification;
    this.content = content;
    this.id = uniqId_default()('luna-notification-');
    this.$container.attr({
      id: this.id,
      class: notification.c("item ".concat(notification.getOption('position').y === 'bottom' ? 'lower' : 'upper'))
    });
    this.initTpl(options.icon);
  }
  return (0,createClass/* default */.A)(NotificationItem, [{
    key: "destroy",
    value: function destroy() {
      this.$container.remove();
    }
  }, {
    key: "initTpl",
    value: function initTpl(icon) {
      var iconName = icon;
      if (icon === 'success') {
        iconName = 'check';
      } else if (icon === 'warning') {
        iconName = 'warn';
      }
      var iconHtml = icon === 'none' ? '' : "<div class=\"icon-container ".concat(icon, "\"><span class=\"icon icon-").concat(iconName, "\"></span></div>");
      this.$container.html(this.notification.c("".concat(iconHtml, "<div class=\"content\">").concat(this.content, "</div>")));
    }
  }]);
}();
if (true) {
  exportCjs(module, Notification);
}

/***/ }),

/***/ 3390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: function() { return /* reexport */ JsonViewer; },
  A: function() { return /* binding */ ObjectViewer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/getProto.js
var getProto = __webpack_require__(5427);
var getProto_default = /*#__PURE__*/__webpack_require__.n(getProto);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
var isNum_default = /*#__PURE__*/__webpack_require__.n(licia_isNum);
// EXTERNAL MODULE: ./node_modules/licia/isBool.js
var isBool = __webpack_require__(6493);
var isBool_default = /*#__PURE__*/__webpack_require__.n(isBool);
// EXTERNAL MODULE: ./node_modules/licia/lowerCase.js
var lowerCase = __webpack_require__(96);
var lowerCase_default = /*#__PURE__*/__webpack_require__.n(lowerCase);
// EXTERNAL MODULE: ./node_modules/licia/isObj.js
var isObj = __webpack_require__(9760);
var isObj_default = /*#__PURE__*/__webpack_require__.n(isObj);
// EXTERNAL MODULE: ./node_modules/licia/isArr.js
var isArr = __webpack_require__(6214);
var isArr_default = /*#__PURE__*/__webpack_require__.n(isArr);
// EXTERNAL MODULE: ./node_modules/licia/upperFirst.js
var upperFirst = __webpack_require__(9931);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/licia/keys.js
var keys = __webpack_require__(3145);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/toSrc.js
var toSrc = __webpack_require__(1168);
var toSrc_default = /*#__PURE__*/__webpack_require__.n(toSrc);
// EXTERNAL MODULE: ./node_modules/licia/isPromise.js
var isPromise = __webpack_require__(8796);
var isPromise_default = /*#__PURE__*/__webpack_require__.n(isPromise);
// EXTERNAL MODULE: ./node_modules/licia/type.js
var type = __webpack_require__(2989);
var type_default = /*#__PURE__*/__webpack_require__.n(type);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/difference.js
var difference = __webpack_require__(466);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);
// EXTERNAL MODULE: ./node_modules/licia/truncate.js
var truncate = __webpack_require__(15);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/allKeys.js
var allKeys = __webpack_require__(7514);
var allKeys_default = /*#__PURE__*/__webpack_require__.n(allKeys);
// EXTERNAL MODULE: ./node_modules/licia/filter.js
var filter = __webpack_require__(2571);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./node_modules/licia/chunk.js
var chunk = __webpack_require__(7140);
var chunk_default = /*#__PURE__*/__webpack_require__.n(chunk);
// EXTERNAL MODULE: ./node_modules/licia/toStr.js
var toStr = __webpack_require__(2561);
var toStr_default = /*#__PURE__*/__webpack_require__.n(toStr);
// EXTERNAL MODULE: ./node_modules/licia/noop.js
var noop = __webpack_require__(9993);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);
// EXTERNAL MODULE: ./node_modules/licia/naturalSort.js
var naturalSort = __webpack_require__(1532);
var naturalSort_default = /*#__PURE__*/__webpack_require__.n(naturalSort);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/Visitor.js



var Visitor = /*#__PURE__*/function () {
  function Visitor() {
    (0,classCallCheck/* default */.A)(this, Visitor);
    this.id = 0;
    this.visited = [];
  }
  return (0,createClass/* default */.A)(Visitor, [{
    key: "set",
    value: function set(val, extra) {
      var visited = this.visited,
        id = this.id;
      var obj = {
        id: id,
        val: val
      };
      extend_default()(obj, extra);
      visited.push(obj);
      this.id++;
      return id;
    }
  }, {
    key: "get",
    value: function get(val) {
      var visited = this.visited;
      for (var i = 0, len = visited.length; i < len; i++) {
        var obj = visited[i];
        if (val === obj.val) return obj;
      }
      return false;
    }
  }]);
}();

// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/util.js



var encode = function encode(val) {
  return escape_default()(toStr_default()(val)).replace(/\n/g, '↵').replace(/\f|\r|\t/g, '');
};
function getFnAbstract(str) {
  if (str.length > 500) str = str.slice(0, 500) + '...';
  return 'ƒ ' + trim_default()(extractFnHead(str).replace('function', ''));
}
var regFnHead = /function(.*?)\((.*?)\)/;
function extractFnHead(str) {
  var fnHead = str.match(regFnHead);
  if (fnHead) return fnHead[0];
  return str;
}
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
// EXTERNAL MODULE: ./node_modules/licia/uniqId.js
var uniqId = __webpack_require__(5630);
var uniqId_default = /*#__PURE__*/__webpack_require__.n(uniqId);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(licia_toNum);
// EXTERNAL MODULE: ./node_modules/licia/isNaN.js
var licia_isNaN = __webpack_require__(1932);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(licia_isNaN);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/Static.js







function Static_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Static_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Static_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Static_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


















var JsonViewer = /*#__PURE__*/function (_Component) {
  function JsonViewer(container) {
    var _this;
    (0,classCallCheck/* default */.A)(this, JsonViewer);
    _this = Static_callSuper(this, JsonViewer, [container, {
      compName: 'object-viewer'
    }]);
    _this.onItemClick = function (e) {
      var _this2 = _this,
        map = _this2.map,
        c = _this2.c;
      var $this = $_default()(e.curTarget);
      var circularId = $this.data('object-id');
      var $firstSpan = $this.find('span').eq(0);
      if ($this.data('first-level')) return;
      if (circularId) {
        $this.find('ul').html(_this.objToHtml(map[circularId], false));
        $this.rmAttr('data-object-id');
      }
      e.stopImmediatePropagation();
      if (!$firstSpan.hasClass(c('expanded'))) return;
      var $ul = $this.find('ul').eq(0);
      if ($firstSpan.hasClass(c('collapsed'))) {
        $firstSpan.rmClass(c('collapsed'));
        $ul.show();
      } else {
        $firstSpan.addClass(c('collapsed'));
        $ul.hide();
      }
      _this.emit('change');
    };
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(JsonViewer, _Component);
  return (0,createClass/* default */.A)(JsonViewer, [{
    key: "set",
    value: function set(data) {
      if (isStr_default()(data)) data = JSON.parse(data);
      this.data = {
        id: uniqId_default()('json'),
        enumerable: {
          0: data
        }
      };
      this.map = {};
      createMap(this.map, this.data);
      this.render();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(JsonViewer.prototype), "destroy", this).call(this);
      this.$container.off('click', 'li', this.onItemClick);
    }
  }, {
    key: "objToHtml",
    value: function objToHtml(data, firstLevel) {
      var _this3 = this;
      var ret = '';
      each_default()(['enumerable', 'unenumerable', 'symbol'], function (type) {
        if (!data[type]) return;
        var typeKeys = keys_default()(data[type]);
        naturalSort_default()(typeKeys);
        for (var i = 0, len = typeKeys.length; i < len; i++) {
          var key = typeKeys[i];
          ret += _this3.createEl(key, data[type][key], type, firstLevel);
        }
      });
      if (data.proto) {
        if (ret === '') {
          ret = this.objToHtml(data.proto);
        } else {
          ret += this.createEl('[[Prototype]]', data.proto, 'proto');
        }
      }
      return ret;
    }
  }, {
    key: "createEl",
    value: function createEl(key, val, keyType) {
      var firstLevel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var c = this.c;
      var type = (0,esm_typeof/* default */.A)(val);
      if (val === null) {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('null'), "\">null</span></li>");
      } else if (isNum_default()(val) || isBool_default()(val)) {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c(type), "\">").concat(encode(val), "</span></li>");
      }
      if (val.type === 'RegExp') type = 'regexp';
      if (val.type === 'Number') type = 'number';
      if (val.type === 'Number' || val.type === 'RegExp') {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c(type), "\">").concat(encode(val.value), "</span></li>");
      } else if (val.type === 'Undefined' || val.type === 'Symbol') {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('special'), "\">").concat(lowerCase_default()(val.type), "</span></li>");
      } else if (val === '(...)') {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('special'), "\">").concat(val, "</span></li>");
      } else if (isObj_default()(val)) {
        var id = val.id;
        var referenceId = val.reference;
        var objAbstract = getObjAbstract(val) || upperFirst_default()(type);
        var icon = firstLevel ? '' : "<span class=\"".concat(c('expanded collapsed'), "\"><span class=\"").concat(c('icon icon-caret-right'), "\"></span><span class=\"").concat(c('icon icon-caret-down'), "\"></span></span>");
        var obj = "<li ".concat(firstLevel ? 'data-first-level="true"' : '', " ").concat('data-object-id="' + (referenceId || id) + '"', ">").concat(icon).concat(wrapKey(key), "<span class=\"").concat(c('open'), "\">").concat(firstLevel ? '' : objAbstract, "</span><ul class=\"").concat(c(type), "\" ").concat(firstLevel ? '' : 'style="display:none"', ">");
        if (firstLevel) obj += this.objToHtml(this.map[id]);
        return obj + "</ul><span class=\"".concat(c('close'), "\"></span></li>");
      }
      function wrapKey(key) {
        if (firstLevel) return '';
        if (isObj_default()(val) && val.jsonSplitArr) return '';
        var keyClass = c('key');
        if (keyType === 'unenumerable' || keyType === 'symbol') {
          keyClass = c('key-lighter');
        } else if (keyType === 'proto') {
          keyClass = c('key-special');
        }
        return "<span class=\"".concat(keyClass, "\">").concat(encode(key), "</span>: ");
      }
      if (isStr_default()(val) && val.length > 10000) {
        val = truncate_default()(val, 50, {
          separator: ' ',
          ellipsis: '…'
        });
      }
      return "<li>".concat(wrapKey(key), "<span class=\"").concat(c((0,esm_typeof/* default */.A)(val)), "\">\"").concat(encode(val), "\"</span></li>");
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.map[this.data.id];
      this.$container.html(this.objToHtml(data, true));
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.$container.on('click', 'li', this.onItemClick);
    }
  }]);
}(Component);

function createMap(map, data) {
  var id = data.id;
  if (!id && id !== 0) return;
  var isArr = data.type && startWith_default()(data.type, 'Array');
  if (isArr && data.enumerable) {
    var arr = objToArr(data, id, data.type);
    if (arr.length > 100) data = splitBigArr(arr);
  }
  map[id] = data;
  var values = [];
  each_default()(['enumerable', 'unenumerable', 'symbol'], function (type) {
    if (!data[type]) return;
    for (var key in data[type]) {
      values.push(data[type][key]);
    }
  });
  if (data.proto) {
    values.push(data.proto);
  }
  for (var i = 0, len = values.length; i < len; i++) {
    var val = values[i];
    if (isObj_default()(val)) createMap(map, val);
  }
}
function splitBigArr(data) {
  var idx = 0;
  var enumerable = {};
  each_default()(chunk_default()(data, 100), function (val) {
    var obj = {};
    var startIdx = idx;
    obj.type = '[' + startIdx;
    obj.enumerable = {};
    each_default()(val, function (val) {
      obj.enumerable[idx] = val;
      idx += 1;
    });
    var endIdx = idx - 1;
    obj.type += (endIdx - startIdx > 0 ? ' … ' + endIdx : '') + ']';
    obj.id = uniqId_default()('json');
    obj.jsonSplitArr = true;
    enumerable[idx] = obj;
  });
  var ret = {};
  ret.enumerable = enumerable;
  ret.id = data.id;
  ret.type = data.type;
  if (data.unenumerable) ret.unenumerable = data.unenumerable;
  if (data.symbol) ret.symbol = data.symbol;
  if (data.proto) ret.proto = data.proto;
  return ret;
}
function objToArr(data, id, type) {
  var ret = [];
  var enumerable = {};
  each_default()(data.enumerable, function (val, key) {
    var idx = toNum_default()(key);
    if (!isNaN_default()(idx)) {
      ret[idx] = val;
    } else {
      enumerable[key] = val;
    }
  });
  ret.enumerable = enumerable;
  ret.type = type;
  ret.id = id;
  if (data.unenumerable) ret.unenumerable = data.unenumerable;
  if (data.symbol) ret.symbol = data.symbol;
  if (data.proto) ret.proto = data.proto;
  return ret;
}
function getObjAbstract(data) {
  var type = data.type,
    value = data.value;
  if (!type) return;
  if (type === 'Function') {
    return getFnAbstract(value);
  }
  if (type === 'Array' && data.unenumerable) {
    return "Array(".concat(data.unenumerable.length, ")");
  }
  return data.type;
}
;// CONCATENATED MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/index.js
/* module decorator */ module = __webpack_require__.hmd(module);







function object_viewer_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, object_viewer_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function object_viewer_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (object_viewer_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



























var ObjectViewer = /*#__PURE__*/function (_Component) {
  function ObjectViewer(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, ObjectViewer);
    _this = object_viewer_callSuper(this, ObjectViewer, [container, {
      compName: 'object-viewer'
    }]);
    _this.onItemClick = function (e) {
      var _this2 = _this,
        map = _this2.map,
        c = _this2.c;
      var $this = $_default()(e.curTarget);
      var circularId = $this.data('object-id');
      var $firstSpan = $this.find('span').eq(0);
      if ($this.data('first-level')) return;
      if (circularId) {
        $this.find('ul').html(_this.objToHtml(map[circularId], false));
        $this.rmAttr('data-object-id');
      }
      e.stopImmediatePropagation();
      if (!$firstSpan.hasClass(c('expanded'))) return;
      var $ul = $this.find('ul').eq(0);
      if ($firstSpan.hasClass(c('collapsed'))) {
        $firstSpan.rmClass(c('collapsed'));
        $ul.show();
      } else {
        $firstSpan.addClass(c('collapsed'));
        $ul.hide();
      }
      _this.emit('change');
    };
    _this.initOptions(options, {
      prototype: true,
      unenumerable: false,
      accessGetter: false
    });
    _this.bindEvent();
    if (_this.options.object) {
      _this.set(_this.options.object);
    }
    return _this;
  }
  (0,inherits/* default */.A)(ObjectViewer, _Component);
  return (0,createClass/* default */.A)(ObjectViewer, [{
    key: "set",
    value: function set(data) {
      this.data = [data];
      this.visitor = new Visitor();
      this.map = {};
      this.render();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(ObjectViewer.prototype), "destroy", this).call(this);
      this.$container.off('click', 'li', this.onItemClick);
    }
  }, {
    key: "objToHtml",
    value: function objToHtml(data, firstLevel) {
      var _this3 = this;
      var visitor = this.visitor;
      var self = data;
      var isBigArr = false;
      var visitedObj = visitor.get(data);
      if (visitedObj && visitedObj.self) {
        self = visitedObj.self;
      }
      var ret = '';
      var types = ['enumerable'];
      var enumerableKeys = keys_default()(data);
      var unenumerableKeys = [];
      var symbolKeys = [];
      var virtualKeys = [];
      var virtualData = {};
      if (this.options.unenumerable && !firstLevel) {
        types.push('unenumerable');
        types.push('symbol');
        unenumerableKeys = difference_default()(allKeys_default()(data, {
          prototype: false,
          unenumerable: true
        }), enumerableKeys);
        symbolKeys = filter_default()(allKeys_default()(data, {
          prototype: false,
          symbol: true
        }), function (key) {
          return (0,esm_typeof/* default */.A)(key) === 'symbol';
        });
      }
      if (isArr_default()(data) && data.length > 100) {
        types.unshift('virtual');
        isBigArr = true;
        var idx = 0;
        var map = {};
        each_default()(chunk_default()(data, 100), function (val) {
          var obj = Object.create(null);
          var startIdx = idx;
          var key = '[' + startIdx;
          each_default()(val, function (val) {
            obj[idx] = val;
            map[idx] = true;
            idx++;
          });
          var endIdx = idx - 1;
          key += (endIdx - startIdx > 0 ? ' … ' + endIdx : '') + ']';
          virtualData[key] = obj;
        });
        virtualKeys = keys_default()(virtualData);
        enumerableKeys = filter_default()(enumerableKeys, function (val) {
          return !map[val];
        });
      }
      each_default()(types, function (type) {
        var typeKeys = [];
        if (type === 'symbol') {
          typeKeys = symbolKeys;
        } else if (type === 'unenumerable') {
          typeKeys = unenumerableKeys;
        } else if (type === 'virtual') {
          typeKeys = virtualKeys;
        } else {
          typeKeys = enumerableKeys;
        }
        if (!isBigArr) {
          naturalSort_default()(typeKeys);
        }
        for (var i = 0, len = typeKeys.length; i < len; i++) {
          var key = toStr_default()(typeKeys[i]);
          var val = '';
          var descriptor = Object.getOwnPropertyDescriptor(data, key);
          var hasGetter = descriptor && descriptor.get;
          var hasSetter = descriptor && descriptor.set;
          if (hasGetter && !_this3.options.accessGetter) {
            val = '(...)';
          } else {
            try {
              if (type === 'virtual') {
                val = virtualData[key];
              } else {
                val = self[key];
              }
              if (isPromise_default()(val)) {
                ;
                val.catch((noop_default()));
              }
            } catch (e) {
              if (e instanceof Error) {
                val = e.message;
              } else {
                val = toStr_default()(e);
              }
            }
          }
          ret += _this3.createEl(key, data, val, type, firstLevel);
          if (hasGetter) {
            ret += _this3.createEl("get ".concat(key), data, descriptor.get, type, firstLevel);
          }
          if (hasSetter) {
            ret += _this3.createEl("set ".concat(key), data, descriptor.set, type, firstLevel);
          }
        }
      });
      if (this.options.prototype) {
        var proto = getProto_default()(data);
        if (!firstLevel && proto) {
          if (ret === '') {
            var id = visitor.set(proto, {
              self: data
            });
            this.map[id] = proto;
            ret = this.objToHtml(proto);
          } else {
            ret += this.createEl('[[Prototype]]', self || data, proto, 'proto');
          }
        }
      }
      return ret;
    }
  }, {
    key: "createEl",
    value: function createEl(key, self, val, keyType) {
      var firstLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var visitor = this.visitor,
        c = this.c;
      var t = (0,esm_typeof/* default */.A)(val);
      var valType = type_default()(val, false);
      if (keyType === 'virtual') valType = key;
      if (val === null) {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('null'), "\">null</span></li>");
      } else if (isNum_default()(val) || isBool_default()(val)) {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c(t), "\">").concat(encode(val), "</span></li>");
      }
      if (valType === 'RegExp') t = 'regexp';
      if (valType === 'Number') t = 'number';
      if (valType === 'Undefined' || valType === 'Symbol') {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('special'), "\">").concat(lowerCase_default()(valType), "</span></li>");
      } else if (val === '(...)') {
        return "<li>".concat(wrapKey(key), "<span class=\"").concat(c('special'), "\">").concat(val, "</span></li>");
      } else if (isObj_default()(val)) {
        var visitedObj = visitor.get(val);
        var id;
        if (visitedObj) {
          id = visitedObj.id;
        } else {
          var extra = {};
          if (keyType === 'proto') {
            extra.self = self;
          }
          id = visitor.set(val, extra);
          this.map[id] = val;
        }
        var objAbstract = 'Object';
        if (t === 'regexp') {
          objAbstract = "<span class=\"".concat(c(t), "\">").concat(encode(val));
        } else {
          objAbstract = encode(object_viewer_getObjAbstract(val, valType) || upperFirst_default()(t));
        }
        var icon = firstLevel ? '' : "<span class=\"".concat(c('expanded collapsed'), "\"><span class=\"").concat(c('icon icon-caret-right'), "\"></span><span class=\"").concat(c('icon icon-caret-down'), "\"></span></span>");
        var obj = "<li ".concat(firstLevel ? 'data-first-level="true"' : '', " ").concat('data-object-id="' + id + '"', ">").concat(icon).concat(wrapKey(key), "<span class=\"").concat(c('open'), "\">").concat(firstLevel ? '' : objAbstract, "</span><ul class=\"").concat(c(t), "\" ").concat(firstLevel ? '' : 'style="display:none"', ">");
        if (firstLevel) obj += this.objToHtml(val);
        return obj + "</ul><span class=\"".concat(c('close'), "\"></span></li>");
      }
      function wrapKey(key) {
        if (firstLevel) return '';
        if (isObj_default()(val) && keyType === 'virtual') return '';
        var keyClass = c('key');
        if (keyType === 'unenumerable' || keyType === 'symbol') {
          keyClass = c('key-lighter');
        } else if (keyType === 'proto') {
          keyClass = c('key-special');
        }
        return "<span class=\"".concat(keyClass, "\">").concat(encode(key), "</span>: ");
      }
      if (isStr_default()(val) && val.length > 10000) {
        val = truncate_default()(val, 50, {
          separator: ' ',
          ellipsis: '…'
        });
      }
      return "<li>".concat(wrapKey(key), "<span class=\"").concat(c((0,esm_typeof/* default */.A)(val)), "\">\"").concat(encode(val), "\"</span></li>");
    }
  }, {
    key: "render",
    value: function render() {
      this.$container.html(this.objToHtml(this.data, true));
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this4 = this;
      this.$container.on('click', 'li', this.onItemClick);
      this.on('optionChange', function (name, val) {
        switch (name) {
          case 'object':
            _this4.set(val);
            break;
          case 'unenumerable':
          case 'prototype':
          case 'accessGetter':
            _this4.render();
            break;
        }
      });
    }
  }]);
}(Component);


function object_viewer_getObjAbstract(data, type) {
  if (!type) return;
  if (type === 'Function') {
    return getFnAbstract(toSrc_default()(data));
  }
  if (type === 'Array') {
    return "Array(".concat(data.length, ")");
  }
  return type;
}
if (true) {
  ;
  ObjectViewer.Static = JsonViewer;
  exportCjs(module, ObjectViewer);
}

/***/ }),

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: function() { return /* binding */ Setting; }
});

// UNUSED EXPORTS: LunaSettingButton, LunaSettingCheckbox, LunaSettingHtml, LunaSettingInput, LunaSettingItem, LunaSettingMarkdown, LunaSettingNumber, LunaSettingSelect, LunaSettingSeparator, LunaSettingTitle

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/uniqId.js
var uniqId = __webpack_require__(5630);
var uniqId_default = /*#__PURE__*/__webpack_require__.n(uniqId);
// EXTERNAL MODULE: ./node_modules/licia/isObj.js
var isObj = __webpack_require__(9760);
var isObj_default = /*#__PURE__*/__webpack_require__.n(isObj);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(licia_toNum);
// EXTERNAL MODULE: ./node_modules/licia/toStr.js
var toStr = __webpack_require__(2561);
var toStr_default = /*#__PURE__*/__webpack_require__.n(toStr);
// EXTERNAL MODULE: ./node_modules/licia/isFn.js
var isFn = __webpack_require__(3957);
var isFn_default = /*#__PURE__*/__webpack_require__.n(isFn);
// EXTERNAL MODULE: ./node_modules/licia/last.js
var last = __webpack_require__(3497);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/licia/isRegExp.js
var isRegExp = __webpack_require__(1976);
var isRegExp_default = /*#__PURE__*/__webpack_require__.n(isRegExp);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/lowerCase.js
var lowerCase = __webpack_require__(96);
var lowerCase_default = /*#__PURE__*/__webpack_require__.n(lowerCase);
// EXTERNAL MODULE: ./node_modules/licia/isNull.js
var isNull = __webpack_require__(4236);
var isNull_default = /*#__PURE__*/__webpack_require__.n(isNull);
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
;// CONCATENATED MODULE: ./src/lib/micromark.js
function micromark(str) {
  return str;
}
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-setting/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-setting/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

;// CONCATENATED MODULE: ./node_modules/luna-setting/esm/setting/util.js
var progress = function progress(val, min, max) {
  return ((val - min) / (max - min) * 100).toFixed(2);
};
;// CONCATENATED MODULE: ./node_modules/luna-setting/esm/setting/index.js
/* module decorator */ module = __webpack_require__.hmd(module);






function setting_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, setting_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function setting_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (setting_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






















var Setting = /*#__PURE__*/function (_Component) {
  function Setting(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, Setting);
    _this = setting_callSuper(this, Setting, [container, {
      compName: 'setting'
    }, options]);
    _this.items = [];
    _this.selectedItem = null;
    _this.initOptions(options, {
      separatorCollapse: true,
      filter: ''
    });
    _this.bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(Setting, _Component);
  return (0,createClass/* default */.A)(Setting, [{
    key: "appendTitle",
    value: function appendTitle(title) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var settingTitle = new LunaSettingTitle(this, title, level);
      this.append(settingTitle);
      return settingTitle;
    }
  }, {
    key: "appendSeparator",
    value: function appendSeparator() {
      var items = this.items;
      var separatorCollapse = this.options.separatorCollapse;
      var lastItem = last_default()(items);
      if (separatorCollapse && lastItem instanceof LunaSettingSeparator) {
        return lastItem;
      }
      var settingSeparator = new LunaSettingSeparator(this);
      this.append(settingSeparator);
      return settingSeparator;
    }
  }, {
    key: "appendNumber",
    value: function appendNumber(key, value, title, description, options) {
      if (isObj_default()(description)) {
        options = description;
        description = '';
      }
      var settingNumber = new LunaSettingNumber(this, key, value, title, description, options);
      this.append(settingNumber);
      return settingNumber;
    }
  }, {
    key: "appendButton",
    value: function appendButton(title, description, handler) {
      if (isFn_default()(description)) {
        handler = description;
        description = '';
      }
      var settingButton = new LunaSettingButton(this, title, description, handler);
      this.append(settingButton);
      return settingButton;
    }
  }, {
    key: "appendHtml",
    value: function appendHtml(html) {
      var settingHtml = new LunaSettingHtml(this, html);
      this.append(settingHtml);
      return settingHtml;
    }
  }, {
    key: "appendMarkdown",
    value: function appendMarkdown(markdown) {
      var settingMarkdown = new LunaSettingMarkdown(this, markdown);
      this.append(settingMarkdown);
      return settingMarkdown;
    }
  }, {
    key: "appendInput",
    value: function appendInput(key, value, title) {
      var description = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var settingInput = new LunaSettingInput(this, key, value, title, description);
      this.append(settingInput);
      return settingInput;
    }
  }, {
    key: "appendCheckbox",
    value: function appendCheckbox(key, value, title, description) {
      if (!description) {
        description = title;
        title = '';
      }
      var settingCheckbox = new LunaSettingCheckbox(this, key, value, title, description);
      this.append(settingCheckbox);
      return settingCheckbox;
    }
  }, {
    key: "appendSelect",
    value: function appendSelect(key, value, title, description, options) {
      if (isObj_default()(description)) {
        options = description;
        description = '';
      }
      var settingSelect = new LunaSettingSelect(this, key, value, title, description, options);
      this.append(settingSelect);
      return settingSelect;
    }
  }, {
    key: "remove",
    value: function remove(item) {
      var items = this.items;
      var pos = items.indexOf(item);
      if (pos > -1) {
        item.detach();
        items.splice(pos, 1);
        if (item === this.selectedItem) {
          this.selectItem(null);
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      each_default()(this.items, function (item) {
        return item.detach();
      });
      this.items = [];
      this.selectItem(null);
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      if (this.selectedItem) {
        this.selectedItem.deselect();
        this.selectedItem = null;
      }
      if (!isNull_default()(item)) {
        var _this$selectedItem;
        this.selectedItem = item;
        (_this$selectedItem = this.selectedItem) === null || _this$selectedItem === void 0 || _this$selectedItem.select();
      }
    }
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      var _this2 = this;
      var items = this.items;
      each_default()(items, function (item) {
        return item.detach();
      });
      each_default()(items, function (item) {
        if (_this2.filterItem(item)) {
          _this2.$container.append(item.container);
        }
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this3 = this;
      var c = this.c;
      this.on('optionChange', function (name) {
        switch (name) {
          case 'filter':
            _this3.renderSettings();
            break;
        }
      });
      var self = this;
      this.$container.on('click', c('.item'), function () {
        self.selectItem(this.settingItem);
      });
    }
  }, {
    key: "filterItem",
    value: function filterItem(item) {
      var filter = this.options.filter;
      if (filter) {
        if (isFn_default()(filter)) {
          return filter(item);
        } else if (isRegExp_default()(filter)) {
          return filter.test(item.text());
        } else if (isStr_default()(filter)) {
          filter = trim_default()(filter);
          if (filter) {
            return contain_default()(lowerCase_default()(item.text()), lowerCase_default()(filter));
          }
        }
      }
      return true;
    }
  }, {
    key: "append",
    value: function append(item) {
      this.items.push(item);
      if (this.filterItem(item)) {
        this.$container.append(item.container);
      }
    }
  }]);
}(Component);

var LunaSettingItem = /*#__PURE__*/function () {
  function LunaSettingItem(setting, key, value, type) {
    (0,classCallCheck/* default */.A)(this, LunaSettingItem);
    this.container = h_default()('div', {
      tabindex: '0'
    });
    this.setting = setting;
    this.container.settingItem = this;
    this.$container = $_default()(this.container);
    this.$container.addClass(setting.c('item')).addClass(setting.c("item-".concat(type)));
    this.key = key;
    this.value = value;
  }
  return (0,createClass/* default */.A)(LunaSettingItem, [{
    key: "select",
    value: function select() {
      this.$container.addClass(this.setting.c('selected'));
    }
  }, {
    key: "deselect",
    value: function deselect() {
      this.$container.rmClass(this.setting.c('selected'));
    }
  }, {
    key: "detach",
    value: function detach() {
      this.$container.remove();
    }
  }, {
    key: "disable",
    value: function disable() {
      this.$container.addClass(this.setting.c('disabled'));
    }
  }, {
    key: "enable",
    value: function enable() {
      this.$container.rmClass(this.setting.c('disabled'));
    }
  }, {
    key: "text",
    value: function text() {
      return this.$container.text();
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      if (this.value !== value) {
        this.setting.emit('change', this.key, value, this.value);
        this.value = value;
      }
    }
  }]);
}();
var LunaSettingTitle = /*#__PURE__*/function (_LunaSettingItem) {
  function LunaSettingTitle(setting, title, level) {
    var _this4;
    (0,classCallCheck/* default */.A)(this, LunaSettingTitle);
    _this4 = setting_callSuper(this, LunaSettingTitle, [setting, '', '', 'title']);
    _this4.$container.addClass(setting.c("level-".concat(level)));
    _this4.$container.text(title);
    return _this4;
  }
  (0,inherits/* default */.A)(LunaSettingTitle, _LunaSettingItem);
  return (0,createClass/* default */.A)(LunaSettingTitle);
}(LunaSettingItem);
var LunaSettingMarkdown = /*#__PURE__*/function (_LunaSettingItem2) {
  function LunaSettingMarkdown(setting, markdown) {
    var _this5;
    (0,classCallCheck/* default */.A)(this, LunaSettingMarkdown);
    _this5 = setting_callSuper(this, LunaSettingMarkdown, [setting, '', '', 'markdown']);
    _this5.$container.html(micromark(markdown));
    return _this5;
  }
  (0,inherits/* default */.A)(LunaSettingMarkdown, _LunaSettingItem2);
  return (0,createClass/* default */.A)(LunaSettingMarkdown);
}(LunaSettingItem);
var LunaSettingSeparator = /*#__PURE__*/function (_LunaSettingItem3) {
  function LunaSettingSeparator(setting) {
    (0,classCallCheck/* default */.A)(this, LunaSettingSeparator);
    return setting_callSuper(this, LunaSettingSeparator, [setting, '', '', 'separator']);
  }
  (0,inherits/* default */.A)(LunaSettingSeparator, _LunaSettingItem3);
  return (0,createClass/* default */.A)(LunaSettingSeparator);
}(LunaSettingItem);
var LunaSettingInput = /*#__PURE__*/function (_LunaSettingItem4) {
  function LunaSettingInput(setting, key, value, title, description) {
    var _this6;
    (0,classCallCheck/* default */.A)(this, LunaSettingInput);
    _this6 = setting_callSuper(this, LunaSettingInput, [setting, key, value, 'input']);
    var c = setting.c;
    _this6.$container.html("<div class=\"".concat(c('title'), "\">").concat(escape_default()(title), "</div>\n      <div class=\"").concat(c('description'), "\">").concat(micromark(description), "</div>\n      <div class=\"").concat(c('control'), "\">\n        <input type=\"text\"></input>\n      </div>"));
    var $input = _this6.$container.find('input');
    $input.val(value);
    $input.on('change', function () {
      return _this6.onChange($input.val());
    });
    _this6.$input = $input;
    return _this6;
  }
  (0,inherits/* default */.A)(LunaSettingInput, _LunaSettingItem4);
  return (0,createClass/* default */.A)(LunaSettingInput, [{
    key: "setValue",
    value: function setValue(value) {
      this.$input.val(value);
      this.value = value;
    }
  }, {
    key: "disable",
    value: function disable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingInput.prototype), "disable", this).call(this);
      this.$input.attr('disabled', '');
    }
  }, {
    key: "enable",
    value: function enable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingInput.prototype), "enable", this).call(this);
      this.$input.rmAttr('disabled');
    }
  }]);
}(LunaSettingItem);
var LunaSettingNumber = /*#__PURE__*/function (_LunaSettingItem5) {
  function LunaSettingNumber(setting, key, value, title, description) {
    var _this7;
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    (0,classCallCheck/* default */.A)(this, LunaSettingNumber);
    _this7 = setting_callSuper(this, LunaSettingNumber, [setting, key, value, 'number']);
    _this7.renderRange = function () {
      var value = toNum_default()(_this7.$input.val());
      var _this8 = _this7,
        options = _this8.options;
      _this7.$trackProgress.css('width', progress(value, options.min, options.max) + '%');
      _this7.$value.text(toStr_default()(value));
    };
    defaults_default()(options, {
      min: 0,
      max: 10,
      step: 1
    });
    _this7.options = options;
    var _this9 = _this7,
      $container = _this9.$container;
    var c = setting.c;
    var range = !!options.range;
    delete options.range;
    var min = options.min;
    var max = options.max;
    var input = "<input type=\"".concat(range ? 'range' : 'number', "\"").concat(map_default()(options, function (val, key) {
      return " ".concat(key, "=\"").concat(val, "\"");
    }), "></input>");
    if (range) {
      input = "".concat(min, "<div class=\"").concat(c('range-container'), "\">\n        <div class=\"").concat(c('range-track'), "\">\n          <div class=\"").concat(c('range-track-bar'), "\">\n            <div class=\"").concat(c('range-track-progress'), "\" style=\"width: ").concat(progress(value, min, max), "%;\"></div>\n          </div>\n        </div>\n        ").concat(input, "\n      </div><span class=\"").concat(c('value'), "\">").concat(value, "</span>/").concat(max);
    }
    $container.html("<div class=\"".concat(c('title'), "\">").concat(escape_default()(title), "</div>\n      <div class=\"").concat(c('description'), "\">").concat(micromark(description), "</div>\n      <div class=\"").concat(c('control'), "\">").concat(input, "</div>"));
    var $input = $container.find('input');
    _this7.$value = $container.find(c('.value'));
    _this7.$trackProgress = $container.find(c('.range-track-progress'));
    $input.val(toStr_default()(value));
    $input.on('change', function () {
      var val = toNum_default()($input.val());
      _this7.onChange(val);
    });
    $input.on('input', _this7.renderRange);
    _this7.$input = $input;
    return _this7;
  }
  (0,inherits/* default */.A)(LunaSettingNumber, _LunaSettingItem5);
  return (0,createClass/* default */.A)(LunaSettingNumber, [{
    key: "setValue",
    value: function setValue(value) {
      this.$input.val(toStr_default()(value));
      this.value = value;
      this.renderRange();
    }
  }, {
    key: "disable",
    value: function disable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingNumber.prototype), "disable", this).call(this);
      this.$input.attr('disabled', '');
    }
  }, {
    key: "enable",
    value: function enable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingNumber.prototype), "enable", this).call(this);
      this.$input.rmAttr('disabled');
    }
  }]);
}(LunaSettingItem);
var LunaSettingCheckbox = /*#__PURE__*/function (_LunaSettingItem6) {
  function LunaSettingCheckbox(setting, key, value, title, description) {
    var _this10;
    (0,classCallCheck/* default */.A)(this, LunaSettingCheckbox);
    _this10 = setting_callSuper(this, LunaSettingCheckbox, [setting, key, value, 'checkbox']);
    var c = setting.c;
    var id = uniqId_default()(setting.c('checkbox-'));
    _this10.$container.html("<div class=\"".concat(c('title'), "\">").concat(escape_default()(title), "</div>\n      <div class=\"").concat(c('control'), "\">\n        <input type=\"checkbox\" id=\"").concat(id, "\"></input>\n        <label for=\"").concat(id, "\">").concat(micromark(description), "</label>\n      </div>"));
    var $input = _this10.$container.find('input');
    var input = $input.get(0);
    input.checked = value;
    $input.on('change', function () {
      return _this10.onChange(input.checked);
    });
    _this10.$input = $input;
    _this10.input = input;
    return _this10;
  }
  (0,inherits/* default */.A)(LunaSettingCheckbox, _LunaSettingItem6);
  return (0,createClass/* default */.A)(LunaSettingCheckbox, [{
    key: "setValue",
    value: function setValue(value) {
      this.input.checked = value;
      this.value = value;
    }
  }, {
    key: "disable",
    value: function disable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingCheckbox.prototype), "disable", this).call(this);
      this.$input.attr('disabled', '');
    }
  }, {
    key: "enable",
    value: function enable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingCheckbox.prototype), "enable", this).call(this);
      this.$input.rmAttr('disabled');
    }
  }]);
}(LunaSettingItem);
var LunaSettingSelect = /*#__PURE__*/function (_LunaSettingItem7) {
  function LunaSettingSelect(setting, key, value, title, description, options) {
    var _this11;
    (0,classCallCheck/* default */.A)(this, LunaSettingSelect);
    _this11 = setting_callSuper(this, LunaSettingSelect, [setting, key, value, 'select']);
    var c = setting.c;
    _this11.$container.html("<div class=\"".concat(c('title'), "\">").concat(escape_default()(title), "</div>\n      <div class=\"").concat(c('description'), "\">").concat(micromark(description), "</div>\n      <div class=\"").concat(c('control'), "\">\n        <div class=\"").concat(c('select'), "\">\n          <select></select>\n        </div>\n      </div>"));
    var $select = _this11.$container.find('select');
    _this11.$select = $select;
    _this11.setOptions(options);
    $select.on('change', function () {
      return _this11.onChange($select.val());
    });
    return _this11;
  }
  (0,inherits/* default */.A)(LunaSettingSelect, _LunaSettingItem7);
  return (0,createClass/* default */.A)(LunaSettingSelect, [{
    key: "setValue",
    value: function setValue(value) {
      this.$select.val(value);
      this.value = value;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this12 = this;
      this.$select.html(map_default()(options, function (val, key) {
        return "<option value=\"".concat(escape_default()(val), "\"").concat(val === _this12.value ? ' selected' : '', ">").concat(escape_default()(key), "</option>");
      }).join(''));
    }
  }, {
    key: "disable",
    value: function disable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingSelect.prototype), "disable", this).call(this);
      this.$select.attr('disabled', '');
    }
  }, {
    key: "enable",
    value: function enable() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(LunaSettingSelect.prototype), "enable", this).call(this);
      this.$select.rmAttr('disabled');
    }
  }]);
}(LunaSettingItem);
var LunaSettingButton = /*#__PURE__*/function (_LunaSettingItem8) {
  function LunaSettingButton(setting, title, description, handler) {
    var _this13;
    (0,classCallCheck/* default */.A)(this, LunaSettingButton);
    _this13 = setting_callSuper(this, LunaSettingButton, [setting, '', '', 'button']);
    if (!description) {
      description = title;
      title = '';
    }
    _this13.$container.html(setting.c("<div class=\"title\">".concat(escape_default()(title), "</div>\n      <div class=\"control\">\n        <button>").concat(escape_default()(description), "</button>\n      </div>")));
    var $button = _this13.$container.find('button');
    $button.on('click', handler);
    return _this13;
  }
  (0,inherits/* default */.A)(LunaSettingButton, _LunaSettingItem8);
  return (0,createClass/* default */.A)(LunaSettingButton);
}(LunaSettingItem);
var LunaSettingHtml = /*#__PURE__*/function (_LunaSettingItem9) {
  function LunaSettingHtml(setting, html) {
    var _this14;
    (0,classCallCheck/* default */.A)(this, LunaSettingHtml);
    _this14 = setting_callSuper(this, LunaSettingHtml, [setting, '', '', 'html']);
    _this14.$container.append(html);
    return _this14;
  }
  (0,inherits/* default */.A)(LunaSettingHtml, _LunaSettingItem9);
  return (0,createClass/* default */.A)(LunaSettingHtml);
}(LunaSettingItem);
if (true) {
  exportCjs(module, Setting);
}

/***/ }),

/***/ 9068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Tab; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(7528);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var isNum = __webpack_require__(6097);
var isNum_default = /*#__PURE__*/__webpack_require__.n(isNum);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/loadImg.js
var licia_loadImg = __webpack_require__(9410);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-tab/esm/share/util.js










function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum_default()(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
function loadImage(url) {
  return new Promise(function (resolve, reject) {
    loadImg(url, function (err, img) {
      if (err) {
        return reject(err);
      }
      resolve(img);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
;// CONCATENATED MODULE: ./node_modules/luna-tab/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;
      this.destroySubComponents();
      var $container = this.$container;
      var classes = $container.attr('class');
      each_default()(classes.split(/\s+/), function (c) {
        if (startWith_default()(c, "luna-".concat(_this2.compName))) {
          $container.rmClass(c);
        }
      });
      $container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this3 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this3.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/stripIndent.js
var stripIndent = __webpack_require__(5773);
var stripIndent_default = /*#__PURE__*/__webpack_require__.n(stripIndent);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
;// CONCATENATED MODULE: ./node_modules/luna-tab/esm/tab/index.js
/* module decorator */ module = __webpack_require__.hmd(module);






var _templateObject;
function tab_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, tab_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function tab_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (tab_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var Tab = /*#__PURE__*/function (_Component) {
  function Tab(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, Tab);
    _this = tab_callSuper(this, Tab, [container, {
      compName: 'tab'
    }, options]);
    _this.initOptions(options, {
      height: 30
    });
    _this.initTpl();
    _this.$tabs = _this.find('.tabs');
    _this.tabs = _this.$tabs.get(0);
    _this.$slider = _this.find('.slider');
    _this.bindEvent();
    _this.updateHeight();
    return _this;
  }
  (0,inherits/* default */.A)(Tab, _Component);
  return (0,createClass/* default */.A)(Tab, [{
    key: "length",
    get: function get() {
      return this.$tabs.find(this.c('.item')).length;
    }
  }, {
    key: "insert",
    value: function insert(pos, tab) {
      var c = this.c,
        $tabs = this.$tabs;
      var itemHeight = this.options.height - 1;
      var $items = $tabs.find(c('.item'));
      var len = $items.length;
      var html = "<div class=\"".concat(this.c('item'), "\" data-id=\"").concat(escape_default()(tab.id), "\" style=\"height: ").concat(itemHeight, "px; line-height: ").concat(itemHeight, "px;\">").concat(escape_default()(tab.title), "</div>");
      if (pos > len - 1) {
        $tabs.append(html);
      } else {
        $items.eq(pos).before(html);
      }
      this.updateSlider();
    }
  }, {
    key: "append",
    value: function append(tab) {
      this.insert(this.length, tab);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var c = this.c;
      var self = this;
      this.$tabs.find(c('.item')).each(function () {
        var $this = $_default()(this);
        if ($this.data('id') === id) {
          if ($this.hasClass(c('selected'))) {
            if (self.length > 0) {
              var _id = self.$tabs.find(c('.item')).eq(0).data('id');
              self.select(_id);
            } else {
              self.emit('deselect');
            }
          }
          $this.remove();
        }
      });
      this.updateSlider();
    }
  }, {
    key: "select",
    value: function select(id) {
      var c = this.c;
      var self = this;
      this.$tabs.find(c('.item')).each(function () {
        var $this = $_default()(this);
        if ($this.data('id') === id) {
          $this.addClass(c('selected'));
          self.updateSlider();
          self.scrollToSelected();
          self.emit('select', id);
        } else {
          $this.rmClass(c('selected'));
        }
      });
    }
  }, {
    key: "deselect",
    value: function deselect() {
      var c = this.c;
      this.$tabs.find(c('.item')).each(function () {
        $_default()(this).rmClass(c('selected'));
      });
      this.emit('deselect');
      this.updateSlider();
    }
  }, {
    key: "scrollToSelected",
    value: function scrollToSelected() {
      var $tabs = this.$tabs,
        tabs = this.tabs,
        c = this.c;
      var item = $tabs.find(c('.selected')).get(0);
      var itemLeft = item.offsetLeft;
      var itemWidth = item.offsetWidth;
      var containerWidth = tabs.offsetWidth;
      var scrollLeft = tabs.scrollLeft;
      var targetScrollLeft;
      if (itemLeft < scrollLeft) {
        targetScrollLeft = itemLeft;
      } else if (itemLeft + itemWidth > containerWidth + scrollLeft) {
        targetScrollLeft = itemLeft + itemWidth - containerWidth;
      }
      if (!isNum_default()(targetScrollLeft)) {
        return;
      }
      tabs.scrollLeft = targetScrollLeft;
    }
  }, {
    key: "hideScrollbar",
    value: function hideScrollbar() {
      var $tabs = this.$tabs;
      if (getComputedStyle(this.tabs, '::-webkit-scrollbar').display === 'none') {
        return;
      }
      var scrollbarHeight = measuredScrollbarWidth();
      $tabs.css('height', this.options.height - 1 + scrollbarHeight + 'px');
    }
  }, {
    key: "updateSlider",
    value: function updateSlider() {
      var $slider = this.$slider,
        $tabs = this.$tabs,
        c = this.c;
      var selected = $tabs.find(c('.selected')).get(0);
      if (!selected) {
        $slider.css({
          width: 0
        });
        return;
      }
      $slider.css({
        width: selected.offsetWidth,
        left: selected.offsetLeft - $tabs.get(0).scrollLeft
      });
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var height = this.options.height;
      var itemHeight = height - 1;
      this.find('.tabs-container').css('height', height + 'px');
      this.find('.item').css({
        height: itemHeight,
        lineHeight: itemHeight
      });
      this.hideScrollbar();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;
      var tabs = this.tabs,
        c = this.c;
      this.on('optionChange', function (name) {
        switch (name) {
          case 'height':
            _this2.updateHeight();
            break;
        }
      });
      var self = this;
      this.$tabs.on('wheel', function (e) {
        e.preventDefault();
        tabs.scrollLeft += e.origEvent.deltaY;
      }).on('click', c('.item'), function () {
        var $item = $_default()(this);
        self.select($item.data('id'));
      }).on('scroll', function () {
        _this2.updateSlider();
      });
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      this.$container.html(this.c(stripIndent_default()(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n        <div class=\"tabs-container\">\n          <div class=\"tabs\"></div>\n        </div>\n        <div class=\"slider\"></div>\n      "])))));
    }
  }]);
}(Component);

if (true) {
  exportCjs(module, Tab);
}

/***/ }),

/***/ 2900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ TextViewer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var licia_isNum = __webpack_require__(6097);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var licia_toNum = __webpack_require__(6030);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var licia_isHidden = __webpack_require__(8609);
;// CONCATENATED MODULE: ./node_modules/luna-text-viewer/esm/share/util.js









function exportCjs(module, clazz) {
  try {
    module.exports = clazz;
    module.exports.default = clazz;
  } catch (e) {}
}
function classPrefix(name) {
  var prefix = "luna-".concat(name, "-");
  function processClass(str) {
    return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
      if (contain_default()(singleClass, prefix)) {
        return singleClass;
      }
      return singleClass.replace(/[\w-]+/, function (match) {
        return "".concat(prefix).concat(match);
      });
    }).join(' ');
  }
  return function (str) {
    if (/<[^>]*>/g.test(str)) {
      try {
        var tree = html_default().parse(str);
        traverseTree(tree, function (node) {
          if (node.attrs && node.attrs.class) {
            node.attrs.class = processClass(node.attrs.class);
          }
        });
        return html_default().stringify(tree);
      } catch (e) {
        return processClass(str);
      }
    }
    return processClass(str);
  };
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
var hasTouchSupport = "ontouchstart" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
function drag(name) {
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
var scrollbarWidth;
function measuredScrollbarWidth() {
  if (isNum(scrollbarWidth)) {
    return scrollbarWidth;
  }
  if (!document) {
    return 16;
  }
  var scrollDiv = document.createElement('div');
  var innerDiv = document.createElement('div');
  scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
  innerDiv.setAttribute('style', 'height: 200px');
  scrollDiv.appendChild(innerDiv);
  var container = document.body || document.documentElement;
  container.appendChild(scrollDiv);
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  container.removeChild(scrollDiv);
  return scrollbarWidth;
}
function hasVerticalScrollbar(el) {
  return el.scrollHeight > el.offsetHeight;
}
function executeAfterTransition(el, callback) {
  if (isHidden(el)) {
    return callback();
  }
  var handler = function handler(e) {
    var target = e.target;
    if (target !== el) {
      return;
    }
    el.removeEventListener('transitionend', handler);
    callback();
  };
  el.addEventListener('transitionend', handler);
}
function pxToNum(str) {
  return toNum(str.replace('px', ''));
}
function getPlatform() {
  var os = detectOs_default()();
  if (os === 'os x') {
    return 'mac';
  }
  return os;
}
function resetCanvasSize(canvas) {
  canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
  canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
;// CONCATENATED MODULE: ./node_modules/luna-text-viewer/esm/share/Component.js





function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var Component = /*#__PURE__*/function (_Emitter) {
  function Component(container, _ref) {
    var _this;
    var compName = _ref.compName;
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme;
    (0,classCallCheck/* default */.A)(this, Component);
    _this = _callSuper(this, Component);
    _this.subComponents = [];
    _this.compName = compName;
    _this.c = classPrefix(compName);
    _this.options = {};
    _this.container = container;
    _this.$container = $_default()(container);
    _this.$container.addClass(["luna-".concat(compName), _this.c("platform-".concat(getPlatform()))]);
    _this.on('optionChange', function (name, val, oldVal) {
      var c = _this.c;
      if (name === 'theme') {
        _this.$container.rmClass(c("theme-".concat(oldVal))).addClass(c("theme-".concat(val)));
        each_default()(_this.subComponents, function (component) {
          return component.setOption('theme', val);
        });
      }
    });
    _this.setOption('theme', theme);
    return _this;
  }
  (0,inherits/* default */.A)(Component, _Emitter);
  return (0,createClass/* default */.A)(Component, [{
    key: "destroy",
    value: function destroy() {
      this.destroySubComponents();
      var c = this.c;
      this.$container.rmClass("luna-".concat(this.compName)).rmClass(c("platform-".concat(getPlatform()))).rmClass(c("theme-".concat(this.options.theme)));
      this.$container.html('');
      this.emit('destroy');
      this.removeAllListeners();
    }
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      var _this2 = this;
      var options = this.options;
      var newOptions = {};
      if (typeof name === 'string') {
        newOptions[name] = val;
      } else {
        newOptions = name;
      }
      each_default()(newOptions, function (val, name) {
        var oldVal = options[name];
        options[name] = val;
        _this2.emit('optionChange', name, val, oldVal);
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options[name];
    }
  }, {
    key: "addSubComponent",
    value: function addSubComponent(component) {
      component.setOption('theme', this.options.theme);
      this.subComponents.push(component);
    }
  }, {
    key: "removeSubComponent",
    value: function removeSubComponent(component) {
      remove_default()(this.subComponents, function (com) {
        return com === component;
      });
    }
  }, {
    key: "destroySubComponents",
    value: function destroySubComponents() {
      each_default()(this.subComponents, function (component) {
        return component.destroy();
      });
      this.subComponents = [];
    }
  }, {
    key: "initOptions",
    value: function initOptions(options) {
      var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      defaults_default()(options, defs);
      extend_default()(this.options, options);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.$container.find(this.c(selector));
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/last.js
var last = __webpack_require__(3497);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/licia/isEmpty.js
var isEmpty = __webpack_require__(9464);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/licia/throttle.js
var throttle = __webpack_require__(5865);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/licia/debounce.js
var debounce = __webpack_require__(4534);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/licia/copy.js
var copy = __webpack_require__(4844);
var copy_default = /*#__PURE__*/__webpack_require__.n(copy);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/unescape.js
var licia_unescape = __webpack_require__(9389);
var unescape_default = /*#__PURE__*/__webpack_require__.n(licia_unescape);
// EXTERNAL MODULE: ./node_modules/licia/stripHtmlTag.js
var stripHtmlTag = __webpack_require__(6948);
var stripHtmlTag_default = /*#__PURE__*/__webpack_require__.n(stripHtmlTag);
;// CONCATENATED MODULE: ./node_modules/luna-text-viewer/esm/text-viewer/index.js
/* module decorator */ module = __webpack_require__.hmd(module);






function text_viewer_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, text_viewer_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function text_viewer_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (text_viewer_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }












var TextViewer = /*#__PURE__*/function (_Component) {
  function TextViewer(container) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0,classCallCheck/* default */.A)(this, TextViewer);
    _this = text_viewer_callSuper(this, TextViewer, [container, {
      compName: 'text-viewer'
    }, options]);
    _this.lineNum = 0;
    _this.copy = function () {
      var _this2 = _this,
        c = _this2.c;
      var _this$options = _this.options,
        text = _this$options.text,
        escape = _this$options.escape;
      copy_default()(escape ? text : unescape_default()(stripHtmlTag_default()(text)));
      var $icon = _this.$copy.find(c('.icon'));
      $icon.addClass(c('icon-check')).rmClass(c('icon-copy'));
      setTimeout(function () {
        $icon.rmClass(c('icon-check')).addClass(c('icon-copy'));
      }, 1000);
    };
    _this._updateCopyPos = function () {
      var _this3 = _this,
        container = _this3.container;
      _this.$copy.css({
        top: container.scrollTop + 5,
        right: -container.scrollLeft + 5
      });
    };
    _this.initOptions(options, {
      text: '',
      escape: true,
      showLineNumbers: true,
      wrapLongLines: true,
      maxHeight: Infinity
    });
    _this.render = throttle_default()(function () {
      return _this._render();
    }, 16);
    _this.updateCopyPos = debounce_default()(function () {
      return _this._updateCopyPos();
    }, 300);
    _this.initTpl();
    _this.$text = _this.find('.text');
    _this.$copy = _this.find('.copy');
    if (hasTouchSupport) {
      _this.$copy.css('opacity', '1');
    }
    if (_this.options.text) {
      _this.render();
    }
    _this.bindEvent();
    _this.updateHeight();
    return _this;
  }
  (0,inherits/* default */.A)(TextViewer, _Component);
  return (0,createClass/* default */.A)(TextViewer, [{
    key: "append",
    value: function append(text) {
      var _this4 = this;
      var options = this.options,
        $copy = this.$copy,
        c = this.c,
        $text = this.$text;
      var showLineNumbers = options.showLineNumbers;
      this.options.text += text;
      if (!showLineNumbers) {
        return this.$text.append(options.escape ? escape_default()(text) : text);
      }
      var lines = getLines(text);
      if (isEmpty_default()(lines)) {
        lines = ['&nbsp;'];
      }
      if (!trim_default()(last_default()(lines))) {
        lines.pop();
      }
      var body = '';
      each_default()(lines, function (line, idx) {
        _this4.lineNum += 1;
        body += "<div class=\"".concat(c('table-row'), "\"><div class=\"").concat(c('line-number'), "\">").concat(_this4.lineNum, "</div><div class=\"").concat(c('line-text'), "\">").concat(options.escape ? escape_default()(line) : line || ' ', "</div></div>");
      });
      $text.find(c('.table')).append(body);
      $copy.hide();
      if ($text.offset().height > 40) {
        $copy.show();
      }
      this.updateCopyPos();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$container.off('scroll', this.updateCopyPos);
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(TextViewer.prototype), "destroy", this).call(this);
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var maxHeight = this.options.maxHeight;
      if (maxHeight > 0 && maxHeight !== Infinity) {
        this.$text.css('max-height', maxHeight);
      } else {
        this.$text.css('max-height', 'none');
      }
    }
  }, {
    key: "initTpl",
    value: function initTpl() {
      this.$container.html(this.c("<div class=\"text\"></div><div class=\"copy\"><span class=\"icon icon-copy\"></span></div>"));
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this5 = this;
      this.on('optionChange', function (name) {
        switch (name) {
          case 'maxHeight':
            _this5.updateHeight();
            break;
          default:
            _this5.render();
            break;
        }
      });
      this.$container.on('scroll', this.updateCopyPos);
      this.$copy.on('click', this.copy);
    }
  }, {
    key: "_render",
    value: function _render() {
      var c = this.c,
        $text = this.$text,
        options = this.options;
      var text = options.text,
        wrapLongLines = options.wrapLongLines,
        showLineNumbers = options.showLineNumbers;
      if (wrapLongLines) {
        $text.addClass(c('wrap-long-lines'));
      } else {
        $text.rmClass(c('wrap-long-lines'));
      }
      if (!showLineNumbers) {
        $text.rmClass(c('line-numbers'));
      } else {
        $text.addClass(c('line-numbers'));
      }
      $text.html("<div class=\"".concat(c('table'), "\"></div>"));
      this.lineNum = 0;
      this.options.text = '';
      this.append(text);
    }
  }]);
}(Component);

var regBreakLine = /\r\n|\r|\n/g;
function getLines(text) {
  if (text.length === 0) {
    return [];
  }
  return text.split(regBreakLine);
}
if (true) {
  exportCjs(module, TextViewer);
}

/***/ }),

/***/ 29:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ eruda; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/licia/Emitter.js
var Emitter = __webpack_require__(2263);
var Emitter_default = /*#__PURE__*/__webpack_require__.n(Emitter);
;// CONCATENATED MODULE: ./src/lib/emitter.js

var emitter = new (Emitter_default())();
emitter.ADD = 'ADD';
emitter.SHOW = 'SHOW';
emitter.SCALE = 'SCALE';
/* harmony default export */ var lib_emitter = (emitter);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/licia/Class.js
var Class = __webpack_require__(2717);
var Class_default = /*#__PURE__*/__webpack_require__.n(Class);
;// CONCATENATED MODULE: ./src/DevTools/Tool.js

/* harmony default export */ var Tool = (Class_default()({
  init: function init($el) {
    this._$el = $el;
  },
  show: function show() {
    this._$el.show();
    return this;
  },
  hide: function hide() {
    this._$el.hide();
    return this;
  },
  destroy: function destroy() {
    this._$el.remove();
  }
}));
// EXTERNAL MODULE: ./node_modules/licia/$.js
var $ = __webpack_require__(3693);
var $_default = /*#__PURE__*/__webpack_require__.n($);
// EXTERNAL MODULE: ./node_modules/licia/LocalStore.js
var LocalStore = __webpack_require__(5021);
var LocalStore_default = /*#__PURE__*/__webpack_require__.n(LocalStore);
// EXTERNAL MODULE: ./node_modules/licia/uniqId.js
var uniqId = __webpack_require__(5630);
var uniqId_default = /*#__PURE__*/__webpack_require__.n(uniqId);
// EXTERNAL MODULE: ./node_modules/licia/each.js
var each = __webpack_require__(9100);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/licia/filter.js
var filter = __webpack_require__(2571);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./node_modules/licia/isStr.js
var isStr = __webpack_require__(1738);
var isStr_default = /*#__PURE__*/__webpack_require__.n(isStr);
// EXTERNAL MODULE: ./node_modules/licia/contain.js
var contain = __webpack_require__(3249);
var contain_default = /*#__PURE__*/__webpack_require__.n(contain);
// EXTERNAL MODULE: ./node_modules/licia/clone.js
var clone = __webpack_require__(8420);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ./node_modules/licia/toStr.js
var toStr = __webpack_require__(2561);
var toStr_default = /*#__PURE__*/__webpack_require__.n(toStr);
// EXTERNAL MODULE: ./node_modules/licia/keys.js
var keys = __webpack_require__(3145);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
// EXTERNAL MODULE: ./node_modules/licia/kebabCase.js
var kebabCase = __webpack_require__(7604);
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);
// EXTERNAL MODULE: ./node_modules/licia/defaults.js
var defaults = __webpack_require__(5651);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/licia/extend.js
var extend = __webpack_require__(8105);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
// EXTERNAL MODULE: ./node_modules/licia/isArr.js
var isArr = __webpack_require__(6214);
var isArr_default = /*#__PURE__*/__webpack_require__.n(isArr);
;// CONCATENATED MODULE: ./src/lib/themes.js



var keyMap = ['background', 'foreground', 'selectForeground', 'accent', 'highlight', 'border', 'primary', 'contrast', 'varColor', 'stringColor', 'keywordColor', 'numberColor', 'operatorColor', 'linkColor', 'textColor', 'tagNameColor', 'functionColor', 'attributeNameColor', 'commentColor'];
var keyMapLen = keyMap.length;
function arrToMap(arr) {
  var ret = {};
  for (var i = 0; i < keyMapLen; i++) {
    ret[keyMap[i]] = arr[i];
  }
  return ret;
}
function createDarkTheme(theme) {
  if (isArr_default()(theme)) theme = arrToMap(theme);
  if (!theme.darkerBackground) theme.darkerBackground = theme.contrast;
  return extend_default()({
    consoleWarnBackground: '#332a00',
    consoleWarnForeground: '#ffcb6b',
    consoleWarnBorder: '#650',
    consoleErrorBackground: '#290000',
    consoleErrorForeground: '#ff8080',
    consoleErrorBorder: '#5c0000',
    light: '#ccc',
    dark: '#aaa'
  }, theme);
}
function createLightTheme(theme) {
  if (isArr_default()(theme)) theme = arrToMap(theme);
  if (!theme.darkerBackground) theme.darkerBackground = theme.contrast;
  return extend_default()({
    consoleWarnBackground: '#fffbe5',
    consoleWarnForeground: '#5c5c00',
    consoleWarnBorder: '#fff5c2',
    consoleErrorBackground: '#fff0f0',
    consoleErrorForeground: '#f00',
    consoleErrorBorder: '#ffd6d6',
    light: '#fff',
    dark: '#eee'
  }, theme);
}
var darkThemes = ['Dark', 'Material Oceanic', 'Material Darker', 'Material Palenight', 'Material Deep Ocean', 'Monokai Pro', 'Dracula', 'Arc Dark', 'Atom One Dark', 'Solarized Dark', 'Night Owl', 'AMOLED'];
function themes_isDarkTheme(theme) {
  return contain_default()(darkThemes, theme);
}

// prettier-ignore
/* harmony default export */ var themes = ({
  Light: createLightTheme({
    darkerBackground: '#f3f3f3',
    background: '#fff',
    foreground: '#333',
    selectForeground: '#333',
    accent: '#1a73e8',
    highlight: '#eaeaea',
    border: '#ccc',
    primary: '#333',
    contrast: '#f2f7fd',
    varColor: '#c80000',
    stringColor: '#1a1aa6',
    keywordColor: '#881280',
    numberColor: '#1c00cf',
    operatorColor: '#808080',
    linkColor: '#1155cc',
    textColor: '#8097bd',
    tagNameColor: '#881280',
    functionColor: '#222',
    attributeNameColor: '#994500',
    commentColor: '#236e25',
    cssProperty: '#c80000'
  }),
  Dark: createDarkTheme({
    darkerBackground: '#333',
    background: '#242424',
    foreground: '#a5a5a5',
    selectForeground: '#eaeaea',
    accent: '#7cacf8',
    highlight: '#000',
    border: '#3d3d3d',
    primary: '#ccc',
    contrast: '#0b2544',
    varColor: '#e36eec',
    stringColor: '#f29766',
    keywordColor: '#9980ff',
    numberColor: '#9980ff',
    operatorColor: '#7f7f7f',
    linkColor: '#ababab',
    textColor: '#42597f',
    tagNameColor: '#5db0d7',
    functionColor: '#d5d5d5',
    attributeNameColor: '#9bbbdc',
    commentColor: '#747474'
  }),
  'Material Oceanic': createDarkTheme(['#263238', '#B0BEC5', '#FFFFFF', '#009688', '#425B67', '#2A373E', '#607D8B', '#1E272C', '#eeffff', '#c3e88d', '#c792ea', '#f78c6c', '#89ddff', '#80cbc4', '#B0BEC5', '#f07178', '#82aaff', '#ffcb6b', '#546e7a']),
  'Material Darker': createDarkTheme(['#212121', '#B0BEC5', '#FFFFFF', '#FF9800', '#3F3F3F', '#292929', '#727272', '#1A1A1A', '#eeffff', '#c3e88d', '#c792ea', '#f78c6c', '#89ddff', '#80cbc4', '#B0BEC5', '#f07178', '#82aaff', '#ffcb6b', '#616161']),
  'Material Lighter': createLightTheme(['#FAFAFA', '#546E7A', '#546e7a', '#00BCD4', '#E7E7E8', '#d3e1e8', '#94A7B0', '#F4F4F4', '#272727', '#91B859', '#7C4DFF', '#F76D47', '#39ADB5', '#39ADB5', '#546E7A', '#E53935', '#6182B8', '#F6A434', '#AABFC9']),
  'Material Palenight': createDarkTheme(['#292D3E', '#A6ACCD', '#FFFFFF', '#ab47bc', '#444267', '#2b2a3e', '#676E95', '#202331', '#eeffff', '#c3e88d', '#c792ea', '#f78c6c', '#89ddff', '#80cbc4', '#A6ACCD', '#f07178', '#82aaff', '#ffcb6b', '#676E95']),
  'Material Deep Ocean': createDarkTheme(['#0F111A', '#8F93A2', '#FFFFFF', '#84ffff', '#1F2233', '#41465b', '#4B526D', '#090B10', '#eeffff', '#c3e88d', '#c792ea', '#f78c6c', '#89ddff', '#80cbc4', '#8F93A2', '#f07178', '#82aaff', '#ffcb6b', '#717CB4']),
  'Monokai Pro': createDarkTheme(['#2D2A2E', '#fcfcfa', '#FFFFFF', '#ffd866', '#5b595c', '#423f43', '#939293', '#221F22', '#FCFCFA', '#FFD866', '#FF6188', '#AB9DF2', '#FF6188', '#78DCE8', '#fcfcfa', '#FF6188', '#A9DC76', '#78DCE8', '#727072']),
  Dracula: createDarkTheme(['#282A36', '#F8F8F2', '#8BE9FD', '#FF79C5', '#6272A4', '#21222C', '#6272A4', '#191A21', '#F8F8F2', '#F1FA8C', '#FF79C6', '#BD93F9', '#FF79C6', '#F1FA8C', '#F8F8F2', '#FF79C6', '#50FA78', '#50FA7B', '#6272A4']),
  'Arc Dark': createDarkTheme(['#2f343f', '#D3DAE3', '#FFFFFF', '#42A5F5', '#3F3F46', '#404552', '#8b9eb5', '#262b33', '#CF6A4C', '#8F9D6A', '#9B859D', '#CDA869', '#A7A7A7', '#7587A6', '#D3DAE3', '#CF6A4C', '#7587A6', '#F9EE98', '#747C84']),
  'Atom One Dark': createDarkTheme(['#282C34', '#979FAD', '#FFFFFF', '#2979ff', '#383D48', '#2e3239', '#979FAD', '#21252B', '#D19A66', '#98C379', '#C679DD', '#D19A66', '#61AFEF', '#56B6C2', '#979FAD', '#F07178', '#61AEEF', '#E5C17C', '#59626F']),
  'Atom One Light': createLightTheme(['#FAFAFA', '#232324', '#232324', '#2979ff', '#EAEAEB', '#DBDBDC', '#9D9D9F', '#FFFFFF', '#986801', '#50A14E', '#A626A4', '#986801', '#4078F2', '#0184BC', '#232324', '#E4564A', '#4078F2', '#C18401', '#A0A1A7']),
  'Solarized Dark': createDarkTheme(['#002B36', '#839496', '#FFFFFF', '#d33682', '#11353F', '#0D3640', '#586e75', '#00252E', '#268BD2', '#2AA198', '#859900', '#D33682', '#93A1A1', '#268BD2', '#839496', '#268BD2', '#B58900', '#B58900', '#657B83']),
  'Solarized Light': createLightTheme(['#fdf6e3', '#586e75', '#002b36', '#d33682', '#F6F0DE', '#f7f2e2', '#93a1a1', '#eee8d5', '#268BD2', '#2AA198', '#859900', '#D33682', '#657B83', '#268BD2', '#586e75', '#268BD2', '#B58900', '#657B83', '#93A1A1']),
  Github: createLightTheme(['#F7F8FA', '#5B6168', '#FFFFFF', '#79CB60', '#CCE5FF', '#DFE1E4', '#292D31', '#FFFFFF', '#24292E', '#032F62', '#D73A49', '#005CC5', '#D73A49', '#005CC5', '#5B6168', '#22863A', '#6F42C1', '#6F42C1', '#6A737D']),
  'Night Owl': createDarkTheme(['#011627', '#b0bec5', '#ffffff', '#7e57c2', '#152C3B', '#2a373e', '#607d8b', '#001424', '#addb67', '#ecc48d', '#c792ea', '#f78c6c', '#c792ea', '#80CBC4', '#b0bec5', '#7fdbca', '#82AAFF', '#FAD430', '#637777']),
  'Light Owl': createLightTheme(['#FAFAFA', '#546e7a', '#403f53', '#269386', '#E0E7EA', '#efefef', '#403F53', '#FAFAFA', '#0C969B', '#c96765', '#994cc3', '#aa0982', '#7d818b', '#994cc3', '#546e7a', '#994cc3', '#4876d6', '#4876d6', '#637777']),
  AMOLED: createDarkTheme(['#000000', '#8F93A2', '#FFFFFF', '#68FFAE', '#000000', '#41465b', '#4B526D', '#000000', '#DEFDF7', '#38ff9f', '#ab2eff', '#A76DF7', '#38ff9f', '#86F3C7', '#8F93A2', '#ab2eff', '#8293FF', '#38ff9f', '#6575c7'])
});
;// CONCATENATED MODULE: ./src/lib/evalCss.js








var styleList = [];
var scale = 1;
var curTheme = themes.Light;
var evalCss_exports = function exports(css, container) {
  css = toStr_default()(css);
  for (var i = 0, len = styleList.length; i < len; i++) {
    if (styleList[i].css === css) return;
  }
  container = container || exports.container || document.head;
  var el = document.createElement('style');
  el.type = 'text/css';
  container.appendChild(el);
  var style = {
    css: css,
    el: el,
    container: container
  };
  resetStyle(style);
  styleList.push(style);
  return style;
};
evalCss_exports.setScale = function (s) {
  scale = s;
  resetStyles();
};
evalCss_exports.setTheme = function (theme) {
  if (isStr_default()(theme)) {
    curTheme = themes[theme] || themes.Light;
  } else {
    curTheme = defaults_default()(theme, themes.Light);
  }
  resetStyles();
};
evalCss_exports.getCurTheme = function () {
  return curTheme;
};
evalCss_exports.getThemes = function () {
  return themes;
};
evalCss_exports.clear = function () {
  each_default()(styleList, function (_ref) {
    var container = _ref.container,
      el = _ref.el;
    return container.removeChild(el);
  });
  styleList = [];
};
evalCss_exports.remove = function (style) {
  styleList = filter_default()(styleList, function (s) {
    return s !== style;
  });
  style.container.removeChild(style.el);
};
function resetStyles() {
  each_default()(styleList, function (style) {
    return resetStyle(style);
  });
}
function resetStyle(_ref2) {
  var css = _ref2.css,
    el = _ref2.el;
  css = css.replace(/(\d+)px/g, function ($0, $1) {
    return +$1 * scale + 'px';
  });
  css = css.replace(/_/g, 'eruda-');
  var _keys = keys_default()(themes.Light);
  each_default()(_keys, function (key) {
    css = css.replace(new RegExp("var\\(--".concat(kebabCase_default()(key), "\\)"), 'g'), curTheme[key]);
  });
  el.innerText = css;
}
/* harmony default export */ var evalCss = (evalCss_exports);
// EXTERNAL MODULE: ./node_modules/luna-setting/esm/setting/index.js + 4 modules
var setting = __webpack_require__(1328);
;// CONCATENATED MODULE: ./src/Settings/Settings.js






function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }











var Settings = /*#__PURE__*/function (_Tool) {
  function Settings() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Settings);
    _this = _callSuper(this, Settings);
    _this._style = evalCss(__webpack_require__(4923));
    _this.name = 'settings';
    _this._settings = [];
    return _this;
  }
  (0,inherits/* default */.A)(Settings, _Tool);
  return (0,createClass/* default */.A)(Settings, [{
    key: "init",
    value: function init($el) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Settings.prototype), "init", this).call(this, $el);
      this._setting = new setting/* default */.Ay($el.get(0));
      this._bindEvent();
    }
  }, {
    key: "remove",
    value: function remove(config, key) {
      var _this2 = this;
      if (isStr_default()(config)) {
        var self = this;
        this._$el.find('.luna-setting-item-title').each(function () {
          var $this = $_default()(this);
          if ($this.text() === config) {
            self._setting.remove(this.settingItem);
          }
        });
      } else {
        this._settings = filter_default()(this._settings, function (setting) {
          if (setting.config === config && setting.key === key) {
            _this2._setting.remove(setting.item);
            return false;
          }
          return true;
        });
      }
      this._cleanSeparator();
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._setting.destroy();
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Settings.prototype), "destroy", this).call(this);
      evalCss.remove(this._style);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._settings = [];
      this._setting.clear();
    }
  }, {
    key: "switch",
    value: function _switch(config, key, desc) {
      var id = this._genId();
      var item = this._setting.appendCheckbox(id, !!config.get(key), desc);
      this._settings.push({
        config: config,
        key: key,
        id: id,
        item: item
      });
      return this;
    }
  }, {
    key: "select",
    value: function select(config, key, desc, selections) {
      var id = this._genId();
      var selectOptions = {};
      each_default()(selections, function (selection) {
        return selectOptions[selection] = selection;
      });
      var item = this._setting.appendSelect(id, config.get(key), '', desc, selectOptions);
      this._settings.push({
        config: config,
        key: key,
        id: id,
        item: item
      });
      return this;
    }
  }, {
    key: "range",
    value: function range(config, key, desc, _ref) {
      var _ref$min = _ref.min,
        min = _ref$min === void 0 ? 0 : _ref$min,
        _ref$max = _ref.max,
        max = _ref$max === void 0 ? 1 : _ref$max,
        _ref$step = _ref.step,
        step = _ref$step === void 0 ? 0.1 : _ref$step;
      var id = this._genId();
      var item = this._setting.appendNumber(id, config.get(key), desc, {
        max: max,
        min: min,
        step: step,
        range: true
      });
      this._settings.push({
        config: config,
        key: key,
        min: min,
        max: max,
        step: step,
        id: id,
        item: item
      });
      return this;
    }
  }, {
    key: "button",
    value: function button(text, handler) {
      this._setting.appendButton(text, handler);
      return this;
    }
  }, {
    key: "separator",
    value: function separator() {
      this._setting.appendSeparator();
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      this._setting.appendTitle(_text);
      return this;
    }
    // Merge adjacent separators
  }, {
    key: "_cleanSeparator",
    value: function _cleanSeparator() {
      var children = clone_default()(this._$el.get(0).children);
      function isSeparator(node) {
        return contain_default()(node.getAttribute('class'), 'luna-setting-item-separator');
      }
      for (var i = 0, len = children.length; i < len - 1; i++) {
        if (isSeparator(children[i]) && isSeparator(children[i + 1])) {
          $_default()(children[i]).remove();
        }
      }
    }
  }, {
    key: "_genId",
    value: function _genId() {
      return uniqId_default()('eruda-settings');
    }
  }, {
    key: "_getSetting",
    value: function _getSetting(id) {
      var ret;
      each_default()(this._settings, function (setting) {
        if (setting.id === id) ret = setting;
      });
      return ret;
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this3 = this;
      this._setting.on('change', function (id, val) {
        var setting = _this3._getSetting(id);
        setting.config.set(setting.key, val);
      });
    }
  }], [{
    key: "createCfg",
    value: function createCfg(name, data) {
      return new (LocalStore_default())('eruda-' + name, data);
    }
  }]);
}(Tool);

// EXTERNAL MODULE: ./node_modules/licia/nextTick.js
var nextTick = __webpack_require__(9041);
var nextTick_default = /*#__PURE__*/__webpack_require__.n(nextTick);
// EXTERNAL MODULE: ./node_modules/licia/orientation.js
var orientation = __webpack_require__(7571);
var orientation_default = /*#__PURE__*/__webpack_require__.n(orientation);
// EXTERNAL MODULE: ./node_modules/licia/Url.js
var Url = __webpack_require__(6032);
var Url_default = /*#__PURE__*/__webpack_require__.n(Url);
// EXTERNAL MODULE: ./node_modules/licia/escapeJsStr.js
var licia_escapeJsStr = __webpack_require__(4950);
// EXTERNAL MODULE: ./node_modules/licia/isUndef.js
var isUndef = __webpack_require__(8971);
var isUndef_default = /*#__PURE__*/__webpack_require__.n(isUndef);
// EXTERNAL MODULE: ./node_modules/licia/last.js
var last = __webpack_require__(3497);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
// EXTERNAL MODULE: ./node_modules/licia/map.js
var map = __webpack_require__(3915);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/licia/memStorage.js
var memStorage = __webpack_require__(1947);
var memStorage_default = /*#__PURE__*/__webpack_require__.n(memStorage);
// EXTERNAL MODULE: ./node_modules/licia/root.js
var root = __webpack_require__(5169);
var root_default = /*#__PURE__*/__webpack_require__.n(root);
// EXTERNAL MODULE: ./node_modules/licia/toNum.js
var toNum = __webpack_require__(6030);
var toNum_default = /*#__PURE__*/__webpack_require__.n(toNum);
// EXTERNAL MODULE: ./node_modules/licia/trim.js
var trim = __webpack_require__(9405);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/licia/html.js
var html = __webpack_require__(9548);
var html_default = /*#__PURE__*/__webpack_require__.n(html);
;// CONCATENATED MODULE: ./src/lib/util.js












// https://stackoverflow.com/questions/46318395/detecting-mobile-device-notch
function hasSafeArea() {
  var proceed = false;
  var div = document.createElement('div');
  if (CSS.supports('padding-bottom: env(safe-area-inset-bottom)')) {
    div.style.paddingBottom = 'env(safe-area-inset-bottom)';
    proceed = true;
  } else if (CSS.supports('padding-bottom: constant(safe-area-inset-bottom)')) {
    div.style.paddingBottom = 'constant(safe-area-inset-bottom)';
    proceed = true;
  }
  if (proceed) {
    document.body.appendChild(div);
    var calculatedPadding = parseInt(window.getComputedStyle(div).paddingBottom);
    document.body.removeChild(div);
    if (calculatedPadding > 0) {
      return true;
    }
  }
  return false;
}
function escapeJsonStr(str) {
  /* eslint-disable quotes */
  return escapeJsStr(str).replace(/\\'/g, "'").replace(/\t/g, '\\t');
}
function safeStorage(type, memReplacement) {
  if (isUndef_default()(memReplacement)) memReplacement = true;
  var ret;
  switch (type) {
    case 'local':
      ret = window.localStorage;
      break;
    case 'session':
      ret = window.sessionStorage;
      break;
  }
  try {
    // Safari private browsing
    var x = 'test-localStorage-' + Date.now();
    ret.setItem(x, x);
    var y = ret.getItem(x);
    ret.removeItem(x);
    if (y !== x) throw new Error();
  } catch (e) {
    if (memReplacement) return (memStorage_default());
    return;
  }
  return ret;
}
function getFileName(url) {
  var ret = last_default()(url.split('/'));
  if (ret === '') {
    url = new (Url_default())(url);
    ret = url.hostname;
  }
  return ret;
}
function pxToNum(str) {
  return toNum_default()(str.replace('px', ''));
}
function isErudaEl(el) {
  while (el) {
    if (el.id === 'eruda') return true;
    el = el.parentNode;
  }
  return false;
}
function isChobitsuEl(el) {
  while (el) {
    var className = '';
    if (el.getAttribute) {
      className = el.getAttribute('class') || '';
    }
    if (contain_default()(className, '__chobitsu-hide__')) {
      return true;
    }
    el = el.parentNode;
  }
  return false;
}
function classPrefix(str) {
  if (/<[^>]*>/g.test(str)) {
    try {
      var tree = html_default().parse(str);
      traverseTree(tree, function (node) {
        if (node.attrs && node.attrs.class) {
          node.attrs.class = processClass(node.attrs.class);
        }
      });
      return html_default().stringify(tree);
    } catch (e) {
      return processClass(str);
    }
  }
  return processClass(str);
}
function traverseTree(tree, handler) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    handler(node);
    if (node.content) {
      traverseTree(node.content, handler);
    }
  }
}
function processClass(str) {
  var prefix = "eruda-";
  return map_default()(trim_default()(str).split(/\s+/), function (singleClass) {
    if (contain_default()(singleClass, prefix)) {
      return singleClass;
    }
    return singleClass.replace(/[\w-]+/, function (match) {
      return "".concat(prefix).concat(match);
    });
  }).join(' ');
}
var hasTouchSupport = "ontouchstart" in (root_default());
var hasPointerSupport = "PointerEvent" in (root_default());
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  end: 'pointerup'
};
function drag(name) {
  if (hasPointerSupport) {
    return pointerEvents[name];
  }
  return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
function eventClient(type, e) {
  var name = type === 'x' ? 'clientX' : 'clientY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
function eventPage(type, e) {
  var name = type === 'x' ? 'pageX' : 'pageY';
  if (e[name]) {
    return e[name];
  }
  if (e.changedTouches) {
    return e.changedTouches[0][name];
  }
  return 0;
}
;// CONCATENATED MODULE: ./src/EntryBtn/EntryBtn.js






function EntryBtn_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, EntryBtn_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function EntryBtn_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (EntryBtn_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var $document = $_default()(document);
var EntryBtn = /*#__PURE__*/function (_Emitter) {
  function EntryBtn($container) {
    var _this;
    (0,classCallCheck/* default */.A)(this, EntryBtn);
    _this = EntryBtn_callSuper(this, EntryBtn);
    (0,defineProperty/* default */.A)(_this, "_onDragStart", function (e) {
      var $el = _this._$el;
      $el.addClass(classPrefix('active'));
      _this._isClick = true;
      e = e.origEvent;
      _this._startX = eventClient('x', e);
      _this._oldX = pxToNum($el.css('left'));
      _this._oldY = pxToNum($el.css('top'));
      _this._startY = eventClient('y', e);
      $document.on(drag('move'), _this._onDragMove);
      $document.on(drag('end'), _this._onDragEnd);
    });
    (0,defineProperty/* default */.A)(_this, "_onDragMove", function (e) {
      var btnSize = _this._$el.get(0).offsetWidth;
      var maxWidth = _this._$container.get(0).offsetWidth;
      var maxHeight = _this._$container.get(0).offsetHeight;
      e = e.origEvent;
      var deltaX = eventClient('x', e) - _this._startX;
      var deltaY = eventClient('y', e) - _this._startY;
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        _this._isClick = false;
      }
      var newX = _this._oldX + deltaX;
      var newY = _this._oldY + deltaY;
      if (newX < 0) {
        newX = 0;
      } else if (newX > maxWidth - btnSize) {
        newX = maxWidth - btnSize;
      }
      if (newY < 0) {
        newY = 0;
      } else if (newY > maxHeight - btnSize) {
        newY = maxHeight - btnSize;
      }
      _this._$el.css({
        left: newX,
        top: newY
      });
    });
    (0,defineProperty/* default */.A)(_this, "_onDragEnd", function (e) {
      var $el = _this._$el;
      if (_this._isClick) {
        _this.emit('click');
      }
      _this._onDragMove(e);
      $document.off(drag('move'), _this._onDragMove);
      $document.off(drag('end'), _this._onDragEnd);
      var cfg = _this.config;
      if (cfg.get('rememberPos')) {
        cfg.set('pos', {
          x: pxToNum($el.css('left')),
          y: pxToNum($el.css('top'))
        });
      }
      $el.rmClass('eruda-active');
    });
    _this._style = evalCss(__webpack_require__(6945));
    _this._$container = $container;
    _this._initTpl();
    _this._bindEvent();
    _this._registerListener();
    return _this;
  }
  (0,inherits/* default */.A)(EntryBtn, _Emitter);
  return (0,createClass/* default */.A)(EntryBtn, [{
    key: "hide",
    value: function hide() {
      this._$el.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this._$el.show();
    }
  }, {
    key: "setPos",
    value: function setPos(pos) {
      if (this._isOutOfRange(pos)) {
        pos = this._getDefPos();
      }
      this._$el.css({
        left: pos.x,
        top: pos.y
      });
      this.config.set('pos', pos);
    }
  }, {
    key: "getPos",
    value: function getPos() {
      return this.config.get('pos');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      evalCss.remove(this._style);
      this._unregisterListener();
      this._$el.remove();
    }
  }, {
    key: "_isOutOfRange",
    value: function _isOutOfRange(pos) {
      pos = pos || this.config.get('pos');
      var defPos = this._getDefPos();
      return pos.x > defPos.x + 10 || pos.x < 0 || pos.y < 0 || pos.y > defPos.y + 10;
    }
  }, {
    key: "_registerListener",
    value: function _registerListener() {
      var _this2 = this;
      this._scaleListener = function () {
        return nextTick_default()(function () {
          if (_this2._isOutOfRange()) _this2._resetPos();
        });
      };
      lib_emitter.on(lib_emitter.SCALE, this._scaleListener);
    }
  }, {
    key: "_unregisterListener",
    value: function _unregisterListener() {
      lib_emitter.off(lib_emitter.SCALE, this._scaleListener);
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $container = this._$container;
      $container.append(classPrefix('<div class="entry-btn"><span class="icon-tool"></span></div>'));
      this._$el = $container.find('.eruda-entry-btn');
    }
  }, {
    key: "_resetPos",
    value: function _resetPos(orientationChanged) {
      var cfg = this.config;
      var pos = cfg.get('pos');
      var defPos = this._getDefPos();
      if (!cfg.get('rememberPos') || orientationChanged) {
        pos = defPos;
      }
      this.setPos(pos);
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this3 = this;
      var $el = this._$el;
      $el.on(drag('start'), this._onDragStart);
      orientation_default().on('change', function () {
        return _this3._resetPos(true);
      });
      window.addEventListener('resize', function () {
        return _this3._resetPos();
      });
    }
  }, {
    key: "initCfg",
    value: function initCfg(settings) {
      var cfg = this.config = Settings.createCfg('entry-button', {
        rememberPos: true,
        pos: this._getDefPos()
      });
      settings.switch(cfg, 'rememberPos', 'Remember Entry Button Position');
      this._resetPos();
    }
  }, {
    key: "_getDefPos",
    value: function _getDefPos() {
      var minWidth = this._$el.get(0).offsetWidth + 10;
      return {
        x: window.innerWidth - minWidth,
        y: window.innerHeight - minWidth
      };
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/licia/Logger.js
var Logger = __webpack_require__(7622);
var Logger_default = /*#__PURE__*/__webpack_require__.n(Logger);
;// CONCATENATED MODULE: ./src/lib/logger.js

var logger;
/* harmony default export */ var lib_logger = (logger = new (Logger_default())('[Eruda]',  true ? 'warn' : 0));
logger.formatter = function (type, argList) {
  argList.unshift(this.name);
  return argList;
};
// EXTERNAL MODULE: ./node_modules/licia/isNum.js
var isNum = __webpack_require__(6097);
var isNum_default = /*#__PURE__*/__webpack_require__.n(isNum);
// EXTERNAL MODULE: ./node_modules/licia/isDarkMode.js
var isDarkMode = __webpack_require__(282);
var isDarkMode_default = /*#__PURE__*/__webpack_require__.n(isDarkMode);
// EXTERNAL MODULE: ./node_modules/licia/startWith.js
var startWith = __webpack_require__(1009);
var startWith_default = /*#__PURE__*/__webpack_require__.n(startWith);
// EXTERNAL MODULE: ./node_modules/licia/ready.js
var ready = __webpack_require__(5570);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);
// EXTERNAL MODULE: ./node_modules/luna-notification/esm/notification/index.js + 2 modules
var notification = __webpack_require__(1280);
// EXTERNAL MODULE: ./node_modules/luna-modal/esm/modal/index.js + 2 modules
var modal = __webpack_require__(9152);
// EXTERNAL MODULE: ./node_modules/luna-tab/esm/tab/index.js + 2 modules
var tab = __webpack_require__(9068);
;// CONCATENATED MODULE: ./src/DevTools/DevTools.js







function DevTools_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, DevTools_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function DevTools_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (DevTools_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
























var DevTools = /*#__PURE__*/function (_Emitter) {
  function DevTools(_$container) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline;
    (0,classCallCheck/* default */.A)(this, DevTools);
    _this = DevTools_callSuper(this, DevTools);
    (0,defineProperty/* default */.A)(_this, "_checkSafeArea", function () {
      var _this2 = _this,
        $container = _this2.$container;
      if (hasSafeArea()) {
        $container.addClass(classPrefix('safe-area'));
      } else {
        $container.rmClass(classPrefix('safe-area'));
      }
    });
    (0,defineProperty/* default */.A)(_this, "_updateTabHeight", function (scale) {
      _this._tab.setOption('height', 40 * scale);
      nextTick_default()(function () {
        _this._tab.updateSlider();
      });
    });
    _this._defCfg = extend_default()({
      transparency: 1,
      displaySize: 80,
      theme: 'System preference'
    }, defaults);
    _this._style = evalCss(__webpack_require__(849));
    _this.$container = _$container;
    _this._isShow = false;
    _this._opacity = 1;
    _this._tools = {};
    _this._isResizing = false;
    _this._resizeTimer = null;
    _this._resizeStartY = 0;
    _this._resizeStartSize = 0;
    _this._inline = inline;
    _this._initTpl();
    _this._initTab();
    _this._initNotification();
    _this._initModal();
    ready_default()(function () {
      return _this._checkSafeArea();
    });
    _this._bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(DevTools, _Emitter);
  return (0,createClass/* default */.A)(DevTools, [{
    key: "show",
    value: function show() {
      var _this3 = this;
      this._isShow = true;
      this._$el.show();
      this._tab.updateSlider();

      // Need a delay after show to enable transition effect.
      setTimeout(function () {
        _this3._$el.css('opacity', _this3._opacity);
      }, 50);
      this.emit('show');
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this4 = this;
      if (this._inline) {
        return;
      }
      this._isShow = false;
      this.emit('hide');
      this._$el.css({
        opacity: 0
      });
      setTimeout(function () {
        return _this4._$el.hide();
      }, 300);
      return this;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      return this._isShow ? this.hide() : this.show();
    }
  }, {
    key: "add",
    value: function add(tool) {
      var tab = this._tab;
      if (!(tool instanceof Tool)) {
        var _Tool = new Tool(),
          init = _Tool.init,
          show = _Tool.show,
          hide = _Tool.hide,
          destroy = _Tool.destroy;
        defaults_default()(tool, {
          init: init,
          show: show,
          hide: hide,
          destroy: destroy
        });
      }
      var name = tool.name;
      if (!name) {
        return lib_logger.error('You must specify a name for a tool');
      }
      if (this._tools[name]) {
        return lib_logger.warn("Tool ".concat(name, " already exists"));
      }
      var id = name.replace(/\s+/g, '-');
      this._$tools.prepend("<div id=\"".concat(classPrefix(id), "\" class=\"").concat(classPrefix(id + ' tool'), "\"></div>"));
      tool.init(this._$tools.find(".".concat(classPrefix(id), ".").concat(classPrefix('tool'))), this);
      tool.active = false;
      this._tools[name] = tool;
      if (name === 'settings') {
        tab.append({
          id: name,
          title: name
        });
      } else {
        tab.insert(tab.length - 1, {
          id: name,
          title: name
        });
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      var tools = this._tools;
      if (!tools[name]) return lib_logger.warn("Tool ".concat(name, " doesn't exist"));
      this._tab.remove(name);
      var tool = tools[name];
      delete tools[name];
      if (tool.active) {
        var toolKeys = keys_default()(tools);
        if (toolKeys.length > 0) this.showTool(tools[last_default()(toolKeys)].name);
      }
      tool.destroy();
      return this;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      var _this5 = this;
      each_default()(this._tools, function (tool) {
        return _this5.remove(tool.name);
      });
      return this;
    }
  }, {
    key: "get",
    value: function get(name) {
      var tool = this._tools[name];
      if (tool) return tool;
    }
  }, {
    key: "showTool",
    value: function showTool(name) {
      if (this._curTool === name) {
        return this;
      }
      this._curTool = name;
      var tools = this._tools;
      var tool = tools[name];
      if (!tool) return;
      var lastTool = {};
      each_default()(tools, function (tool) {
        if (tool.active) {
          lastTool = tool;
          tool.active = false;
          tool.hide();
        }
      });
      tool.active = true;
      tool.show();
      this._tab.select(name);
      this.emit('showTool', name, lastTool);
      return this;
    }
  }, {
    key: "initCfg",
    value: function initCfg(settings) {
      var _this6 = this;
      var cfg = this.config = Settings.createCfg('dev-tools', this._defCfg);
      this._setTransparency(cfg.get('transparency'));
      this._setDisplaySize(cfg.get('displaySize'));
      this._setTheme(cfg.get('theme'));
      cfg.on('change', function (key, val) {
        switch (key) {
          case 'transparency':
            return _this6._setTransparency(val);
          case 'displaySize':
            return _this6._setDisplaySize(val);
          case 'theme':
            return _this6._setTheme(val);
        }
      });
      settings.separator().select(cfg, 'theme', 'Theme', ['System preference'].concat((0,toConsumableArray/* default */.A)(keys_default()(evalCss.getThemes()))));
      if (!this._inline) {
        settings.range(cfg, 'transparency', 'Transparency', {
          min: 0.2,
          max: 1,
          step: 0.01
        }).range(cfg, 'displaySize', 'Display Size', {
          min: 40,
          max: 100,
          step: 1
        });
      }
      settings.button('Restore defaults and reload', function () {
        var store = safeStorage('local');
        var data = JSON.parse(JSON.stringify(store));
        each_default()(data, function (val, key) {
          if (!isStr_default()(val)) {
            return;
          }
          if (startWith_default()(key, 'eruda')) {
            store.removeItem(key);
          }
        });
        window.location.reload();
      }).separator();
    }
  }, {
    key: "notify",
    value: function notify(content, options) {
      this._notification.notify(content, options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      evalCss.remove(this._style);
      this.removeAll();
      this._tab.destroy();
      this._$el.remove();
      window.removeEventListener('resize', this._checkSafeArea);
      lib_emitter.off(lib_emitter.SCALE, this._updateTabHeight);
    }
  }, {
    key: "_setTheme",
    value: function _setTheme(theme) {
      var $container = this.$container;
      if (theme === 'System preference') {
        theme = isDarkMode_default()() ? 'Dark' : 'Light';
      }
      if (themes_isDarkTheme(theme)) {
        $container.addClass(classPrefix('dark'));
      } else {
        $container.rmClass(classPrefix('dark'));
      }
      evalCss.setTheme(theme);
    }
  }, {
    key: "_setTransparency",
    value: function _setTransparency(opacity) {
      if (!isNum_default()(opacity)) return;
      this._opacity = opacity;
      if (this._isShow) this._$el.css({
        opacity: opacity
      });
    }
  }, {
    key: "_setDisplaySize",
    value: function _setDisplaySize(height) {
      if (this._inline) {
        height = 100;
      }
      if (!isNum_default()(height)) return;
      this._$el.css({
        height: height + '%'
      });
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $container = this.$container;
      $container.append(classPrefix("\n      <div class=\"dev-tools\">\n        <div class=\"resizer\"></div>\n        <div class=\"tab\"></div>\n        <div class=\"tools\"></div>\n        <div class=\"notification\"></div>\n        <div class=\"modal\"></div>\n      </div>\n      "));
      this._$el = $container.find(classPrefix('.dev-tools'));
      this._$tools = this._$el.find(classPrefix('.tools'));
    }
  }, {
    key: "_initTab",
    value: function _initTab() {
      var _this7 = this;
      this._tab = new tab/* default */.A(this._$el.find(classPrefix('.tab')).get(0), {
        height: 40
      });
      this._tab.on('select', function (id) {
        return _this7.showTool(id);
      });
    }
  }, {
    key: "_initNotification",
    value: function _initNotification() {
      this._notification = new notification/* default */.A(this._$el.find(classPrefix('.notification')).get(0), {
        position: {
          x: 'center',
          y: 'top'
        }
      });
    }
  }, {
    key: "_initModal",
    value: function _initModal() {
      modal/* default */.A.setContainer(this._$el.find(classPrefix('.modal')).get(0));
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this8 = this;
      var $resizer = this._$el.find(classPrefix('.resizer'));
      var $navBar = this._$el.find(classPrefix('.nav-bar'));
      var $document = $_default()(document);
      if (this._inline) {
        $resizer.hide();
      }
      var startListener = function startListener(e) {
        e.preventDefault();
        e.stopPropagation();
        e = e.origEvent;
        _this8._isResizing = true;
        _this8._resizeStartSize = _this8.config.get('displaySize');
        _this8._resizeStartY = eventClient('y', e);
        $resizer.css('height', '100%');
        $document.on(drag('move'), moveListener);
        $document.on(drag('end'), endListener);
      };
      var moveListener = function moveListener(e) {
        if (!_this8._isResizing) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        e = e.origEvent;
        var deltaY = (_this8._resizeStartY - eventClient('y', e)) / window.innerHeight * 100;
        var displaySize = _this8._resizeStartSize + deltaY;
        if (displaySize < 40) {
          displaySize = 40;
        } else if (displaySize > 100) {
          displaySize = 100;
        }
        _this8.config.set('displaySize', toNum_default()(displaySize.toFixed(2)));
      };
      var endListener = function endListener() {
        clearTimeout(_this8._resizeTimer);
        _this8._isResizing = false;
        $resizer.css('height', 10);
        $document.off(drag('move'), moveListener);
        $document.off(drag('end'), endListener);
      };
      $resizer.css('height', 10);
      $resizer.on(drag('start'), startListener);
      $navBar.on('contextmenu', function (e) {
        return e.preventDefault();
      });
      this.$container.on('click', function (e) {
        return e.stopPropagation();
      });
      window.addEventListener('resize', this._checkSafeArea);
      lib_emitter.on(lib_emitter.SCALE, this._updateTabHeight);
    }
  }]);
}((Emitter_default()));

// EXTERNAL MODULE: ./node_modules/licia/noop.js
var noop = __webpack_require__(9993);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);
// EXTERNAL MODULE: ./node_modules/licia/isFn.js
var isFn = __webpack_require__(3957);
var isFn_default = /*#__PURE__*/__webpack_require__.n(isFn);
// EXTERNAL MODULE: ./node_modules/licia/isRegExp.js
var isRegExp = __webpack_require__(1976);
var isRegExp_default = /*#__PURE__*/__webpack_require__.n(isRegExp);
// EXTERNAL MODULE: ./node_modules/licia/uncaught.js
var uncaught = __webpack_require__(6962);
var uncaught_default = /*#__PURE__*/__webpack_require__.n(uncaught);
// EXTERNAL MODULE: ./node_modules/licia/upperFirst.js
var upperFirst = __webpack_require__(9931);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/licia/isHidden.js
var isHidden = __webpack_require__(8609);
var isHidden_default = /*#__PURE__*/__webpack_require__.n(isHidden);
// EXTERNAL MODULE: ./node_modules/licia/isNull.js
var isNull = __webpack_require__(4236);
var isNull_default = /*#__PURE__*/__webpack_require__.n(isNull);
// EXTERNAL MODULE: ./node_modules/luna-console/esm/console/index.js + 9 modules
var console = __webpack_require__(8988);
;// CONCATENATED MODULE: ./src/Console/Console.js







function Console_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Console_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Console_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Console_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




















uncaught_default().start();
var Console = /*#__PURE__*/function (_Tool) {
  function Console() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'console' : _ref$name;
    (0,classCallCheck/* default */.A)(this, Console);
    _this = Console_callSuper(this, Console);
    (0,defineProperty/* default */.A)(_this, "_handleShow", function () {
      if (isHidden_default()(_this._$el.get(0))) return;
      _this._logger.renderViewport();
    });
    (0,defineProperty/* default */.A)(_this, "_handleErr", function (err) {
      _this._logger.error(err);
    });
    Emitter_default().mixin(_this);
    _this.name = name;
    _this._selectedLog = null;
    return _this;
  }
  (0,inherits/* default */.A)(Console, _Tool);
  return (0,createClass/* default */.A)(Console, [{
    key: "init",
    value: function init($el, container) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Console.prototype), "init", this).call(this, $el);
      this._container = container;
      this._appendTpl();
      this._initCfg();
      this._initLogger();
      this._exposeLogger();
      this._bindEvent();
    }
  }, {
    key: "show",
    value: function show() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Console.prototype), "show", this).call(this);
      this._handleShow();
    }
  }, {
    key: "overrideConsole",
    value: function overrideConsole() {
      var _this2 = this;
      var origConsole = this._origConsole = {};
      var winConsole = window.console;
      CONSOLE_METHOD.forEach(function (name) {
        var origin = origConsole[name] = (noop_default());
        if (winConsole[name]) {
          origin = origConsole[name] = winConsole[name].bind(winConsole);
        }
        winConsole[name] = function () {
          _this2[name].apply(_this2, arguments);
          origin.apply(void 0, arguments);
        };
      });
      return this;
    }
  }, {
    key: "setGlobal",
    value: function setGlobal(name, val) {
      this._logger.setGlobal(name, val);
    }
  }, {
    key: "restoreConsole",
    value: function restoreConsole() {
      var _this3 = this;
      if (!this._origConsole) return this;
      CONSOLE_METHOD.forEach(function (name) {
        return window.console[name] = _this3._origConsole[name];
      });
      delete this._origConsole;
      return this;
    }
  }, {
    key: "catchGlobalErr",
    value: function catchGlobalErr() {
      uncaught_default().addListener(this._handleErr);
      return this;
    }
  }, {
    key: "ignoreGlobalErr",
    value: function ignoreGlobalErr() {
      uncaught_default().rmListener(this._handleErr);
      return this;
    }
  }, {
    key: "filter",
    value: function filter(_filter) {
      var $filterText = this._$filterText;
      var logger = this._logger;
      if (isStr_default()(_filter)) {
        $filterText.text(_filter);
        logger.setOption('filter', trim_default()(_filter));
      } else if (isRegExp_default()(_filter)) {
        $filterText.text(toStr_default()(_filter));
        logger.setOption('filter', _filter);
      } else if (isFn_default()(_filter)) {
        $filterText.text('ƒ');
        logger.setOption('filter', _filter);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._logger.destroy();
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Console.prototype), "destroy", this).call(this);
      this._container.off('show', this._handleShow);
      if (this._style) {
        evalCss.remove(this._style);
      }
      this.ignoreGlobalErr();
      this.restoreConsole();
      this._rmCfg();
    }
  }, {
    key: "_enableJsExecution",
    value: function _enableJsExecution(enabled) {
      var $el = this._$el;
      var $jsInput = $el.find(classPrefix('.js-input'));
      if (enabled) {
        $jsInput.show();
        $el.rmClass(classPrefix('js-input-hidden'));
      } else {
        $jsInput.hide();
        $el.addClass(classPrefix('js-input-hidden'));
      }
    }
  }, {
    key: "_appendTpl",
    value: function _appendTpl() {
      var $el = this._$el;
      this._style = evalCss(__webpack_require__(5067));
      $el.append(classPrefix("\n      <div class=\"control\">\n        <span class=\"icon-clear clear-console\"></span>\n        <span class=\"level active\" data-level=\"all\">All</span>\n        <span class=\"level\" data-level=\"info\">Info</span>\n        <span class=\"level\" data-level=\"warning\">Warning</span>\n        <span class=\"level\" data-level=\"error\">Error</span>\n        <span class=\"filter-text\"></span>\n        <span class=\"icon-filter filter\"></span>\n        <span class=\"icon-copy icon-disabled copy\"></span>\n      </div>\n      <div class=\"logs-container\"></div>\n      <div class=\"js-input\">\n        <div class=\"buttons\">\n          <div class=\"button cancel\">Cancel</div>\n          <div class=\"button execute\">Execute</div>\n        </div>\n        <span class=\"icon-arrow-right\"></span>\n        <textarea></textarea>\n      </div>\n    "));
      var _$inputContainer = $el.find(classPrefix('.js-input'));
      var _$input = _$inputContainer.find('textarea');
      var _$inputBtns = _$inputContainer.find(classPrefix('.buttons'));
      extend_default()(this, {
        _$control: $el.find(classPrefix('.control')),
        _$logs: $el.find(classPrefix('.logs-container')),
        _$inputContainer: _$inputContainer,
        _$input: _$input,
        _$inputBtns: _$inputBtns,
        _$filterText: $el.find(classPrefix('.filter-text'))
      });
    }
  }, {
    key: "_initLogger",
    value: function _initLogger() {
      var cfg = this.config;
      var maxLogNum = cfg.get('maxLogNum');
      maxLogNum = maxLogNum === 'infinite' ? 0 : +maxLogNum;
      var $level = this._$control.find(classPrefix('.level'));
      var logger = new console/* default */.A(this._$logs.get(0), {
        asyncRender: cfg.get('asyncRender'),
        maxNum: maxLogNum,
        showHeader: cfg.get('displayExtraInfo'),
        unenumerable: cfg.get('displayUnenumerable'),
        accessGetter: cfg.get('displayGetterVal'),
        lazyEvaluation: cfg.get('lazyEvaluation')
      });
      logger.on('optionChange', function (name, val) {
        switch (name) {
          case 'level':
            $level.each(function () {
              var $this = $_default()(this);
              var level = $this.data('level');
              var isMatch = level === val || level === 'all' && isArr_default()(val);
              $this[isMatch ? 'addClass' : 'rmClass'](classPrefix('active'));
            });
            break;
        }
      });
      if (cfg.get('overrideConsole')) this.overrideConsole();
      this._logger = logger;
    }
  }, {
    key: "_exposeLogger",
    value: function _exposeLogger() {
      var _this4 = this;
      var logger = this._logger;
      var methods = ['html'].concat(CONSOLE_METHOD);
      methods.forEach(function (name) {
        return _this4[name] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          logger[name].apply(logger, args);
          _this4.emit.apply(_this4, [name].concat(args));
          return _this4;
        };
      });
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this5 = this;
      var container = this._container;
      var $input = this._$input;
      var $inputBtns = this._$inputBtns;
      var $control = this._$control;
      var logger = this._logger;
      var config = this.config;
      $control.on('click', classPrefix('.clear-console'), function () {
        return logger.clear(true);
      }).on('click', classPrefix('.level'), function () {
        var level = $_default()(this).data('level');
        if (level === 'all') {
          level = ['verbose', 'info', 'warning', 'error'];
        }
        logger.setOption('level', level);
      }).on('click', classPrefix('.filter'), function () {
        modal/* default */.A.prompt('Filter').then(function (filter) {
          if (isNull_default()(filter)) return;
          _this5.filter(filter);
        });
      }).on('click', classPrefix('.copy'), function () {
        _this5._selectedLog.copy();
        container.notify('Copied', {
          icon: 'success'
        });
      });
      $inputBtns.on('click', classPrefix('.cancel'), function () {
        return _this5._hideInput();
      }).on('click', classPrefix('.execute'), function () {
        var jsInput = $input.val().trim();
        if (jsInput === '') return;
        logger.evaluate(jsInput);
        $input.val('').get(0).blur();
        _this5._hideInput();
      });
      $input.on('focusin', function () {
        return _this5._showInput();
      });
      logger.on('insert', function (log) {
        var autoShow = log.type === 'error' && config.get('displayIfErr');
        if (autoShow) container.showTool('console').show();
      });
      logger.on('select', function (log) {
        _this5._selectedLog = log;
        $control.find(classPrefix('.icon-copy')).rmClass(classPrefix('icon-disabled'));
      });
      logger.on('deselect', function () {
        _this5._selectedLog = null;
        $control.find(classPrefix('.icon-copy')).addClass(classPrefix('icon-disabled'));
      });
      container.on('show', this._handleShow);
    }
  }, {
    key: "_hideInput",
    value: function _hideInput() {
      this._$inputContainer.rmClass(classPrefix('active'));
      this._$inputBtns.css('display', 'none');
    }
  }, {
    key: "_showInput",
    value: function _showInput() {
      this._$inputContainer.addClass(classPrefix('active'));
      this._$inputBtns.css('display', 'flex');
    }
  }, {
    key: "_rmCfg",
    value: function _rmCfg() {
      var cfg = this.config;
      var settings = this._container.get('settings');
      if (!settings) return;
      settings.remove(cfg, 'asyncRender').remove(cfg, 'jsExecution').remove(cfg, 'catchGlobalErr').remove(cfg, 'overrideConsole').remove(cfg, 'displayExtraInfo').remove(cfg, 'displayUnenumerable').remove(cfg, 'displayGetterVal').remove(cfg, 'lazyEvaluation').remove(cfg, 'displayIfErr').remove(cfg, 'maxLogNum').remove(upperFirst_default()(this.name));
    }
  }, {
    key: "_initCfg",
    value: function _initCfg() {
      var _this6 = this;
      var container = this._container;
      var cfg = this.config = Settings.createCfg(this.name, {
        asyncRender: true,
        catchGlobalErr: true,
        jsExecution: true,
        overrideConsole: true,
        displayExtraInfo: false,
        displayUnenumerable: true,
        displayGetterVal: true,
        lazyEvaluation: true,
        displayIfErr: false,
        maxLogNum: 'infinite'
      });
      this._enableJsExecution(cfg.get('jsExecution'));
      if (cfg.get('catchGlobalErr')) this.catchGlobalErr();
      cfg.on('change', function (key, val) {
        var logger = _this6._logger;
        switch (key) {
          case 'asyncRender':
            return logger.setOption('asyncRender', val);
          case 'jsExecution':
            return _this6._enableJsExecution(val);
          case 'catchGlobalErr':
            return val ? _this6.catchGlobalErr() : _this6.ignoreGlobalErr();
          case 'overrideConsole':
            return val ? _this6.overrideConsole() : _this6.restoreConsole();
          case 'maxLogNum':
            return logger.setOption('maxNum', val === 'infinite' ? 0 : +val);
          case 'displayExtraInfo':
            return logger.setOption('showHeader', val);
          case 'displayUnenumerable':
            return logger.setOption('unenumerable', val);
          case 'displayGetterVal':
            return logger.setOption('accessGetter', val);
          case 'lazyEvaluation':
            return logger.setOption('lazyEvaluation', val);
        }
      });
      var settings = container.get('settings');
      if (!settings) return;
      settings.text(upperFirst_default()(this.name)).switch(cfg, 'asyncRender', 'Asynchronous Rendering').switch(cfg, 'jsExecution', 'Enable JavaScript Execution').switch(cfg, 'catchGlobalErr', 'Catch Global Errors').switch(cfg, 'overrideConsole', 'Override Console').switch(cfg, 'displayIfErr', 'Auto Display If Error Occurs').switch(cfg, 'displayExtraInfo', 'Display Extra Information').switch(cfg, 'displayUnenumerable', 'Display Unenumerable Properties').switch(cfg, 'displayGetterVal', 'Access Getter Value').switch(cfg, 'lazyEvaluation', 'Lazy Evaluation').select(cfg, 'maxLogNum', 'Max Log Number', ['infinite', '250', '125', '100', '50', '10']).separator();
    }
  }]);
}(Tool);

var CONSOLE_METHOD = ['log', 'error', 'info', 'warn', 'dir', 'time', 'timeLog', 'timeEnd', 'clear', 'table', 'assert', 'count', 'countReset', 'debug', 'group', 'groupCollapsed', 'groupEnd'];
// EXTERNAL MODULE: ./node_modules/licia/ms.js
var ms = __webpack_require__(9117);
var ms_default = /*#__PURE__*/__webpack_require__.n(ms);
// EXTERNAL MODULE: ./node_modules/licia/isEmpty.js
var isEmpty = __webpack_require__(9464);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/licia/escape.js
var licia_escape = __webpack_require__(5902);
var escape_default = /*#__PURE__*/__webpack_require__.n(licia_escape);
// EXTERNAL MODULE: ./node_modules/licia/copy.js
var copy = __webpack_require__(4844);
var copy_default = /*#__PURE__*/__webpack_require__.n(copy);
// EXTERNAL MODULE: ./node_modules/licia/isJson.js
var isJson = __webpack_require__(4983);
var isJson_default = /*#__PURE__*/__webpack_require__.n(isJson);
// EXTERNAL MODULE: ./node_modules/licia/truncate.js
var truncate = __webpack_require__(15);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
;// CONCATENATED MODULE: ./src/Network/Detail.js






function Detail_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Detail_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Detail_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Detail_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }










var Detail = /*#__PURE__*/function (_Emitter) {
  function Detail($container, devtools) {
    var _this;
    (0,classCallCheck/* default */.A)(this, Detail);
    _this = Detail_callSuper(this, Detail);
    (0,defineProperty/* default */.A)(_this, "_copyRes", function () {
      var detailData = _this._detailData;
      var data = "".concat(detailData.method, " ").concat(detailData.url, " ").concat(detailData.status, "\n");
      if (!isEmpty_default()(detailData.data)) {
        data += '\nRequest Data\n\n';
        data += "".concat(detailData.data, "\n");
      }
      if (!isEmpty_default()(detailData.reqHeaders)) {
        data += '\nRequest Headers\n\n';
        each_default()(detailData.reqHeaders, function (val, key) {
          return data += "".concat(key, ": ").concat(val, "\n");
        });
      }
      if (!isEmpty_default()(detailData.resHeaders)) {
        data += '\nResponse Headers\n\n';
        each_default()(detailData.resHeaders, function (val, key) {
          return data += "".concat(key, ": ").concat(val, "\n");
        });
      }
      if (detailData.resTxt) {
        data += "\n".concat(detailData.resTxt, "\n");
      }
      copy_default()(data);
      _this._devtools.notify('Copied', {
        icon: 'success'
      });
    });
    _this._$container = $container;
    _this._devtools = devtools;
    _this._detailData = {};
    _this._bindEvent();
    return _this;
  }
  (0,inherits/* default */.A)(Detail, _Emitter);
  return (0,createClass/* default */.A)(Detail, [{
    key: "show",
    value: function show(data) {
      if (data.resTxt && trim_default()(data.resTxt) === '') {
        delete data.resTxt;
      }
      if (isEmpty_default()(data.resHeaders)) {
        delete data.resHeaders;
      }
      if (isEmpty_default()(data.reqHeaders)) {
        delete data.reqHeaders;
      }
      var postData = '';
      if (data.data) {
        postData = "<pre class=\"".concat(classPrefix('data'), "\">").concat(escape_default()(data.data), "</pre>");
      }
      var reqHeaders = '<tr><td>Empty</td></tr>';
      if (data.reqHeaders) {
        reqHeaders = map_default()(data.reqHeaders, function (val, key) {
          return "<tr>\n          <td class=\"".concat(classPrefix('key'), "\">").concat(escape_default()(key), "</td>\n          <td>").concat(escape_default()(val), "</td>\n        </tr>");
        }).join('');
      }
      var resHeaders = '<tr><td>Empty</td></tr>';
      if (data.resHeaders) {
        resHeaders = map_default()(data.resHeaders, function (val, key) {
          return "<tr>\n          <td class=\"".concat(classPrefix('key'), "\">").concat(escape_default()(key), "</td>\n          <td>").concat(escape_default()(val), "</td>\n        </tr>");
        }).join('');
      }
      var resTxt = '';
      if (data.resTxt) {
        var text = data.resTxt;
        if (text.length > MAX_RES_LEN) {
          text = truncate_default()(text, MAX_RES_LEN);
        }
        resTxt = "<pre class=\"".concat(classPrefix('response'), "\">").concat(escape_default()(text), "</pre>");
      }
      var html = "<div class=\"".concat(classPrefix('control'), "\">\n      <span class=\"").concat(classPrefix('icon-arrow-left back'), "\"></span>\n      <span class=\"").concat(classPrefix('icon-delete back'), "\"></span>\n      <span class=\"").concat(classPrefix('url'), "\">").concat(escape_default()(data.url), "</span>\n      <span class=\"").concat(classPrefix('icon-copy copy-res'), "\"></span>\n    </div>\n    <div class=\"").concat(classPrefix('http'), "\">\n      ").concat(postData, "\n      <div class=\"").concat(classPrefix('section'), "\">\n        <h2>Response Headers</h2>\n        <table class=\"").concat(classPrefix('headers'), "\">\n          <tbody>\n            ").concat(resHeaders, "\n          </tbody>\n        </table>\n      </div>\n      <div class=\"").concat(classPrefix('section'), "\">\n        <h2>Request Headers</h2>\n        <table class=\"").concat(classPrefix('headers'), "\">\n          <tbody>\n            ").concat(reqHeaders, "\n          </tbody>\n        </table>\n      </div>\n      ").concat(resTxt, "\n    </div>");
      this._$container.html(html).show();
      this._detailData = data;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._$container.hide();
      this.emit('hide');
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      var devtools = this._devtools;
      this._$container.on('click', classPrefix('.back'), function () {
        return _this2.hide();
      }).on('click', classPrefix('.copy-res'), this._copyRes).on('click', classPrefix('.http .response'), function () {
        var data = _this2._detailData;
        var resTxt = data.resTxt;
        if (isJson_default()(resTxt)) {
          return showSources('object', resTxt);
        }
        switch (data.subType) {
          case 'css':
            return showSources('css', resTxt);
          case 'html':
            return showSources('html', resTxt);
          case 'javascript':
            return showSources('js', resTxt);
          case 'json':
            return showSources('object', resTxt);
        }
        switch (data.type) {
          case 'image':
            return showSources('img', data.url);
        }
      });
      var showSources = function showSources(type, data) {
        var sources = devtools.get('sources');
        if (!sources) {
          return;
        }
        sources.set(type, data);
        devtools.showTool('sources');
      };
    }
  }]);
}((Emitter_default()));

var MAX_RES_LEN = 100000;
// EXTERNAL MODULE: ./node_modules/licia/throttle.js
var throttle = __webpack_require__(5865);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/chobitsu/dist/cjs/Chobitsu.js
var Chobitsu = __webpack_require__(6476);
var Chobitsu_default = /*#__PURE__*/__webpack_require__.n(Chobitsu);
// EXTERNAL MODULE: ./node_modules/chobitsu/dist/cjs/domains/Network.js
var Network = __webpack_require__(5334);
// EXTERNAL MODULE: ./node_modules/chobitsu/dist/cjs/domains/Overlay.js
var Overlay = __webpack_require__(2480);
// EXTERNAL MODULE: ./node_modules/chobitsu/dist/cjs/domains/DOM.js
var DOM = __webpack_require__(6192);
// EXTERNAL MODULE: ./node_modules/chobitsu/dist/cjs/domains/Storage.js
var Storage = __webpack_require__(5689);
;// CONCATENATED MODULE: ./src/lib/chobitsu.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var chobitsu = new (Chobitsu_default())();
chobitsu.register('Network', Network);
chobitsu.register('Overlay', Overlay);
chobitsu.register('DOM', _objectSpread(_objectSpread({}, DOM), {}, {
  getNodeId: DOM.getDOMNodeId,
  getNode: DOM.getDOMNode
}));
chobitsu.register('Storage', Storage);
/* harmony default export */ var lib_chobitsu = (chobitsu);
// EXTERNAL MODULE: ./node_modules/luna-data-grid/esm/data-grid/index.js + 2 modules
var data_grid = __webpack_require__(92);
// EXTERNAL MODULE: ./node_modules/licia/ResizeSensor.js
var ResizeSensor = __webpack_require__(4095);
var ResizeSensor_default = /*#__PURE__*/__webpack_require__.n(ResizeSensor);
// EXTERNAL MODULE: ./node_modules/licia/MediaQuery.js
var MediaQuery = __webpack_require__(3737);
var MediaQuery_default = /*#__PURE__*/__webpack_require__.n(MediaQuery);
// EXTERNAL MODULE: ./node_modules/licia/detectOs.js
var detectOs = __webpack_require__(5004);
var detectOs_default = /*#__PURE__*/__webpack_require__.n(detectOs);
// EXTERNAL MODULE: ./node_modules/licia/arrToMap.js
var licia_arrToMap = __webpack_require__(1849);
var arrToMap_default = /*#__PURE__*/__webpack_require__.n(licia_arrToMap);
;// CONCATENATED MODULE: ./src/Network/util.js



function getType(contentType) {
  if (!contentType) return 'unknown';
  var type = contentType.split(';')[0].split('/');
  return {
    type: type[0],
    subType: last_default()(type)
  };
}
function curlStr(request) {
  var platform = detectOs_default()();
  if (platform === 'windows') {
    platform = 'win';
  }
  /* eslint-disable */
  var command = [];
  var ignoredHeaders = arrToMap_default()(['accept-encoding', 'host', 'method', 'path', 'scheme', 'version']);
  function escapeStringWin(str) {
    var encapsChars = /[\r\n]/.test(str) ? '^"' : '"';
    return encapsChars + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`&]/g, '^$&').replace(/%(?=[a-zA-Z0-9_])/g, '%^').replace(/\r?\n/g, '^\n\n') + encapsChars;
  }
  function escapeStringPosix(str) {
    function escapeCharacter(x) {
      var code = x.charCodeAt(0);
      var hexString = code.toString(16);
      while (hexString.length < 4) {
        hexString = '0' + hexString;
      }
      return "\\u" + hexString;
    }
    if (/[\0-\x1F\x7F-\x9F!]|\'/.test(str)) {
      return "$'" + str.replace(/\\/g, '\\\\').replace(/\'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\0-\x1F\x7F-\x9F!]/g, escapeCharacter) + "'";
    }
    return "'" + str + "'";
  }
  var escapeString = platform === 'win' ? escapeStringWin : escapeStringPosix;
  command.push(escapeString(request.url()).replace(/[[{}\]]/g, '\\$&'));
  var inferredMethod = 'GET';
  var data = [];
  var formData = request.requestFormData();
  if (formData) {
    data.push('--data-raw ' + escapeString(formData));
    ignoredHeaders['content-length'] = true;
    inferredMethod = 'POST';
  }
  if (request.requestMethod !== inferredMethod) {
    command.push('-X ' + escapeString(request.requestMethod));
  }
  var requestHeaders = request.requestHeaders();
  for (var i = 0; i < requestHeaders.length; i++) {
    var header = requestHeaders[i];
    var name = header.name.replace(/^:/, '');
    if (ignoredHeaders[name.toLowerCase()]) {
      continue;
    }
    command.push('-H ' + escapeString(name + ': ' + header.value));
  }
  command = command.concat(data);
  command.push('--compressed');
  return 'curl ' + command.join(command.length >= 3 ? platform === 'win' ? ' ^\n  ' : ' \\\n  ' : ' ');
}
;// CONCATENATED MODULE: ./src/Network/Network.js







function Network_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Network_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Network_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Network_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





















var Network_Network = /*#__PURE__*/function (_Tool) {
  function Network() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Network);
    _this = Network_callSuper(this, Network);
    (0,defineProperty/* default */.A)(_this, "_reqWillBeSent", function (params) {
      if (!_this._isRecording) {
        return;
      }
      var request = {
        name: getFileName(params.request.url),
        url: params.request.url,
        status: 'pending',
        type: 'unknown',
        subType: 'unknown',
        size: 0,
        data: params.request.postData,
        method: params.request.method,
        startTime: params.timestamp * 1000,
        time: 0,
        resTxt: '',
        done: false,
        reqHeaders: params.request.headers || {},
        resHeaders: {}
      };
      var node;
      request.render = function () {
        var data = {
          name: request.name,
          method: request.method,
          status: request.status,
          type: request.subType,
          size: request.size,
          time: request.displayTime
        };
        if (node) {
          node.data = data;
          node.render();
        } else {
          node = _this._requestDataGrid.append(data, {
            selectable: true
          });
          $_default()(node.container).data('id', params.requestId);
        }
        if (request.hasErr) {
          $_default()(node.container).addClass(classPrefix('request-error'));
        }
      };
      request.render();
      _this._requests[params.requestId] = request;
    });
    (0,defineProperty/* default */.A)(_this, "_resReceivedExtraInfo", function (params) {
      var request = _this._requests[params.requestId];
      if (!_this._isRecording || !request) {
        return;
      }
      request.resHeaders = params.headers;
      _this._updateType(request);
      request.render();
    });
    (0,defineProperty/* default */.A)(_this, "_resReceived", function (params) {
      var request = _this._requests[params.requestId];
      if (!_this._isRecording || !request) {
        return;
      }
      var response = params.response;
      var status = response.status,
        headers = response.headers;
      request.status = status;
      if (status < 200 || status >= 300) {
        request.hasErr = true;
      }
      if (headers) {
        request.resHeaders = headers;
        _this._updateType(request);
      }
      request.render();
    });
    (0,defineProperty/* default */.A)(_this, "_loadingFinished", function (params) {
      var request = _this._requests[params.requestId];
      if (!_this._isRecording || !request) {
        return;
      }
      var time = params.timestamp * 1000;
      request.time = time - request.startTime;
      request.displayTime = ms_default()(request.time);
      request.size = params.encodedDataLength;
      request.done = true;
      request.resTxt = lib_chobitsu.domain('Network').getResponseBody({
        requestId: params.requestId
      }).body;
      request.render();
    });
    (0,defineProperty/* default */.A)(_this, "_copyCurl", function () {
      var request = _this._selectedRequest;
      copy_default()(curlStr({
        requestMethod: request.method,
        url: function url() {
          return request.url;
        },
        requestFormData: function requestFormData() {
          return request.data;
        },
        requestHeaders: function requestHeaders() {
          var reqHeaders = request.reqHeaders || {};
          extend_default()(reqHeaders, {
            'User-Agent': navigator.userAgent,
            Referer: location.href
          });
          return map_default()(reqHeaders, function (value, name) {
            return {
              name: name,
              value: value
            };
          });
        }
      }));
      _this._container.notify('Copied', {
        icon: 'success'
      });
    });
    (0,defineProperty/* default */.A)(_this, "_toggleRecording", function () {
      _this._$control.find(classPrefix('.record')).toggleClass(classPrefix('recording'));
      _this._isRecording = !_this._isRecording;
    });
    (0,defineProperty/* default */.A)(_this, "_showDetail", function () {
      if (_this._selectedRequest) {
        if (_this._splitMode) {
          _this._$network.css('width', '50%');
        }
        _this._detail.show(_this._selectedRequest);
      }
    });
    (0,defineProperty/* default */.A)(_this, "_updateScale", function (scale) {
      _this._splitMediaQuery.setQuery("screen and (min-width: ".concat(680 * scale, "px)"));
    });
    _this._style = evalCss(__webpack_require__(2003));
    _this.name = 'network';
    _this._requests = {};
    _this._selectedRequest = null;
    _this._isRecording = true;
    return _this;
  }
  (0,inherits/* default */.A)(Network, _Tool);
  return (0,createClass/* default */.A)(Network, [{
    key: "init",
    value: function init($el, container) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Network.prototype), "init", this).call(this, $el);
      this._container = container;
      this._initTpl();
      this._detail = new Detail(this._$detail, container);
      this._splitMediaQuery = new (MediaQuery_default())('screen and (min-width: 680px)');
      this._splitMode = this._splitMediaQuery.isMatch();
      this._requestDataGrid = new data_grid/* default */.A(this._$requests.get(0), {
        columns: [{
          id: 'name',
          title: 'Name',
          sortable: true,
          weight: 30
        }, {
          id: 'method',
          title: 'Method',
          sortable: true,
          weight: 14
        }, {
          id: 'status',
          title: 'Status',
          sortable: true,
          weight: 14
        }, {
          id: 'type',
          title: 'Type',
          sortable: true,
          weight: 14
        }, {
          id: 'size',
          title: 'Size',
          sortable: true,
          weight: 14
        }, {
          id: 'time',
          title: 'Time',
          sortable: true,
          weight: 14
        }]
      });
      this._resizeSensor = new (ResizeSensor_default())($el.get(0));
      this._bindEvent();
    }
  }, {
    key: "show",
    value: function show() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Network.prototype), "show", this).call(this);
      this._updateDataGridHeight();
    }
  }, {
    key: "clear",
    value: function clear() {
      this._requests = {};
      this._requestDataGrid.clear();
    }
  }, {
    key: "requests",
    value: function requests() {
      var ret = [];
      each_default()(this._requests, function (request) {
        ret.push(request);
      });
      return ret;
    }
  }, {
    key: "_updateDataGridHeight",
    value: function _updateDataGridHeight() {
      var height = this._$el.offset().height - this._$control.offset().height;
      this._requestDataGrid.setOption({
        minHeight: height,
        maxHeight: height
      });
    }
  }, {
    key: "_updateType",
    value: function _updateType(request) {
      var contentType = request.resHeaders['content-type'] || '';
      var _getType = getType(contentType),
        type = _getType.type,
        subType = _getType.subType;
      request.type = type;
      request.subType = subType;
    }
  }, {
    key: "_updateButtons",
    value: function _updateButtons() {
      var $control = this._$control;
      var $showDetail = $control.find(classPrefix('.show-detail'));
      var $copyCurl = $control.find(classPrefix('.copy-curl'));
      var iconDisabled = classPrefix('icon-disabled');
      $showDetail.addClass(iconDisabled);
      $copyCurl.addClass(iconDisabled);
      if (this._selectedRequest) {
        $showDetail.rmClass(iconDisabled);
        $copyCurl.rmClass(iconDisabled);
      }
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      var $control = this._$control;
      var $filterText = this._$filterText;
      var requestDataGrid = this._requestDataGrid;
      var self = this;
      $control.on('click', classPrefix('.clear-request'), function () {
        return _this2.clear();
      }).on('click', classPrefix('.show-detail'), this._showDetail).on('click', classPrefix('.copy-curl'), this._copyCurl).on('click', classPrefix('.record'), this._toggleRecording).on('click', classPrefix('.filter'), function () {
        modal/* default */.A.prompt('Filter').then(function (filter) {
          if (isNull_default()(filter)) return;
          $filterText.text(filter);
          requestDataGrid.setOption('filter', trim_default()(filter));
        });
      });
      requestDataGrid.on('select', function (node) {
        var id = $_default()(node.container).data('id');
        var request = self._requests[id];
        _this2._selectedRequest = request;
        _this2._updateButtons();
        if (_this2._splitMode) {
          _this2._showDetail();
        }
      });
      requestDataGrid.on('deselect', function () {
        _this2._selectedRequest = null;
        _this2._updateButtons();
        _this2._detail.hide();
      });
      this._resizeSensor.addListener(throttle_default()(function () {
        return _this2._updateDataGridHeight();
      }, 15));
      this._splitMediaQuery.on('match', function () {
        _this2._detail.hide();
        _this2._splitMode = true;
      });
      this._splitMediaQuery.on('unmatch', function () {
        _this2._detail.hide();
        _this2._splitMode = false;
      });
      this._detail.on('hide', function () {
        if (_this2._splitMode) {
          _this2._$network.css('width', '100%');
        }
      });
      lib_chobitsu.domain('Network').enable();
      var network = lib_chobitsu.domain('Network');
      network.on('requestWillBeSent', this._reqWillBeSent);
      network.on('responseReceivedExtraInfo', this._resReceivedExtraInfo);
      network.on('responseReceived', this._resReceived);
      network.on('loadingFinished', this._loadingFinished);
      lib_emitter.on(lib_emitter.SCALE, this._updateScale);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Network.prototype), "destroy", this).call(this);
      this._resizeSensor.destroy();
      evalCss.remove(this._style);
      this._splitMediaQuery.removeAllListeners();
      var network = lib_chobitsu.domain('Network');
      network.off('requestWillBeSent', this._reqWillBeSent);
      network.off('responseReceivedExtraInfo', this._resReceivedExtraInfo);
      network.off('responseReceived', this._resReceived);
      network.off('loadingFinished', this._loadingFinished);
      lib_emitter.off(lib_emitter.SCALE, this._updateScale);
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $el = this._$el;
      $el.html(classPrefix("<div class=\"network\">\n        <div class=\"control\">\n          <span class=\"icon-record record recording\"></span>\n          <span class=\"icon-clear clear-request\"></span>\n          <span class=\"icon-eye icon-disabled show-detail\"></span>\n          <span class=\"icon-copy icon-disabled copy-curl\"></span>\n          <span class=\"filter-text\"></span>\n          <span class=\"icon-filter filter\"></span>\n        </div>\n        <div class=\"requests\"></div>\n      </div>\n      <div class=\"detail\"></div>"));
      this._$network = $el.find(classPrefix('.network'));
      this._$detail = $el.find(classPrefix('.detail'));
      this._$requests = $el.find(classPrefix('.requests'));
      this._$control = $el.find(classPrefix('.control'));
      this._$filterText = $el.find(classPrefix('.filter-text'));
    }
  }]);
}(Tool);

// EXTERNAL MODULE: ./node_modules/licia/isEl.js
var isEl = __webpack_require__(2708);
var isEl_default = /*#__PURE__*/__webpack_require__.n(isEl);
// EXTERNAL MODULE: ./node_modules/licia/isMobile.js
var isMobile = __webpack_require__(1167);
var isMobile_default = /*#__PURE__*/__webpack_require__.n(isMobile);
// EXTERNAL MODULE: ./node_modules/luna-dom-viewer/esm/dom-viewer/index.js + 2 modules
var dom_viewer = __webpack_require__(5452);
// EXTERNAL MODULE: ./node_modules/licia/lowerCase.js
var lowerCase = __webpack_require__(96);
var lowerCase_default = /*#__PURE__*/__webpack_require__.n(lowerCase);
// EXTERNAL MODULE: ./node_modules/licia/pick.js
var pick = __webpack_require__(896);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/licia/unique.js
var unique = __webpack_require__(438);
var unique_default = /*#__PURE__*/__webpack_require__.n(unique);
// EXTERNAL MODULE: ./node_modules/licia/isBool.js
var isBool = __webpack_require__(6493);
var isBool_default = /*#__PURE__*/__webpack_require__.n(isBool);
// EXTERNAL MODULE: ./node_modules/licia/safeGet.js
var safeGet = __webpack_require__(6186);
var safeGet_default = /*#__PURE__*/__webpack_require__.n(safeGet);
// EXTERNAL MODULE: ./node_modules/licia/h.js
var h = __webpack_require__(5241);
var h_default = /*#__PURE__*/__webpack_require__.n(h);
// EXTERNAL MODULE: ./node_modules/licia/MutationObserver.js
var MutationObserver = __webpack_require__(2208);
var MutationObserver_default = /*#__PURE__*/__webpack_require__.n(MutationObserver);
// EXTERNAL MODULE: ./node_modules/licia/sortKeys.js
var sortKeys = __webpack_require__(5145);
var sortKeys_default = /*#__PURE__*/__webpack_require__.n(sortKeys);
;// CONCATENATED MODULE: ./src/Elements/CssStore.js




function formatStyle(style) {
  var ret = {};
  for (var i = 0, len = style.length; i < len; i++) {
    var name = style[i];
    if (style[name] === 'initial') continue;
    ret[name] = style[name];
  }
  return sortStyleKeys(ret);
}
var elProto = Element.prototype;
var matchesSel = function matchesSel() {
  return false;
};
if (elProto.webkitMatchesSelector) {
  matchesSel = function matchesSel(el, selText) {
    return el.webkitMatchesSelector(selText);
  };
} else if (elProto.mozMatchesSelector) {
  matchesSel = function matchesSel(el, selText) {
    return el.mozMatchesSelector(selText);
  };
}
var CssStore = /*#__PURE__*/function () {
  function CssStore(el) {
    (0,classCallCheck/* default */.A)(this, CssStore);
    this._el = el;
  }
  return (0,createClass/* default */.A)(CssStore, [{
    key: "getComputedStyle",
    value: function getComputedStyle() {
      var computedStyle = window.getComputedStyle(this._el);
      return formatStyle(computedStyle);
    }
  }, {
    key: "getMatchedCSSRules",
    value: function getMatchedCSSRules() {
      var _this = this;
      var ret = [];
      each_default()(document.styleSheets, function (styleSheet) {
        try {
          // Started with version 64, Chrome does not allow cross origin script to access this property.
          if (!styleSheet.cssRules) return;
        } catch (e) {
          return;
        }
        each_default()(styleSheet.cssRules, function (cssRule) {
          var matchesEl = false;

          // Mobile safari will throw DOM Exception 12 error, need to try catch it.
          try {
            matchesEl = _this._elMatchesSel(cssRule.selectorText);
            /* eslint-disable no-empty */
          } catch (e) {}
          if (!matchesEl) return;
          ret.push({
            selectorText: cssRule.selectorText,
            style: formatStyle(cssRule.style)
          });
        });
      });
      return ret;
    }
  }, {
    key: "_elMatchesSel",
    value: function _elMatchesSel(selText) {
      return matchesSel(this._el, selText);
    }
  }]);
}();

function sortStyleKeys(style) {
  return sortKeys_default()(style, {
    comparator: function comparator(a, b) {
      var lenA = a.length;
      var lenB = b.length;
      var len = lenA > lenB ? lenB : lenA;
      for (var i = 0; i < len; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        var cmpResult = cmpCode(codeA, codeB);
        if (cmpResult !== 0) return cmpResult;
      }
      if (lenA > lenB) return 1;
      if (lenA < lenB) return -1;
      return 0;
    }
  });
}
function cmpCode(a, b) {
  a = transCode(a);
  b = transCode(b);
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
function transCode(code) {
  // - should be placed after lowercase chars.
  if (code === 45) return 123;
  return code;
}
// EXTERNAL MODULE: ./node_modules/luna-box-model/esm/box-model/index.js + 2 modules
var box_model = __webpack_require__(3312);
;// CONCATENATED MODULE: ./src/Elements/util.js



function formatNodeName(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$noAttr = _ref.noAttr,
    noAttr = _ref$noAttr === void 0 ? false : _ref$noAttr;
  if (node.nodeType === Node.TEXT_NODE) {
    return "<span class=\"".concat(classPrefix('tag-name-color'), "\">(text)</span>");
  } else if (node.nodeType === Node.COMMENT_NODE) {
    return "<span class=\"".concat(classPrefix('tag-name-color'), "\"><!--></span>");
  }
  var id = node.id,
    className = node.className,
    attributes = node.attributes;
  var ret = "<span class=\"eruda-tag-name-color\">".concat(node.tagName.toLowerCase(), "</span>");
  if (id !== '') ret += "<span class=\"eruda-function-color\">#".concat(id, "</span>");
  if (isStr_default()(className)) {
    var classes = '';
    each_default()(className.split(/\s+/g), function (val) {
      if (val.trim() === '') return;
      classes += ".".concat(val);
    });
    ret += "<span class=\"eruda-attribute-name-color\">".concat(classes, "</span>");
  }
  if (!noAttr) {
    each_default()(attributes, function (attr) {
      var name = attr.name;
      if (name === 'id' || name === 'class' || name === 'style') return;
      ret += " <span class=\"eruda-attribute-name-color\">".concat(name, "</span><span class=\"eruda-operator-color\">=\"</span><span class=\"eruda-string-color\">").concat(attr.value, "</span><span class=\"eruda-operator-color\">\"</span>");
    });
  }
  return ret;
}
;// CONCATENATED MODULE: ./src/Elements/Detail.js






























var Detail_Detail = /*#__PURE__*/function () {
  function Detail($container, devtools) {
    var _this = this;
    (0,classCallCheck/* default */.A)(this, Detail);
    (0,defineProperty/* default */.A)(this, "hide", function () {
      _this._$container.hide();
      _this._disableObserver();
      lib_chobitsu.domain('Overlay').hideHighlight();
    });
    this._$container = $container;
    this._devtools = devtools;
    this._curEl = document.documentElement;
    this._bindEvent();
    this._initObserver();
    this._initCfg();
    this._initTpl();
  }
  return (0,createClass/* default */.A)(Detail, [{
    key: "show",
    value: function show(el) {
      this._curEl = el;
      this._rmDefComputedStyle = true;
      this._computedStyleSearchKeyword = '';
      this._enableObserver();
      this._render();
      var _chobitsu$domain$getN = lib_chobitsu.domain('DOM').getNodeId({
          node: el
        }),
        nodeId = _chobitsu$domain$getN.nodeId;
      lib_chobitsu.domain('Overlay').highlightNode({
        nodeId: nodeId,
        highlightConfig: {
          showInfo: true,
          contentColor: 'rgba(111, 168, 220, .66)',
          paddingColor: 'rgba(147, 196, 125, .55)',
          borderColor: 'rgba(255, 229, 153, .66)',
          marginColor: 'rgba(246, 178, 107, .66)'
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._disableObserver();
      this.restoreEventTarget();
      this._rmCfg();
    }
  }, {
    key: "overrideEventTarget",
    value: function overrideEventTarget() {
      var winEventProto = getWinEventProto();
      var origAddEvent = this._origAddEvent = winEventProto.addEventListener;
      var origRmEvent = this._origRmEvent = winEventProto.removeEventListener;
      winEventProto.addEventListener = function (type, listener, useCapture) {
        addEvent(this, type, listener, useCapture);
        origAddEvent.apply(this, arguments);
      };
      winEventProto.removeEventListener = function (type, listener, useCapture) {
        rmEvent(this, type, listener, useCapture);
        origRmEvent.apply(this, arguments);
      };
    }
  }, {
    key: "restoreEventTarget",
    value: function restoreEventTarget() {
      var winEventProto = getWinEventProto();
      if (this._origAddEvent) winEventProto.addEventListener = this._origAddEvent;
      if (this._origRmEvent) winEventProto.removeEventListener = this._origRmEvent;
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $container = this._$container;
      var html = "<div class=\"".concat(classPrefix('control'), "\">\n      <span class=\"").concat(classPrefix('icon-arrow-left back'), "\"></span>\n      <span class=\"").concat(classPrefix('element-name'), "\"></span>\n      <span class=\"").concat(classPrefix('icon-refresh refresh'), "\"></span>\n    </div>\n    <div class=\"").concat(classPrefix('element'), "\">\n      <div class=\"").concat(classPrefix('attributes section'), "\"></div>\n      <div class=\"").concat(classPrefix('styles section'), "\"></div>\n      <div class=\"").concat(classPrefix('computed-style section'), "\"></div>\n      <div class=\"").concat(classPrefix('listeners section'), "\"></div>\n    </div>");
      $container.html(html);
      this._$elementName = $container.find(classPrefix('.element-name'));
      this._$attributes = $container.find(classPrefix('.attributes'));
      this._$styles = $container.find(classPrefix('.styles'));
      this._$listeners = $container.find(classPrefix('.listeners'));
      this._$computedStyle = $container.find(classPrefix('.computed-style'));
      var boxModelContainer = h_default()('div');
      this._$boxModel = $_default()(boxModelContainer);
      this._boxModel = new box_model/* default */.A(boxModelContainer);
    }
  }, {
    key: "_toggleAllComputedStyle",
    value: function _toggleAllComputedStyle() {
      this._rmDefComputedStyle = !this._rmDefComputedStyle;
      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var data = this._getData(this._curEl);
      var $attributes = this._$attributes;
      var $elementName = this._$elementName;
      var $styles = this._$styles;
      var $computedStyle = this._$computedStyle;
      var $listeners = this._$listeners;
      $elementName.html(data.name);
      var attributes = '<tr><td>Empty</td></tr>';
      if (!isEmpty_default()(data.attributes)) {
        attributes = map_default()(data.attributes, function (_ref) {
          var name = _ref.name,
            value = _ref.value;
          return "<tr>\n          <td class=\"".concat(classPrefix('attribute-name-color'), "\">").concat(escape_default()(name), "</td>\n          <td class=\"").concat(classPrefix('string-color'), "\">").concat(value, "</td>\n        </tr>");
        }).join('');
      }
      attributes = "<h2>Attributes</h2>\n    <div class=\"".concat(classPrefix('table-wrapper'), "\">\n      <table>\n        <tbody>\n          ").concat(attributes, " \n        </tbody>\n      </table>\n    </div>");
      $attributes.html(attributes);
      var styles = '';
      if (!isEmpty_default()(data.styles)) {
        var style = map_default()(data.styles, function (_ref2) {
          var selectorText = _ref2.selectorText,
            style = _ref2.style;
          style = map_default()(style, function (val, key) {
            return "<div class=\"".concat(classPrefix('rule'), "\"><span>").concat(escape_default()(key), "</span>: ").concat(val, ";</div>");
          }).join('');
          return "<div class=\"".concat(classPrefix('style-rules'), "\">\n          <div>").concat(escape_default()(selectorText), " {</div>\n            ").concat(style, "\n          <div>}</div>\n        </div>");
        }).join('');
        styles = "<h2>Styles</h2>\n      <div class=\"".concat(classPrefix('style-wrapper'), "\">\n        ").concat(style, "\n      </div>");
        $styles.html(styles).show();
      } else {
        $styles.hide();
      }
      var computedStyle = '';
      if (data.computedStyle) {
        var toggleButton = classPrefix("<div class=\"btn toggle-all-computed-style\">\n        <span class=\"icon-expand\"></span>\n      </div>");
        if (data.rmDefComputedStyle) {
          toggleButton = classPrefix("<div class=\"btn toggle-all-computed-style\">\n          <span class=\"icon-compress\"></span>\n        </div>");
        }
        computedStyle = "<h2>\n        Computed Style\n        ".concat(toggleButton, "\n        <div class=\"").concat(classPrefix('btn computed-style-search'), "\">\n          <span class=\"").concat(classPrefix('icon-filter'), "\"></span>\n        </div>\n        ").concat(data.computedStyleSearchKeyword ? "<div class=\"".concat(classPrefix('btn filter-text'), "\">").concat(escape_default()(data.computedStyleSearchKeyword), "</div>") : '', "\n      </h2>\n      <div class=\"").concat(classPrefix('box-model'), "\"></div>\n      <div class=\"").concat(classPrefix('table-wrapper'), "\">\n        <table>\n          <tbody>\n          ").concat(map_default()(data.computedStyle, function (val, key) {
          return "<tr>\n              <td class=\"".concat(classPrefix('key'), "\">").concat(escape_default()(key), "</td>\n              <td>").concat(val, "</td>\n            </tr>");
        }).join(''), "\n          </tbody>\n        </table>\n      </div>");
        $computedStyle.html(computedStyle).show();
        this._boxModel.setOption('element', this._curEl);
        $computedStyle.find(classPrefix('.box-model')).append(this._$boxModel.get(0));
      } else {
        $computedStyle.text('').hide();
      }
      var listeners = '';
      if (data.listeners) {
        listeners = map_default()(data.listeners, function (listeners, key) {
          listeners = map_default()(listeners, function (_ref3) {
            var useCapture = _ref3.useCapture,
              listenerStr = _ref3.listenerStr;
            return "<li ".concat(useCapture ? "class=\"".concat(classPrefix('capture'), "\"") : '', ">").concat(escape_default()(listenerStr), "</li>");
          }).join('');
          return "<div class=\"".concat(classPrefix('listener'), "\">\n          <div class=\"").concat(classPrefix('listener-type'), "\">").concat(escape_default()(key), "</div>\n          <ul class=\"").concat(classPrefix('listener-content'), "\">\n            ").concat(listeners, "\n          </ul>\n        </div>");
        }).join('');
        listeners = "<h2>Event Listeners</h2>\n      <div class=\"".concat(classPrefix('listener-wrapper'), "\">\n        ").concat(listeners, " \n      </div>");
        $listeners.html(listeners).show();
      } else {
        $listeners.hide();
      }
      this._$container.show();
    }
  }, {
    key: "_getData",
    value: function _getData(el) {
      var ret = {};
      var cssStore = new CssStore(el);
      var className = el.className,
        id = el.id,
        attributes = el.attributes,
        tagName = el.tagName;
      ret.computedStyleSearchKeyword = this._computedStyleSearchKeyword;
      ret.attributes = formatAttr(attributes);
      ret.name = formatNodeName({
        tagName: tagName,
        id: id,
        className: className,
        attributes: attributes
      });
      var events = el.erudaEvents;
      if (events && keys_default()(events).length !== 0) ret.listeners = events;
      if (needNoStyle(tagName)) return ret;
      var computedStyle = cssStore.getComputedStyle();
      var styles = cssStore.getMatchedCSSRules();
      styles.unshift(getInlineStyle(el.style));
      styles.forEach(function (style) {
        return processStyleRules(style.style);
      });
      ret.styles = styles;
      if (this._rmDefComputedStyle) {
        computedStyle = rmDefComputedStyle(computedStyle, styles);
      }
      ret.rmDefComputedStyle = this._rmDefComputedStyle;
      var computedStyleSearchKeyword = lowerCase_default()(ret.computedStyleSearchKeyword);
      if (computedStyleSearchKeyword) {
        computedStyle = pick_default()(computedStyle, function (val, property) {
          return contain_default()(property, computedStyleSearchKeyword) || contain_default()(val, computedStyleSearchKeyword);
        });
      }
      processStyleRules(computedStyle);
      ret.computedStyle = computedStyle;
      return ret;
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      var devtools = this._devtools;
      this._$container.on('click', classPrefix('.toggle-all-computed-style'), function () {
        return _this2._toggleAllComputedStyle();
      }).on('click', classPrefix('.computed-style-search'), function () {
        modal/* default */.A.prompt('Filter').then(function (filter) {
          if (isNull_default()(filter)) return;
          filter = trim_default()(filter);
          _this2._computedStyleSearchKeyword = filter;
          _this2._render();
        });
      }).on('click', '.eruda-listener-content', function () {
        var text = $_default()(this).text();
        var sources = devtools.get('sources');
        if (sources) {
          sources.set('js', text);
          devtools.showTool('sources');
        }
      }).on('click', classPrefix('.element-name'), function () {
        var sources = devtools.get('sources');
        if (sources) {
          sources.set('object', _this2._curEl);
          devtools.showTool('sources');
        }
      }).on('click', classPrefix('.back'), this.hide).on('click', classPrefix('.refresh'), function () {
        _this2._render();
        devtools.notify('Refreshed', {
          icon: 'success'
        });
      });
    }
  }, {
    key: "_initObserver",
    value: function _initObserver() {
      var _this3 = this;
      this._observer = new (MutationObserver_default())(function (mutations) {
        each_default()(mutations, function (mutation) {
          return _this3._handleMutation(mutation);
        });
      });
    }
  }, {
    key: "_enableObserver",
    value: function _enableObserver() {
      this._observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
  }, {
    key: "_disableObserver",
    value: function _disableObserver() {
      this._observer.disconnect();
    }
  }, {
    key: "_handleMutation",
    value: function _handleMutation(mutation) {
      if (isErudaEl(mutation.target)) return;
      if (mutation.type === 'attributes') {
        if (mutation.target !== this._curEl) return;
        this._render();
      }
    }
  }, {
    key: "_rmCfg",
    value: function _rmCfg() {
      var cfg = this.config;
      var settings = this._devtools.get('settings');
      if (!settings) return;
      settings.remove(cfg, 'overrideEventTarget').remove(cfg, 'observeElement').remove('Elements');
    }
  }, {
    key: "_initCfg",
    value: function _initCfg() {
      var _this4 = this;
      var cfg = this.config = Settings.createCfg('elements', {
        overrideEventTarget: true
      });
      if (cfg.get('overrideEventTarget')) this.overrideEventTarget();
      cfg.on('change', function (key, val) {
        switch (key) {
          case 'overrideEventTarget':
            return val ? _this4.overrideEventTarget() : _this4.restoreEventTarget();
        }
      });
      var settings = this._devtools.get('settings');
      if (!settings) return;
      settings.text('Elements').switch(cfg, 'overrideEventTarget', 'Catch Event Listeners');
      settings.separator();
    }
  }]);
}();

function processStyleRules(style) {
  each_default()(style, function (val, key) {
    return style[key] = processStyleRule(val);
  });
}
var formatAttr = function formatAttr(attributes) {
  return map_default()(attributes, function (attr) {
    var value = attr.value;
    var name = attr.name;
    value = escape_default()(value);
    var isLink = (name === 'src' || name === 'href') && !startWith_default()(value, 'data');
    if (isLink) value = wrapLink(value);
    if (name === 'style') value = processStyleRule(value);
    return {
      name: name,
      value: value
    };
  });
};
var regColor = /rgba?\((.*?)\)/g;
var regCssUrl = /url\("?(.*?)"?\)/g;
function processStyleRule(val) {
  // For css custom properties, val is unable to retrieved.
  val = toStr_default()(val);
  return val.replace(regColor, '<span class="eruda-style-color" style="background-color: $&"></span>$&').replace(regCssUrl, function (match, url) {
    return "url(\"".concat(wrapLink(url), "\")");
  });
}
function getInlineStyle(style) {
  var ret = {
    selectorText: 'element.style',
    style: {}
  };
  for (var i = 0, len = style.length; i < len; i++) {
    var s = style[i];
    ret.style[s] = style[s];
  }
  return ret;
}
function rmDefComputedStyle(computedStyle, styles) {
  var ret = {};
  var keepStyles = ['display', 'width', 'height'];
  each_default()(styles, function (style) {
    keepStyles = keepStyles.concat(keys_default()(style.style));
  });
  keepStyles = unique_default()(keepStyles);
  each_default()(computedStyle, function (val, key) {
    if (!contain_default()(keepStyles, key)) return;
    ret[key] = val;
  });
  return ret;
}
var NO_STYLE_TAG = ['script', 'style', 'meta', 'title', 'link', 'head'];
var needNoStyle = function needNoStyle(tagName) {
  return NO_STYLE_TAG.indexOf(tagName.toLowerCase()) > -1;
};
var wrapLink = function wrapLink(link) {
  return "<a href=\"".concat(link, "\" target=\"_blank\">").concat(link, "</a>");
};
function addEvent(el, type, listener) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!isEl_default()(el) || !isFn_default()(listener) || !isBool_default()(useCapture)) return;
  var events = el.erudaEvents = el.erudaEvents || {};
  events[type] = events[type] || [];
  events[type].push({
    listener: listener,
    listenerStr: listener.toString(),
    useCapture: useCapture
  });
}
function rmEvent(el, type, listener) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!isEl_default()(el) || !isFn_default()(listener) || !isBool_default()(useCapture)) return;
  var events = el.erudaEvents;
  if (!(events && events[type])) return;
  var listeners = events[type];
  for (var i = 0, len = listeners.length; i < len; i++) {
    if (listeners[i].listener === listener) {
      listeners.splice(i, 1);
      break;
    }
  }
  if (listeners.length === 0) delete events[type];
  if (keys_default()(events).length === 0) delete el.erudaEvents;
}
var getWinEventProto = function getWinEventProto() {
  return safeGet_default()(window, 'EventTarget.prototype') || window.Node.prototype;
};
;// CONCATENATED MODULE: ./src/Elements/Elements.js







function Elements_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Elements_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Elements_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Elements_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


















var Elements = /*#__PURE__*/function (_Tool) {
  function Elements() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Elements);
    _this = Elements_callSuper(this, Elements);
    (0,defineProperty/* default */.A)(_this, "_showDetail", function () {
      if (!_this._isShow || !_this._curNode) {
        return;
      }
      if (_this._curNode.nodeType === Node.ELEMENT_NODE) {
        _this._detail.show(_this._curNode);
      } else {
        _this._detail.show(_this._curNode.parentNode);
      }
    });
    (0,defineProperty/* default */.A)(_this, "_back", function () {
      if (_this._curNode === _this._htmlEl) return;
      var parentQueue = _this._curParentQueue;
      var parent = parentQueue.shift();
      while (!isElExist(parent)) {
        parent = parentQueue.shift();
      }
      _this.set(parent);
    });
    (0,defineProperty/* default */.A)(_this, "_updateScale", function (scale) {
      _this._splitMediaQuery.setQuery("screen and (min-width: ".concat(680 * scale, "px)"));
    });
    (0,defineProperty/* default */.A)(_this, "_deleteNode", function () {
      var node = _this._curNode;
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
    (0,defineProperty/* default */.A)(_this, "_copyNode", function () {
      var node = _this._curNode;
      if (node.nodeType === Node.ELEMENT_NODE) {
        copy_default()(node.outerHTML);
      } else {
        copy_default()(node.nodeValue);
      }
      _this._container.notify('Copied', {
        icon: 'success'
      });
    });
    (0,defineProperty/* default */.A)(_this, "_toggleSelect", function () {
      _this._$el.find(classPrefix('.select')).toggleClass(classPrefix('active'));
      _this._selectElement = !_this._selectElement;
      if (_this._selectElement) {
        lib_chobitsu.domain('Overlay').setInspectMode({
          mode: 'searchForNode',
          highlightConfig: {
            showInfo: !isMobile_default()(),
            showRulers: false,
            showAccessibilityInfo: !isMobile_default()(),
            showExtensionLines: false,
            contrastAlgorithm: 'aa',
            contentColor: 'rgba(111, 168, 220, .66)',
            paddingColor: 'rgba(147, 196, 125, .55)',
            borderColor: 'rgba(255, 229, 153, .66)',
            marginColor: 'rgba(246, 178, 107, .66)'
          }
        });
        _this._container.hide();
      } else {
        lib_chobitsu.domain('Overlay').setInspectMode({
          mode: 'none'
        });
        lib_chobitsu.domain('Overlay').hideHighlight();
      }
    });
    (0,defineProperty/* default */.A)(_this, "_inspectNodeRequested", function (_ref) {
      var backendNodeId = _ref.backendNodeId;
      _this._container.show();
      _this._toggleSelect();
      try {
        var _chobitsu$domain$getN = lib_chobitsu.domain('DOM').getNode({
            nodeId: backendNodeId
          }),
          node = _chobitsu$domain$getN.node;
        _this.select(node);
        /* eslint-disable no-empty */
      } catch (e) {}
    });
    (0,defineProperty/* default */.A)(_this, "_setNode", function (node) {
      if (node === _this._curNode) return;
      _this._curNode = node;
      _this._renderCrumbs();
      var parentQueue = [];
      var parent = node.parentNode;
      while (parent) {
        parentQueue.push(parent);
        parent = parent.parentNode;
      }
      _this._curParentQueue = parentQueue;
      if (_this._splitMode) {
        _this._showDetail();
      }
      _this._updateButtons();
      _this._updateHistory();
    });
    _this._style = evalCss(__webpack_require__(7755));
    _this.name = 'elements';
    _this._selectElement = false;
    _this._observeElement = true;
    _this._history = [];
    Emitter_default().mixin(_this);
    return _this;
  }
  (0,inherits/* default */.A)(Elements, _Tool);
  return (0,createClass/* default */.A)(Elements, [{
    key: "init",
    value: function init($el, container) {
      var _this2 = this;
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Elements.prototype), "init", this).call(this, $el);
      this._container = container;
      this._initTpl();
      this._htmlEl = document.documentElement;
      this._detail = new Detail_Detail(this._$detail, container);
      this.config = this._detail.config;
      this._splitMediaQuery = new (MediaQuery_default())('screen and (min-width: 680px)');
      this._splitMode = this._splitMediaQuery.isMatch();
      this._domViewer = new dom_viewer/* default */.A(this._$domViewer.get(0), {
        node: this._htmlEl,
        ignore: function ignore(node) {
          return isErudaEl(node) || isChobitsuEl(node);
        }
      });
      this._domViewer.expand();
      this._bindEvent();
      lib_chobitsu.domain('Overlay').enable();
      nextTick_default()(function () {
        return _this2._updateHistory();
      });
    }
  }, {
    key: "show",
    value: function show() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Elements.prototype), "show", this).call(this);
      this._isShow = true;
      if (!this._curNode) {
        this.select(document.body);
      } else if (this._splitMode) {
        this._showDetail();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Elements.prototype), "hide", this).call(this);
      this._isShow = false;
      lib_chobitsu.domain('Overlay').hideHighlight();
    }
  }, {
    key: "select",
    value: function select(node) {
      this._domViewer.select(node);
      this._setNode(node);
      this.emit('change', node);
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Elements.prototype), "destroy", this).call(this);
      lib_emitter.off(lib_emitter.SCALE, this._updateScale);
      evalCss.remove(this._style);
      this._detail.destroy();
      lib_chobitsu.domain('Overlay').off('inspectNodeRequested', this._inspectNodeRequested);
      lib_chobitsu.domain('Overlay').disable();
      this._splitMediaQuery.removeAllListeners();
    }
  }, {
    key: "_updateButtons",
    value: function _updateButtons() {
      var $control = this._$control;
      var $showDetail = $control.find(classPrefix('.show-detail'));
      var $copyNode = $control.find(classPrefix('.copy-node'));
      var $deleteNode = $control.find(classPrefix('.delete-node'));
      var iconDisabled = classPrefix('icon-disabled');
      $showDetail.addClass(iconDisabled);
      $copyNode.addClass(iconDisabled);
      $deleteNode.addClass(iconDisabled);
      var node = this._curNode;
      if (!node) {
        return;
      }
      if (node !== document.documentElement && node !== document.body) {
        $deleteNode.rmClass(iconDisabled);
      }
      $copyNode.rmClass(iconDisabled);
      if (node.nodeType === Node.ELEMENT_NODE) {
        $showDetail.rmClass(iconDisabled);
      }
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $el = this._$el;
      $el.html(classPrefix("<div class=\"elements\">\n        <div class=\"control\">\n          <span class=\"icon icon-select select\"></span>\n          <span class=\"icon icon-eye show-detail\"></span>\n          <span class=\"icon icon-copy copy-node\"></span>\n          <span class=\"icon icon-delete delete-node\"></span>\n        </div>\n        <div class=\"dom-viewer-container\">\n          <div class=\"dom-viewer\"></div>\n        </div>\n        <div class=\"crumbs\"></div>\n      </div>\n      <div class=\"detail\"></div>"));
      this._$detail = $el.find(classPrefix('.detail'));
      this._$domViewer = $el.find(classPrefix('.dom-viewer'));
      this._$control = $el.find(classPrefix('.control'));
      this._$crumbs = $el.find(classPrefix('.crumbs'));
    }
  }, {
    key: "_renderCrumbs",
    value: function _renderCrumbs() {
      var crumbs = getCrumbs(this._curNode);
      var html = '';
      if (!isEmpty_default()(crumbs)) {
        html = map_default()(crumbs, function (_ref2) {
          var text = _ref2.text,
            idx = _ref2.idx;
          return "<li class=\"".concat(classPrefix('crumb'), "\" data-idx=\"").concat(idx, "\">").concat(text, "</div></li>");
        }).join('');
      }
      this._$crumbs.html(html);
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this3 = this;
      var self = this;
      this._$el.on('click', classPrefix('.crumb'), function () {
        var idx = toNum_default()($_default()(this).data('idx'));
        var node = self._curNode;
        while (idx-- && node.parentElement) {
          node = node.parentElement;
        }
        if (isElExist(node)) {
          self.select(node);
        }
      });
      this._$control.on('click', classPrefix('.select'), this._toggleSelect).on('click', classPrefix('.show-detail'), this._showDetail).on('click', classPrefix('.copy-node'), this._copyNode).on('click', classPrefix('.delete-node'), this._deleteNode);
      this._domViewer.on('select', this._setNode).on('deselect', this._back);
      lib_chobitsu.domain('Overlay').on('inspectNodeRequested', this._inspectNodeRequested);
      this._splitMediaQuery.on('match', function () {
        _this3._splitMode = true;
        _this3._showDetail();
      });
      this._splitMediaQuery.on('unmatch', function () {
        _this3._splitMode = false;
        _this3._detail.hide();
      });
      lib_emitter.on(lib_emitter.SCALE, this._updateScale);
    }
  }, {
    key: "_updateHistory",
    value: function _updateHistory() {
      var console = this._container.get('console');
      if (!console) return;
      var history = this._history;
      history.unshift(this._curNode);
      if (history.length > 5) history.pop();
      for (var i = 0; i < 5; i++) {
        console.setGlobal("$".concat(i), history[i]);
      }
    }
  }]);
}(Tool);

var isElExist = function isElExist(val) {
  return isEl_default()(val) && val.parentNode;
};
function getCrumbs(el) {
  var ret = [];
  var i = 0;
  while (el) {
    ret.push({
      text: formatNodeName(el, {
        noAttr: true
      }),
      idx: i++
    });
    el = el.parentElement;
  }
  return ret.reverse();
}
// EXTERNAL MODULE: ./node_modules/licia/now.js
var now = __webpack_require__(3981);
var now_default = /*#__PURE__*/__webpack_require__.n(now);
// EXTERNAL MODULE: ./node_modules/licia/loadJs.js
var loadJs = __webpack_require__(4866);
var loadJs_default = /*#__PURE__*/__webpack_require__.n(loadJs);
;// CONCATENATED MODULE: ./src/Snippets/defSnippets.js












var style = null;
/* harmony default export */ var defSnippets = ([{
  name: 'Border All',
  fn: function fn() {
    if (style) {
      evalCss.remove(style);
      style = null;
      return;
    }
    style = evalCss('* { outline: 2px dashed #707d8b; outline-offset: -3px; }', document.head);
  },
  desc: 'Add color borders to all elements'
}, {
  name: 'Refresh Page',
  fn: function fn() {
    var url = new (Url_default())();
    url.setQuery('timestamp', now_default()());
    window.location.replace(url.toString());
  },
  desc: 'Add timestamp to url and refresh'
}, {
  name: 'Search Text',
  fn: function fn() {
    modal/* default */.A.prompt('Enter the text').then(function (keyword) {
      if (!keyword || trim_default()(keyword) === '') {
        return;
      }
      search(keyword);
    });
  },
  desc: 'Highlight given text on page'
}, {
  name: 'Edit Page',
  fn: function fn() {
    var body = document.body;
    body.contentEditable = body.contentEditable !== 'true';
  },
  desc: 'Toggle body contentEditable'
}, {
  name: 'Fit Screen',
  // https://achrafkassioui.com/birdview/
  fn: function fn() {
    var body = document.body;
    var html = document.documentElement;
    var $body = $_default()(body);
    if ($body.data('scaled')) {
      window.scrollTo(0, +$body.data('scaled'));
      $body.rmAttr('data-scaled');
      $body.css('transform', 'none');
    } else {
      var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      var scaleVal = viewportHeight / documentHeight;
      $body.css('transform', "scale(".concat(scaleVal, ")"));
      $body.data('scaled', window.scrollY);
      window.scrollTo(0, documentHeight / 2 - viewportHeight / 2);
    }
  },
  desc: 'Scale down the whole page to fit screen'
}, {
  name: 'Load Monitor Plugin',
  fn: function fn() {
    loadPlugin('monitor');
  },
  desc: 'Display page fps and memory'
}, {
  name: 'Load Features Plugin',
  fn: function fn() {
    loadPlugin('features');
  },
  desc: 'Browser feature detections'
}, {
  name: 'Load Timing Plugin',
  fn: function fn() {
    loadPlugin('timing');
  },
  desc: 'Show performance and resource timing'
}, {
  name: 'Load Code Plugin',
  fn: function fn() {
    loadPlugin('code');
  },
  desc: 'Edit and run JavaScript'
}, {
  name: 'Load Benchmark Plugin',
  fn: function fn() {
    loadPlugin('benchmark');
  },
  desc: 'Run JavaScript benchmarks'
}, {
  name: 'Load Geolocation Plugin',
  fn: function fn() {
    loadPlugin('geolocation');
  },
  desc: 'Test geolocation'
}, {
  name: 'Load Orientation Plugin',
  fn: function fn() {
    loadPlugin('orientation');
  },
  desc: 'Test orientation api'
}, {
  name: 'Load Touches Plugin',
  fn: function fn() {
    loadPlugin('touches');
  },
  desc: 'Visualize screen touches'
}]);
evalCss(__webpack_require__(7516), document.head);
function search(text) {
  var root = document.body;
  var regText = new RegExp(text, 'ig');
  traverse(root, function (node) {
    var $node = $_default()(node);
    if (!$node.hasClass('eruda-search-highlight-block')) return;
    return document.createTextNode($node.text());
  });
  traverse(root, function (node) {
    if (node.nodeType !== 3) return;
    var val = node.nodeValue;
    val = val.replace(regText, function (match) {
      return "<span class=\"eruda-keyword\">".concat(match, "</span>");
    });
    if (val === node.nodeValue) return;
    var $ret = $_default()(document.createElement('div'));
    $ret.html(val);
    $ret.addClass('eruda-search-highlight-block');
    return $ret.get(0);
  });
}
function traverse(root, processor) {
  var childNodes = root.childNodes;
  if (isErudaEl(root)) return;
  for (var i = 0, len = childNodes.length; i < len; i++) {
    var newNode = traverse(childNodes[i], processor);
    if (newNode) root.replaceChild(newNode, childNodes[i]);
  }
  return processor(root);
}
function loadPlugin(name) {
  var globalName = 'eruda' + upperFirst_default()(name);
  if (window[globalName]) return;
  var protocol = location.protocol;
  if (!startWith_default()(protocol, 'http')) protocol = 'http:';
  loadJs_default()("".concat(protocol, "//cdn.jsdelivr.net/npm/eruda-").concat(name, "@").concat(pluginVersion[name]), function (isLoaded) {
    if (!isLoaded || !window[globalName]) return lib_logger.error('Fail to load plugin ' + name);
    lib_emitter.emit(lib_emitter.ADD, window[globalName]);
    lib_emitter.emit(lib_emitter.SHOW, name);
  });
}
var pluginVersion = {
  monitor: '1.0.2',
  features: '2.0.0',
  timing: '2.0.1',
  code: '2.2.0',
  benchmark: '2.0.1',
  geolocation: '2.0.0',
  orientation: '2.0.0',
  touches: '2.1.0'
};
// EXTERNAL MODULE: ./node_modules/licia/remove.js
var licia_remove = __webpack_require__(961);
var remove_default = /*#__PURE__*/__webpack_require__.n(licia_remove);
;// CONCATENATED MODULE: ./src/Snippets/Snippets.js






function Snippets_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Snippets_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Snippets_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Snippets_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









var Snippets = /*#__PURE__*/function (_Tool) {
  function Snippets() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Snippets);
    _this = Snippets_callSuper(this, Snippets);
    _this._style = evalCss(__webpack_require__(8025));
    _this.name = 'snippets';
    _this._snippets = [];
    return _this;
  }
  (0,inherits/* default */.A)(Snippets, _Tool);
  return (0,createClass/* default */.A)(Snippets, [{
    key: "init",
    value: function init($el) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Snippets.prototype), "init", this).call(this, $el);
      this._bindEvent();
      this._addDefSnippets();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Snippets.prototype), "destroy", this).call(this);
      evalCss.remove(this._style);
    }
  }, {
    key: "add",
    value: function add(name, fn, desc) {
      this._snippets.push({
        name: name,
        fn: fn,
        desc: desc
      });
      this._render();
      return this;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      remove_default()(this._snippets, function (snippet) {
        return snippet.name === name;
      });
      this._render();
      return this;
    }
  }, {
    key: "run",
    value: function run(name) {
      var snippets = this._snippets;
      for (var i = 0, len = snippets.length; i < len; i++) {
        if (snippets[i].name === name) this._run(i);
      }
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._snippets = [];
      this._render();
      return this;
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var self = this;
      this._$el.on('click', '.eruda-run', function () {
        var idx = $_default()(this).data('idx');
        self._run(idx);
      });
    }
  }, {
    key: "_run",
    value: function _run(idx) {
      this._snippets[idx].fn.call(null);
    }
  }, {
    key: "_addDefSnippets",
    value: function _addDefSnippets() {
      var _this2 = this;
      each_default()(defSnippets, function (snippet) {
        _this2.add(snippet.name, snippet.fn, snippet.desc);
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var html = map_default()(this._snippets, function (snippet, idx) {
        return "<div class=\"".concat(classPrefix('section run'), "\" data-idx=\"").concat(idx, "\">\n        <h2 class=\"").concat(classPrefix('name'), "\">").concat(escape_default()(snippet.name), "\n          <div class=\"").concat(classPrefix('btn'), "\">\n            <span class=\"").concat(classPrefix('icon-play'), "\"></span>\n          </div>\n        </h2>\n        <div class=\"").concat(classPrefix('description'), "\">\n          ").concat(escape_default()(snippet.desc), "\n        </div>\n      </div>");
      }).join('');
      this._renderHtml(html);
    }
  }, {
    key: "_renderHtml",
    value: function _renderHtml(html) {
      if (html === this._lastHtml) return;
      this._lastHtml = html;
      this._$el.html(html);
    }
  }]);
}(Tool);

// EXTERNAL MODULE: ./node_modules/licia/sameOrigin.js
var sameOrigin = __webpack_require__(4497);
var sameOrigin_default = /*#__PURE__*/__webpack_require__.n(sameOrigin);
// EXTERNAL MODULE: ./node_modules/licia/ajax.js
var ajax = __webpack_require__(311);
var ajax_default = /*#__PURE__*/__webpack_require__.n(ajax);
// EXTERNAL MODULE: ./node_modules/licia/toArr.js
var toArr = __webpack_require__(769);
var toArr_default = /*#__PURE__*/__webpack_require__.n(toArr);
// EXTERNAL MODULE: ./node_modules/licia/concat.js
var concat = __webpack_require__(4069);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);
;// CONCATENATED MODULE: ./src/Resources/Storage.js














var Storage_Storage = /*#__PURE__*/function () {
  function Storage($container, devtools, resources, type) {
    var _this = this;
    (0,classCallCheck/* default */.A)(this, Storage);
    (0,defineProperty/* default */.A)(this, "_updateGridHeight", function (scale) {
      _this._dataGrid.setOption({
        minHeight: 60 * scale,
        maxHeight: 223 * scale
      });
    });
    this._type = type;
    this._$container = $container;
    this._devtools = devtools;
    this._resources = resources;
    this._selectedItem = null;
    this._storeData = [];
    this._initTpl();
    this._dataGrid = new data_grid/* default */.A(this._$dataGrid.get(0), {
      columns: [{
        id: 'key',
        title: 'Key',
        weight: 30
      }, {
        id: 'value',
        title: 'Value',
        weight: 90
      }],
      minHeight: 60,
      maxHeight: 223
    });
    this._bindEvent();
  }
  return (0,createClass/* default */.A)(Storage, [{
    key: "destroy",
    value: function destroy() {
      lib_emitter.off(lib_emitter.SCALE, this._updateGridHeight);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var dataGrid = this._dataGrid;
      this._refreshStorage();
      dataGrid.clear();
      each_default()(this._storeData, function (_ref) {
        var key = _ref.key,
          val = _ref.val;
        dataGrid.append({
          key: key,
          value: val
        }, {
          selectable: true
        });
      });
    }
  }, {
    key: "_refreshStorage",
    value: function _refreshStorage() {
      var resources = this._resources;
      var store = safeStorage(this._type, false);
      if (!store) return;
      var storeData = [];

      // Mobile safari is not able to loop through localStorage directly.
      store = JSON.parse(JSON.stringify(store));
      each_default()(store, function (val, key) {
        // According to issue 20, not all values are guaranteed to be string.
        if (!isStr_default()(val)) return;
        if (resources.config.get('hideErudaSetting')) {
          if (startWith_default()(key, 'eruda') || key === 'active-eruda') return;
        }
        storeData.push({
          key: key,
          val: truncate_default()(val, 200)
        });
      });
      this._storeData = storeData;
    }
  }, {
    key: "_updateButtons",
    value: function _updateButtons() {
      var $container = this._$container;
      var $showDetail = $container.find(classPrefix('.show-detail'));
      var $deleteStorage = $container.find(classPrefix('.delete-storage'));
      var $copyStorage = $container.find(classPrefix('.copy-storage'));
      var btnDisabled = classPrefix('btn-disabled');
      $showDetail.addClass(btnDisabled);
      $deleteStorage.addClass(btnDisabled);
      $copyStorage.addClass(btnDisabled);
      if (this._selectedItem) {
        $showDetail.rmClass(btnDisabled);
        $deleteStorage.rmClass(btnDisabled);
        $copyStorage.rmClass(btnDisabled);
      }
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $container = this._$container;
      var type = this._type;
      $container.html(classPrefix("<h2 class=\"title\">\n      ".concat(type === 'local' ? 'Local' : 'Session', " Storage\n      <div class=\"btn refresh-storage\">\n        <span class=\"icon icon-refresh\"></span>\n      </div>\n      <div class=\"btn show-detail btn-disabled\">\n        <span class=\"icon icon-eye\"></span>\n      </div>\n      <div class=\"btn copy-storage btn-disabled\">\n        <span class=\"icon icon-copy\"></span>\n      </div>\n      <div class=\"btn delete-storage btn-disabled\">\n        <span class=\"icon icon-delete\"></span>\n      </div>\n      <div class=\"btn clear-storage\">\n        <span class=\"icon icon-clear\"></span>\n      </div>\n      <div class=\"btn filter\">\n        <span class=\"icon icon-filter\"></span>\n      </div>\n      <div class=\"btn filter-text\"></div>\n    </h2>\n    <div class=\"data-grid\"></div>")));
      this._$dataGrid = $container.find(classPrefix('.data-grid'));
      this._$filterText = $container.find(classPrefix('.filter-text'));
    }
  }, {
    key: "_getVal",
    value: function _getVal(key) {
      return this._type === 'local' ? localStorage.getItem(key) : sessionStorage.getItem(key);
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      var type = this._type;
      var devtools = this._devtools;
      this._$container.on('click', classPrefix('.refresh-storage'), function () {
        devtools.notify('Refreshed', {
          icon: 'success'
        });
        _this2.refresh();
      }).on('click', classPrefix('.clear-storage'), function () {
        each_default()(_this2._storeData, function (val) {
          if (type === 'local') {
            localStorage.removeItem(val.key);
          } else {
            sessionStorage.removeItem(val.key);
          }
        });
        _this2.refresh();
      }).on('click', classPrefix('.show-detail'), function () {
        var key = _this2._selectedItem;
        var val = _this2._getVal(key);
        try {
          showSources('object', JSON.parse(val));
        } catch (e) {
          showSources('raw', val);
        }
      }).on('click', classPrefix('.copy-storage'), function () {
        var key = _this2._selectedItem;
        copy_default()(_this2._getVal(key));
        devtools.notify('Copied', {
          icon: 'success'
        });
      }).on('click', classPrefix('.filter'), function () {
        modal/* default */.A.prompt('Filter').then(function (filter) {
          if (isNull_default()(filter)) return;
          filter = trim_default()(filter);
          _this2._$filterText.text(filter);
          _this2._dataGrid.setOption('filter', filter);
        });
      }).on('click', classPrefix('.delete-storage'), function () {
        var key = _this2._selectedItem;
        if (type === 'local') {
          localStorage.removeItem(key);
        } else {
          sessionStorage.removeItem(key);
        }
        _this2.refresh();
      });
      function showSources(type, data) {
        var sources = devtools.get('sources');
        if (!sources) return;
        sources.set(type, data);
        devtools.showTool('sources');
        return true;
      }
      this._dataGrid.on('select', function (node) {
        _this2._selectedItem = node.data.key;
        _this2._updateButtons();
      }).on('deselect', function () {
        _this2._selectedItem = null;
        _this2._updateButtons();
      });
      lib_emitter.on(lib_emitter.SCALE, this._updateGridHeight);
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/Resources/util.js

function setState($el, state) {
  $el.rmClass(classPrefix('ok')).rmClass(classPrefix('danger')).rmClass(classPrefix('warn')).addClass(classPrefix(state));
}
function getState(type, len) {
  if (len === 0) return '';
  var warn = 0;
  var danger = 0;
  switch (type) {
    case 'cookie':
      warn = 30;
      danger = 60;
      break;
    case 'script':
      warn = 5;
      danger = 10;
      break;
    case 'stylesheet':
      warn = 4;
      danger = 8;
      break;
    case 'image':
      warn = 50;
      danger = 100;
      break;
  }
  if (len >= danger) return 'danger';
  if (len >= warn) return 'warn';
  return 'ok';
}
;// CONCATENATED MODULE: ./src/Resources/Cookie.js












var Cookie = /*#__PURE__*/function () {
  function Cookie($container, devtools) {
    (0,classCallCheck/* default */.A)(this, Cookie);
    this._$container = $container;
    this._devtools = devtools;
    this._selectedItem = null;
    this._initTpl();
    this._dataGrid = new data_grid/* default */.A(this._$dataGrid.get(0), {
      columns: [{
        id: 'key',
        title: 'Key',
        weight: 30
      }, {
        id: 'value',
        title: 'Value',
        weight: 90
      }],
      minHeight: 60,
      maxHeight: 223
    });
    this._bindEvent();
  }
  return (0,createClass/* default */.A)(Cookie, [{
    key: "refresh",
    value: function refresh() {
      var $container = this._$container;
      var dataGrid = this._dataGrid;
      var _chobitsu$domain$getC = lib_chobitsu.domain('Network').getCookies(),
        cookies = _chobitsu$domain$getC.cookies;
      var cookieData = map_default()(cookies, function (_ref) {
        var name = _ref.name,
          value = _ref.value;
        return {
          key: name,
          val: value
        };
      });
      dataGrid.clear();
      each_default()(cookieData, function (_ref2) {
        var key = _ref2.key,
          val = _ref2.val;
        dataGrid.append({
          key: key,
          value: val
        }, {
          selectable: true
        });
      });
      var cookieState = getState('cookie', cookieData.length);
      setState($container, cookieState);
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $container = this._$container;
      $container.html(classPrefix("<h2 class=\"title\">\n      Cookie\n      <div class=\"btn refresh-cookie\">\n        <span class=\"icon-refresh\"></span>\n      </div>\n      <div class=\"btn show-detail btn-disabled\">\n        <span class=\"icon icon-eye\"></span>\n      </div>\n      <div class=\"btn copy-cookie btn-disabled\">\n        <span class=\"icon icon-copy\"></span>\n      </div>\n      <div class=\"btn delete-cookie btn-disabled\">\n        <span class=\"icon icon-delete\"></span>\n      </div>\n      <div class=\"btn clear-cookie\">\n        <span class=\"icon-clear\"></span>\n      </div>\n      <div class=\"btn filter\" data-type=\"cookie\">\n        <span class=\"icon-filter\"></span>\n      </div>\n      <div class=\"btn filter-text\"></div>\n    </h2>\n    <div class=\"data-grid\"></div>"));
      this._$dataGrid = $container.find(classPrefix('.data-grid'));
      this._$filterText = $container.find(classPrefix('.filter-text'));
    }
  }, {
    key: "_updateButtons",
    value: function _updateButtons() {
      var $container = this._$container;
      var $showDetail = $container.find(classPrefix('.show-detail'));
      var $deleteCookie = $container.find(classPrefix('.delete-cookie'));
      var $copyCookie = $container.find(classPrefix('.copy-cookie'));
      var btnDisabled = classPrefix('btn-disabled');
      $showDetail.addClass(btnDisabled);
      $deleteCookie.addClass(btnDisabled);
      $copyCookie.addClass(btnDisabled);
      if (this._selectedItem) {
        $showDetail.rmClass(btnDisabled);
        $deleteCookie.rmClass(btnDisabled);
        $copyCookie.rmClass(btnDisabled);
      }
    }
  }, {
    key: "_getVal",
    value: function _getVal(key) {
      var _chobitsu$domain$getC2 = lib_chobitsu.domain('Network').getCookies(),
        cookies = _chobitsu$domain$getC2.cookies;
      for (var i = 0, len = cookies.length; i < len; i++) {
        if (cookies[i].name === key) {
          return cookies[i].value;
        }
      }
      return '';
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this = this;
      var devtools = this._devtools;
      this._$container.on('click', classPrefix('.refresh-cookie'), function () {
        devtools.notify('Refreshed', {
          icon: 'success'
        });
        _this.refresh();
      }).on('click', classPrefix('.clear-cookie'), function () {
        lib_chobitsu.domain('Storage').clearDataForOrigin({
          storageTypes: 'cookies'
        });
        _this.refresh();
      }).on('click', classPrefix('.delete-cookie'), function () {
        var key = _this._selectedItem;
        lib_chobitsu.domain('Network').deleteCookies({
          name: key
        });
        _this.refresh();
      }).on('click', classPrefix('.show-detail'), function () {
        var key = _this._selectedItem;
        var val = _this._getVal(key);
        try {
          showSources('object', JSON.parse(val));
        } catch (e) {
          showSources('raw', val);
        }
      }).on('click', classPrefix('.copy-cookie'), function () {
        var key = _this._selectedItem;
        copy_default()(_this._getVal(key));
        devtools.notify('Copied', {
          icon: 'success'
        });
      }).on('click', classPrefix('.filter'), function () {
        modal/* default */.A.prompt('Filter').then(function (filter) {
          if (isNull_default()(filter)) return;
          filter = trim_default()(filter);
          _this._filter = filter;
          _this._$filterText.text(filter);
          _this._dataGrid.setOption('filter', filter);
        });
      });
      function showSources(type, data) {
        var sources = devtools.get('sources');
        if (!sources) return;
        sources.set(type, data);
        devtools.showTool('sources');
        return true;
      }
      this._dataGrid.on('select', function (node) {
        _this._selectedItem = node.data.key;
        _this._updateButtons();
      }).on('deselect', function () {
        _this._selectedItem = null;
        _this._updateButtons();
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/Resources/Resources.js






function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Resources_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Resources_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Resources_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Resources_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



















var Resources = /*#__PURE__*/function (_Tool) {
  function Resources() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Resources);
    _this = Resources_callSuper(this, Resources);
    _this._style = evalCss(__webpack_require__(3815));
    _this.name = 'resources';
    _this._hideErudaSetting = false;
    _this._observeElement = true;
    return _this;
  }
  (0,inherits/* default */.A)(Resources, _Tool);
  return (0,createClass/* default */.A)(Resources, [{
    key: "init",
    value: function init($el, container) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Resources.prototype), "init", this).call(this, $el);
      this._container = container;
      this._initTpl();
      this._localStorage = new Storage_Storage(this._$localStorage, container, this, 'local');
      this._sessionStorage = new Storage_Storage(this._$sessionStorage, container, this, 'session');
      this._cookie = new Cookie(this._$cookie, container);
      this._bindEvent();
      this._initObserver();
      this._initCfg();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      return this.refreshLocalStorage().refreshSessionStorage().refreshCookie().refreshScript().refreshStylesheet().refreshIframe().refreshImage();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Resources.prototype), "destroy", this).call(this);
      this._localStorage.destroy();
      this._sessionStorage.destroy();
      this._disableObserver();
      evalCss.remove(this._style);
      this._rmCfg();
    }
  }, {
    key: "refreshScript",
    value: function refreshScript() {
      var scriptData = [];
      $_default()('script').each(function () {
        var src = this.src;
        if (src !== '') scriptData.push(src);
      });
      scriptData = unique_default()(scriptData);
      var scriptState = getState('script', scriptData.length);
      var scriptDataHtml = '<li>Empty</li>';
      if (!isEmpty_default()(scriptData)) {
        scriptDataHtml = map_default()(scriptData, function (script) {
          script = escape_default()(script);
          return "<li><a href=\"".concat(script, "\" target=\"_blank\" class=\"").concat(classPrefix('js-link'), "\">").concat(script, "</a></li>");
        }).join('');
      }
      var scriptHtml = "<h2 class=\"".concat(classPrefix('title'), "\">\n      Script\n      <div class=\"").concat(classPrefix('btn refresh-script'), "\">\n        <span class=\"").concat(classPrefix('icon-refresh'), "\"></span>\n      </div>\n    </h2>\n    <ul class=\"").concat(classPrefix('link-list'), "\">\n      ").concat(scriptDataHtml, "\n    </ul>");
      var $script = this._$script;
      setState($script, scriptState);
      $script.html(scriptHtml);
      return this;
    }
  }, {
    key: "refreshStylesheet",
    value: function refreshStylesheet() {
      var stylesheetData = [];
      $_default()('link').each(function () {
        if (this.rel !== 'stylesheet') return;
        stylesheetData.push(this.href);
      });
      stylesheetData = unique_default()(stylesheetData);
      var stylesheetState = getState('stylesheet', stylesheetData.length);
      var stylesheetDataHtml = '<li>Empty</li>';
      if (!isEmpty_default()(stylesheetData)) {
        stylesheetDataHtml = map_default()(stylesheetData, function (stylesheet) {
          stylesheet = escape_default()(stylesheet);
          return " <li><a href=\"".concat(stylesheet, "\" target=\"_blank\" class=\"").concat(classPrefix('css-link'), "\">").concat(stylesheet, "</a></li>");
        }).join('');
      }
      var stylesheetHtml = "<h2 class=\"".concat(classPrefix('title'), "\">\n      Stylesheet\n      <div class=\"").concat(classPrefix('btn refresh-stylesheet'), "\">\n        <span class=\"").concat(classPrefix('icon-refresh'), "\"></span>\n      </div>\n    </h2>\n    <ul class=\"").concat(classPrefix('link-list'), "\">\n      ").concat(stylesheetDataHtml, "\n    </ul>");
      var $stylesheet = this._$stylesheet;
      setState($stylesheet, stylesheetState);
      $stylesheet.html(stylesheetHtml);
      return this;
    }
  }, {
    key: "refreshIframe",
    value: function refreshIframe() {
      var iframeData = [];
      $_default()('iframe').each(function () {
        var $this = $_default()(this);
        var src = $this.attr('src');
        if (src) iframeData.push(src);
      });
      iframeData = unique_default()(iframeData);
      var iframeDataHtml = '<li>Empty</li>';
      if (!isEmpty_default()(iframeData)) {
        iframeDataHtml = map_default()(iframeData, function (iframe) {
          iframe = escape_default()(iframe);
          return "<li><a href=\"".concat(iframe, "\" target=\"_blank\" class=\"").concat(classPrefix('iframe-link'), "\">").concat(iframe, "</a></li>");
        }).join('');
      }
      var iframeHtml = "<h2 class=\"".concat(classPrefix('title'), "\">\n      Iframe\n      <div class=\"").concat(classPrefix('btn refresh-iframe'), "\">\n        <span class=\"").concat(classPrefix('icon-refresh'), "\"></span>\n      </div>\n    </h2>\n    <ul class=\"").concat(classPrefix('link-list'), "\">\n      ").concat(iframeDataHtml, "\n    </ul>");
      this._$iframe.html(iframeHtml);
      return this;
    }
  }, {
    key: "refreshLocalStorage",
    value: function refreshLocalStorage() {
      this._localStorage.refresh();
      return this;
    }
  }, {
    key: "refreshSessionStorage",
    value: function refreshSessionStorage() {
      this._sessionStorage.refresh();
      return this;
    }
  }, {
    key: "refreshCookie",
    value: function refreshCookie() {
      this._cookie.refresh();
      return this;
    }
  }, {
    key: "refreshImage",
    value: function refreshImage() {
      var imageData = [];
      var performance = this._performance = window.webkitPerformance || window.performance;
      if (performance && performance.getEntries) {
        var entries = this._performance.getEntries();
        entries.forEach(function (entry) {
          if (entry.initiatorType === 'img' || isImg(entry.name)) {
            if (contain_default()(entry.name, 'exclude=true')) {
              return;
            }
            imageData.push(entry.name);
          }
        });
      } else {
        $_default()('img').each(function () {
          var $this = $_default()(this);
          var src = $this.attr('src');
          if ($this.data('exclude') === 'true') {
            return;
          }
          imageData.push(src);
        });
      }
      imageData = unique_default()(imageData);
      imageData.sort();
      var imageState = getState('image', imageData.length);
      var imageDataHtml = '<li>Empty</li>';
      if (!isEmpty_default()(imageData)) {
        imageDataHtml = map_default()(imageData, function (image) {
          return "<li class=\"".concat(classPrefix('image'), "\">\n          <img src=\"").concat(escape_default()(image), "\" data-exclude=\"true\" class=\"").concat(classPrefix('img-link'), "\"/>\n        </li>");
        }).join('');
      }
      var imageHtml = "<h2 class=\"".concat(classPrefix('title'), "\">\n      Image\n      <div class=\"").concat(classPrefix('btn refresh-image'), "\">\n        <span class=\"").concat(classPrefix('icon-refresh'), "\"></span>\n      </div>\n    </h2>\n    <ul class=\"").concat(classPrefix('image-list'), "\">\n      ").concat(imageDataHtml, "\n    </ul>");
      var $image = this._$image;
      setState($image, imageState);
      $image.html(imageHtml);
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Resources.prototype), "show", this).call(this);
      if (this._observeElement) this._enableObserver();
      return this.refresh();
    }
  }, {
    key: "hide",
    value: function hide() {
      this._disableObserver();
      return (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Resources.prototype), "hide", this).call(this);
    }
  }, {
    key: "_initTpl",
    value: function _initTpl() {
      var $el = this._$el;
      $el.html(classPrefix("<div class=\"section local-storage\"></div>\n      <div class=\"section session-storage\"></div>\n      <div class=\"section cookie\"></div>\n      <div class=\"section script\"></div>\n      <div class=\"section stylesheet\"></div>\n      <div class=\"section iframe\"></div>\n      <div class=\"section image\"></div>"));
      this._$localStorage = $el.find(classPrefix('.local-storage'));
      this._$sessionStorage = $el.find(classPrefix('.session-storage'));
      this._$cookie = $el.find(classPrefix('.cookie'));
      this._$script = $el.find(classPrefix('.script'));
      this._$stylesheet = $el.find(classPrefix('.stylesheet'));
      this._$iframe = $el.find(classPrefix('.iframe'));
      this._$image = $el.find(classPrefix('.image'));
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      var $el = this._$el;
      var container = this._container;
      $el.on('click', '.eruda-refresh-script', function () {
        container.notify('Refreshed', {
          icon: 'success'
        });
        _this2.refreshScript();
      }).on('click', '.eruda-refresh-stylesheet', function () {
        container.notify('Refreshed', {
          icon: 'success'
        });
        _this2.refreshStylesheet();
      }).on('click', '.eruda-refresh-iframe', function () {
        container.notify('Refreshed', {
          icon: 'success'
        });
        _this2.refreshIframe();
      }).on('click', '.eruda-refresh-image', function () {
        container.notify('Refreshed', {
          icon: 'success'
        });
        _this2.refreshImage();
      }).on('click', '.eruda-img-link', function () {
        var src = $_default()(this).attr('src');
        showSources('img', src);
      }).on('click', '.eruda-css-link', linkFactory('css')).on('click', '.eruda-js-link', linkFactory('js')).on('click', '.eruda-iframe-link', linkFactory('iframe'));
      function showSources(type, data) {
        var sources = container.get('sources');
        if (!sources) return;
        sources.set(type, data);
        container.showTool('sources');
        return true;
      }
      function linkFactory(type) {
        return function (e) {
          if (!container.get('sources')) return;
          e.preventDefault();
          var url = $_default()(this).attr('href');
          if (type === 'iframe' || !sameOrigin_default()(location.href, url)) {
            showSources('iframe', url);
          } else {
            ajax_default()({
              url: url,
              success: function success(data) {
                showSources(type, data);
              },
              dataType: 'raw'
            });
          }
        };
      }
    }
  }, {
    key: "_rmCfg",
    value: function _rmCfg() {
      var cfg = this.config;
      var settings = this._container.get('settings');
      if (!settings) return;
      settings.remove(cfg, 'hideErudaSetting').remove(cfg, 'observeElement').remove('Resources');
    }
  }, {
    key: "_initCfg",
    value: function _initCfg() {
      var _this3 = this;
      var cfg = this.config = Settings.createCfg('resources', {
        hideErudaSetting: true,
        observeElement: true
      });
      if (cfg.get('hideErudaSetting')) this._hideErudaSetting = true;
      if (!cfg.get('observeElement')) this._observeElement = false;
      cfg.on('change', function (key, val) {
        switch (key) {
          case 'hideErudaSetting':
            _this3._hideErudaSetting = val;
            return;
          case 'observeElement':
            _this3._observeElement = val;
            return val ? _this3._enableObserver() : _this3._disableObserver();
        }
      });
      var settings = this._container.get('settings');
      settings.text('Resources').switch(cfg, 'hideErudaSetting', 'Hide Eruda Setting').switch(cfg, 'observeElement', 'Auto Refresh Elements').separator();
    }
  }, {
    key: "_initObserver",
    value: function _initObserver() {
      var _this4 = this;
      this._observer = new (MutationObserver_default())(function (mutations) {
        each_default()(mutations, function (mutation) {
          _this4._handleMutation(mutation);
        });
      });
    }
  }, {
    key: "_handleMutation",
    value: function _handleMutation(mutation) {
      var _this5 = this;
      if (isErudaEl(mutation.target)) return;
      var checkEl = function checkEl(el) {
        var tagName = getLowerCaseTagName(el);
        switch (tagName) {
          case 'script':
            _this5.refreshScript();
            break;
          case 'img':
            _this5.refreshImage();
            break;
          case 'link':
            _this5.refreshStylesheet();
            break;
        }
      };
      if (mutation.type === 'attributes') {
        checkEl(mutation.target);
      } else if (mutation.type === 'childList') {
        checkEl(mutation.target);
        var nodes = toArr_default()(mutation.addedNodes);
        nodes = concat_default()(nodes, toArr_default()(mutation.removedNodes));
        var _iterator = _createForOfIteratorHelper(nodes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;
            checkEl(node);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "_enableObserver",
    value: function _enableObserver() {
      this._observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
  }, {
    key: "_disableObserver",
    value: function _disableObserver() {
      this._observer.disconnect();
    }
  }]);
}(Tool);

function getLowerCaseTagName(el) {
  if (!el.tagName) return '';
  return el.tagName.toLowerCase();
}
var regImg = /\.(jpeg|jpg|gif|png)$/;
var isImg = function isImg(url) {
  return regImg.test(url);
};
// EXTERNAL MODULE: ./node_modules/licia/detectBrowser.js
var detectBrowser = __webpack_require__(6620);
var detectBrowser_default = /*#__PURE__*/__webpack_require__.n(detectBrowser);
;// CONCATENATED MODULE: ./src/Info/defInfo.js



var browser = detectBrowser_default()();
/* harmony default export */ var defInfo = ([{
  name: 'Location',
  val: function val() {
    return escape_default()(location.href);
  }
}, {
  name: 'User Agent',
  val: navigator.userAgent
}, {
  name: 'Device',
  val: ['<table><tbody>', "<tr><td class=\"eruda-device-key\">screen</td><td>".concat(screen.width, " * ").concat(screen.height, "</td></tr>"), "<tr><td>viewport</td><td>".concat(window.innerWidth, " * ").concat(window.innerHeight, "</td></tr>"), "<tr><td>pixel ratio</td><td>".concat(window.devicePixelRatio, "</td></tr>"), '</tbody></table>'].join('')
}, {
  name: 'System',
  val: ['<table><tbody>', "<tr><td class=\"eruda-system-key\">os</td><td>".concat(detectOs_default()(), "</td></tr>"), "<tr><td>browser</td><td>".concat(browser.name + ' ' + browser.version, "</td></tr>"), '</tbody></table>'].join('')
}, {
  name: 'About',
  val: '<a href="https://eruda.liriliri.io" target="_blank">Eruda v' + "3.2.1" + '</a>'
}, {
  name: 'Backers',
  val: function val() {
    return "\n        <a rel=\"noreferrer noopener\" href=\"https://opencollective.com/eruda\" target=\"_blank\">\n          <img data-exclude=\"true\" style=\"width: 100%;\" loading=\"lazy\" src=\"https://opencollective.com/eruda/backers.svg?width=".concat(window.innerWidth * 1.5, "&exclude=true\">\n        </a>");
  }
}]);
// EXTERNAL MODULE: ./node_modules/licia/cloneDeep.js
var cloneDeep = __webpack_require__(1034);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./src/Info/Info.js






function Info_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Info_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Info_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Info_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }












var Info = /*#__PURE__*/function (_Tool) {
  function Info() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Info);
    _this = Info_callSuper(this, Info);
    _this._style = evalCss(__webpack_require__(1317));
    _this.name = 'info';
    _this._infos = [];
    return _this;
  }
  (0,inherits/* default */.A)(Info, _Tool);
  return (0,createClass/* default */.A)(Info, [{
    key: "init",
    value: function init($el, container) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Info.prototype), "init", this).call(this, $el);
      this._container = container;
      this._addDefInfo();
      this._bindEvent();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Info.prototype), "destroy", this).call(this);
      evalCss.remove(this._style);
    }
  }, {
    key: "add",
    value: function add(name, val) {
      var infos = this._infos;
      var isUpdate = false;
      each_default()(infos, function (info) {
        if (name !== info.name) return;
        info.val = val;
        isUpdate = true;
      });
      if (!isUpdate) infos.push({
        name: name,
        val: val
      });
      this._render();
      return this;
    }
  }, {
    key: "get",
    value: function get(name) {
      var infos = this._infos;
      if (isUndef_default()(name)) {
        return cloneDeep_default()(infos);
      }
      var result;
      each_default()(infos, function (info) {
        if (name === info.name) result = info.val;
      });
      return result;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      var infos = this._infos;
      for (var i = infos.length - 1; i >= 0; i--) {
        if (infos[i].name === name) infos.splice(i, 1);
      }
      this._render();
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._infos = [];
      this._render();
      return this;
    }
  }, {
    key: "_addDefInfo",
    value: function _addDefInfo() {
      var _this2 = this;
      each_default()(defInfo, function (info) {
        return _this2.add(info.name, info.val);
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var infos = [];
      each_default()(this._infos, function (_ref) {
        var name = _ref.name,
          val = _ref.val;
        if (isFn_default()(val)) val = val();
        infos.push({
          name: name,
          val: val
        });
      });
      var html = "<ul>".concat(map_default()(infos, function (info) {
        return "<li><h2 class=\"".concat(classPrefix('title'), "\">").concat(escape_default()(info.name), "<span class=\"").concat(classPrefix('icon-copy copy'), "\"></span></h2><div class=\"").concat(classPrefix('content'), "\">").concat(info.val, "</div></li>");
      }).join(''), "</ul>");
      this._renderHtml(html);
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var container = this._container;
      this._$el.on('click', classPrefix('.copy'), function () {
        var $li = $_default()(this).parent().parent();
        var name = $li.find(classPrefix('.title')).text();
        var content = $li.find(classPrefix('.content')).text();
        copy_default()("".concat(name, ": ").concat(content));
        container.notify('Copied', {
          icon: 'success'
        });
      });
    }
  }, {
    key: "_renderHtml",
    value: function _renderHtml(html) {
      if (html === this._lastHtml) return;
      this._lastHtml = html;
      this._$el.html(html);
    }
  }]);
}(Tool);

// EXTERNAL MODULE: ./node_modules/luna-object-viewer/esm/object-viewer/index.js + 5 modules
var object_viewer = __webpack_require__(3390);
// EXTERNAL MODULE: ./node_modules/licia/replaceAll.js
var replaceAll = __webpack_require__(894);
var replaceAll_default = /*#__PURE__*/__webpack_require__.n(replaceAll);
// EXTERNAL MODULE: ./node_modules/licia/highlight.js
var highlight = __webpack_require__(4249);
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);
// EXTERNAL MODULE: ./node_modules/luna-text-viewer/esm/text-viewer/index.js + 2 modules
var text_viewer = __webpack_require__(2900);
;// CONCATENATED MODULE: ./src/Sources/Sources.js






function Sources_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Sources_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Sources_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Sources_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }













var Sources = /*#__PURE__*/function (_Tool) {
  function Sources() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Sources);
    _this = Sources_callSuper(this, Sources);
    _this._style = evalCss(__webpack_require__(1699));
    _this.name = 'sources';
    _this._showLineNum = true;
    return _this;
  }
  (0,inherits/* default */.A)(Sources, _Tool);
  return (0,createClass/* default */.A)(Sources, [{
    key: "init",
    value: function init($el, container) {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Sources.prototype), "init", this).call(this, $el);
      this._container = container;
      this._bindEvent();
      this._initCfg();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Sources.prototype), "destroy", this).call(this);
      evalCss.remove(this._style);
      this._rmCfg();
    }
  }, {
    key: "set",
    value: function set(type, val) {
      if (type === 'img') {
        this._isFetchingData = true;
        var img = new Image();
        var self = this;
        img.onload = function () {
          self._isFetchingData = false;
          self._data = {
            type: 'img',
            val: {
              width: this.width,
              height: this.height,
              src: val
            }
          };
          self._render();
        };
        img.onerror = function () {
          self._isFetchingData = false;
        };
        img.src = val;
        return;
      }
      this._data = {
        type: type,
        val: val
      };
      this._render();
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(Sources.prototype), "show", this).call(this);
      if (!this._data && !this._isFetchingData) {
        this._renderDef();
      }
      return this;
    }
  }, {
    key: "_renderDef",
    value: function _renderDef() {
      var _this2 = this;
      if (this._html) {
        this._data = {
          type: 'html',
          val: this._html
        };
        return this._render();
      }
      if (this._isGettingHtml) return;
      this._isGettingHtml = true;
      ajax_default()({
        url: location.href,
        success: function success(data) {
          return _this2._html = data;
        },
        error: function error() {
          return _this2._html = 'Sorry, unable to fetch source code:(';
        },
        complete: function complete() {
          _this2._isGettingHtml = false;
          _this2._renderDef();
        },
        dataType: 'raw'
      });
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this3 = this;
      this._container.on('showTool', function (name, lastTool) {
        if (name !== _this3.name && lastTool.name === _this3.name) {
          delete _this3._data;
        }
      });
    }
  }, {
    key: "_rmCfg",
    value: function _rmCfg() {
      var cfg = this.config;
      var settings = this._container.get('settings');
      if (!settings) return;
      settings.remove(cfg, 'showLineNum').remove('Sources');
    }
  }, {
    key: "_initCfg",
    value: function _initCfg() {
      var _this4 = this;
      var cfg = this.config = Settings.createCfg('sources', {
        showLineNum: true
      });
      if (!cfg.get('showLineNum')) this._showLineNum = false;
      cfg.on('change', function (key, val) {
        switch (key) {
          case 'showLineNum':
            _this4._showLineNum = val;
            return;
        }
      });
      var settings = this._container.get('settings');
      settings.text('Sources').switch(cfg, 'showLineNum', 'Show Line Numbers').separator();
    }
  }, {
    key: "_render",
    value: function _render() {
      this._isInit = true;
      var data = this._data;
      switch (data.type) {
        case 'html':
        case 'js':
        case 'css':
          return this._renderCode();
        case 'img':
          return this._renderImg();
        case 'object':
          return this._renderObj();
        case 'raw':
          return this._renderRaw();
        case 'iframe':
          return this._renderIframe();
      }
    }
  }, {
    key: "_renderImg",
    value: function _renderImg() {
      var _this$_data$val = this._data.val,
        width = _this$_data$val.width,
        height = _this$_data$val.height,
        src = _this$_data$val.src;
      this._renderHtml("<div class=\"".concat(classPrefix('image'), "\">\n      <div class=\"").concat(classPrefix('breadcrumb'), "\">").concat(escape_default()(src), "</div>\n      <div class=\"").concat(classPrefix('img-container'), "\" data-exclude=\"true\">\n        <img src=\"").concat(escape_default()(src), "\">\n      </div>\n      <div class=\"").concat(classPrefix('img-info'), "\">").concat(escape_default()(width), " \xD7 ").concat(escape_default()(height), "</div>\n    </div>"));
    }
  }, {
    key: "_renderCode",
    value: function _renderCode() {
      var data = this._data;
      this._renderHtml("<div class=\"".concat(classPrefix('code'), "\" data-type=\"").concat(data.type, "\"></div>"), false);
      var code = data.val;
      var len = data.val.length;
      if (len > MAX_RAW_LEN) {
        code = truncate_default()(code, MAX_RAW_LEN);
      }

      // If source code too big, don't process it.
      if (len < MAX_BEAUTIFY_LEN) {
        code = highlight_default()(code, data.type, {
          comment: '',
          string: '',
          number: '',
          keyword: '',
          operator: ''
        });
        each_default()(['comment', 'string', 'number', 'keyword', 'operator'], function (type) {
          code = replaceAll_default()(code, "class=\"".concat(type, "\""), "class=\"".concat(classPrefix(type), "\""));
        });
      } else {
        code = escape_default()(code);
      }
      var container = this._$el.find(classPrefix('.code')).get(0);
      new text_viewer/* default */.A(container, {
        text: code,
        escape: false,
        wrapLongLines: true,
        showLineNumbers: data.val.length < MAX_LINE_NUM_LEN && this._showLineNum
      });
    }
  }, {
    key: "_renderObj",
    value: function _renderObj() {
      // Using cache will keep binding events to the same elements.
      this._renderHtml("<ul class=\"".concat(classPrefix('json'), "\"></ul>"), false);
      var val = this._data.val;
      try {
        if (isStr_default()(val)) {
          val = JSON.parse(val);
        }
        /* eslint-disable no-empty */
      } catch (e) {}
      var objViewer = new object_viewer/* default */.A(this._$el.find('.eruda-json').get(0), {
        unenumerable: true,
        accessGetter: true,
        prototype: false
      });
      objViewer.set(val);
    }
  }, {
    key: "_renderRaw",
    value: function _renderRaw() {
      var data = this._data;
      this._renderHtml("<div class=\"".concat(classPrefix('raw-wrapper'), "\">\n      <div class=\"").concat(classPrefix('raw'), "\"></div>\n    </div>"));
      var val = data.val;
      var container = this._$el.find(classPrefix('.raw')).get(0);
      if (val.length > MAX_RAW_LEN) {
        val = truncate_default()(val, MAX_RAW_LEN);
      }
      new text_viewer/* default */.A(container, {
        text: val,
        wrapLongLines: true,
        showLineNumbers: val.length < MAX_LINE_NUM_LEN && this._showLineNum
      });
    }
  }, {
    key: "_renderIframe",
    value: function _renderIframe() {
      this._renderHtml("<iframe src=\"".concat(escape_default()(this._data.val), "\"></iframe>"));
    }
  }, {
    key: "_renderHtml",
    value: function _renderHtml(html) {
      var _this5 = this;
      var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (cache && html === this._lastHtml) return;
      this._lastHtml = html;
      this._$el.html(html);
      // Need setTimeout to make it work
      setTimeout(function () {
        return _this5._$el.get(0).scrollTop = 0;
      }, 0);
    }
  }]);
}(Tool);

var MAX_BEAUTIFY_LEN = 30000;
var MAX_LINE_NUM_LEN = 80000;
var MAX_RAW_LEN = 100000;
// EXTERNAL MODULE: ./node_modules/licia/isObj.js
var isObj = __webpack_require__(9760);
var isObj_default = /*#__PURE__*/__webpack_require__.n(isObj);
// EXTERNAL MODULE: ./node_modules/licia/viewportScale.js
var viewportScale = __webpack_require__(1505);
var viewportScale_default = /*#__PURE__*/__webpack_require__.n(viewportScale);
// EXTERNAL MODULE: ./node_modules/licia/isEqual.js
var isEqual = __webpack_require__(5701);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./src/eruda.js































/* harmony default export */ var eruda = ({
  init: function init() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      container = _ref.container,
      tool = _ref.tool,
      _ref$autoScale = _ref.autoScale,
      autoScale = _ref$autoScale === void 0 ? true : _ref$autoScale,
      _ref$useShadowDom = _ref.useShadowDom,
      useShadowDom = _ref$useShadowDom === void 0 ? true : _ref$useShadowDom,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults;
    if (this._isInit) {
      return;
    }
    this._isInit = true;
    this._scale = 1;
    this._initContainer(container, useShadowDom);
    this._initStyle();
    this._initDevTools(defaults, inline);
    this._initEntryBtn();
    this._initSettings();
    this._initTools(tool);
    this._registerListener();
    if (autoScale) {
      this._autoScale();
    }
    if (inline) {
      this._entryBtn.hide();
      this._$el.addClass('eruda-inline');
      this.show();
    }
  },
  _isInit: false,
  version: "3.2.1",
  util: {
    isErudaEl: isErudaEl,
    evalCss: evalCss,
    isDarkTheme: function isDarkTheme(theme) {
      if (!theme) {
        theme = this.getTheme();
      }
      return themes_isDarkTheme(theme);
    },
    getTheme: function getTheme() {
      var curTheme = evalCss.getCurTheme();
      var result = 'Light';
      each_default()(themes, function (theme, name) {
        if (isEqual_default()(theme, curTheme)) {
          result = name;
        }
      });
      return result;
    }
  },
  chobitsu: lib_chobitsu,
  Tool: Tool,
  Console: Console,
  Elements: Elements,
  Network: Network_Network,
  Sources: Sources,
  Resources: Resources,
  Info: Info,
  Snippets: Snippets,
  Settings: Settings,
  get: function get(name) {
    if (!this._checkInit()) return;
    if (name === 'entryBtn') return this._entryBtn;
    var devTools = this._devTools;
    return name ? devTools.get(name) : devTools;
  },
  add: function add(tool) {
    if (!this._checkInit()) return;
    if (isFn_default()(tool)) tool = tool(this);
    this._devTools.add(tool);
    return this;
  },
  remove: function remove(name) {
    this._devTools.remove(name);
    return this;
  },
  show: function show(name) {
    if (!this._checkInit()) return;
    var devTools = this._devTools;
    name ? devTools.showTool(name) : devTools.show();
    return this;
  },
  hide: function hide() {
    if (!this._checkInit()) return;
    this._devTools.hide();
    return this;
  },
  destroy: function destroy() {
    this._devTools.destroy();
    delete this._devTools;
    this._entryBtn.destroy();
    delete this._entryBtn;
    this._unregisterListener();
    $_default()(this._container).remove();
    evalCss.clear();
    this._isInit = false;
    this._container = null;
    this._shadowRoot = null;
  },
  scale: function scale(s) {
    if (isNum_default()(s)) {
      this._scale = s;
      lib_emitter.emit(lib_emitter.SCALE, s);
      return this;
    }
    return this._scale;
  },
  position: function position(p) {
    var entryBtn = this._entryBtn;
    if (isObj_default()(p)) {
      entryBtn.setPos(p);
      return this;
    }
    return entryBtn.getPos();
  },
  _autoScale: function _autoScale() {
    if (!isMobile_default()()) return;
    this.scale(1 / viewportScale_default()());
  },
  _registerListener: function _registerListener() {
    var _this = this;
    this._addListener = function () {
      return _this.add.apply(_this, arguments);
    };
    this._showListener = function () {
      return _this.show.apply(_this, arguments);
    };
    lib_emitter.on(lib_emitter.ADD, this._addListener);
    lib_emitter.on(lib_emitter.SHOW, this._showListener);
    lib_emitter.on(lib_emitter.SCALE, evalCss.setScale);
  },
  _unregisterListener: function _unregisterListener() {
    lib_emitter.off(lib_emitter.ADD, this._addListener);
    lib_emitter.off(lib_emitter.SHOW, this._showListener);
    lib_emitter.off(lib_emitter.SCALE, evalCss.setScale);
  },
  _checkInit: function _checkInit() {
    if (!this._isInit) lib_logger.error('Please call "eruda.init()" first');
    return this._isInit;
  },
  _initContainer: function _initContainer(container, useShadowDom) {
    if (!container) {
      container = document.createElement('div');
      document.documentElement.appendChild(container);
    }
    container.id = 'eruda';
    container.style.all = 'initial';
    this._container = container;
    var shadowRoot;
    var el;
    if (useShadowDom) {
      if (container.attachShadow) {
        shadowRoot = container.attachShadow({
          mode: 'open'
        });
      } else if (container.createShadowRoot) {
        shadowRoot = container.createShadowRoot();
      }
      if (shadowRoot) {
        // font-face doesn't work inside shadow dom.
        evalCss.container = document.head;
        evalCss(__webpack_require__(6793) + __webpack_require__(7853) + __webpack_require__(9907) + __webpack_require__(879) + __webpack_require__(1107) + __webpack_require__(5259));
        el = document.createElement('div');
        shadowRoot.appendChild(el);
        this._shadowRoot = shadowRoot;
      }
    }
    if (!this._shadowRoot) {
      el = document.createElement('div');
      container.appendChild(el);
    }
    extend_default()(el, {
      className: 'eruda-container __chobitsu-hide__',
      contentEditable: false
    });

    // http://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
    if (detectBrowser_default()().name === 'ios') el.setAttribute('ontouchstart', '');
    this._$el = $_default()(el);
  },
  _initDevTools: function _initDevTools(defaults, inline) {
    this._devTools = new DevTools(this._$el, {
      defaults: defaults,
      inline: inline
    });
  },
  _initStyle: function _initStyle() {
    var className = 'eruda-style-container';
    var $el = this._$el;
    if (this._shadowRoot) {
      evalCss.container = this._shadowRoot;
      evalCss(':host { all: initial }');
    } else {
      $el.append("<div class=\"".concat(className, "\"></div>"));
      evalCss.container = $el.find(".".concat(className)).get(0);
    }
    evalCss(__webpack_require__(2713) + __webpack_require__(9907) + __webpack_require__(7853) + __webpack_require__(5259) + __webpack_require__(3277) + __webpack_require__(879) + __webpack_require__(4393) + __webpack_require__(7253) + __webpack_require__(1107) + __webpack_require__(187) + __webpack_require__(1277) + __webpack_require__(6243) + __webpack_require__(6793));
  },
  _initEntryBtn: function _initEntryBtn() {
    var _this2 = this;
    this._entryBtn = new EntryBtn(this._$el);
    this._entryBtn.on('click', function () {
      return _this2._devTools.toggle();
    });
  },
  _initSettings: function _initSettings() {
    var devTools = this._devTools;
    var settings = new Settings();
    devTools.add(settings);
    this._entryBtn.initCfg(settings);
    devTools.initCfg(settings);
  },
  _initTools: function _initTools() {
    var _this3 = this;
    var tool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['console', 'elements', 'network', 'resources', 'sources', 'info', 'snippets'];
    tool = toArr_default()(tool);
    var devTools = this._devTools;
    tool.forEach(function (name) {
      var Tool = _this3[upperFirst_default()(name)];
      try {
        if (Tool) devTools.add(new Tool());
      } catch (e) {
        // Use nextTick to make sure it is possible to be caught by console panel.
        nextTick_default()(function () {
          lib_logger.error("Something wrong when initializing tool ".concat(name, ":"), e.message);
        });
      }
    });
    devTools.showTool(tool[0] || 'settings');
  }
});

/***/ }),

/***/ 7523:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eruda = (__webpack_require__(29)/* ["default"] */ .A);
module.exports = eruda;
module.exports["default"] = eruda;

/***/ }),

/***/ 3962:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 6476:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var connector_1 = __importDefault(__webpack_require__(8665));
var noop_1 = __importDefault(__webpack_require__(9993));
var uuid_1 = __importDefault(__webpack_require__(8046));
var each_1 = __importDefault(__webpack_require__(9100));
var Emitter_1 = __importDefault(__webpack_require__(2263));
var util_1 = __webpack_require__(916);
var Chobitsu = (function () {
    function Chobitsu() {
        var _this = this;
        this.resolves = new Map();
        this.domains = new Map();
        this.onMessage = noop_1.default;
        connector_1.default.on('message', function (message) {
            var parsedMessage = JSON.parse(message);
            var resolve = _this.resolves.get(parsedMessage.id);
            if (resolve) {
                resolve(parsedMessage.result);
            }
            if (!parsedMessage.id) {
                var _a = parsedMessage.method.split('.'), name_1 = _a[0], method = _a[1];
                var domain = _this.domains.get(name_1);
                if (domain) {
                    domain.emit(method, parsedMessage.params);
                }
            }
            _this.onMessage(message);
        });
    }
    Chobitsu.prototype.domain = function (name) {
        return this.domains.get(name);
    };
    Chobitsu.prototype.setOnMessage = function (onMessage) {
        this.onMessage = onMessage;
    };
    Chobitsu.prototype.sendMessage = function (method, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var id = (0, uuid_1.default)();
        this.sendRawMessage(JSON.stringify({
            id: id,
            method: method,
            params: params,
        }));
        return new Promise(function (resolve) {
            _this.resolves.set(id, resolve);
        });
    };
    Chobitsu.prototype.sendRawMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedMessage, method, params, id, resultMsg, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        parsedMessage = JSON.parse(message);
                        method = parsedMessage.method, params = parsedMessage.params, id = parsedMessage.id;
                        resultMsg = {
                            id: id,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = resultMsg;
                        return [4, this.callMethod(method, params)];
                    case 2:
                        _a.result = _b.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof util_1.ErrorWithCode) {
                            resultMsg.error = {
                                message: e_1.message,
                                code: e_1.code,
                            };
                        }
                        else if (e_1 instanceof Error) {
                            resultMsg.error = {
                                message: e_1.message,
                            };
                        }
                        return [3, 4];
                    case 4:
                        connector_1.default.emit('message', JSON.stringify(resultMsg));
                        return [2];
                }
            });
        });
    };
    Chobitsu.prototype.register = function (name, methods) {
        var domains = this.domains;
        var domain = domains.get(name);
        if (!domain) {
            domain = {};
            Emitter_1.default.mixin(domain);
        }
        (0, each_1.default)(methods, function (fn, method) {
            domain[method] = fn;
        });
        domains.set(name, domain);
    };
    Chobitsu.prototype.callMethod = function (method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, domainName, methodName, domain;
            return __generator(this, function (_b) {
                _a = method.split('.'), domainName = _a[0], methodName = _a[1];
                domain = this.domain(domainName);
                if (domain) {
                    if (domain[methodName]) {
                        return [2, domain[methodName](params) || {}];
                    }
                }
                throw Error("".concat(method, " unimplemented"));
            });
        });
    };
    return Chobitsu;
}());
exports["default"] = Chobitsu;


/***/ }),

/***/ 6192:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDOMNode = exports.getDOMNodeId = exports.setOuterHTML = exports.setNodeValue = exports.setInspectedNode = exports.setAttributeValue = exports.setAttributesAsText = exports.resolveNode = exports.requestNode = exports.requestChildNodes = exports.removeNode = exports.pushNodesByBackendIdsToFrontend = exports.discardSearchResults = exports.pushNodesToFrontend = exports.getSearchResults = exports.performSearch = exports.moveTo = exports.getOuterHTML = exports.getDocument = exports.enable = exports.copyTo = exports.collectClassNamesFromSubtree = void 0;
var connector_1 = __importDefault(__webpack_require__(8665));
var nodeManager = __importStar(__webpack_require__(9893));
var nodeManager_1 = __webpack_require__(9893);
var objManager = __importStar(__webpack_require__(2484));
var mutationObserver_1 = __importDefault(__webpack_require__(8757));
var _1 = __importDefault(__webpack_require__(3693));
var isNull_1 = __importDefault(__webpack_require__(4236));
var isEmpty_1 = __importDefault(__webpack_require__(9464));
var html_1 = __importDefault(__webpack_require__(9548));
var map_1 = __importDefault(__webpack_require__(3915));
var unique_1 = __importDefault(__webpack_require__(438));
var contain_1 = __importDefault(__webpack_require__(3249));
var lowerCase_1 = __importDefault(__webpack_require__(96));
var each_1 = __importDefault(__webpack_require__(9100));
var toArr_1 = __importDefault(__webpack_require__(769));
var xpath_1 = __importDefault(__webpack_require__(8862));
var concat_1 = __importDefault(__webpack_require__(4069));
var evaluate_1 = __webpack_require__(2627);
var util_1 = __webpack_require__(916);
function collectClassNamesFromSubtree(params) {
    var node = (0, nodeManager_1.getNode)(params.nodeId);
    var classNames = [];
    traverseNode(node, function (node) {
        if (node.nodeType !== 1)
            return;
        var className = node.getAttribute('class');
        if (className) {
            var names = className.split(/\s+/);
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                classNames.push(name_1);
            }
        }
    });
    return {
        classNames: (0, unique_1.default)(classNames),
    };
}
exports.collectClassNamesFromSubtree = collectClassNamesFromSubtree;
function copyTo(params) {
    var nodeId = params.nodeId, targetNodeId = params.targetNodeId;
    var node = (0, nodeManager_1.getNode)(nodeId);
    var targetNode = (0, nodeManager_1.getNode)(targetNodeId);
    var cloneNode = node.cloneNode(true);
    targetNode.appendChild(cloneNode);
}
exports.copyTo = copyTo;
function enable() {
    mutationObserver_1.default.observe();
    nodeManager.clear();
}
exports.enable = enable;
function getDocument() {
    return {
        root: nodeManager.wrap(document, {
            depth: 2,
        }),
    };
}
exports.getDocument = getDocument;
function getOuterHTML(params) {
    var node = (0, nodeManager_1.getNode)(params.nodeId);
    return {
        outerHTML: node.outerHTML,
    };
}
exports.getOuterHTML = getOuterHTML;
function moveTo(params) {
    var nodeId = params.nodeId, targetNodeId = params.targetNodeId;
    var node = (0, nodeManager_1.getNode)(nodeId);
    var targetNode = (0, nodeManager_1.getNode)(targetNodeId);
    targetNode.appendChild(node);
}
exports.moveTo = moveTo;
var searchResults = new Map();
function performSearch(params) {
    var query = (0, lowerCase_1.default)(params.query);
    var result = [];
    try {
        result = (0, concat_1.default)(result, (0, toArr_1.default)(document.querySelectorAll(query)));
    }
    catch (e) {
    }
    try {
        result = (0, concat_1.default)(result, (0, xpath_1.default)(query));
    }
    catch (e) {
    }
    traverseNode(document, function (node) {
        var nodeType = node.nodeType;
        if (nodeType === 1) {
            var localName = node.localName;
            if ((0, contain_1.default)("<".concat(localName, " "), query) ||
                (0, contain_1.default)("</".concat(localName, ">"), query)) {
                result.push(node);
                return;
            }
            var attributes_1 = [];
            (0, each_1.default)(node.attributes, function (_a) {
                var name = _a.name, value = _a.value;
                return attributes_1.push(name, value);
            });
            for (var i = 0, len = attributes_1.length; i < len; i++) {
                if ((0, contain_1.default)((0, lowerCase_1.default)(attributes_1[i]), query)) {
                    result.push(node);
                    break;
                }
            }
        }
        else if (nodeType === 3) {
            if ((0, contain_1.default)((0, lowerCase_1.default)(node.nodeValue), query)) {
                result.push(node);
            }
        }
    });
    var searchId = (0, util_1.createId)();
    searchResults.set(searchId, result);
    return {
        searchId: searchId,
        resultCount: result.length,
    };
}
exports.performSearch = performSearch;
function getSearchResults(params) {
    var searchId = params.searchId, fromIndex = params.fromIndex, toIndex = params.toIndex;
    var searchResult = searchResults.get(searchId);
    var result = searchResult.slice(fromIndex, toIndex);
    var nodeIds = (0, map_1.default)(result, function (node) {
        var nodeId = (0, nodeManager_1.getNodeId)(node);
        if (!nodeId) {
            return pushNodesToFrontend(node);
        }
        return nodeId;
    });
    return {
        nodeIds: nodeIds,
    };
}
exports.getSearchResults = getSearchResults;
function pushNodesToFrontend(node) {
    var nodes = [node];
    var parentNode = node.parentNode;
    while (parentNode) {
        nodes.push(parentNode);
        var nodeId = (0, nodeManager_1.getNodeId)(parentNode);
        if (nodeId) {
            break;
        }
        else {
            parentNode = parentNode.parentNode;
        }
    }
    while (nodes.length) {
        var node_1 = nodes.pop();
        var nodeId = (0, nodeManager_1.getNodeId)(node_1);
        connector_1.default.trigger('DOM.setChildNodes', {
            parentId: nodeId,
            nodes: nodeManager.getChildNodes(node_1, 1),
        });
    }
    return (0, nodeManager_1.getNodeId)(node);
}
exports.pushNodesToFrontend = pushNodesToFrontend;
function discardSearchResults(params) {
    searchResults.delete(params.searchId);
}
exports.discardSearchResults = discardSearchResults;
function pushNodesByBackendIdsToFrontend(params) {
    return {
        nodeIds: params.backendNodeIds,
    };
}
exports.pushNodesByBackendIdsToFrontend = pushNodesByBackendIdsToFrontend;
function removeNode(params) {
    var node = (0, nodeManager_1.getNode)(params.nodeId);
    (0, _1.default)(node).remove();
}
exports.removeNode = removeNode;
function requestChildNodes(params) {
    var nodeId = params.nodeId, _a = params.depth, depth = _a === void 0 ? 1 : _a;
    var node = (0, nodeManager_1.getNode)(nodeId);
    connector_1.default.trigger('DOM.setChildNodes', {
        parentId: nodeId,
        nodes: nodeManager.getChildNodes(node, depth),
    });
}
exports.requestChildNodes = requestChildNodes;
function requestNode(params) {
    var node = objManager.getObj(params.objectId);
    return {
        nodeId: (0, nodeManager_1.getNodeId)(node),
    };
}
exports.requestNode = requestNode;
function resolveNode(params) {
    var node = (0, nodeManager_1.getNode)(params.nodeId);
    return {
        object: objManager.wrap(node),
    };
}
exports.resolveNode = resolveNode;
function setAttributesAsText(params) {
    var name = params.name, text = params.text, nodeId = params.nodeId;
    var node = (0, nodeManager_1.getNode)(nodeId);
    if (name) {
        node.removeAttribute(name);
    }
    (0, _1.default)(node).attr(parseAttributes(text));
}
exports.setAttributesAsText = setAttributesAsText;
function setAttributeValue(params) {
    var nodeId = params.nodeId, name = params.name, value = params.value;
    var node = (0, nodeManager_1.getNode)(nodeId);
    node.setAttribute(name, value);
}
exports.setAttributeValue = setAttributeValue;
var history = [];
function setInspectedNode(params) {
    var node = (0, nodeManager_1.getNode)(params.nodeId);
    history.unshift(node);
    if (history.length > 5)
        history.pop();
    for (var i = 0; i < 5; i++) {
        (0, evaluate_1.setGlobal)("$".concat(i), history[i]);
    }
}
exports.setInspectedNode = setInspectedNode;
function setNodeValue(params) {
    var nodeId = params.nodeId, value = params.value;
    var node = (0, nodeManager_1.getNode)(nodeId);
    node.nodeValue = value;
}
exports.setNodeValue = setNodeValue;
function setOuterHTML(params) {
    var nodeId = params.nodeId, outerHTML = params.outerHTML;
    var node = (0, nodeManager_1.getNode)(nodeId);
    node.outerHTML = outerHTML;
}
exports.setOuterHTML = setOuterHTML;
function getDOMNodeId(params) {
    var node = params.node;
    return {
        nodeId: nodeManager.getOrCreateNodeId(node),
    };
}
exports.getDOMNodeId = getDOMNodeId;
function getDOMNode(params) {
    var nodeId = params.nodeId;
    return {
        node: (0, nodeManager_1.getNode)(nodeId),
    };
}
exports.getDOMNode = getDOMNode;
function parseAttributes(str) {
    str = "<div ".concat(str, "></div>");
    return html_1.default.parse(str)[0].attrs;
}
function traverseNode(node, cb) {
    var childNodes = nodeManager.filterNodes(node.childNodes);
    for (var i = 0, len = childNodes.length; i < len; i++) {
        var child = childNodes[i];
        cb(child);
        traverseNode(child, cb);
    }
}
mutationObserver_1.default.on('attributes', function (target, name) {
    var nodeId = (0, nodeManager_1.getNodeId)(target);
    if (!nodeId)
        return;
    var value = target.getAttribute(name);
    if ((0, isNull_1.default)(value)) {
        connector_1.default.trigger('DOM.attributeRemoved', {
            nodeId: nodeId,
            name: name,
        });
    }
    else {
        connector_1.default.trigger('DOM.attributeModified', {
            nodeId: nodeId,
            name: name,
            value: value,
        });
    }
});
mutationObserver_1.default.on('childList', function (target, addedNodes, removedNodes) {
    var parentNodeId = (0, nodeManager_1.getNodeId)(target);
    if (!parentNodeId)
        return;
    addedNodes = nodeManager.filterNodes(addedNodes);
    removedNodes = nodeManager.filterNodes(removedNodes);
    function childNodeCountUpdated() {
        connector_1.default.trigger('DOM.childNodeCountUpdated', {
            childNodeCount: nodeManager.wrap(target, {
                depth: 0,
            }).childNodeCount,
            nodeId: parentNodeId,
        });
    }
    if (!(0, isEmpty_1.default)(addedNodes)) {
        childNodeCountUpdated();
        for (var i = 0, len = addedNodes.length; i < len; i++) {
            var node = addedNodes[i];
            var previousNode = nodeManager.getPreviousNode(node);
            var previousNodeId = previousNode ? (0, nodeManager_1.getNodeId)(previousNode) : 0;
            var params = {
                node: nodeManager.wrap(node, {
                    depth: 0,
                }),
                parentNodeId: parentNodeId,
                previousNodeId: previousNodeId,
            };
            connector_1.default.trigger('DOM.childNodeInserted', params);
        }
    }
    if (!(0, isEmpty_1.default)(removedNodes)) {
        for (var i = 0, len = removedNodes.length; i < len; i++) {
            var node = removedNodes[i];
            var nodeId = (0, nodeManager_1.getNodeId)(node);
            if (!nodeId) {
                childNodeCountUpdated();
                break;
            }
            connector_1.default.trigger('DOM.childNodeRemoved', {
                nodeId: (0, nodeManager_1.getNodeId)(node),
                parentNodeId: parentNodeId,
            });
        }
    }
});
mutationObserver_1.default.on('characterData', function (target) {
    var nodeId = (0, nodeManager_1.getNodeId)(target);
    if (!nodeId)
        return;
    connector_1.default.trigger('DOM.characterDataModified', {
        characterData: target.nodeValue,
        nodeId: nodeId,
    });
});


/***/ }),

/***/ 5334:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResponseBody = exports.enable = exports.getCookies = exports.deleteCookies = void 0;
var trim_1 = __importDefault(__webpack_require__(9405));
var each_1 = __importDefault(__webpack_require__(9100));
var decodeUriComponent_1 = __importDefault(__webpack_require__(6334));
var rmCookie_1 = __importDefault(__webpack_require__(3290));
var once_1 = __importDefault(__webpack_require__(8996));
var isNative_1 = __importDefault(__webpack_require__(9122));
var contain_1 = __importDefault(__webpack_require__(3249));
var request_1 = __webpack_require__(3411);
var connector_1 = __importDefault(__webpack_require__(8665));
function deleteCookies(params) {
    (0, rmCookie_1.default)(params.name);
}
exports.deleteCookies = deleteCookies;
function getCookies() {
    var cookies = [];
    var cookie = document.cookie;
    if ((0, trim_1.default)(cookie) !== '') {
        (0, each_1.default)(cookie.split(';'), function (value) {
            value = value.split('=');
            var name = (0, trim_1.default)(value.shift());
            value = (0, decodeUriComponent_1.default)(value.join('='));
            cookies.push({
                name: name,
                value: value,
            });
        });
    }
    return { cookies: cookies };
}
exports.getCookies = getCookies;
var resTxtMap = new Map();
exports.enable = (0, once_1.default)(function () {
    var winXhrProto = window.XMLHttpRequest.prototype;
    var origSend = winXhrProto.send;
    var origOpen = winXhrProto.open;
    var origSetRequestHeader = winXhrProto.setRequestHeader;
    winXhrProto.open = function (method, url) {
        if (!isValidUrl(url)) {
            return origOpen.apply(this, arguments);
        }
        var xhr = this;
        var req = (xhr.chobitsuRequest = new request_1.XhrRequest(xhr, method, url));
        req.on('send', function (id, data) {
            var request = {
                method: data.method,
                url: data.url,
                headers: data.reqHeaders,
            };
            if (data.data) {
                request.postData = data.data;
            }
            connector_1.default.trigger('Network.requestWillBeSent', {
                requestId: id,
                type: 'XHR',
                request: request,
                timestamp: data.time / 1000,
            });
        });
        req.on('headersReceived', function (id, data) {
            connector_1.default.trigger('Network.responseReceivedExtraInfo', {
                requestId: id,
                blockedCookies: [],
                headers: data.resHeaders,
            });
        });
        req.on('done', function (id, data) {
            connector_1.default.trigger('Network.responseReceived', {
                requestId: id,
                type: 'XHR',
                response: {
                    status: data.status,
                },
                timestamp: data.time / 1000,
            });
            resTxtMap.set(id, data.resTxt);
            connector_1.default.trigger('Network.loadingFinished', {
                requestId: id,
                encodedDataLength: data.size,
                timestamp: data.time / 1000,
            });
        });
        xhr.addEventListener('readystatechange', function () {
            switch (xhr.readyState) {
                case 2:
                    return req.handleHeadersReceived();
                case 4:
                    return req.handleDone();
            }
        });
        origOpen.apply(this, arguments);
    };
    winXhrProto.send = function (data) {
        var req = this.chobitsuRequest;
        if (req)
            req.handleSend(data);
        origSend.apply(this, arguments);
    };
    winXhrProto.setRequestHeader = function (key, val) {
        var req = this.chobitsuRequest;
        if (req) {
            req.handleReqHeadersSet(key, val);
        }
        origSetRequestHeader.apply(this, arguments);
    };
    var isFetchSupported = false;
    if (window.fetch) {
        isFetchSupported = (0, isNative_1.default)(window.fetch);
    }
    if (!isFetchSupported && navigator.serviceWorker) {
        isFetchSupported = true;
    }
    if (!isFetchSupported)
        return;
    var origFetch = window.fetch;
    window.fetch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var req = new (request_1.FetchRequest.bind.apply(request_1.FetchRequest, __spreadArray([void 0], args, false)))();
        req.on('send', function (id, data) {
            var request = {
                method: data.method,
                url: data.url,
                headers: data.reqHeaders,
            };
            if (data.data) {
                request.postData = data.data;
            }
            connector_1.default.trigger('Network.requestWillBeSent', {
                requestId: id,
                type: 'Fetch',
                request: request,
                timestamp: data.time / 1000,
            });
        });
        req.on('done', function (id, data) {
            connector_1.default.trigger('Network.responseReceived', {
                requestId: id,
                type: 'Fetch',
                response: {
                    status: data.status,
                    headers: data.resHeaders,
                },
                timestamp: data.time / 1000,
            });
            resTxtMap.set(id, data.resTxt);
            connector_1.default.trigger('Network.loadingFinished', {
                requestId: id,
                encodedDataLength: data.size,
                timestamp: data.time / 1000,
            });
        });
        var fetchResult = origFetch.apply(void 0, args);
        req.send(fetchResult);
        return fetchResult;
    };
});
function getResponseBody(params) {
    return {
        base64Encoded: false,
        body: resTxtMap.get(params.requestId),
    };
}
exports.getResponseBody = getResponseBody;
function isValidUrl(url) {
    return !(0, contain_1.default)(url, '__chobitsu-hide__=true');
}


/***/ }),

/***/ 2480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setInspectMode = exports.setShowViewportSizeOnResize = exports.hideHighlight = exports.highlightNode = exports.disable = exports.enable = void 0;
var nodeManager_1 = __webpack_require__(9893);
var DOM_1 = __webpack_require__(6192);
var _1 = __importDefault(__webpack_require__(3693));
var h_1 = __importDefault(__webpack_require__(5241));
var evalCss_1 = __importDefault(__webpack_require__(3048));
var defaults_1 = __importDefault(__webpack_require__(5651));
var extend_1 = __importDefault(__webpack_require__(8105));
var connector_1 = __importDefault(__webpack_require__(8665));
var root_1 = __importDefault(__webpack_require__(5169));
var toBool_1 = __importDefault(__webpack_require__(9000));
var cssSupports_1 = __importDefault(__webpack_require__(8534));
var luna_dom_highlighter_1 = __importDefault(__webpack_require__(9196));
var objManager = __importStar(__webpack_require__(2484));
var domHighlighter;
var isCssLoaded = false;
var $container;
var isEnable = false;
var showInfo = (0, cssSupports_1.default)('clip-path', 'polygon(50% 0px, 0px 100%, 100% 100%)');
var hasTouchSupport = 'ontouchstart' in root_1.default;
var css = (__webpack_require__(7119).replace)('/*# sourceMappingURL=luna-dom-highlighter.css.map*/', '');
function enable() {
    if (isEnable) {
        return;
    }
    var container = (0, h_1.default)('div', {
        class: '__chobitsu-hide__',
        style: {
            all: 'initial',
        },
    });
    $container = (0, _1.default)(container);
    document.documentElement.appendChild(container);
    var domHighlighterContainer = null;
    var shadowRoot = null;
    if (container.attachShadow) {
        shadowRoot = container.attachShadow({ mode: 'open' });
    }
    else if (container.createShadowRoot) {
        shadowRoot = container.createShadowRoot();
    }
    if (shadowRoot) {
        var style = document.createElement('style');
        style.textContent = css;
        style.type = 'text/css';
        shadowRoot.appendChild(style);
        domHighlighterContainer = document.createElement('div');
        shadowRoot.appendChild(domHighlighterContainer);
    }
    else {
        domHighlighterContainer = document.createElement('div');
        container.appendChild(domHighlighterContainer);
        if (!isCssLoaded) {
            (0, evalCss_1.default)(css);
            isCssLoaded = true;
        }
    }
    domHighlighter = new luna_dom_highlighter_1.default(domHighlighterContainer, {
        monitorResize: (0, toBool_1.default)(root_1.default.ResizeObserver),
        showInfo: showInfo,
    });
    window.addEventListener('resize', resizeHandler);
    isEnable = true;
}
exports.enable = enable;
function disable() {
    domHighlighter.destroy();
    $container.remove();
    window.removeEventListener('resize', resizeHandler);
    isEnable = false;
}
exports.disable = disable;
function highlightNode(params) {
    var nodeId = params.nodeId, highlightConfig = params.highlightConfig, objectId = params.objectId;
    var node;
    if (nodeId) {
        node = (0, nodeManager_1.getNode)(nodeId);
    }
    if (objectId) {
        node = objManager.getObj(objectId);
    }
    if (node.nodeType !== 1 && node.nodeType !== 3)
        return;
    (0, defaults_1.default)(highlightConfig, {
        contentColor: 'transparent',
        paddingColor: 'transparent',
        borderColor: 'transparent',
        marginColor: 'transparent',
    });
    if (!showInfo) {
        (0, extend_1.default)(highlightConfig, {
            showInfo: false,
        });
    }
    domHighlighter.highlight(node, highlightConfig);
}
exports.highlightNode = highlightNode;
function hideHighlight() {
    domHighlighter.hide();
}
exports.hideHighlight = hideHighlight;
var showViewportSizeOnResize = false;
function setShowViewportSizeOnResize(params) {
    showViewportSizeOnResize = params.show;
}
exports.setShowViewportSizeOnResize = setShowViewportSizeOnResize;
var highlightConfig = {};
var inspectMode = 'none';
function setInspectMode(params) {
    highlightConfig = params.highlightConfig;
    inspectMode = params.mode;
}
exports.setInspectMode = setInspectMode;
function getElementFromPoint(e) {
    if (hasTouchSupport) {
        var touch = e.touches[0] || e.changedTouches[0];
        return document.elementFromPoint(touch.clientX, touch.clientY);
    }
    return document.elementFromPoint(e.clientX, e.clientY);
}
var lastNodeId = -1;
function moveListener(e) {
    if (inspectMode === 'none')
        return;
    var node = getElementFromPoint(e);
    if (!node || !(0, nodeManager_1.isValidNode)(node)) {
        return;
    }
    var nodeId = (0, nodeManager_1.getNodeId)(node);
    if (!nodeId) {
        nodeId = (0, DOM_1.pushNodesToFrontend)(node);
    }
    highlightNode({
        nodeId: nodeId,
        highlightConfig: highlightConfig,
    });
    if (nodeId !== lastNodeId) {
        connector_1.default.trigger('Overlay.nodeHighlightRequested', {
            nodeId: nodeId,
        });
        lastNodeId = nodeId;
    }
}
function outListener() {
    if (inspectMode === 'none')
        return;
    hideHighlight();
}
function clickListener(e) {
    if (inspectMode === 'none')
        return;
    e.preventDefault();
    e.stopImmediatePropagation();
    var node = getElementFromPoint(e);
    connector_1.default.trigger('Overlay.inspectNodeRequested', {
        backendNodeId: (0, nodeManager_1.getNodeId)(node),
    });
    lastNodeId = -1;
    hideHighlight();
}
function addEvent(type, listener) {
    document.documentElement.addEventListener(type, listener, true);
}
if (hasTouchSupport) {
    addEvent('touchstart', moveListener);
    addEvent('touchmove', moveListener);
    addEvent('touchend', clickListener);
}
else {
    addEvent('mousemove', moveListener);
    addEvent('mouseout', outListener);
    addEvent('click', clickListener);
}
var viewportSize = (0, h_1.default)('div', {
    class: '__chobitsu-hide__',
    style: {
        position: 'fixed',
        right: 0,
        top: 0,
        background: '#fff',
        fontSize: 13,
        opacity: 0.5,
        padding: '4px 6px',
    },
});
function resizeHandler() {
    if (!showViewportSizeOnResize)
        return;
    $viewportSize.text("".concat(window.innerWidth, "px \u00D7 ").concat(window.innerHeight, "px"));
    if (viewportSizeTimer) {
        clearTimeout(viewportSizeTimer);
    }
    else {
        document.documentElement.appendChild(viewportSize);
    }
    viewportSizeTimer = setTimeout(function () {
        $viewportSize.remove();
        viewportSizeTimer = null;
    }, 1000);
}
var $viewportSize = (0, _1.default)(viewportSize);
var viewportSizeTimer;


/***/ }),

/***/ 5689:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTrustTokens = exports.clearDataForOrigin = exports.getUsageAndQuota = void 0;
var each_1 = __importDefault(__webpack_require__(9100));
var rmCookie_1 = __importDefault(__webpack_require__(3290));
var safeStorage_1 = __importDefault(__webpack_require__(1931));
var Network_1 = __webpack_require__(5334);
var localStore = (0, safeStorage_1.default)('local');
var sessionStore = (0, safeStorage_1.default)('session');
function getUsageAndQuota() {
    return {
        quota: 0,
        usage: 0,
        usageBreakdown: [],
    };
}
exports.getUsageAndQuota = getUsageAndQuota;
function clearDataForOrigin(params) {
    var storageTypes = params.storageTypes.split(',');
    (0, each_1.default)(storageTypes, function (type) {
        if (type === 'cookies') {
            var cookies = (0, Network_1.getCookies)().cookies;
            (0, each_1.default)(cookies, function (_a) {
                var name = _a.name;
                return (0, rmCookie_1.default)(name);
            });
        }
        else if (type === 'local_storage') {
            localStore.clear();
            sessionStore.clear();
        }
    });
}
exports.clearDataForOrigin = clearDataForOrigin;
function getTrustTokens() {
    return {
        tokens: [],
    };
}
exports.getTrustTokens = getTrustTokens;


/***/ }),

/***/ 8665:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Emitter_1 = __importDefault(__webpack_require__(2263));
var Connector = (function (_super) {
    __extends(Connector, _super);
    function Connector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Connector.prototype.trigger = function (method, params) {
        this.emit('message', JSON.stringify({
            method: method,
            params: params,
        }));
    };
    return Connector;
}(Emitter_1.default));
exports["default"] = new Connector();


/***/ }),

/***/ 2627:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setGlobal = void 0;
var isStr_1 = __importDefault(__webpack_require__(1738));
var copy_1 = __importDefault(__webpack_require__(4844));
var toArr_1 = __importDefault(__webpack_require__(769));
var keys_1 = __importDefault(__webpack_require__(3145));
var xpath_1 = __importDefault(__webpack_require__(8862));
var each_1 = __importDefault(__webpack_require__(9100));
var global = {
    copy: function (value) {
        if (!(0, isStr_1.default)(value))
            value = JSON.stringify(value, null, 2);
        (0, copy_1.default)(value);
    },
    $: function (selector) {
        return document.querySelector(selector);
    },
    $$: function (selector) {
        return (0, toArr_1.default)(document.querySelectorAll(selector));
    },
    $x: function (path) {
        return (0, xpath_1.default)(path);
    },
    keys: keys_1.default,
};
function injectGlobal() {
    (0, each_1.default)(global, function (val, name) {
        if (window[name])
            return;
        window[name] = val;
    });
}
function clearGlobal() {
    (0, each_1.default)(global, function (val, name) {
        if (window[name] && window[name] === val) {
            delete window[name];
        }
    });
}
function setGlobal(name, val) {
    global[name] = val;
}
exports.setGlobal = setGlobal;
function evaluate(expression) {
    var ret;
    injectGlobal();
    try {
        ret = eval.call(window, "(".concat(expression, ")"));
    }
    catch (e) {
        ret = eval.call(window, expression);
    }
    clearGlobal();
    return ret;
}
exports["default"] = evaluate;


/***/ }),

/***/ 8757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Emitter_1 = __importDefault(__webpack_require__(2263));
var each_1 = __importDefault(__webpack_require__(9100));
var Observer = (function (_super) {
    __extends(Observer, _super);
    function Observer() {
        var _this = _super.call(this) || this;
        _this.observer = new MutationObserver(function (mutations) {
            (0, each_1.default)(mutations, function (mutation) { return _this.handleMutation(mutation); });
        });
        return _this;
    }
    Observer.prototype.observe = function () {
        var observer = this.observer;
        observer.disconnect();
        observer.observe(document.documentElement, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        });
    };
    Observer.prototype.handleMutation = function (mutation) {
        if (mutation.type === 'attributes') {
            this.emit('attributes', mutation.target, mutation.attributeName);
        }
        else if (mutation.type === 'childList') {
            this.emit('childList', mutation.target, mutation.addedNodes, mutation.removedNodes);
        }
        else if (mutation.type === 'characterData') {
            this.emit('characterData', mutation.target);
        }
    };
    return Observer;
}(Emitter_1.default));
exports["default"] = new Observer();


/***/ }),

/***/ 9893:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNode = exports.isValidNode = exports.filterNodes = exports.getPreviousNode = exports.getChildNodes = exports.wrap = exports.getNodeId = exports.clear = exports.getOrCreateNodeId = void 0;
var map_1 = __importDefault(__webpack_require__(3915));
var filter_1 = __importDefault(__webpack_require__(2571));
var each_1 = __importDefault(__webpack_require__(9100));
var trim_1 = __importDefault(__webpack_require__(9405));
var contain_1 = __importDefault(__webpack_require__(3249));
var extend_1 = __importDefault(__webpack_require__(8105));
var util_1 = __webpack_require__(916);
var nodes = new Map();
var nodeIds = new Map();
var id = 1;
function getOrCreateNodeId(node) {
    var nodeId = nodeIds.get(node);
    if (nodeId)
        return nodeId;
    nodeId = id++;
    nodeIds.set(node, nodeId);
    nodes.set(nodeId, node);
    return nodeId;
}
exports.getOrCreateNodeId = getOrCreateNodeId;
function clear() {
    nodes.clear();
    nodeIds.clear();
}
exports.clear = clear;
function getNodeId(node) {
    return nodeIds.get(node);
}
exports.getNodeId = getNodeId;
function wrap(node, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.depth, depth = _c === void 0 ? 1 : _c;
    var nodeId = getOrCreateNodeId(node);
    var ret = {
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        localName: node.localName || '',
        nodeValue: node.nodeValue || '',
        nodeId: nodeId,
        backendNodeId: nodeId,
    };
    if (node.parentNode) {
        ret.parentId = getOrCreateNodeId(node.parentNode);
    }
    if (node.nodeType === 10) {
        return (0, extend_1.default)(ret, {
            publicId: '',
            systemId: '',
        });
    }
    if (node.attributes) {
        var attributes_1 = [];
        (0, each_1.default)(node.attributes, function (_a) {
            var name = _a.name, value = _a.value;
            return attributes_1.push(name, value);
        });
        ret.attributes = attributes_1;
    }
    var childNodes = filterNodes(node.childNodes);
    ret.childNodeCount = childNodes.length;
    var hasOneTextNode = ret.childNodeCount === 1 && childNodes[0].nodeType === 3;
    if (depth > 0 || hasOneTextNode) {
        ret.children = getChildNodes(node, depth);
    }
    return ret;
}
exports.wrap = wrap;
function getChildNodes(node, depth) {
    var childNodes = filterNodes(node.childNodes);
    return (0, map_1.default)(childNodes, function (node) { return wrap(node, { depth: depth - 1 }); });
}
exports.getChildNodes = getChildNodes;
function getPreviousNode(node) {
    var previousNode = node.previousSibling;
    if (!previousNode)
        return;
    while (!isValidNode(previousNode) && previousNode.previousSibling) {
        previousNode = previousNode.previousSibling;
    }
    if (previousNode && isValidNode(previousNode)) {
        return previousNode;
    }
}
exports.getPreviousNode = getPreviousNode;
function filterNodes(childNodes) {
    return filter_1.default(childNodes, function (node) { return isValidNode(node); });
}
exports.filterNodes = filterNodes;
function isValidNode(node) {
    if (node.nodeType === 1) {
        var className = node.getAttribute('class') || '';
        if ((0, contain_1.default)(className, '__chobitsu-hide__') ||
            (0, contain_1.default)(className, 'html2canvas-container')) {
            return false;
        }
    }
    var isValid = !(node.nodeType === 3 && (0, trim_1.default)(node.nodeValue || '') === '');
    if (isValid && node.parentNode) {
        return isValidNode(node.parentNode);
    }
    return isValid;
}
exports.isValidNode = isValidNode;
function getNode(nodeId) {
    var node = nodes.get(nodeId);
    if (!node || node.nodeType === 10) {
        throw (0, util_1.createErr)(-32000, 'Could not find node with given id');
    }
    return node;
}
exports.getNode = getNode;


/***/ }),

/***/ 2484:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProperties = exports.releaseObj = exports.getObj = exports.wrap = exports.clear = void 0;
var toStr_1 = __importDefault(__webpack_require__(2561));
var isNull_1 = __importDefault(__webpack_require__(4236));
var isArr_1 = __importDefault(__webpack_require__(6214));
var isFn_1 = __importDefault(__webpack_require__(3957));
var isEl_1 = __importDefault(__webpack_require__(2708));
var isErr_1 = __importDefault(__webpack_require__(2650));
var isMap_1 = __importDefault(__webpack_require__(1751));
var isSet_1 = __importDefault(__webpack_require__(5945));
var isRegExp_1 = __importDefault(__webpack_require__(1976));
var type_1 = __importDefault(__webpack_require__(2989));
var keys_1 = __importDefault(__webpack_require__(3145));
var toSrc_1 = __importDefault(__webpack_require__(1168));
var allKeys_1 = __importDefault(__webpack_require__(7514));
var isNative_1 = __importDefault(__webpack_require__(9122));
var getProto_1 = __importDefault(__webpack_require__(5427));
var isSymbol_1 = __importDefault(__webpack_require__(9350));
var has_1 = __importDefault(__webpack_require__(365));
var objects = new Map();
var objectIds = new Map();
var selfs = new Map();
var entries = new Map();
var id = 1;
function getOrCreateObjId(obj, self) {
    var objId = objectIds.get(obj);
    if (objId)
        return objId;
    objId = JSON.stringify({
        injectedScriptId: 0,
        id: id++,
    });
    objectIds.set(obj, objId);
    objects.set(objId, obj);
    selfs.set(objId, self);
    return objId;
}
function clear() {
    objects.clear();
    objectIds.clear();
    selfs.clear();
}
exports.clear = clear;
function wrap(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.generatePreview, generatePreview = _c === void 0 ? false : _c, _d = _b.self, self = _d === void 0 ? value : _d;
    var ret = basic(value);
    var type = ret.type, subtype = ret.subtype;
    if (type === 'undefined') {
        return ret;
    }
    if (type === 'string' || type === 'boolean' || subtype === 'null') {
        ret.value = value;
        return ret;
    }
    ret.description = getDescription(value, self);
    if (type === 'number') {
        ret.value = value;
        return ret;
    }
    if (type === 'symbol') {
        ret.objectId = getOrCreateObjId(value, self);
        return ret;
    }
    if (type === 'function') {
        ret.className = 'Function';
    }
    else if (subtype === 'array') {
        ret.className = 'Array';
    }
    else if (subtype === 'map') {
        ret.className = 'Map';
    }
    else if (subtype === 'set') {
        ret.className = 'Set';
    }
    else if (subtype === 'regexp') {
        ret.className = 'RegExp';
    }
    else if (subtype === 'error') {
        ret.className = value.name;
    }
    else {
        ret.className = (0, type_1.default)(value, false);
    }
    if (generatePreview) {
        ret.preview = getPreview(value, self);
    }
    ret.objectId = getOrCreateObjId(value, self);
    return ret;
}
exports.wrap = wrap;
function getObj(objectId) {
    return objects.get(objectId);
}
exports.getObj = getObj;
function releaseObj(objectId) {
    var object = getObj(objectId);
    objectIds.delete(object);
    selfs.delete(objectId);
    objects.delete(objectId);
}
exports.releaseObj = releaseObj;
function getProperties(params) {
    var accessorPropertiesOnly = params.accessorPropertiesOnly, objectId = params.objectId, ownProperties = params.ownProperties, generatePreview = params.generatePreview;
    var properties = [];
    var options = {
        prototype: !ownProperties,
        unenumerable: true,
        symbol: !accessorPropertiesOnly,
    };
    var obj = objects.get(objectId);
    var self = selfs.get(objectId);
    var keys = (0, allKeys_1.default)(obj, options);
    var proto = (0, getProto_1.default)(obj);
    for (var i = 0, len = keys.length; i < len; i++) {
        var name_1 = keys[i];
        var propVal = void 0;
        try {
            propVal = self[name_1];
        }
        catch (e) {
        }
        var property = {
            name: (0, toStr_1.default)(name_1),
            isOwn: (0, has_1.default)(self, name_1),
        };
        var descriptor = Object.getOwnPropertyDescriptor(obj, name_1);
        if (!descriptor && proto) {
            descriptor = Object.getOwnPropertyDescriptor(proto, name_1);
        }
        if (descriptor) {
            if (accessorPropertiesOnly) {
                if (!descriptor.get && !descriptor.set) {
                    continue;
                }
            }
            property.configurable = descriptor.configurable;
            property.enumerable = descriptor.enumerable;
            property.writable = descriptor.writable;
            if (descriptor.get) {
                property.get = wrap(descriptor.get);
            }
            if (descriptor.set) {
                property.set = wrap(descriptor.set);
            }
        }
        if (proto && (0, has_1.default)(proto, name_1) && property.enumerable) {
            property.isOwn = true;
        }
        var accessValue = true;
        if (!property.isOwn && property.get)
            accessValue = false;
        if (accessValue) {
            if ((0, isSymbol_1.default)(name_1)) {
                property.symbol = wrap(name_1);
                property.value = { type: 'undefined' };
            }
            else {
                property.value = wrap(propVal, {
                    generatePreview: generatePreview,
                });
            }
        }
        if (accessorPropertiesOnly) {
            if ((0, isFn_1.default)(propVal) && (0, isNative_1.default)(propVal))
                continue;
        }
        properties.push(property);
    }
    if (proto && !ownProperties && !noPrototype(obj)) {
        properties.push({
            name: '__proto__',
            configurable: true,
            enumerable: false,
            isOwn: (0, has_1.default)(obj, '__proto__'),
            value: wrap(proto, {
                self: self,
            }),
            writable: false,
        });
    }
    if (accessorPropertiesOnly) {
        return {
            result: properties,
        };
    }
    var internalProperties = [];
    if (proto && !noPrototype(obj)) {
        internalProperties.push({
            name: '[[Prototype]]',
            value: wrap(proto, {
                self: self,
            }),
        });
    }
    if ((0, isMap_1.default)(obj) || (0, isSet_1.default)(obj)) {
        var internalEntries = createInternalEntries(obj);
        internalProperties.push({
            name: '[[Entries]]',
            value: wrap(internalEntries),
        });
    }
    return {
        internalProperties: internalProperties,
        result: properties,
    };
}
exports.getProperties = getProperties;
var MAX_PREVIEW_LEN = 5;
function getPreview(obj, self) {
    if (self === void 0) { self = obj; }
    var ret = basic(obj);
    ret.description = getDescription(obj, self);
    var overflow = false;
    var properties = [];
    var keys = (0, keys_1.default)(obj);
    var len = keys.length;
    if (len > MAX_PREVIEW_LEN) {
        len = MAX_PREVIEW_LEN;
        overflow = true;
    }
    for (var i = 0; i < len; i++) {
        var name_2 = keys[i];
        properties.push(getPropertyPreview(name_2, self[name_2]));
    }
    ret.properties = properties;
    if ((0, isMap_1.default)(obj)) {
        var entries_1 = [];
        var i = 0;
        var keys_2 = obj.keys();
        var key = keys_2.next().value;
        while (key) {
            if (i > MAX_PREVIEW_LEN) {
                overflow = true;
                break;
            }
            entries_1.push({
                key: getPreview(key),
                value: getPreview(obj.get(key)),
            });
            i++;
            key = keys_2.next().value;
        }
        ret.entries = entries_1;
    }
    else if ((0, isSet_1.default)(obj)) {
        var entries_2 = [];
        var i = 0;
        var keys_3 = obj.keys();
        var key = keys_3.next().value;
        while (key) {
            if (i > MAX_PREVIEW_LEN) {
                overflow = true;
                break;
            }
            entries_2.push({
                value: getPreview(key),
            });
            i++;
            key = keys_3.next().value;
        }
        ret.entries = entries_2;
    }
    ret.overflow = overflow;
    return ret;
}
function getPropertyPreview(name, propVal) {
    var property = basic(propVal);
    property.name = name;
    var subtype = property.subtype, type = property.type;
    var value;
    if (type === 'object') {
        if (subtype === 'null') {
            value = 'null';
        }
        else if (subtype === 'array') {
            value = "Array(".concat(propVal.length, ")");
        }
        else if (subtype === 'map') {
            value = "Map(".concat(propVal.size, ")");
        }
        else if (subtype === 'set') {
            value = "Set(".concat(propVal.size, ")");
        }
        else {
            value = (0, type_1.default)(propVal, false);
        }
    }
    else {
        value = (0, toStr_1.default)(propVal);
    }
    property.value = value;
    return property;
}
function getDescription(obj, self) {
    if (self === void 0) { self = obj; }
    var description = '';
    var _a = basic(obj), type = _a.type, subtype = _a.subtype;
    if (type === 'string') {
        description = obj;
    }
    else if (type === 'number') {
        description = (0, toStr_1.default)(obj);
    }
    else if (type === 'symbol') {
        description = (0, toStr_1.default)(obj);
    }
    else if (type === 'function') {
        description = (0, toSrc_1.default)(obj);
    }
    else if (subtype === 'array') {
        description = "Array(".concat(obj.length, ")");
    }
    else if (subtype === 'map') {
        description = "Map(".concat(self.size, ")");
    }
    else if (subtype === 'set') {
        description = "Set(".concat(self.size, ")");
    }
    else if (subtype === 'regexp') {
        description = (0, toStr_1.default)(obj);
    }
    else if (subtype === 'error') {
        description = obj.stack;
    }
    else if (subtype === 'internal#entry') {
        if (obj.name) {
            description = "{\"".concat((0, toStr_1.default)(obj.name), "\" => \"").concat((0, toStr_1.default)(obj.value), "\"}");
        }
        else {
            description = "\"".concat((0, toStr_1.default)(obj.value), "\"");
        }
    }
    else {
        description = (0, type_1.default)(obj, false);
    }
    return description;
}
function basic(value) {
    var type = typeof value;
    var subtype = 'object';
    if (value instanceof InternalEntry) {
        subtype = 'internal#entry';
    }
    else if ((0, isNull_1.default)(value)) {
        subtype = 'null';
    }
    else if ((0, isArr_1.default)(value)) {
        subtype = 'array';
    }
    else if ((0, isRegExp_1.default)(value)) {
        subtype = 'regexp';
    }
    else if ((0, isErr_1.default)(value)) {
        subtype = 'error';
    }
    else if ((0, isMap_1.default)(value)) {
        subtype = 'map';
    }
    else if ((0, isSet_1.default)(value)) {
        subtype = 'set';
    }
    else {
        try {
            if ((0, isEl_1.default)(value)) {
                subtype = 'node';
            }
        }
        catch (e) {
        }
    }
    return {
        type: type,
        subtype: subtype,
    };
}
var InternalEntry = (function () {
    function InternalEntry(value, name) {
        if (name) {
            this.name = name;
        }
        this.value = value;
    }
    return InternalEntry;
}());
function noPrototype(obj) {
    if (obj instanceof InternalEntry) {
        return true;
    }
    if (obj[0] && obj[0] instanceof InternalEntry) {
        return true;
    }
    return false;
}
function createInternalEntries(obj) {
    var entryId = entries.get(obj);
    var internalEntries = entryId ? getObj(entryId) : [];
    var objEntries = obj.entries();
    var entry = objEntries.next().value;
    while (entry) {
        if ((0, isMap_1.default)(obj)) {
            internalEntries.push(new InternalEntry(entry[1], entry[0]));
        }
        else {
            internalEntries.push(new InternalEntry(entry[1]));
        }
        entry = objEntries.next().value;
    }
    return internalEntries;
}


/***/ }),

/***/ 3411:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fullUrl = exports.FetchRequest = exports.XhrRequest = void 0;
var Emitter_1 = __importDefault(__webpack_require__(2263));
var isStr_1 = __importDefault(__webpack_require__(1738));
var last_1 = __importDefault(__webpack_require__(3497));
var Url_1 = __importDefault(__webpack_require__(6032));
var isEmpty_1 = __importDefault(__webpack_require__(9464));
var trim_1 = __importDefault(__webpack_require__(9405));
var now_1 = __importDefault(__webpack_require__(3981));
var each_1 = __importDefault(__webpack_require__(9100));
var startWith_1 = __importDefault(__webpack_require__(1009));
var toNum_1 = __importDefault(__webpack_require__(6030));
var util_1 = __webpack_require__(916);
var XhrRequest = (function (_super) {
    __extends(XhrRequest, _super);
    function XhrRequest(xhr, method, url) {
        var _this = _super.call(this) || this;
        _this.xhr = xhr;
        _this.reqHeaders = {};
        _this.method = method;
        _this.url = fullUrl(url);
        _this.id = (0, util_1.createId)();
        return _this;
    }
    XhrRequest.prototype.toJSON = function () {
        return {
            method: this.method,
            url: this.url,
            id: this.id,
        };
    };
    XhrRequest.prototype.handleSend = function (data) {
        if (!(0, isStr_1.default)(data))
            data = '';
        data = {
            name: getFileName(this.url),
            url: this.url,
            data: data,
            time: (0, now_1.default)(),
            reqHeaders: this.reqHeaders,
            method: this.method,
        };
        if (!(0, isEmpty_1.default)(this.reqHeaders)) {
            data.reqHeaders = this.reqHeaders;
        }
        this.emit('send', this.id, data);
    };
    XhrRequest.prototype.handleReqHeadersSet = function (key, val) {
        if (key && val) {
            this.reqHeaders[key] = val;
        }
    };
    XhrRequest.prototype.handleHeadersReceived = function () {
        var xhr = this.xhr;
        var type = getType(xhr.getResponseHeader('Content-Type') || '');
        this.emit('headersReceived', this.id, {
            type: type.type,
            subType: type.subType,
            size: getSize(xhr, true, this.url),
            time: (0, now_1.default)(),
            resHeaders: getHeaders(xhr),
        });
    };
    XhrRequest.prototype.handleDone = function () {
        var _this = this;
        var xhr = this.xhr;
        var resType = xhr.responseType;
        var resTxt = '';
        var update = function () {
            _this.emit('done', _this.id, {
                status: xhr.status,
                size: getSize(xhr, false, _this.url),
                time: (0, now_1.default)(),
                resTxt: resTxt,
            });
        };
        var type = getType(xhr.getResponseHeader('Content-Type') || '');
        if (resType === 'blob' &&
            (type.type === 'text' ||
                type.subType === 'javascript' ||
                type.subType === 'json')) {
            readBlobAsText(xhr.response, function (err, result) {
                if (result)
                    resTxt = result;
                update();
            });
        }
        else {
            if (resType === '' || resType === 'text')
                resTxt = xhr.responseText;
            if (resType === 'json')
                resTxt = JSON.stringify(xhr.response);
            update();
        }
    };
    return XhrRequest;
}(Emitter_1.default));
exports.XhrRequest = XhrRequest;
var FetchRequest = (function (_super) {
    __extends(FetchRequest, _super);
    function FetchRequest(url, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        if (url instanceof window.Request)
            url = url.url;
        _this.url = fullUrl(url);
        _this.id = (0, util_1.createId)();
        _this.options = options;
        _this.reqHeaders = options.headers || {};
        _this.method = options.method || 'GET';
        return _this;
    }
    FetchRequest.prototype.send = function (fetchResult) {
        var _this = this;
        var options = this.options;
        var data = (0, isStr_1.default)(options.body) ? options.body : '';
        this.emit('send', this.id, {
            name: getFileName(this.url),
            url: this.url,
            data: data,
            reqHeaders: this.reqHeaders,
            time: (0, now_1.default)(),
            method: this.method,
        });
        fetchResult.then(function (res) {
            res = res.clone();
            var type = getType(res.headers.get('Content-Type'));
            res.text().then(function (resTxt) {
                var data = {
                    type: type.type,
                    subType: type.subType,
                    time: (0, now_1.default)(),
                    size: getFetchSize(res, resTxt),
                    resTxt: resTxt,
                    resHeaders: getFetchHeaders(res),
                    status: res.status,
                };
                if (!(0, isEmpty_1.default)(_this.reqHeaders)) {
                    data.reqHeaders = _this.reqHeaders;
                }
                _this.emit('done', _this.id, data);
            });
            return res;
        });
    };
    return FetchRequest;
}(Emitter_1.default));
exports.FetchRequest = FetchRequest;
function getFetchSize(res, resTxt) {
    var size = 0;
    var contentLen = res.headers.get('Content-length');
    if (contentLen) {
        size = (0, toNum_1.default)(contentLen);
    }
    else {
        size = lenToUtf8Bytes(resTxt);
    }
    return size;
}
function getFetchHeaders(res) {
    var ret = {};
    res.headers.forEach(function (val, key) { return (ret[key] = val); });
    return ret;
}
function getHeaders(xhr) {
    var raw = xhr.getAllResponseHeaders();
    var lines = raw.split('\n');
    var ret = {};
    (0, each_1.default)(lines, function (line) {
        line = (0, trim_1.default)(line);
        if (line === '')
            return;
        var _a = line.split(':', 2), key = _a[0], val = _a[1];
        ret[key] = (0, trim_1.default)(val);
    });
    return ret;
}
function getSize(xhr, headersOnly, url) {
    var size = 0;
    function getStrSize() {
        if (!headersOnly) {
            var resType = xhr.responseType;
            var resTxt = '';
            if (resType === '' || resType === 'text')
                resTxt = xhr.responseText;
            if (resTxt)
                size = lenToUtf8Bytes(resTxt);
        }
    }
    if (isCrossOrig(url)) {
        getStrSize();
    }
    else {
        try {
            size = (0, toNum_1.default)(xhr.getResponseHeader('Content-Length'));
        }
        catch (e) {
            getStrSize();
        }
    }
    if (size === 0)
        getStrSize();
    return size;
}
var link = document.createElement('a');
function fullUrl(href) {
    link.href = href;
    return (link.protocol + '//' + link.host + link.pathname + link.search + link.hash);
}
exports.fullUrl = fullUrl;
function getFileName(url) {
    var ret = (0, last_1.default)(url.split('/'));
    if (ret.indexOf('?') > -1)
        ret = (0, trim_1.default)(ret.split('?')[0]);
    if (ret === '') {
        var urlObj = new Url_1.default(url);
        ret = urlObj.hostname;
    }
    return ret;
}
function getType(contentType) {
    if (!contentType)
        return {
            type: 'unknown',
            subType: 'unknown',
        };
    var type = contentType.split(';')[0].split('/');
    return {
        type: type[0],
        subType: (0, last_1.default)(type),
    };
}
function readBlobAsText(blob, callback) {
    var reader = new FileReader();
    reader.onload = function () {
        callback(null, reader.result);
    };
    reader.onerror = function (err) {
        callback(err);
    };
    reader.readAsText(blob);
}
var origin = window.location.origin;
function isCrossOrig(url) {
    return !(0, startWith_1.default)(url, origin);
}
function lenToUtf8Bytes(str) {
    var m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
}


/***/ }),

/***/ 916:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBase64Content = exports.getTextContent = exports.getOrigin = exports.getUrl = exports.createErr = exports.ErrorWithCode = exports.getAbsoluteUrl = exports.createId = void 0;
var uniqId_1 = __importDefault(__webpack_require__(5630));
var random_1 = __importDefault(__webpack_require__(6774));
var startWith_1 = __importDefault(__webpack_require__(1009));
var Url_1 = __importDefault(__webpack_require__(6032));
var convertBin_1 = __importDefault(__webpack_require__(5957));
var axios_1 = __importDefault(__webpack_require__(3962));
var prefix = (0, random_1.default)(1000, 9999) + '.';
function createId() {
    return (0, uniqId_1.default)(prefix);
}
exports.createId = createId;
function getAbsoluteUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.href;
}
exports.getAbsoluteUrl = getAbsoluteUrl;
var ErrorWithCode = (function (_super) {
    __extends(ErrorWithCode, _super);
    function ErrorWithCode(code, message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.code = code;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ErrorWithCode;
}(Error));
exports.ErrorWithCode = ErrorWithCode;
function createErr(code, message) {
    return new ErrorWithCode(code, message);
}
exports.createErr = createErr;
function getUrl() {
    var href = location.href;
    if ((0, startWith_1.default)(href, 'about:')) {
        return parent.location.href;
    }
    return href;
}
exports.getUrl = getUrl;
function getOrigin() {
    var origin = location.origin;
    if (origin === 'null') {
        return parent.location.origin;
    }
    return origin;
}
exports.getOrigin = getOrigin;
function getTextContent(url, proxy) {
    if (proxy === void 0) { proxy = ''; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getContent(url, 'text', proxy)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getTextContent = getTextContent;
function getBase64Content(url, proxy) {
    if (proxy === void 0) { proxy = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = convertBin_1.default;
                    return [4, getContent(url, 'arraybuffer', proxy)];
                case 1: return [2, _a.apply(void 0, [_b.sent(), 'base64'])];
            }
        });
    });
}
exports.getBase64Content = getBase64Content;
function getContent(url, responseType, proxy) {
    if (proxy === void 0) { proxy = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var urlObj, result, e_1, result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 8]);
                    urlObj = new Url_1.default(url);
                    urlObj.setQuery('__chobitsu-hide__', 'true');
                    return [4, axios_1.default.get(urlObj.toString(), {
                            responseType: responseType,
                        })];
                case 1:
                    result = _a.sent();
                    return [2, result.data];
                case 2:
                    e_1 = _a.sent();
                    if (!proxy) return [3, 7];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4, axios_1.default.get(proxyUrl(proxy, url), {
                            responseType: responseType,
                        })];
                case 4:
                    result = _a.sent();
                    return [4, result.data];
                case 5: return [2, _a.sent()];
                case 6:
                    e_2 = _a.sent();
                    return [3, 7];
                case 7: return [3, 8];
                case 8: return [2, responseType === 'arraybuffer' ? new ArrayBuffer(0) : ''];
            }
        });
    });
}
function proxyUrl(proxy, url) {
    var urlObj = new Url_1.default(proxy);
    urlObj.setQuery('url', url);
    urlObj.setQuery('__chobitsu-hide__', 'true');
    return urlObj.toString();
}


/***/ }),

/***/ 5067:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_console{padding-top:40px;padding-bottom:24px;width:100%;height:100%}#_console._js-input-hidden{padding-bottom:0}#_console ._control{padding:10px 10px 10px 35px;position:absolute;width:100%;height:40px;left:0;top:0;cursor:default;font-size:0;background:var(--darker-background);color:var(--primary);line-height:20px;border-bottom:1px solid var(--border)}#_console ._control [class*=\" _icon-\"],#_console ._control [class^=eruda-icon-]{display:inline-block;padding:10px;font-size:16px;position:absolute;top:0;cursor:pointer;transition:color .3s}#_console ._control [class*=\" _icon-\"]._active,#_console ._control [class*=\" _icon-\"]:active,#_console ._control [class^=eruda-icon-]._active,#_console ._control [class^=eruda-icon-]:active{color:var(--accent)}#_console ._control ._icon-clear{padding-right:0;left:0}#_console ._control ._icon-copy{right:0}#_console ._control ._icon-filter{right:23px}#_console ._control ._level{cursor:pointer;font-size:12px;height:20px;display:inline-block;margin:0 2px;padding:0 4px;line-height:20px;transition:background-color .3s,color .3s}#_console ._control ._level._active{background:var(--highlight);color:var(--select-foreground)}#_console ._control ._filter-text{white-space:nowrap;position:absolute;line-height:20px;max-width:80px;overflow:hidden;right:55px;font-size:14px;text-overflow:ellipsis}#_console ._js-input{pointer-events:none;position:absolute;z-index:100;left:0;bottom:0;width:100%;border-top:1px solid var(--border);height:24px}#_console ._js-input ._icon-arrow-right{line-height:23px;color:var(--accent);position:absolute;left:10px;top:0;z-index:10}#_console ._js-input._active{height:100%;padding-top:40px;padding-bottom:40px;border-top:none}#_console ._js-input._active ._icon-arrow-right{display:none}#_console ._js-input._active textarea{overflow:auto;padding-left:10px}#_console ._js-input ._buttons{display:none;position:absolute;left:0;bottom:0;width:100%;height:40px;color:var(--primary);background:var(--darker-background);font-size:12px;border-top:1px solid var(--border)}#_console ._js-input ._buttons ._button{pointer-events:all;cursor:pointer;flex:1;text-align:center;border-right:1px solid var(--border);height:40px;line-height:40px;transition:background-color .3s,color .3s}#_console ._js-input ._buttons ._button:last-child{border-right:none}#_console ._js-input ._buttons ._button:active{color:var(--select-foreground);background:var(--highlight)}#_console ._js-input textarea{overflow:hidden;pointer-events:all;padding:3px 10px;padding-left:25px;outline:0;border:none;font-size:14px;width:100%;height:100%;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;resize:none;color:var(--primary);background:var(--background)}._safe-area #_console{padding-bottom:calc(24px + env(safe-area-inset-bottom))}._safe-area #_console._js-input-hidden{padding-bottom:0}._safe-area #_console ._js-input{height:calc(24px + env(safe-area-inset-bottom))}._safe-area #_console ._js-input._active{height:100%;padding-bottom:calc(40px + env(safe-area-inset-bottom))}._safe-area #_console ._js-input ._buttons{height:calc(40px + env(safe-area-inset-bottom))}._safe-area #_console ._js-input ._buttons ._button{height:calc(40px + env(safe-area-inset-bottom))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "._dev-tools{position:absolute;width:100%;height:100%;left:0;bottom:0;background:var(--background);z-index:500;display:none;padding-top:40px!important;opacity:0;transition:opacity .3s;border-top:1px solid var(--border)}._dev-tools ._resizer{position:absolute;width:100%;touch-action:none;left:0;top:-8px;cursor:row-resize;z-index:120}._dev-tools ._tools{overflow:auto;-webkit-overflow-scrolling:touch;height:100%;width:100%;position:relative}._dev-tools ._tools ._tool{position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 7755:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_elements ._elements{position:absolute;width:100%;height:100%;left:0;top:0;padding-top:40px;padding-bottom:24px;font-size:14px}#_elements ._control{padding:10px 0;position:absolute;width:100%;height:40px;left:0;top:0;cursor:default;font-size:0;background:var(--darker-background);color:var(--primary);line-height:20px;border-bottom:1px solid var(--border)}#_elements ._control [class*=\" _icon-\"],#_elements ._control [class^=eruda-icon-]{display:inline-block;padding:10px;font-size:16px;position:absolute;top:0;cursor:pointer;transition:color .3s}#_elements ._control [class*=\" _icon-\"]._active,#_elements ._control [class*=\" _icon-\"]:active,#_elements ._control [class^=eruda-icon-]._active,#_elements ._control [class^=eruda-icon-]:active{color:var(--accent)}#_elements ._control ._icon-eye{right:0}#_elements ._control ._icon-copy{right:23px}#_elements ._control ._icon-delete{right:46px}#_elements ._dom-viewer-container{overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%;padding:5px 0}#_elements ._crumbs{position:absolute;width:100%;height:24px;left:0;top:0;top:initial;line-height:24px;bottom:0;border-top:1px solid var(--border);background:var(--darker-background);color:var(--primary);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#_elements ._crumbs li{cursor:pointer;padding:0 7px;display:inline-block}#_elements ._crumbs li:hover,#_elements ._crumbs li:last-child{background:var(--highlight)}#_elements ._crumbs ._icon-arrow-right{font-size:12px;position:relative;top:1px}#_elements ._detail{position:absolute;width:100%;height:100%;left:0;top:0;z-index:10;padding-top:40px;display:none;background:var(--background)}#_elements ._detail ._control{padding:10px 35px}#_elements ._detail ._control ._element-name{font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;display:inline-block}#_elements ._detail ._control ._icon-arrow-left{left:0}#_elements ._detail ._control ._icon-refresh{right:0}#_elements ._detail ._element{overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%}#_elements ._section{border-bottom:1px solid var(--border);color:var(--foreground);margin:10px 0}#_elements ._section h2{color:var(--primary);background:var(--darker-background);border-top:1px solid var(--border);padding:10px;line-height:18px;font-size:14px;transition:background-color .3s}#_elements ._section h2 ._btn{margin-left:5px;float:right;color:var(--primary);width:18px;height:18px;font-size:16px;cursor:pointer;transition:color .3s}#_elements ._section h2 ._btn._filter-text{width:auto;max-width:80px;font-size:14px;overflow:hidden;font-weight:400;text-overflow:ellipsis;display:inline-block}#_elements ._section h2 ._btn:active{color:var(--accent)}#_elements ._section h2 ._btn._btn-disabled{color:inherit!important;cursor:default!important;pointer-events:none;opacity:.5}#_elements ._section h2 ._btn._btn-disabled *{pointer-events:none}#_elements ._section h2._active-effect{cursor:pointer}#_elements ._section h2._active-effect:active{background:var(--highlight);color:var(--select-foreground)}#_elements ._attributes{font-size:12px}#_elements ._attributes a{color:var(--link-color)}#_elements ._attributes ._table-wrapper{overflow-x:auto;-webkit-overflow-scrolling:touch}#_elements ._attributes table td{padding:5px 10px}#_elements ._text-content{background:#fff}#_elements ._text-content ._content{overflow-x:auto;-webkit-overflow-scrolling:touch;padding:10px}#_elements ._style-color{position:relative;top:1px;width:10px;height:10px;border-radius:50%;margin-right:2px;border:1px solid var(--border);display:inline-block}#_elements ._box-model{overflow-x:auto;-webkit-overflow-scrolling:touch;padding:10px;text-align:center;border-bottom:1px solid var(--color)}#_elements ._computed-style{font-size:12px}#_elements ._computed-style a{color:var(--link-color)}#_elements ._computed-style ._table-wrapper{overflow-y:auto;-webkit-overflow-scrolling:touch;max-height:200px;border-top:1px solid var(--border)}#_elements ._computed-style table td{padding:5px 10px}#_elements ._computed-style table td._key{white-space:nowrap;color:var(--var-color)}#_elements ._styles{font-size:12px}#_elements ._styles ._style-wrapper{padding:10px}#_elements ._styles ._style-wrapper ._style-rules{border:1px solid var(--border);padding:10px;margin-bottom:10px}#_elements ._styles ._style-wrapper ._style-rules ._rule{padding-left:2em;word-break:break-all}#_elements ._styles ._style-wrapper ._style-rules ._rule a{color:var(--link-color)}#_elements ._styles ._style-wrapper ._style-rules ._rule span{color:var(--var-color)}#_elements ._styles ._style-wrapper ._style-rules:last-child{margin-bottom:0}#_elements ._listeners{font-size:12px}#_elements ._listeners ._listener-wrapper{padding:10px}#_elements ._listeners ._listener-wrapper ._listener{margin-bottom:10px;overflow:hidden;border:1px solid var(--border)}#_elements ._listeners ._listener-wrapper ._listener ._listener-type{padding:10px;background:var(--darker-background);color:var(--primary)}#_elements ._listeners ._listener-wrapper ._listener ._listener-content li{overflow-x:auto;-webkit-overflow-scrolling:touch;padding:10px;border-top:none}._safe-area #_elements ._elements{padding-bottom:calc(24px + env(safe-area-inset-bottom))}._safe-area #_elements ._crumbs{height:calc(24px + env(safe-area-inset-bottom))}._safe-area #_elements ._element{padding-bottom:calc(0px + env(safe-area-inset-bottom))}@media screen and (min-width:680px){#_elements ._elements{width:50%}#_elements ._elements ._control ._icon-eye{display:none}#_elements ._elements ._control ._icon-copy{right:0}#_elements ._elements ._control ._icon-delete{right:23px}#_elements ._detail{width:50%;left:initial;right:0;border-left:1px solid var(--border)}#_elements ._detail ._control{padding-left:10px}#_elements ._detail ._control ._icon-arrow-left{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 6945:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "._container ._entry-btn{touch-action:none;width:40px;height:40px;display:flex;background:#000;opacity:.3;border-radius:10px;position:relative;z-index:1000;transition:opacity .3s;color:#fff;font-size:25px;align-items:center;justify-content:center}._container ._entry-btn._active,._container ._entry-btn:active{opacity:.8}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_info{overflow-y:auto;-webkit-overflow-scrolling:touch}#_info li{margin:10px;border:1px solid var(--border)}#_info li ._content,#_info li ._title{padding:10px}#_info li ._title{position:relative;padding-bottom:0;color:var(--accent)}#_info li ._title ._icon-copy{position:absolute;right:10px;top:14px;color:var(--primary);cursor:pointer;transition:color .3s}#_info li ._title ._icon-copy:active{color:var(--accent)}#_info li ._content{margin:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:var(--foreground);font-size:12px;word-break:break-all}#_info li ._content table{width:100%;border-collapse:collapse}#_info li ._content table td,#_info li ._content table th{border:1px solid var(--border);padding:10px}#_info li ._content *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}#_info li ._content a{color:var(--link-color)}#_info li ._device-key,#_info li ._system-key{width:100px}._safe-area #_info{padding-bottom:calc(10px + env(safe-area-inset-bottom))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 2003:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_network ._network{position:absolute;width:100%;height:100%;left:0;top:0;padding-top:39px}#_network ._control{padding:10px;border-bottom:none;position:absolute;width:100%;height:40px;left:0;top:0;cursor:default;font-size:0;background:var(--darker-background);color:var(--primary);line-height:20px;border-bottom:1px solid var(--border)}#_network ._control [class*=\" _icon-\"],#_network ._control [class^=eruda-icon-]{display:inline-block;padding:10px;font-size:16px;position:absolute;top:0;cursor:pointer;transition:color .3s}#_network ._control [class*=\" _icon-\"]._active,#_network ._control [class*=\" _icon-\"]:active,#_network ._control [class^=eruda-icon-]._active,#_network ._control [class^=eruda-icon-]:active{color:var(--accent)}#_network ._control ._title{font-size:14px}#_network ._control ._icon-clear{left:23px}#_network ._control ._icon-eye{right:0}#_network ._control ._icon-copy{right:23px}#_network ._control ._icon-filter{right:46px}#_network ._control ._filter-text{white-space:nowrap;position:absolute;line-height:20px;max-width:80px;overflow:hidden;right:88px;font-size:14px;text-overflow:ellipsis}#_network ._control ._icon-record{left:0}#_network ._control ._icon-record._recording{color:var(--console-error-foreground);text-shadow:0 0 4px var(--console-error-foreground)}#_network ._request-error{color:var(--console-error-foreground)}#_network .luna-data-grid:focus .luna-data-grid-data-container ._request-error.luna-data-grid-selected{background:var(--console-error-background)}#_network .luna-data-grid{border-left:none;border-right:none}#_network ._detail{position:absolute;width:100%;height:100%;left:0;top:0;z-index:10;display:none;padding-top:40px;background:var(--background)}#_network ._detail ._control{padding:10px 35px;border-bottom:1px solid var(--border)}#_network ._detail ._control ._url{font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;display:inline-block}#_network ._detail ._control ._icon-arrow-left{left:0}#_network ._detail ._control ._icon-delete{left:0;display:none}#_network ._detail ._control ._icon-copy{right:0}#_network ._detail ._http{overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%}#_network ._detail ._http ._section{border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-top:10px;margin-bottom:10px}#_network ._detail ._http ._section h2{background:var(--darker-background);color:var(--primary);padding:10px;line-height:18px;font-size:14px}#_network ._detail ._http ._section table{color:var(--foreground)}#_network ._detail ._http ._section table *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}#_network ._detail ._http ._section table td{font-size:12px;padding:5px 10px;word-break:break-all}#_network ._detail ._http ._section table ._key{white-space:nowrap;font-weight:700;color:var(--accent)}#_network ._detail ._http ._data,#_network ._detail ._http ._response{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow-x:auto;-webkit-overflow-scrolling:touch;padding:10px;font-size:12px;margin:10px 0;white-space:pre-wrap;border-top:1px solid var(--border);color:var(--foreground);border-bottom:1px solid var(--border)}._safe-area #_network ._http{padding-bottom:calc(0px + env(safe-area-inset-bottom))}@media screen and (min-width:680px){#_network ._network ._control ._icon-eye{display:none}#_network ._network ._control ._icon-copy{right:0}#_network ._network ._control ._icon-filter{right:23px}#_network ._network ._control ._filter-text{right:55px}#_network ._detail{width:50%;left:initial;right:0;border-left:1px solid var(--border)}#_network ._detail ._control ._icon-arrow-left{display:none}#_network ._detail ._control ._icon-delete{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 3815:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_resources{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:10px;font-size:14px}#_resources ._section{margin-bottom:10px;overflow:hidden;border:1px solid var(--border)}#_resources ._section._warn{border:1px solid var(--console-warn-border)}#_resources ._section._warn ._title{background:var(--console-warn-background);color:var(--console-warn-foreground)}#_resources ._section._danger{border:1px solid var(--console-error-border)}#_resources ._section._danger ._title{background:var(--console-error-background);color:var(--console-error-foreground)}#_resources ._section._cookie,#_resources ._section._local-storage,#_resources ._section._session-storage{border:none}#_resources ._section._cookie ._title,#_resources ._section._local-storage ._title,#_resources ._section._session-storage ._title{border:1px solid var(--border);border-bottom:none}#_resources ._title{padding:10px;line-height:18px;color:var(--primary);background:var(--darker-background)}#_resources ._title ._btn{margin-left:5px;float:right;color:var(--primary);width:18px;height:18px;font-size:16px;cursor:pointer;transition:color .3s}#_resources ._title ._btn._filter-text{width:auto;max-width:80px;font-size:14px;overflow:hidden;font-weight:400;text-overflow:ellipsis;display:inline-block}#_resources ._title ._btn:active{color:var(--accent)}#_resources ._title ._btn._btn-disabled{color:inherit!important;cursor:default!important;pointer-events:none;opacity:.5}#_resources ._title ._btn._btn-disabled *{pointer-events:none}#_resources ._link-list{font-size:12px;color:var(--foreground)}#_resources ._link-list li{padding:10px;word-break:break-all}#_resources ._link-list li a{color:var(--link-color)!important}#_resources ._image-list{color:var(--foreground);font-size:12px;display:flex;flex-wrap:wrap;padding:10px!important}#_resources ._image-list:after{content:\"\";display:block;clear:both}#_resources ._image-list li{flex-grow:1;cursor:pointer;overflow-y:hidden}#_resources ._image-list li._image{height:100px;font-size:0}#_resources ._image-list li img{height:100px;min-width:100%;-o-object-fit:cover;object-fit:cover}._safe-area #_resources{padding-bottom:calc(10px + env(safe-area-inset-bottom))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 4923:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_settings{overflow-y:auto;-webkit-overflow-scrolling:touch}._safe-area #_settings{padding-bottom:calc(0px + env(safe-area-inset-bottom))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 8025:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_snippets{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:10px}#_snippets ._section{margin-bottom:10px;border:1px solid var(--border);overflow:hidden;cursor:pointer}#_snippets ._section:active ._name{background:var(--highlight);color:var(--select-foreground)}#_snippets ._section ._name{padding:10px;line-height:18px;color:var(--primary);background:var(--darker-background);transition:background-color .3s}#_snippets ._section ._name ._btn{margin-left:10px;float:right;text-align:center;width:18px;height:18px;font-size:12px}#_snippets ._section ._description{font-size:12px;color:var(--foreground);padding:10px;transition:background-color .3s}._safe-area #_snippets{padding-bottom:calc(10px + env(safe-area-inset-bottom))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 7516:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "._search-highlight-block{display:inline}._search-highlight-block ._keyword{background:var(--console-warn-background);color:var(--console-warn-foreground)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1699:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#_sources{font-size:0;overflow-y:auto;-webkit-overflow-scrolling:touch;color:var(--foreground)}#_sources ._code-wrapper,#_sources ._raw-wrapper{overflow-x:auto;-webkit-overflow-scrolling:touch;width:100%;min-height:100%}#_sources ._code,#_sources ._raw{height:100%}#_sources ._code ._keyword,#_sources ._raw ._keyword{color:var(--keyword-color)}#_sources ._code ._comment,#_sources ._raw ._comment{color:var(--comment-color)}#_sources ._code ._number,#_sources ._raw ._number{color:var(--number-color)}#_sources ._code ._string,#_sources ._raw ._string{color:var(--string-color)}#_sources ._code ._operator,#_sources ._raw ._operator{color:var(--operator-color)}#_sources ._code[data-type=html] ._keyword,#_sources ._raw[data-type=html] ._keyword{color:var(--tag-name-color)}#_sources ._image{font-size:12px}#_sources ._image ._breadcrumb{background:var(--darker-background);color:var(--primary);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;margin-bottom:10px;word-break:break-all;padding:10px;font-size:16px;min-height:40px;border-bottom:1px solid var(--border)}#_sources ._image ._img-container{text-align:center}#_sources ._image ._img-container img{max-width:100%}#_sources ._image ._img-info{text-align:center;margin:20px 0;color:var(--foreground)}#_sources ._json{padding:0 10px}#_sources ._json *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}#_sources iframe{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 2713:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "._container a,._container abbr,._container acronym,._container address,._container applet,._container article,._container aside,._container audio,._container b,._container big,._container blockquote,._container canvas,._container caption,._container center,._container cite,._container code,._container dd,._container del,._container details,._container dfn,._container dl,._container dt,._container em,._container embed,._container fieldset,._container figcaption,._container figure,._container footer,._container form,._container h1,._container h2,._container h3,._container h4,._container h5,._container h6,._container header,._container hgroup,._container i,._container iframe,._container img,._container ins,._container kbd,._container label,._container legend,._container li,._container mark,._container menu,._container nav,._container object,._container ol,._container output,._container p,._container pre,._container q,._container ruby,._container s,._container samp,._container section,._container small,._container span,._container strike,._container strong,._container sub,._container summary,._container sup,._container table,._container tbody,._container td,._container tfoot,._container th,._container thead,._container time,._container tr,._container tt,._container u,._container ul,._container var,._container video{margin:0;padding:0;border:0;font-size:100%}._container article,._container aside,._container details,._container figcaption,._container figure,._container footer,._container header,._container hgroup,._container menu,._container nav,._container section{display:block}._container body{line-height:1}._container ol,._container ul{list-style:none}._container blockquote,._container q{quotes:none}._container blockquote:after,._container blockquote:before,._container q:after,._container q:before{content:\"\";content:none}._container table{border-collapse:collapse;border-spacing:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 6243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".luna-console{background:var(--background)}.luna-console-header{color:var(--link-color);border-bottom-color:var(--border)}.luna-console-nesting-level{border-right-color:var(--border)}.luna-console-nesting-level::before{border-bottom-color:var(--border)}.luna-console-log-container.luna-console-selected .luna-console-log-item{background:var(--contrast)}.luna-console-log-container.luna-console-selected .luna-console-log-item:not(.luna-console-error):not(.luna-console-warn){border-color:var(--border)}.luna-console-log-item{border-bottom-color:var(--border);color:var(--foreground)}.luna-console-log-item a{color:var(--link-color)!important}.luna-console-log-item .luna-console-icon-container .luna-console-icon{color:var(--foreground)}.luna-console-log-item .luna-console-icon-container .luna-console-icon-error{color:#ef3842}.luna-console-log-item .luna-console-icon-container .luna-console-icon-warn{color:#e8a400}.luna-console-log-item .luna-console-count{color:var(--select-foreground);background:var(--highlight)}.luna-console-log-item.luna-console-warn{color:var(--console-warn-foreground);background:var(--console-warn-background);border-color:var(--console-warn-border)}.luna-console-log-item.luna-console-error{background:var(--console-error-background);color:var(--console-error-foreground);border-color:var(--console-error-border)}.luna-console-log-item.luna-console-error .luna-console-count{background:var(--console-error-foreground)}.luna-console-log-item .luna-console-code .luna-console-key{color:var(--var-color)}.luna-console-log-item .luna-console-code .luna-console-number{color:var(--number-color)}.luna-console-log-item .luna-console-code .luna-console-null{color:var(--operator-color)}.luna-console-log-item .luna-console-code .luna-console-string{color:var(--string-color)}.luna-console-log-item .luna-console-code .luna-console-boolean{color:var(--keyword-color)}.luna-console-log-item .luna-console-code .luna-console-special{color:var(--operator-color)}.luna-console-log-item .luna-console-code .luna-console-keyword{color:var(--keyword-color)}.luna-console-log-item .luna-console-code .luna-console-operator{color:var(--operator-color)}.luna-console-log-item .luna-console-code .luna-console-comment{color:var(--comment-color)}.luna-console-log-item .luna-console-log-content .luna-console-null,.luna-console-log-item .luna-console-log-content .luna-console-undefined{color:var(--operator-color)}.luna-console-log-item .luna-console-log-content .luna-console-number{color:var(--number-color)}.luna-console-log-item .luna-console-log-content .luna-console-boolean{color:var(--keyword-color)}.luna-console-log-item .luna-console-log-content .luna-console-regexp,.luna-console-log-item .luna-console-log-content .luna-console-symbol{color:var(--var-color)}.luna-console-preview .luna-console-key{color:var(--var-color)}.luna-console-preview .luna-console-number{color:var(--number-color)}.luna-console-preview .luna-console-null{color:var(--operator-color)}.luna-console-preview .luna-console-string{color:var(--string-color)}.luna-console-preview .luna-console-boolean{color:var(--keyword-color)}.luna-console-preview .luna-console-special{color:var(--operator-color)}.luna-console-preview .luna-console-keyword{color:var(--keyword-color)}.luna-console-preview .luna-console-operator{color:var(--operator-color)}.luna-console-preview .luna-console-comment{color:var(--comment-color)}.luna-object-viewer{color:var(--primary);font-size:12px!important}.luna-object-viewer-null{color:var(--operator-color)}.luna-object-viewer-regexp,.luna-object-viewer-string{color:var(--string-color)}.luna-object-viewer-number{color:var(--number-color)}.luna-object-viewer-boolean{color:var(--keyword-color)}.luna-object-viewer-special{color:var(--operator-color)}.luna-object-viewer-key,.luna-object-viewer-key-lighter{color:var(--var-color)}.luna-object-viewer-expanded:before{border-color:transparent;border-top-color:var(--foreground)}.luna-object-viewer-collapsed:before{border-top-color:transparent;border-left-color:var(--foreground)}.luna-notification{pointer-events:none!important;padding:10px;z-index:1000}.luna-notification-item{z-index:500;color:var(--foreground);background:var(--background);box-shadow:none;padding:5px 10px;border:1px solid var(--border)}.luna-notification-upper{margin-bottom:10px}.luna-notification-lower{margin-top:10px}.luna-data-grid{color:var(--foreground);background:var(--background);border-color:var(--border)}.luna-data-grid:focus .luna-data-grid-data-container .luna-data-grid-node.luna-data-grid-selected{background:var(--accent)}.luna-data-grid td,.luna-data-grid th{border-color:var(--border)}.luna-data-grid th{background:var(--darker-background)}.luna-data-grid th.luna-data-grid-sortable:active,.luna-data-grid th.luna-data-grid-sortable:hover{color:var(--select-foreground);background:var(--highlight)}.luna-data-grid .luna-data-grid-data-container .luna-data-grid-node.luna-data-grid-selected{background:var(--highlight)}.luna-data-grid .luna-data-grid-data-container tr:nth-child(even){background:var(--contrast)}.luna-dom-viewer{color:var(--foreground)}.luna-dom-viewer .luna-dom-viewer-html-tag,.luna-dom-viewer .luna-dom-viewer-tag-name{color:var(--tag-name-color)}.luna-dom-viewer .luna-dom-viewer-attribute-name{color:var(--attribute-name-color)}.luna-dom-viewer .luna-dom-viewer-attribute-value{color:var(--string-color)}.luna-dom-viewer .luna-dom-viewer-html-comment{color:var(--comment-color)}.luna-dom-viewer .luna-dom-viewer-tree-item:hover .luna-dom-viewer-selection{background:var(--contrast)}.luna-dom-viewer .luna-dom-viewer-tree-item.luna-dom-viewer-selected .luna-dom-viewer-selection{background:var(--highlight)}.luna-dom-viewer .luna-dom-viewer-tree-item.luna-dom-viewer-selected:focus .luna-dom-viewer-selection{background:var(--accent);opacity:.2}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-key{color:var(--var-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-number{color:var(--number-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-null{color:var(--operator-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-string{color:var(--string-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-boolean{color:var(--keyword-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-special{color:var(--operator-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-keyword{color:var(--keyword-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-operator{color:var(--operator-color)}.luna-dom-viewer .luna-dom-viewer-text-node .luna-dom-viewer-comment{color:var(--comment-color)}.luna-dom-viewer-children{margin:0;padding-left:15px!important}._inline .luna-modal,._inline .luna-notification{position:absolute}.luna-modal{z-index:9999999}.luna-modal-body,.luna-modal-input{color:var(--foreground);background:var(--background)}.luna-modal-input{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;border-color:var(--border)}.luna-modal-button-group .luna-modal-secondary{border-color:var(--border);color:var(--foreground);background:var(--background)}.luna-modal-button-group .luna-modal-primary{background:var(--accent)}.luna-modal-button-group .luna-modal-button:active::before{background:var(--accent)}.luna-tab{position:absolute;left:0;top:0;color:var(--foreground);background:var(--darker-background)}.luna-tab-tabs-container{border-color:var(--border)}.luna-tab-item.luna-tab-selected,.luna-tab-item:hover{background:var(--highlight);color:var(--select-foreground)}.luna-tab-slider{background:var(--accent)}.luna-text-viewer{color:var(--foreground);border:none;border-bottom:1px solid var(--border);background:var(--background);font-size:12px}.luna-text-viewer .luna-text-viewer-line-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-text-viewer .luna-text-viewer-line-text *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-text-viewer .luna-text-viewer-copy,.luna-text-viewer .luna-text-viewer-line-number{border-color:var(--border)}.luna-text-viewer .luna-text-viewer-copy .luna-text-viewer-icon-check{color:var(--accent)}.luna-text-viewer .luna-text-viewer-copy{background-color:var(--background)}.luna-setting{color:var(--foreground);background:var(--background)}.luna-setting-item.luna-setting-selected,.luna-setting-item:hover{background:var(--darker-background)}.luna-setting-item.luna-setting-selected:focus{outline:0}.luna-setting-item-title{font-size:14px}.luna-setting-item-separator{border-color:var(--border)}.luna-setting-item-checkbox input{border-color:var(--border)}.luna-setting-item-checkbox input:checked{background-color:var(--accent);border-color:var(--accent)}.luna-setting-item-select .luna-setting-select select{color:var(--foreground);border-color:var(--border);background:var(--background)}.luna-setting-item-select .luna-setting-select:after{border-top-color:var(--foreground)}.luna-setting-item-button button{color:var(--accent);background:var(--background);border-color:var(--border)}.luna-setting-item-button button:active,.luna-setting-item-button button:hover{background:var(--darker-background)}.luna-setting-item-button button:active{border:1px solid var(--accent)}.luna-setting-item-number .luna-setting-range-container .luna-setting-range-track .luna-setting-range-track-bar{background:var(--border)}.luna-setting-item-number .luna-setting-range-container .luna-setting-range-track .luna-setting-range-track-bar .luna-setting-range-track-progress{background:var(--accent)}.luna-setting-item-number .luna-setting-range-container input::-webkit-slider-thumb{border-color:var(--border);background:radial-gradient(circle at center,var(--dark) 0,var(--dark) 15%,var(--light) 22%,var(--light) 100%)}.luna-box-model{background:rgba(0,0,0,0)}.luna-box-model-position{color:var(--foreground)}._container{min-width:320px;pointer-events:none;position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999999;color:var(--foreground);font-family:\".SFNSDisplay-Regular\",\"Helvetica Neue\",\"Lucida Grande\",\"Segoe UI\",Tahoma,sans-serif;font-size:14px;direction:ltr}._container._dark{color-scheme:dark}._container *{box-sizing:border-box;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none}._container ul{list-style:none;padding:0;margin:0}._container h1,._container h2,._container h3,._container h4{margin:0}._container h2{font-size:14px}._container h2 [class*=\" _icon-\"],._container h2 [class^=icon-]{font-weight:400}._container._inline{position:static}._hidden{display:none}._icon-disabled{opacity:.5;pointer-events:none;cursor:default!important}._icon-disabled:active{color:inherit!important}._tag-name-color{color:var(--tag-name-color)}._function-color{color:var(--function-color)}._attribute-name-color{color:var(--attribute-name-color)}._operator-color{color:var(--operator-color)}._string-color{color:var(--string-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".luna-box-model{color:#333;background-color:#fff;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;display:inline-block;color:#222;font-size:12px;text-align:center;white-space:nowrap}.luna-box-model.luna-box-model-platform-windows{font-family:'Segoe UI',Tahoma,sans-serif}.luna-box-model.luna-box-model-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-box-model .luna-box-model-hidden,.luna-box-model.luna-box-model-hidden{display:none}.luna-box-model .luna-box-model-invisible,.luna-box-model.luna-box-model-invisible{visibility:hidden}.luna-box-model *{box-sizing:border-box}.luna-box-model.luna-box-model-theme-dark{color:#a5a5a5;background-color:#242424}.luna-box-model-label{position:absolute;margin-left:3px;padding:0 2px}.luna-box-model-bottom,.luna-box-model-left,.luna-box-model-right,.luna-box-model-top{display:inline-block}.luna-box-model-left,.luna-box-model-right{vertical-align:middle}.luna-box-model-border,.luna-box-model-content,.luna-box-model-margin,.luna-box-model-padding,.luna-box-model-position{position:relative;display:inline-block;text-align:center;vertical-align:middle;padding:3px;margin:3px}.luna-box-model-position{border:1px grey dotted}.luna-box-model-margin{color:#333;border:1px dashed;background:rgba(246,178,107,.66)}.luna-box-model-border{color:#333;border:1px #000 solid;background:rgba(255,229,153,.66)}.luna-box-model-padding{color:#333;border:1px grey dashed;background:rgba(147,196,125,.55)}.luna-box-model-content{color:#333;border:1px grey solid;min-width:100px;background:rgba(111,168,220,.66)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 7853:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-console-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAACnAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAI4AAADcIsYnIk9TLzIAAAGYAAAAPgAAAFZWmlGRY21hcAAAAdgAAAD2AAACyDioZ9NnbHlmAAAC0AAAAZgAAAH8Lq6nDGhlYWQAAARoAAAAMQAAADZ25cSzaGhlYQAABJwAAAAdAAAAJAgCBBRobXR4AAAEvAAAABkAAABYGAH//GxvY2EAAATYAAAAGAAAAC4J8glUbWF4cAAABPAAAAAfAAAAIAEjAFBuYW1lAAAFEAAAASkAAAIWm5e+CnBvc3QAAAY8AAAAcAAAAJ7qA/7MeJxNjTsOwjAQRJ8TJzE2hPBrKBBHQByAAiGqFBRcIBVCiqhyBA7O2AgRr9Y7M2+lxQCeAyeyy7W9U/fd8GKL5fsiH2vTPx8d7ufEbJpO/aagYc+RM7fEjBKnmiRuySmZUTNNf0wybYSRj9VoO4iU7NQh+Up8qelZs5EupP75Shfm2oz3Kmkvt/gARcgJKwAAeJxjYGQUZ5zAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHGHQ/srGAuDEsTGBhRhABALQ1CMwAAHiczdJNbsIwEIbh1+QHQsJviNRFF1XX7aEQRZQNRQjEHXqgrnopn4B+E8+qqip117GeRB4nk4lloAAyeZIcwicBiw9lQ5/PGPf5nHfNV8yVyXlmzZY9R05cuMbydtOqZTfsOCh7Vjb02e8RVMXGHfc8aDxqwFKVF7QMtdLpmzUVDSOmTJjpnUH/3YJSBcofqv4Wyz8+b6FuWvXSjW1SV30r1sl/icYuofFZh+1+Yn+7dnPZuIW8uFa2big7t5JXZzX3znbh4Gp5c5UcnfVyciM5u6lc3ESuTnsZQ2JnLQ4S7J4ldjZjntj5jEVi5zaWCeUXWN4q9AAAeJxdUMFOU0EUnTMzb2o1FB5O5wENg31k5mExVEo7jSGBEuO6CStDmtbIBuiKBYg/gRu/ABO3/ocscOEXsHBpogtWvFfnvQgxJnduztx7zknuIXQyIYSDE9IgLwmBmIZI1pDYbTSxBqeW4KvrVKSmaaRKFZREE7YJIyONSLW6W37bLiRxscXNTH1zbnFqlnJ5Eu+G9MnT8JBy9l69ELx69Ohd9JCryrwcU07TbCU5H4y+jQbnyco/EF+8x1/eaX03bCzR8IgGwVn0WC/I8YOzaLGS+4+p4K8O/lcXkPhj/CP0ig1JQIhJyugCxz3o7LqH4YUH0L3swlMK3q+CV/HMbhkJAqlarm1jgd+97DpnfsKPeH15eT2+l9L5OJ/kcjZJfY6MU++wQPzI+PRECUJjo97aAtqupaqhFLHtRLHNf1Kwn9lAOid9L7tV9nzVldNL3dC+NmrGOGM+sme2VrO335Mda3foXlXravY57zemY23HkLs72RsW5JegDjZK99FnPPtwl8FX1i92IfAax6yfvkWf/AHb1F1JeJxjYGRgYABi3/mPYuP5bb4ycLOABKI4H+9rgNH//zIwsDCzMAElOBhAJAMAQ2IK+QAAAHicY2BkYGBhAAEWhv9///9lYWZgZEAFYgBbLQQgAAAAeJxjYGBgYGH4/58FTIPZf2FsSgAAM58EEwAAAHicY2AAgjyGJoYlDI8YPjD8ww8BeTMTR3icY2BkYGAQY3BhYGYAASYg5gJCBob/YD4DABGFAXQAeJxlkD1uwkAUhMdgSAJSghQpKbNVCiKZn5IDQE9Bl8KYtTGyvdZ6QaLLCXKEHCGniHKCHChj82hgLT9/M2/e7soABviFh3p5uG1qvVq4oTpxm/Qg7JOfhTvo40W4S38o3MMbpsJ9POKdO3j+HZ0BSuEW7vEh3Kb/KeyTv4Q7eMK3cJf+j3APK/wJ9/HqDdPIFLEp3FIn+yy0Z3n+rrStUlOoSTA+WwtdaBs6vVHro6oOydS5WMXW5GrOrs4yo0prdjpywda5cjYaxeIHkcmRIoJBgbipDktoJNgjQwh71b3UK6YtKvq1VpggwPgqtWCqaJIhlcaGyTWOrBUOPG1K1zGt+FrO5KS5zGreJCMr/u+6t6MT0Q+wbaZKzDDiE1/kg+YO+T89EV6oAAAAeJxtxksOgjAUQNF3kaIW/x9cBYtqgEAnLXlp0+1rwtQzuVcq2Vj5r6NiR42hYc+BI5aWE2cuXLlx58GTF286PmIm1ajGhzWnJub0S12cBjs4nVI/xhLabdXPS2JCiXgCK5lEwTHQMzKziHwBqnYYpg==') format('woff')}[class*=' luna-console-icon-'],[class^=luna-console-icon-]{display:inline-block;font-family:luna-console-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-console-icon-error:before{content:'\\f101'}.luna-console-icon-input:before{content:'\\f102'}.luna-console-icon-output:before{content:'\\f103'}.luna-console-icon-warn:before{content:'\\f104'}.luna-console-icon-caret-down:before{content:'\\f105'}.luna-console-icon-caret-right:before{content:'\\f106'}.luna-console{background:#fff;overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%;position:relative;will-change:scroll-position;cursor:default;font-size:12px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.luna-console.luna-console-theme-dark{background-color:#141414}.luna-console-hidden{display:none}.luna-console-fake-logs{position:absolute;left:0;top:0;pointer-events:none;visibility:hidden;width:100%}.luna-console-logs{padding-top:1px;position:absolute;width:100%}.luna-console-log-container{box-sizing:content-box}.luna-console-log-container.luna-console-selected .luna-console-log-item{background:#ecf1f8}.luna-console-log-container.luna-console-selected .luna-console-log-item:not(.luna-console-error):not(.luna-console-warn){border-color:#ccdef5}.luna-console-header{white-space:nowrap;display:flex;font-size:11px;color:#545454;border-top:1px solid transparent;border-bottom:1px solid #ccc}.luna-console-header .luna-console-time-from-container{overflow-x:auto;-webkit-overflow-scrolling:touch;padding:3px 10px}.luna-console-nesting-level{width:14px;flex-shrink:0;margin-top:-1px;margin-bottom:-1px;position:relative;border-right:1px solid #ccc}.luna-console-nesting-level.luna-console-group-closed::before{content:\"\"}.luna-console-nesting-level::before{border-bottom:1px solid #ccc;position:absolute;top:0;left:0;margin-left:100%;width:5px;height:100%;box-sizing:border-box}.luna-console-log-item{position:relative;display:flex;border-top:1px solid transparent;border-bottom:1px solid #ccc;margin-top:-1px;color:#333}.luna-console-log-item:after{content:\"\";display:block;clear:both}.luna-console-log-item .luna-console-code{display:inline;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.luna-console-log-item .luna-console-code .luna-console-keyword{color:#881280}.luna-console-log-item .luna-console-code .luna-console-number{color:#1c00cf}.luna-console-log-item .luna-console-code .luna-console-operator{color:gray}.luna-console-log-item .luna-console-code .luna-console-comment{color:#236e25}.luna-console-log-item .luna-console-code .luna-console-string{color:#1a1aa6}.luna-console-log-item a{color:#15c!important}.luna-console-log-item .luna-console-icon-container{margin:0 -6px 0 10px}.luna-console-log-item .luna-console-icon-container .luna-console-icon{line-height:20px;font-size:12px;color:#333;position:relative}.luna-console-log-item .luna-console-icon-container .luna-console-icon-caret-down,.luna-console-log-item .luna-console-icon-container .luna-console-icon-caret-right{top:0;left:-2px}.luna-console-log-item .luna-console-icon-container .luna-console-icon-error{top:0;color:#ef3842}.luna-console-log-item .luna-console-icon-container .luna-console-icon-warn{top:0;color:#e8a400}.luna-console-log-item .luna-console-count{background:#8097bd;color:#fff;padding:2px 4px;border-radius:10px;font-size:12px;float:left;margin:1px -6px 0 10px}.luna-console-log-item .luna-console-log-content-wrapper{flex:1;overflow:hidden}.luna-console-log-item .luna-console-log-content{padding:3px 0;margin:0 10px;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:pre-wrap;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-console-log-item .luna-console-log-content *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-console-log-item .luna-console-log-content>*{vertical-align:top}.luna-console-log-item .luna-console-log-content .luna-console-null,.luna-console-log-item .luna-console-log-content .luna-console-undefined{color:#5e5e5e}.luna-console-log-item .luna-console-log-content .luna-console-number{color:#1c00cf}.luna-console-log-item .luna-console-log-content .luna-console-boolean{color:#0d22aa}.luna-console-log-item .luna-console-log-content .luna-console-regexp,.luna-console-log-item .luna-console-log-content .luna-console-symbol{color:#881391}.luna-console-log-item .luna-console-data-grid,.luna-console-log-item .luna-console-dom-viewer{white-space:initial}.luna-console-log-item.luna-console-error{z-index:50;background:#fff0f0;color:red;border-top:1px solid #ffd6d6;border-bottom:1px solid #ffd6d6}.luna-console-log-item.luna-console-error .luna-console-stack{padding-left:1.2em;white-space:nowrap}.luna-console-log-item.luna-console-error .luna-console-count{background:red}.luna-console-log-item.luna-console-debug{z-index:20}.luna-console-log-item.luna-console-input{border-bottom-color:transparent}.luna-console-log-item.luna-console-warn{z-index:40;color:#5c5c00;background:#fffbe5;border-top:1px solid #fff5c2;border-bottom:1px solid #fff5c2}.luna-console-log-item.luna-console-warn .luna-console-count{background:#e8a400}.luna-console-log-item.luna-console-info{z-index:30}.luna-console-log-item.luna-console-group,.luna-console-log-item.luna-console-groupCollapsed{font-weight:700}.luna-console-preview{display:inline-block}.luna-console-preview .luna-console-preview-container{display:flex;align-items:center}.luna-console-preview .luna-console-json{overflow-x:auto;-webkit-overflow-scrolling:touch;padding-left:12px}.luna-console-preview .luna-console-preview-icon-container{display:block}.luna-console-preview .luna-console-preview-icon-container .luna-console-icon{position:relative;font-size:12px}.luna-console-preview .luna-console-preview-icon-container .luna-console-icon-caret-down{top:2px}.luna-console-preview .luna-console-preview-icon-container .luna-console-icon-caret-right{top:1px}.luna-console-preview .luna-console-preview-content-container{word-break:break-all}.luna-console-preview .luna-console-descriptor,.luna-console-preview .luna-console-object-preview{font-style:italic}.luna-console-preview .luna-console-key{color:#881391}.luna-console-preview .luna-console-number{color:#1c00cf}.luna-console-preview .luna-console-null{color:#5e5e5e}.luna-console-preview .luna-console-string{color:#c41a16}.luna-console-preview .luna-console-boolean{color:#0d22aa}.luna-console-preview .luna-console-special{color:#5e5e5e}.luna-console-theme-dark{color-scheme:dark}.luna-console-theme-dark .luna-console-log-container.luna-console-selected .luna-console-log-item{background:#29323d}.luna-console-theme-dark .luna-console-log-container.luna-console-selected .luna-console-log-item:not(.luna-console-error):not(.luna-console-warn){border-color:#4173b4}.luna-console-theme-dark .luna-console-log-item{color:#a5a5a5;border-bottom-color:#3d3d3d}.luna-console-theme-dark .luna-console-log-item .luna-console-code .luna-console-keyword{color:#e36eec}.luna-console-theme-dark .luna-console-log-item .luna-console-code .luna-console-number{color:#9980ff}.luna-console-theme-dark .luna-console-log-item .luna-console-code .luna-console-operator{color:#7f7f7f}.luna-console-theme-dark .luna-console-log-item .luna-console-code .luna-console-comment{color:#747474}.luna-console-theme-dark .luna-console-log-item .luna-console-code .luna-console-string{color:#f29766}.luna-console-theme-dark .luna-console-log-item.luna-console-error{background:#290000;color:#ff8080;border-top-color:#5c0000;border-bottom-color:#5c0000}.luna-console-theme-dark .luna-console-log-item.luna-console-error .luna-console-count{background:#ff8080}.luna-console-theme-dark .luna-console-log-item.luna-console-warn{color:#ffcb6b;background:#332a00;border-top-color:#650;border-bottom-color:#650}.luna-console-theme-dark .luna-console-log-item .luna-console-count{background:#42597f;color:#949494}.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-null,.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-undefined{color:#7f7f7f}.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-boolean,.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-number{color:#9980ff}.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-regexp,.luna-console-theme-dark .luna-console-log-item .luna-console-log-content .luna-console-symbol{color:#e36eec}.luna-console-theme-dark .luna-console-icon-container .luna-console-icon-caret-down,.luna-console-theme-dark .luna-console-icon-container .luna-console-icon-caret-right{color:#9aa0a6}.luna-console-theme-dark .luna-console-header{border-bottom-color:#3d3d3d}.luna-console-theme-dark .luna-console-nesting-level{border-right-color:#3d3d3d}.luna-console-theme-dark .luna-console-nesting-level::before{border-bottom-color:#3d3d3d}.luna-console-theme-dark .luna-console-preview .luna-console-key{color:#e36eec}.luna-console-theme-dark .luna-console-preview .luna-console-number{color:#9980ff}.luna-console-theme-dark .luna-console-preview .luna-console-null{color:#7f7f7f}.luna-console-theme-dark .luna-console-preview .luna-console-string{color:#f29766}.luna-console-theme-dark .luna-console-preview .luna-console-boolean{color:#9980ff}.luna-console-theme-dark .luna-console-preview .luna-console-special{color:#7f7f7f}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 3277:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".luna-data-grid{color:rgba(0,0,0,.88);background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14;position:relative;font-size:12px;border:1px solid #ccc;overflow:hidden;outline:0}.luna-data-grid.luna-data-grid-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-data-grid.luna-data-grid-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-data-grid .luna-data-grid-hidden,.luna-data-grid.luna-data-grid-hidden{display:none}.luna-data-grid .luna-data-grid-invisible,.luna-data-grid.luna-data-grid-invisible{visibility:hidden}.luna-data-grid *{box-sizing:border-box}.luna-data-grid.luna-data-grid-theme-dark{color:rgba(255,255,255,.85);background-color:#141414}.luna-data-grid.luna-data-grid-theme-dark{color:#a5a5a5;background:#242424;border-color:#3d3d3d}.luna-data-grid table{width:100%;height:100%;border-collapse:separate;border-spacing:0;table-layout:fixed}.luna-data-grid td,.luna-data-grid th{padding:1px 4px;border-left:1px solid #ccc;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.luna-data-grid td:first-child,.luna-data-grid th:first-child{border-left:none}.luna-data-grid th{font-weight:400;border-bottom:1px solid #ccc;text-align:left;background:#f3f3f3}.luna-data-grid th.luna-data-grid-sortable:active,.luna-data-grid th.luna-data-grid-sortable:hover{background:#e6e6e6}.luna-data-grid td{height:20px;cursor:default;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-data-grid:focus .luna-data-grid-node.luna-data-grid-selected{color:#fff;background:#1a73e8}.luna-data-grid:focus.luna-data-grid-theme-dark .luna-data-grid-node.luna-data-grid-selected{background:#0e639c}.luna-data-grid-data-container,.luna-data-grid-header-container{overflow:hidden}.luna-data-grid-header-container{height:21px}.luna-data-grid-data-container{overflow-y:auto}.luna-data-grid-data-container .luna-data-grid-node.luna-data-grid-selected{background:#ddd}.luna-data-grid-data-container tr:nth-child(even){background:#f2f7fd}.luna-data-grid-filler-row td{height:auto}.luna-data-grid-resizer{position:absolute;top:0;bottom:0;width:5px;z-index:500;touch-action:none;cursor:col-resize}.luna-data-grid-resizing{cursor:col-resize!important}.luna-data-grid-resizing .luna-data-grid *{cursor:col-resize!important}.luna-data-grid-theme-dark{color-scheme:dark}.luna-data-grid-theme-dark td,.luna-data-grid-theme-dark th{border-color:#3d3d3d}.luna-data-grid-theme-dark th{background:#292a2d}.luna-data-grid-theme-dark th.luna-data-grid-sortable:hover{background:#303030}.luna-data-grid-theme-dark .luna-data-grid-data-container .luna-data-grid-node.luna-data-grid-selected{background:#393939}.luna-data-grid-theme-dark .luna-data-grid-data-container tr:nth-child(even){background:#0b2544}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-dom-viewer-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAASgAAsAAAAAB4QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAFwAAACMIRYl8k9TLzIAAAFkAAAAPQAAAFZLxUkaY21hcAAAAaQAAADHAAACWBcU1KRnbHlmAAACbAAAAC4AAAAwabU7V2hlYWQAAAKcAAAALwAAADZzjr4faGhlYQAAAswAAAAYAAAAJAFyANdobXR4AAAC5AAAABAAAAA4AZAAAGxvY2EAAAL0AAAAEAAAAB4AnACQbWF4cAAAAwQAAAAfAAAAIAEZAA9uYW1lAAADJAAAASkAAAIWm5e+CnBvc3QAAARQAAAATgAAAG5m1cqleJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiC2AdNMDGwMckCSGyzHCuSxA2kuIJ+HgReoggtJnANMcwJFGRmYAXZLBkt4nGNgZJBlnMDAysDAUMfQAyRloHQCAyeDMQMDEwMrMwNWEJDmmsJwgEH3IxPDCSBXCEwyMDCCCABbzwhtAAAAeJy1kksKwjAQhr/0oX0JLlyIZ9BDCQXtRkEEwQO56uV6Av0nmZWI4MIJX2H+JvNIBiiBXGxFAWEkYPaQGqKe00S94C5/xVJKwY49PQNnLly5Tdnzqb9JPXByNUT13YKipLVm4wvmilvR0ilfrboKFsy0N9OB2Yco32z+437SLVTQdo05dUksgF8z/8+6+B3dU2m67YR1u3fsLXtH7egtEq04OhZpcKzbk1OLs2NzcXE0F3rNhOW9ObqbKSRsVqYsQfYC6fYeiQB4nGNgZACBlQzTGZgYGMyVxVc2O073AIpAxHsYloHFRc2dPZY2OTIwAACmEQesAAB4nGNgZGBgAOLeSTNM4/ltvjJwM5wACkRxPt7XgKCBYCXDMiDJwcAE4gAAQEgKxAB4nGNgZGBgOMHAACdXMjAyoAI+ADixAkp4nGNgAIITUEwCAABMyAGReJxjYAACHgYJ7BAADsoBLXicY2BkYGDgY2BmANEMDExAzAWEDAz/wXwGAAomASkAeJxlkD1uwkAUhMdgSAJSghQpKbNVCiKZn5IDQE9Bl8KYtTGyvdZ6QaLLCXKEHCGniHKCHChj82hgLT9/M2/e7soABviFh3p5uG1qvVq4oTpxm/Qg7JOfhTvo40W4S38o3MMbpsJ9POKdO3j+HZ0BSuEW7vEh3Kb/KeyTv4Q7eMK3cJf+j3APK/wJ9/HqDdPIFLEp3FIn+yy0Z3n+rrStUlOoSTA+WwtdaBs6vVHro6oOydS5WMXW5GrOrs4yo0prdjpywda5cjYaxeIHkcmRIoJBgbipDktoJNgjQwh71b3UK6YtKvq1VpggwPgqtWCqaJIhlcaGyTWOrBUOPG1K1zGt+FrO5KS5zGreJCMr/u+6t6MT0Q+wbaZKzDDiE1/kg+YO+T89EV6oAAAAeJxdxk0KgCAUAOE3/adlJ/FQgqBuFETw+i2kTd9mRiYZvv4ZJmYWVjZ2Dk4UmosbwyPK1Vq69aVnPbamEBuOSqFj8WQSgUgTeQGPtA2iAAA=') format('woff')}[class*=' luna-dom-viewer-icon-'],[class^=luna-dom-viewer-icon-]{display:inline-block;font-family:luna-dom-viewer-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-dom-viewer-icon-arrow-down:before{content:'\\f101'}.luna-dom-viewer-icon-arrow-right:before{content:'\\f102'}.luna-dom-viewer{color:rgba(0,0,0,.88);background-color:#fff;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(0,0,0,0);overflow-x:hidden;word-wrap:break-word;padding:0 0 0 12px;font-size:12px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;cursor:default;list-style:none}.luna-dom-viewer.luna-dom-viewer-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-dom-viewer.luna-dom-viewer-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-dom-viewer .luna-dom-viewer-hidden,.luna-dom-viewer.luna-dom-viewer-hidden{display:none}.luna-dom-viewer .luna-dom-viewer-invisible,.luna-dom-viewer.luna-dom-viewer-invisible{visibility:hidden}.luna-dom-viewer *{box-sizing:border-box}.luna-dom-viewer.luna-dom-viewer-theme-dark{color:rgba(255,255,255,.85);background-color:#141414}.luna-dom-viewer ul{list-style:none}.luna-dom-viewer.luna-dom-viewer-theme-dark{color:#e8eaed}.luna-dom-viewer-toggle{min-width:12px;margin-left:-12px}.luna-dom-viewer-icon-arrow-down,.luna-dom-viewer-icon-arrow-right{position:absolute!important;font-size:12px!important}.luna-dom-viewer-tree-item{line-height:16px;min-height:16px;position:relative;z-index:10;outline:0}.luna-dom-viewer-tree-item.luna-dom-viewer-selected .luna-dom-viewer-selection,.luna-dom-viewer-tree-item:hover .luna-dom-viewer-selection{display:block}.luna-dom-viewer-tree-item:hover .luna-dom-viewer-selection{background:#f2f7fd}.luna-dom-viewer-tree-item.luna-dom-viewer-selected .luna-dom-viewer-selection{background:#e0e0e0}.luna-dom-viewer-tree-item.luna-dom-viewer-selected:focus .luna-dom-viewer-selection{background:#cfe8fc}.luna-dom-viewer-tree-item .luna-dom-viewer-icon-arrow-down{display:none}.luna-dom-viewer-tree-item.luna-dom-viewer-expanded .luna-dom-viewer-icon-arrow-down{display:inline-block}.luna-dom-viewer-tree-item.luna-dom-viewer-expanded .luna-dom-viewer-icon-arrow-right{display:none}.luna-dom-viewer-html-tag{color:#881280}.luna-dom-viewer-tag-name{color:#881280}.luna-dom-viewer-attribute-name{color:#994500}.luna-dom-viewer-attribute-value{color:#1a1aa6}.luna-dom-viewer-attribute-value.luna-dom-viewer-attribute-underline{text-decoration:underline}.luna-dom-viewer-html-comment{color:#236e25}.luna-dom-viewer-selection{position:absolute;display:none;left:-10000px;right:-10000px;top:0;bottom:0;z-index:-1}.luna-dom-viewer-children{margin:0;overflow-x:visible;overflow-y:visible;padding-left:15px}.luna-dom-viewer-text-node .luna-dom-viewer-keyword{color:#881280}.luna-dom-viewer-text-node .luna-dom-viewer-number{color:#1c00cf}.luna-dom-viewer-text-node .luna-dom-viewer-operator{color:gray}.luna-dom-viewer-text-node .luna-dom-viewer-comment{color:#236e25}.luna-dom-viewer-text-node .luna-dom-viewer-string{color:#1a1aa6}.luna-dom-viewer-theme-dark .luna-dom-viewer-icon-arrow-down,.luna-dom-viewer-theme-dark .luna-dom-viewer-icon-arrow-right{color:#9aa0a6}.luna-dom-viewer-theme-dark .luna-dom-viewer-html-tag,.luna-dom-viewer-theme-dark .luna-dom-viewer-tag-name{color:#5db0d7}.luna-dom-viewer-theme-dark .luna-dom-viewer-attribute-name{color:#9bbbdc}.luna-dom-viewer-theme-dark .luna-dom-viewer-attribute-value{color:#f29766}.luna-dom-viewer-theme-dark .luna-dom-viewer-html-comment{color:#898989}.luna-dom-viewer-theme-dark .luna-dom-viewer-tree-item:hover .luna-dom-viewer-selection{background:#083c69}.luna-dom-viewer-theme-dark .luna-dom-viewer-tree-item.luna-dom-viewer-selected .luna-dom-viewer-selection{background:#454545}.luna-dom-viewer-theme-dark .luna-dom-viewer-tree-item.luna-dom-viewer-selected:focus .luna-dom-viewer-selection{background:#073d69}.luna-dom-viewer-theme-dark .luna-dom-viewer-text-node .luna-dom-viewer-keyword{color:#e36eec}.luna-dom-viewer-theme-dark .luna-dom-viewer-text-node .luna-dom-viewer-number{color:#9980ff}.luna-dom-viewer-theme-dark .luna-dom-viewer-text-node .luna-dom-viewer-operator{color:#7f7f7f}.luna-dom-viewer-theme-dark .luna-dom-viewer-text-node .luna-dom-viewer-comment{color:#747474}.luna-dom-viewer-theme-dark .luna-dom-viewer-text-node .luna-dom-viewer-string{color:#f29766}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 4393:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-modal-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAAsAAAAABpQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAEkAAABoILgliE9TLzIAAAFUAAAAPQAAAFZL+0kZY21hcAAAAZQAAACBAAAB3sqmCy5nbHlmAAACGAAAAC0AAAA0Ftcaz2hlYWQAAAJIAAAALgAAADZzhL4YaGhlYQAAAngAAAAYAAAAJAFoANBobXR4AAACkAAAAA8AAAAcAMgAAGxvY2EAAAKgAAAADgAAABAATgBObWF4cAAAArAAAAAfAAAAIAESABhuYW1lAAAC0AAAASkAAAIWm5e+CnBvc3QAAAP8AAAAMQAAAEOplauDeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiCWgNIsQMzKwAykWRnYgGxGBiYAk+wFgwAAAHicY2BkkGWcwMDKwMBQx9ADJGWgdAIDJ4MxAwMTAyszA1YQkOaawnCAIfkjI8MJIFcITDIwMIIIAGAqCKIAAAB4nM2RQQqDQAxFXxyVUsST9DhduBd3ggsv0JX39QT6kwYED1D6hzeQD0nmM0ADFPESNdiG4frItfALz/Br3qp7HlS0jEzMLKy7HYf8e33J1HMdortoWuPzreUX8p2hEikj9f+oi3vIyl86JpWYEvfnxH9sSTzPmijXbl+wE7urE5sAAAB4nGNgZACB+UDIzcBgrs6uzi7OLm4ubq4+j1tfn1tPD0xOhjGAJAMDAKekBtMAAAB4nGNgZGBgAGLPuE0l8fw2Xxm4GU4ABaI4H+9rQNBAMB8IGRg4GJhAHAA5KgqUAAB4nGNgZGBgOMHAACfnMzAyoAJ2ADfsAjl4nGNgAIITDFgBABIUAMkAeJxjYAACKQQEAAO4AJ0AAHicY2BkYGBgZ+BhANEMDExAzAWEDAz/wXwGAApKASsAeJxlkD1uwkAUhMdgSAJSghQpKbNVCiKZn5IDQE9Bl8KYtTGyvdZ6QaLLCXKEHCGniHKCHChj82hgLT9/M2/e7soABviFh3p5uG1qvVq4oTpxm/Qg7JOfhTvo40W4S38o3MMbpsJ9POKdO3j+HZ0BSuEW7vEh3Kb/KeyTv4Q7eMK3cJf+j3APK/wJ9/HqDdPIFLEp3FIn+yy0Z3n+rrStUlOoSTA+WwtdaBs6vVHro6oOydS5WMXW5GrOrs4yo0prdjpywda5cjYaxeIHkcmRIoJBgbipDktoJNgjQwh71b3UK6YtKvq1VpggwPgqtWCqaJIhlcaGyTWOrBUOPG1K1zGt+FrO5KS5zGreJCMr/u+6t6MT0Q+wbaZKzDDiE1/kg+YO+T89EV6oAAAAeJxjYGKAABiNDtgZmRiZGVkYWRnZGNkZORhYk3Pyi1MZkxlzGPMZixlTGRgANIEEbAAAAA==') format('woff')}[class*=' luna-modal-icon-'],[class^=luna-modal-icon-]{display:inline-block;font-family:luna-modal-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-modal-icon-close:before{content:'\\f101'}.luna-modal{color:rgba(0,0,0,.88);background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center}.luna-modal.luna-modal-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-modal.luna-modal-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-modal .luna-modal-hidden,.luna-modal.luna-modal-hidden{display:none}.luna-modal .luna-modal-invisible,.luna-modal.luna-modal-invisible{visibility:hidden}.luna-modal *{box-sizing:border-box}.luna-modal.luna-modal-theme-dark{color-scheme:dark;color:rgba(255,255,255,.85);background-color:#141414}.luna-modal-icon-close{position:absolute;right:16px;top:18px;cursor:pointer;font-size:20px}.luna-modal-body{position:relative;background:#fff;max-height:100%;display:flex;flex-direction:column;border-radius:4px}.luna-modal-body.luna-modal-no-title{position:static}.luna-modal-body.luna-modal-no-title .luna-modal-title{display:none}.luna-modal-body.luna-modal-no-title .luna-modal-icon-close{color:#fff}.luna-modal-body.luna-modal-no-footer .luna-modal-footer{display:none}.luna-modal-hidden{display:none}.luna-modal-title{padding:16px;padding-right:36px;padding-bottom:0;font-size:18px;height:46px;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:0}.luna-modal-content{padding:16px;overflow-y:auto}.luna-modal-footer{flex-shrink:0;padding:12px}.luna-modal-button-group{display:flex;justify-content:flex-end}.luna-modal-button{padding:0 12px;background:#e9ecef;cursor:default;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 4px;font-size:12px;border-radius:4px;overflow:hidden;height:28px;line-height:28px}.luna-modal-button:active::before{background:#1a73e8;content:\"\";opacity:.4;position:absolute;top:0;left:0;width:100%;height:100%;z-index:2}.luna-modal-button.luna-modal-secondary{color:#1a73e8;border:1px solid #d9d9d9;background:#fff}.luna-modal-button.luna-modal-primary{color:#fff;background:#1a73e8}.luna-modal-input{box-sizing:border-box;outline:0;width:100%;font-size:16px;padding:6px 12px;border:1px solid #d9d9d9;-webkit-appearance:none;-moz-appearance:none}.luna-modal-theme-dark .luna-modal-body{background:#141414;border:1px solid #424242}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 5259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-notification-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAZUAAsAAAAACdAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAG0AAACgIZAmVU9TLzIAAAF4AAAAPgAAAFZWzlGlY21hcAAAAbgAAADTAAACdAF1q7JnbHlmAAACjAAAAZ8AAAIw/FBRXGhlYWQAAAQsAAAAMQAAADZ25cSzaGhlYQAABGAAAAAdAAAAJAgCBA9obXR4AAAEgAAAABYAAABEFAH//GxvY2EAAASYAAAAFgAAACQHPAeQbWF4cAAABLAAAAAfAAAAIAEeAFBuYW1lAAAE0AAAASkAAAIWm5e+CnBvc3QAAAX8AAAAVwAAAHunB7sWeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiD2ArL5GGQYdBhswDIgzA6U4QSzmBlYGbgZeIC28YL5rEAoAIScQAwxh4WBH8hmB/PYgOp4GPgAGb8HKAAAAHicY2Bk1GWcwMDKwMDUyXSGgYGhH0IzvmYwYuQAijKwMjNgBQFprikMBxgSP7KwgLgxLExgYUYQAQC/dQkUAAB4nL2SPQ7CMAxGX2ih/LYMCCHOwKUQAoGQqMTSjQMxcQgu1BOUz4knxMCAsPWa5ksTu3aAPpCJjcghPAiY3aWGqGeMo55z03zBXErOlh0HTpypudK0eddp1dQ9R6mXqIaovlvQKeZLVvJ1dKgUZ8qQCQNmFIwUqdS3PUVTlmHw4aRfW8xBKVgGFCOUgqz8Q+TvbBqfT59VWMUT9r5z1C91IWE7Ds5QHJ2JODlW2bOj/1bvEoWoHdVCHU1YURpHtWlDwu5L20tgY5awe9U69F8TTSO0AHiclVC9ThtBEJ6ZXdY4UXwc7O0mWBzxmdsDG9nExmdFKAQUpaClRCa4ihIsGiR+0kWip0A8AQVtKsRDpKGgI8+Qkip3ZtciSpQuq9E33/zvDBDYR1fsGkJoAGAgRbUSmTe4nK5gp/qbtVTgt1uK2XAd/zjpSnn5D08pb27O4Z2nrN5Q3pmzLCBsOGbhzmEQePm1opM953QA6OZzYF+hAFBEjckr7OI+LX3I9mV+0cc1Wutn/QA/bv9XLhtmNpdxghJMQxUgxgaKAooQ25XWKtoF3E5SRKajI+MsKdjPvCfTVFospnW2VE+L2fewFlppl+M4jeNztmjKZfPrNlk3Zp22gjAM8kuH93HHmE48OudwaGcjB6jBO3tT4aFIGpiYt9i0v0jVLFrppkorj7QqlLAgmmiaGEsdolat7qqNLo9KolEU7ycqK89nnk0SlwfRpk8vF/zPxNkX9VrwYPfpkX7CVemFHBCnLJ9PTns7Nzu902T+L4rfbI/HvMPKpl+bJX+XxsaO9VQ4LQfjx3qm5PoPSPD3n/6tHlGAB9G/ZawAeJxjYGRgYADibSbTeeL5bb4ycLOABKI4H+9rgNH//zIwsDCzMAElOBhAJAMAKPIKWwAAAHicY2BkYGBhAAEWhv9///9lYWZgZEAFggBbKAQbAAAAeJxjYGBgYEHB//8C8X8GEgAAwYQEDwAAeJxjYAACB4YwhhyGVYwS2CEAO7wC2QAAeJxjYGRgYBBkcGFgZgABJiDmAkIGhv9gPgMAEP4BbwB4nGWQPW7CQBSEx2BIAlKCFCkps1UKIpmfkgNAT0GXwpi1MbK91npBossJcoQcIaeIcoIcKGPzaGAtP38zb97uygAG+IWHenm4bWq9WrihOnGb9CDsk5+FO+jjRbhLfyjcwxumwn084p07eP4dnQFK4Rbu8SHcpv8p7JO/hDt4wrdwl/6PcA8r/An38eoN08gUsSncUif7LLRnef6utK1SU6hJMD5bC11oGzq9Ueujqg7J1LlYxdbkas6uzjKjSmt2OnLB1rlyNhrF4geRyZEigkGBuKkOS2gk2CNDCHvVvdQrpi0q+rVWmCDA+Cq1YKpokiGVxobJNY6sFQ48bUrXMa34Ws7kpLnMat4kIyv+77q3oxPRD7BtpkrMMOITX+SD5g75Pz0RXqgAAAB4nG3EOwqAMBBAwX2a+P/fw8IjSYgoQgLb5PqCtk4xksmnkX8zGTkGS0FJRU1DS0fPwMjEzCLmCke07vTuLt/XzaRdg/WqUbkIHEQcJ56bxI6KPP4cD3YA') format('woff')}[class*=' luna-notification-icon-'],[class^=luna-notification-icon-]{display:inline-block;font-family:luna-notification-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-notification-icon-info:before{content:'\\f101'}.luna-notification-icon-check:before{content:'\\f102'}.luna-notification-icon-warn:before{content:'\\f103'}.luna-notification-icon-error:before{content:'\\f104'}.luna-notification{color:rgba(0,0,0,.88);background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;position:relative;padding:20px;pointer-events:none;display:flex;flex-direction:column;overflow:hidden;background:rgba(0,0,0,0)}.luna-notification.luna-notification-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-notification.luna-notification-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-notification .luna-notification-hidden,.luna-notification.luna-notification-hidden{display:none}.luna-notification .luna-notification-invisible,.luna-notification.luna-notification-invisible{visibility:hidden}.luna-notification *{box-sizing:border-box}.luna-notification.luna-notification-theme-dark{color-scheme:dark;color:rgba(255,255,255,.85);background-color:#141414}.luna-notification.luna-notification-full{position:fixed;top:0;left:0;width:100%;height:100%}.luna-notification-item{display:flex;border:1px solid #d9d9d9;padding:10px 16px;color:rgba(0,0,0,.88);align-items:center;background:#fff}.luna-notification-lower{margin-top:16px}.luna-notification-upper{margin-bottom:16px}.luna-notification-icon-container{margin-right:8px;color:#fff;border-radius:50%;width:16px;height:16px;text-align:center;line-height:16px}.luna-notification-icon-container.luna-notification-info{background:#1677ff}.luna-notification-icon-container.luna-notification-info .luna-notification-icon{position:relative;top:-2px;font-size:12px}.luna-notification-icon-container.luna-notification-success{background:#52c41a}.luna-notification-icon-container.luna-notification-success .luna-notification-icon{position:relative;top:-1px;font-size:12px}.luna-notification-icon-container.luna-notification-warning{position:relative;top:-2px;color:#faad14}.luna-notification-icon-container.luna-notification-warning .luna-notification-icon{font-size:14px}.luna-notification-icon-container.luna-notification-error{position:relative;top:-1px;color:#ff4d4f}.luna-notification-icon-container.luna-notification-error .luna-notification-icon{font-size:14px}.luna-notification-theme-dark .luna-notification-item{border-color:#424242;box-shadow:0 6px 16px 0 rgba(0,0,0,.08),0 3px 6px -4px rgba(0,0,0,.12),0 9px 28px 8px rgba(0,0,0,.05);color:rgba(255,255,255,.85);background:#141414}.luna-notification-theme-dark .luna-notification-icon-container.luna-notification-info{background:#1668dc}.luna-notification-theme-dark .luna-notification-icon-container.luna-notification-success{background:#49aa19}.luna-notification-theme-dark .luna-notification-icon-container.luna-notification-warning{color:#d89614}.luna-notification-theme-dark .luna-notification-icon-container.luna-notification-error{color:#dc4446}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 9907:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-object-viewer-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAS8AAsAAAAAB7QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAGEAAACMISgl+k9TLzIAAAFsAAAAPQAAAFZLxUkWY21hcAAAAawAAADWAAACdBU42qdnbHlmAAAChAAAAC4AAAAwabU7V2hlYWQAAAK0AAAALwAAADZzjr4faGhlYQAAAuQAAAAYAAAAJAFyANlobXR4AAAC/AAAABAAAABAAZAAAGxvY2EAAAMMAAAAEAAAACIAtACobWF4cAAAAxwAAAAfAAAAIAEbAA9uYW1lAAADPAAAASkAAAIWm5e+CnBvc3QAAARoAAAAUwAAAHZW8MNZeJxNjTsOQFAQRc/z/+sV1mABohKV0gZeJRJR2X9cT4RJZu7nFIMBMjoGvHGaF6rdngcNAc/c/O/Nvq2W5E1igdNE2zv1iGh1c5FQPlYXUlJRyxt9+/pUKadQa/AveGEGZQAAAHicY2BkkGScwMDKwMBQx9ADJGWgdAIDJ4MxAwMTAyszA1YQkOaawnCAQfcjE8MJIFcITDIwMIIIAFqDCGkAAAB4nM2STQ4BQRCFv54ZP8MwFhYW4gQcShBsSERi50BWDuFCcwJedddKRGKnOt8k9aanqudVAy0gF3NRQLgTsLhJDVHP6UW94Kp8zEhKwYIlG/YcOXHm0mTPp96aumLLwdUQ1fcIqmJrwpSZL+iqak5JmyE1Ayr1bdGhr/2ZPmp/qPQtuj/uJzqQl+pfDyypesQD6AT/ElV8PjyrMccT9rdLR3PUFBI227VTio1jbm6dodg5VnPvmAsHxzofHfmi+Sbs/pwdWcXFkWdNSNg9arIE2QufuSCyAAB4nGNgZACBlQzTGZgYGMyVxVc2O073AIpAxHsYloHFRc2dPZY2OTIwAACmEQesAAB4nGNgZGBgAOINe2b6x/PbfGXgZjgBFIjifLyvAUEDwUqGZUCSg4EJxAEAUn4LLAB4nGNgZGBgOMHAACdXMjAyoAIBADizAkx4nGNgAIITUEwGAABZUAGReJxjYAACHgYJ3BAAE94BXXicY2BkYGAQYGBmANEMDExAzAWEDAz/wXwGAApcASsAeJxlkD1uwkAUhMdgSAJSghQpKbNVCiKZn5IDQE9Bl8KYtTGyvdZ6QaLLCXKEHCGniHKCHChj82hgLT9/M2/e7soABviFh3p5uG1qvVq4oTpxm/Qg7JOfhTvo40W4S38o3MMbpsJ9POKdO3j+HZ0BSuEW7vEh3Kb/KeyTv4Q7eMK3cJf+j3APK/wJ9/HqDdPIFLEp3FIn+yy0Z3n+rrStUlOoSTA+WwtdaBs6vVHro6oOydS5WMXW5GrOrs4yo0prdjpywda5cjYaxeIHkcmRIoJBgbipDktoJNgjQwh71b3UK6YtKvq1VpggwPgqtWCqaJIhlcaGyTWOrBUOPG1K1zGt+FrO5KS5zGreJCMr/u+6t6MT0Q+wbaZKzDDiE1/kg+YO+T89EV6oAAAAeJxdxjkOgCAUANE/uOOGB+FQBIjaaEJIuL6FsfE1M6Lk9fXPoKioaWjp6BnQjEzMLKwYNtHepZhtuMs1vpvO/ch4HIlIxhK4KVyc7BwiD8nvDlkA') format('woff')}[class*=' luna-object-viewer-icon-'],[class^=luna-object-viewer-icon-]{display:inline-block;font-family:luna-object-viewer-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-object-viewer-icon-caret-down:before{content:'\\f101'}.luna-object-viewer-icon-caret-right:before{content:'\\f102'}.luna-object-viewer{overflow-x:auto;-webkit-overflow-scrolling:touch;overflow-y:hidden;cursor:default;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;line-height:1.2;min-height:100%;color:#333;list-style:none!important}.luna-object-viewer ul{list-style:none!important;padding:0!important;padding-left:12px!important;margin:0!important}.luna-object-viewer li{position:relative;white-space:nowrap;line-height:16px;min-height:16px}.luna-object-viewer>li>.luna-object-viewer-key{display:none}.luna-object-viewer span{position:static!important}.luna-object-viewer li .luna-object-viewer-collapsed~.luna-object-viewer-close:before{color:#999}.luna-object-viewer-array .luna-object-viewer-object .luna-object-viewer-key{display:inline}.luna-object-viewer-null{color:#5e5e5e}.luna-object-viewer-regexp,.luna-object-viewer-string{color:#c41a16}.luna-object-viewer-number{color:#1c00cf}.luna-object-viewer-boolean{color:#0d22aa}.luna-object-viewer-special{color:#5e5e5e}.luna-object-viewer-key,.luna-object-viewer-key-lighter{color:#881391}.luna-object-viewer-key-lighter{opacity:.6}.luna-object-viewer-key-special{color:#5e5e5e}.luna-object-viewer-collapsed .luna-object-viewer-icon,.luna-object-viewer-expanded .luna-object-viewer-icon{position:absolute!important;left:-12px;color:#727272;font-size:12px}.luna-object-viewer-icon-caret-right{top:0}.luna-object-viewer-icon-caret-down{top:1px}.luna-object-viewer-expanded>.luna-object-viewer-icon-caret-down{display:inline}.luna-object-viewer-expanded>.luna-object-viewer-icon-caret-right{display:none}.luna-object-viewer-collapsed>.luna-object-viewer-icon-caret-down{display:none}.luna-object-viewer-collapsed>.luna-object-viewer-icon-caret-right{display:inline}.luna-object-viewer-hidden~ul{display:none}.luna-object-viewer-theme-dark{color:#fff}.luna-object-viewer-theme-dark .luna-object-viewer-null,.luna-object-viewer-theme-dark .luna-object-viewer-special{color:#a1a1a1}.luna-object-viewer-theme-dark .luna-object-viewer-regexp,.luna-object-viewer-theme-dark .luna-object-viewer-string{color:#f28b54}.luna-object-viewer-theme-dark .luna-object-viewer-boolean,.luna-object-viewer-theme-dark .luna-object-viewer-number{color:#9980ff}.luna-object-viewer-theme-dark .luna-object-viewer-key,.luna-object-viewer-theme-dark .luna-object-viewer-key-lighter{color:#5db0d7}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".luna-setting{color:rgba(0,0,0,.88);background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;min-width:320px}.luna-setting.luna-setting-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-setting.luna-setting-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-setting .luna-setting-hidden,.luna-setting.luna-setting-hidden{display:none}.luna-setting .luna-setting-invisible,.luna-setting.luna-setting-invisible{visibility:hidden}.luna-setting *{box-sizing:border-box}.luna-setting.luna-setting-theme-dark{color-scheme:dark;color:rgba(255,255,255,.85);background-color:#141414}.luna-setting-item.luna-setting-selected,.luna-setting-item:hover{background:rgba(0,0,0,.06)}.luna-setting-item.luna-setting-selected:focus{outline:1px solid #1a73e8}.luna-setting-item .luna-setting-title{line-height:1.4em;font-weight:600}.luna-setting-item .luna-setting-description,.luna-setting-item.luna-setting-item-markdown{line-height:1.4em}.luna-setting-item .luna-setting-description *,.luna-setting-item.luna-setting-item-markdown *{margin:0}.luna-setting-item .luna-setting-description strong,.luna-setting-item.luna-setting-item-markdown strong{font-weight:600}.luna-setting-item .luna-setting-description a,.luna-setting-item.luna-setting-item-markdown a{background-color:rgba(0,0,0,0);color:#0969da;text-decoration:none}.luna-setting-item .luna-setting-control,.luna-setting-item .luna-setting-description{font-size:12px}.luna-setting-item .luna-setting-description{margin-bottom:8px}.luna-setting-item .luna-setting-control{display:flex;align-items:center}.luna-setting-item-button,.luna-setting-item-checkbox,.luna-setting-item-input,.luna-setting-item-markdown,.luna-setting-item-number,.luna-setting-item-select,.luna-setting-item-title{padding:10px}.luna-setting-item-title{font-weight:600}.luna-setting-item-title.luna-setting-level-1{font-size:18px}.luna-setting-item-title.luna-setting-level-2{font-size:16px}.luna-setting-item-title.luna-setting-level-3{font-size:14px}.luna-setting-item-input.luna-setting-disabled input{opacity:.6}.luna-setting-item-input input{-webkit-tap-highlight-color:transparent;color:rgba(0,0,0,.88);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;outline:0;padding:2px 8px;border-radius:2px;font-size:14px;background:#fff;width:100%}.luna-setting-item-number.luna-setting-disabled .luna-setting-range-container,.luna-setting-item-number.luna-setting-disabled input{opacity:.6}.luna-setting-item-number.luna-setting-disabled .luna-setting-range-container input{opacity:1}.luna-setting-item-number input[type=number]{-webkit-tap-highlight-color:transparent;color:rgba(0,0,0,.88);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;outline:0;padding:2px 8px;border-radius:2px;font-size:14px;background:#fff;width:200px;padding:2px}.luna-setting-item-number .luna-setting-range-container{flex:2;position:relative;top:1px}.luna-setting-item-number .luna-setting-range-container .luna-setting-range-track{height:4px;width:100%;padding:0 10px;position:absolute;left:0;top:4px}.luna-setting-item-number .luna-setting-range-container .luna-setting-range-track .luna-setting-range-track-bar{background:#d9d9d9;border-radius:2px;overflow:hidden;width:100%;height:4px}.luna-setting-item-number .luna-setting-range-container .luna-setting-range-track .luna-setting-range-track-bar .luna-setting-range-track-progress{height:100%;background:#1a73e8;width:50%}.luna-setting-item-number .luna-setting-range-container input{-webkit-appearance:none;background:rgba(0,0,0,0);height:4px;width:100%;position:relative;top:-3px;margin:0 auto;outline:0;border-radius:2px}.luna-setting-item-number .luna-setting-range-container input::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:16px;border:none;height:16px;border-radius:10px;border:1px solid #d9d9d9;background:radial-gradient(circle at center,#eee 0,#eee 15%,#fff 22%,#fff 100%)}.luna-setting-item-checkbox.luna-setting-disabled .luna-setting-control{opacity:.6}.luna-setting-item-checkbox input{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border:1px solid #d9d9d9;border-radius:0;position:relative;outline:0;margin-left:0;margin-right:8px;transition:background-color .1s;align-self:flex-start;flex-shrink:0}.luna-setting-item-checkbox input:checked{background-color:#1a73e8;border-color:#1a73e8}.luna-setting-item-checkbox input:checked:after{content:\"\";width:100%;height:100%;position:absolute;left:0;top:0;background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==);background-size:30px;background-repeat:no-repeat;background-position:center}.luna-setting-item-checkbox label{-webkit-tap-highlight-color:transparent}.luna-setting-item-checkbox label *{margin:0}.luna-setting-item-select.luna-setting-disabled .luna-setting-select{opacity:.6}.luna-setting-item-select .luna-setting-select{position:relative}.luna-setting-item-select .luna-setting-select select{margin:0;font-size:14px;background:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;padding:2px 8px;padding-right:18px;outline:0;color:rgba(0,0,0,.88);border-radius:2px;-webkit-tap-highlight-color:transparent}.luna-setting-item-select .luna-setting-select:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid rgba(0,0,0,.88);position:absolute;top:0;bottom:0;right:6px;margin:auto;pointer-events:none}.luna-setting-item-select .luna-setting-select select{width:300px}.luna-setting-item-button button{-webkit-tap-highlight-color:transparent;background:#fff;border:1px solid #d9d9d9;padding:2px 8px;color:#1a73e8;font-size:14px;border-radius:2px}.luna-setting-item-button button:active,.luna-setting-item-button button:hover{background:rgba(0,0,0,.06)}.luna-setting-item-button button:active{border:1px solid #1a73e8}.luna-setting-item-separator{border-bottom:1px solid #d9d9d9}.luna-setting-theme-dark .luna-setting-item.luna-setting-selected,.luna-setting-theme-dark .luna-setting-item:hover{background:rgba(255,255,255,.12)}.luna-setting-theme-dark .luna-setting-item .luna-setting-description a{background-color:rgba(0,0,0,0);color:#58a6ff}.luna-setting-theme-dark .luna-setting-item-separator{border-color:#424242}.luna-setting-theme-dark .luna-setting-item-input input{background:#424242;border-color:#424242;color:rgba(255,255,255,.85)}.luna-setting-theme-dark .luna-setting-item-checkbox input{border-color:#424242}.luna-setting-theme-dark .luna-setting-item-select .luna-setting-select select{color:rgba(255,255,255,.85);border-color:#424242;background:#424242}.luna-setting-theme-dark .luna-setting-item-select .luna-setting-select:after{border-top-color:rgba(255,255,255,.85)}.luna-setting-theme-dark .luna-setting-item-button button{background:#141414;border-color:#424242}.luna-setting-theme-dark .luna-setting-item-button button:active,.luna-setting-theme-dark .luna-setting-item-button button:hover{background:rgba(255,255,255,.12)}.luna-setting-theme-dark .luna-setting-item-button button:active{border:1px solid #1a73e8}.luna-setting-theme-dark .luna-setting-item-number input[type=number]{background:#424242;border-color:#424242;color:rgba(255,255,255,.85)}.luna-setting-theme-dark .luna-setting-item-number .luna-setting-range-container .luna-setting-range-track .luna-setting-range-track-bar{background:#424242}.luna-setting-theme-dark .luna-setting-item-number .luna-setting-range-container input::-webkit-slider-thumb{border-color:#424242;background:radial-gradient(circle at center,#aaa 0,#aaa 15%,#ccc 22%,#ccc 100%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 7253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".luna-tab{color:rgba(0,0,0,.88);background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;position:relative;overflow:hidden;width:100%}.luna-tab.luna-tab-platform-windows{font-family:\"Segoe UI\",Tahoma,sans-serif}.luna-tab.luna-tab-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-tab .luna-tab-hidden,.luna-tab.luna-tab-hidden{display:none}.luna-tab .luna-tab-invisible,.luna-tab.luna-tab-invisible{visibility:hidden}.luna-tab *{box-sizing:border-box}.luna-tab.luna-tab-theme-dark{color-scheme:dark;color:rgba(255,255,255,.85);background-color:#141414}.luna-tab-tabs-container{border-bottom:1px solid #d9d9d9}.luna-tab-tabs{overflow-x:auto;-webkit-overflow-scrolling:touch;overflow-y:hidden;width:100%;height:100%;font-size:0;white-space:nowrap}.luna-tab-tabs::-webkit-scrollbar{display:none;width:0;height:0}.luna-tab-item{cursor:pointer;display:inline-block;padding:0 10px;font-size:12px;text-align:center;text-transform:capitalize}.luna-tab-item:hover{background:rgba(0,0,0,.06)}.luna-tab-slider{transition:left .3s,width .3s;height:1px;background:#1a73e8;position:absolute;bottom:0;left:0}.luna-tab-theme-dark .luna-tab-tabs-container{border-color:#424242}.luna-tab-theme-dark .luna-tab-item:hover{background:rgba(255,255,255,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:luna-text-viewer-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAS0AAsAAAAAB2QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAFQAAAB0INElr09TLzIAAAFcAAAAPQAAAFZL+0klY21hcAAAAZwAAACfAAACEAEewxRnbHlmAAACPAAAAIYAAACkNSDggmhlYWQAAALEAAAALgAAADZzrb4oaGhlYQAAAvQAAAAWAAAAJAGRANNobXR4AAADDAAAABAAAAAoAZAAAGxvY2EAAAMcAAAAEAAAABYBWgFIbWF4cAAAAywAAAAdAAAAIAEXADtuYW1lAAADTAAAASkAAAIWm5e+CnBvc3QAAAR4AAAAOwAAAFJIWdOleJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBWAdNMDGwMQkAWK1CGlYEZyGMCstiBMpxAUUYGZgDbGgXDeJxjYGTQYJzAwMrAwFDH0AMkZaB0AgMngzEDAxMDKzMDVhCQ5prCcIAh+SMTwwkgVwhMMjAwgggAY84IrgAAAHicvZFLCsMwDERHzsdJ6aL0HD1VQiDQRbIN9Axd9aI+QTpjq5Bdd5F4Bo1lybIBNAAq8iA1YB8YZG+qlvUKl6zXGBjf6MofMWHGEyu2FPb9oCxULCtHs3yy+J2urg1rtojo0HM/MKnFGabOGlbdYvdT+1N6/7drXl8e6Vajo3efHP3b7HAUvntBMy1OJKujMTeHNZMV9McpFBC+tLgY4QB4nGNgZACBEwzrGdgZGOwZxdnVDdXNPfKEGlhchO0KhZtZ3IQYmMFq1jCsZpBi0GLQY2AwNzGzZjQSk2UUYdNmVFID8UyVRUXYlNRMlVGlTM1FjU3tmZkTmVhYmFRBhHwoCyuzKgtTIjMzWJg3ZClIGMRlZQmVB7GhMixM0aGhQIsB52sTqgAAeJxjYGRgYADi2JNxkvH8Nl8ZuBlOAAWiOB/va0DQQHCCYT2Q5GBgAnEANJ0KnQAAeJxjYGRgYDjBwIBEMjKgAi4AOvoCZQAAeJxjYACCE1CMBwAAM7gBkXicY2AAAiGGIFQIABXIAqN4nGNgZGBg4GLQZ2BmAAEmMI8LSP4H8xkADjQBUwAAAHicZZA9bsJAFITHYEgCUoIUKSmzVQoimZ+SA0BPQZfCmLUxsr3WekGiywlyhBwhp4hyghwoY/NoYC0/fzNv3u7KAAb4hYd6ebhtar1auKE6cZv0IOyTn4U76ONFuEt/KNzDG6bCfTzinTt4/h2dAUrhFu7xIdym/ynsk7+EO3jCt3CX/o9wDyv8Cffx6g3TyBSxKdxSJ/sstGd5/q60rVJTqEkwPlsLXWgbOr1R66OqDsnUuVjF1uRqzq7OMqNKa3Y6csHWuXI2GsXiB5HJkSKCQYG4qQ5LaCTYI0MIe9W91CumLSr6tVaYIMD4KrVgqmiSIZXGhsk1jqwVDjxtStcxrfhazuSkucxq3iQjK/7vurejE9EPsG2mSsww4hNf5IPmDvk/PRFeqAAAAHicXcU7CsAgFEXBe4x/l/kQBAtt3X0KSZNpRk7X91/F8eAJRBKZQqUp2Og2va19MAadyWJzpBd4kgcWAA==') format('woff')}[class*=' luna-text-viewer-icon-'],[class^=luna-text-viewer-icon-]{display:inline-block;font-family:luna-text-viewer-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.luna-text-viewer-icon-check:before{content:'\\f101'}.luna-text-viewer-icon-copy:before{content:'\\f102'}.luna-text-viewer{color:#333;background-color:#fff;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;padding:0;unicode-bidi:embed;position:relative;overflow:auto;border:1px solid #ccc}.luna-text-viewer.luna-text-viewer-platform-windows{font-family:'Segoe UI',Tahoma,sans-serif}.luna-text-viewer.luna-text-viewer-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-text-viewer .luna-text-viewer-hidden,.luna-text-viewer.luna-text-viewer-hidden{display:none}.luna-text-viewer .luna-text-viewer-invisible,.luna-text-viewer.luna-text-viewer-invisible{visibility:hidden}.luna-text-viewer *{box-sizing:border-box}.luna-text-viewer.luna-text-viewer-theme-dark{color:#d9d9d9;border-color:#3d3d3d;background:#242424}.luna-text-viewer:hover .luna-text-viewer-copy{opacity:1}.luna-text-viewer-table{display:table}.luna-text-viewer-table .luna-text-viewer-line-number,.luna-text-viewer-table .luna-text-viewer-line-text{padding:0}.luna-text-viewer-table-row{display:table-row}.luna-text-viewer-line-number{display:table-cell;padding:0 3px 0 8px!important;text-align:right;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-right:1px solid #ccc}.luna-text-viewer-line-text{display:table-cell;padding-left:4px!important;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.luna-text-viewer-copy{background:#fff;opacity:0;position:absolute;right:5px;top:5px;border:1px solid #ccc;border-radius:4px;width:25px;height:25px;text-align:center;line-height:25px;cursor:pointer;transition:opacity .3s,top .3s}.luna-text-viewer-copy .luna-text-viewer-icon-check{color:#188037}.luna-text-viewer-text{padding:4px;font-size:12px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;box-sizing:border-box;white-space:pre;display:block}.luna-text-viewer-text.luna-text-viewer-line-numbers{padding:0}.luna-text-viewer-text.luna-text-viewer-wrap-long-lines{white-space:pre-wrap}.luna-text-viewer-text.luna-text-viewer-wrap-long-lines .luna-text-viewer-line-text{word-break:break-all}.luna-text-viewer-theme-dark{color-scheme:dark}.luna-text-viewer-theme-dark .luna-text-viewer-copy,.luna-text-viewer-theme-dark .luna-text-viewer-line-number{border-color:#3d3d3d}.luna-text-viewer-theme-dark .luna-text-viewer-copy .luna-text-viewer-icon-check{color:#81c995}.luna-text-viewer-theme-dark .luna-text-viewer-copy{background-color:#242424}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 6793:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6314);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face{font-family:eruda-icon;src:url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAA6UAAsAAAAAGvAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAARoAAAHeLjoycE9TLzIAAAIkAAAAPwAAAFZWm1KoY21hcAAAAmQAAAFdAAADwhPu1O9nbHlmAAADxAAAB+wAAA9I7RPQpGhlYWQAAAuwAAAAMQAAADZ26MSyaGhlYQAAC+QAAAAdAAAAJAgEBC9obXR4AAAMBAAAAB0AAACwXAv//GxvY2EAAAwkAAAAOwAAAFpuVmoybWF4cAAADGAAAAAfAAAAIAE9AQ1uYW1lAAAMgAAAASkAAAIWm5e+CnBvc3QAAA2sAAAA5QAAAU4VMmUJeJxNkD1Ow0AQhb9NHGISCH9RiB0cErCNHRrqFFSIyqKiQHSpEFJERUnBCTgPZ+AEHIe34wDe1f69efPezOKAHldc07q5re4ZrFevL8QE1MPHm3e3fn5aEf6+FAvsDHHuTUoxd7zzwSdffLulq9wjLbaYau8TacZMONE554xzZsrtNfBEzFOhbSmOyTmga0ikvRR/37RSsSMyDukYPjWdgGOtsSK55Y/k0Bf/ksK0MrbFr70idsVZKNPnDcSay3umd2TISCvWTJSxI78lFQ/C+qbv/Zo9tNXDP55ZL7k0Q90u5F5XX0qrYx16btccCtXg/ULrKzGFuqY9rUTMhf3fkCNj+MxUnsM/frr5Qx+ZbH4vVQ0F5Q/ZQBvxAAB4nGNgZJJgnMDAysDA1Mt0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDAcYdD+KsIC4MSxMDIxAGoQZALgnCOUAeJy1011SGlEQhuF3BFHxD5UUyr8gIJIsiiKJsSqJlrHKsJssKFeuxF6Bfj3dF96aqhzqoZnDzJyG8w2wCVTko1SheKLAx1/NFuV8hXo5X+WPjht6+fmfWHLDHQ+srfnykjMrvnPPoxXlzNtRlFc26HLBZblal1N9ntBnwIgx5/SYMaWt78+YM6TDgitduaEVq+q0xhbb7KifPQ441N2OOOaEJh9oaYka7xvdd57vQz1P+oPR+Bx6s2lbrc6H0Flc/cO9/sfY87fiOY8u8X0J/muX6VRW6UI+p4l8SX35mgZynUbyLY3lJukf0e6HnvxIM/mZpnKb2nKXvM/7dCa/0lwe0lAeU0d+p4Wsk3bBiuDptY2A10rw9Fo1eOJtM/iTYLWA162A1+2A152A13rwJ8R2g++AJaUU2w/KK3YQlFzsMCjDWCMozdhRUK6x46CEYydBWceagdYraihRngAAAHic7RdbbBxX9Z57Z2d2d2ZndryzM7ve9ax3NztjO/bann0lTuW16zoBJSWJ7Zg83NiUJCQ1Ik2ikKQJNC9FFQqVEG0RVLQoSpEKH2klqgpEIyWAUMRTNBJC/PUDhETgiwhQd8y5s1s7oqr624/srO6ce89zzjn3nHsJEPwxyn5GVEJKBTcCdc80pAiYhkjfNWL+NnhLdTKqfxVOqJlxFX6E84wb86/6X4+5GRLw0/vsOgkREoFGBFx62P/uFviBP78FWrC02d/r79vcpmMl+k2uBwwJxIILTrVeyXsmK8krRLb5YGqUaCb9ksYnMuBqMtnRcY6V1nidml6texaY9CxSRm3TtKNIjcxrUjhEWKD3OnuNJEgPKSG/I6nUpo06fxwXH8lmEoyDFQIVyrROs7254z990rj0u2PLez47WqG1yu69V7ZdfDxU9He4C6P+v+HN+vlnD9Uou0Zp+NnfvveT/XL0kbGFxT/u37tx7CTdeuGlKfiibcMr/gt9qfyu05e4+YEdb7A3iEVG0ArdEAvDIPHBqTbB7bgCDA0sdH0x3/nEHDT4YFJi9siz74iaOBkK3ZyRTRXwE+FGG15BeA0Pf14hqinP3AyFJnHhnVm5xzThmNSBNFjDdvwzw75GFJIlvWhZ1UHlYlI3zIputa3CSduiRF7P09e9on+jODpanPOKsJMDOPV2wU7/BqsVPcQ2ix41X/8ARKpbfhPVtHNgik1hXAhIlmQ1rIbbcCVIzN/7+65794KRTc13IBwJXVkhRACBkAEyhVyiBqJbRn81YRjKUDfRN9xHpoVBt0xJRZ+iS4ehZFg2utJrjCO2GrAUAizcj+c3pXpiXVQwThZmdNrbrx+hAjtjbhSF5FPyKSsqmGraWKYCbfl97vMLi79fXHje7XsAhBsoo0P35fyMPpCj+lM0FDptJexuYzl82upRufxlKgrTh/+fOwBXc+Jt9jZJBTnxUbH/yGT5j4jRT2pB9O1oO/oi3FyD2/ggU14LY/j5RuHTJIZf5LR/WVmbaB2CT6xdQa4KwJZIHPfyMFoWRNSmQZDLlJVpdRw8GwwVWEGlScOGijdOq2VKyfHDB7/d1/+d37zXeT/dXG42l7/Kh2a20pd0JpxsxTVNt8KWyuu/94Ujr+7uvFpvQXP5PCfEAU4l+6pZZ9Ix3eqGqmsGrvok28V+zi6TKEYyi/Udt0MNavkkJC1e+vQA1tGqil6EV93j/UBbY0AXm/2Vku+z53x/8MDT5879U9Nb4Cqq/yf/WEjReiECfS9+C2f/6umFS/77q3t7kp0nGu8DTrFTQrwG1KtsoHVXlnXL0qMKHTRpGbaJlt7aoVsSbO3aQFb5L7MTJElIwrBMvnWxQteCEl2QREn8Ci/Ef9i7u1IT6tX5Pb/ePV+rUXKEL3DMkUPzc6OeNzo3/6C8K2QdrzVlKAYyHhBcxGgUyoCRqXimJZXYwYO1y1tWxQWKLkyfunpqevrU5vJs4SQ02JUDw94qMlC6maORJpc9AR/Sm7C4cK7S4MoL/FNqFYy+Nw5VbpIoWaWXP0atf+fj1Lb36w12h6SxShIouuNQw+TCVDNsWvHqDStpNUoFnobUs6mhUvpmn+r2VxaeuXjmCc974vSjm44OxfytrXeH5iaKxYm5fXMThcLEHLwcGzq66dHTnObMxWcWKv2u2tfa1ipMzu7rEM5OFshqLfsFu4R9thszrVjAUoHFgH98DxRreb3CK74rMTh/bWmJTq9Pd0nCZOvsbfrYrVsTty9cOPc5Or2U6spq8rXbrbNAL9yeuHWLYuEnEiErK0JIAPIN8kNyl9wn/yUt7mioN6GGTi1jDQrypNPRxQ+8zREatnUsVtgbcDHAaZA0rc6TxOIWLPFVXLDbvYRT45CDSnBOqFhee4aTcWw8gapGnS+Z+EYrOuqh825jrY5WSVwPDSewh/OWqYueCJQFEjhELTdgcdEODjUCo5yge7lcAlJxRSgceyZyu5LFfqnaeldKlsyunnK6N6LEaUSqTSndgpZK7jC7NZaR7LGcGhXwgMNC+WFt0MxEomZcECQ9EY4JkgAQDilSNKnGuxXJ0u2hdG9YUZkiZcfWpaOWkUv0G6IaCseVVH81o0dEEClKGokassX0hKSk44PxBGOS4E8cmNk+OMSY5+2cXfz8zI4hrG4jI9tnFpW/hqKx7PCnH1O7wpFkqeANT4IUVhopPTUwnNJxzSlUzLASV+4YfUIkpoQFTYvoMUFkJgtJ/Z6VEIyymx4usdCW5CuDc9s+dZDm6GeiejTl1jN6VFKUdMHMlUIWzaQEOdyrKHIsL0VZJB0TE1rUlLvCo71yPKya3dW+ONBQRBajUdPuKoXFsBAOiYoUdx7JtSXlU3ZJNAW1O+4ktBCFqBjLJhMW97JgyonISE5kVIJQJJ6tO6nueCJj1TV/D6uMzu06tH/H44NlRr3RnbNPLu7cXh75sWOklURzi5ZI9dgqG6tuEAf0bkWX0/0j6S6+RjfaYiQsbkKHhuNdms6kUExWZNGSlJgzkjIGjPK61KjLxOvGc/1/27r9KOQe7omHe+LhnvjQnmArLTyHMYHiPbGbFLEL4Q1BxOsiHrfy2HIBz67BXQbPsVbB4TNDZP/wF4x63cAxUl/PRtbXI61f2QM2/iuZUqleKr3ABp1Mxnn/rjvpOJN0b9K2k/73+Xi/VHOcGl4qyf8AzjWNo3icY2BkYGAA4uhnXafj+W2+MnCzgASiOB/va4DR///+/8/CysIElOBgAJEMAHS2DWQAAAB4nGNgZGBgYQABFtb/f///ZWFlYGRABToAW+YEPQAAAHicY2BgYGAhiP//J6wGCbNCMcP/vwxUBgDl4QRhAAAAeJxjYAACBQYThiCGAoYtjAyMZowBjPuYuJjCmBYxvWNWYXZhzmFewfyIRYUliPUOexr7EmIhAF3rF0sAeJxjYGRgYNBhZGRgZwABJiDmAkIGhv9gPgMADcIBTAB4nGWQPW7CQBSEx2BIAlKCFCkps1UKIpmfkgNAT0GXwpi1MbK91npBossJcoQcIaeIcoIcKGPzaGAtP38zb97uygAG+IWHenm4bWq9WrihOnGb9CDsk5+FO+jjRbhLfyjcwxumwn084p07eP4dnQFK4Rbu8SHcpv8p7JO/hDt4wrdwl/6PcA8r/An38eoN08gUsSncUif7LLRnef6utK1SU6hJMD5bC11oGzq9Ueujqg7J1LlYxdbkas6uzjKjSmt2OnLB1rlyNhrF4geRyZEigkGBuKkOS2gk2CNDCHvVvdQrpi0q+rVWmCDA+Cq1YKpokiGVxobJNY6sFQ48bUrXMa34Ws7kpLnMat4kIyv+77q3oxPRD7BtpkrMMOITX+SD5g75Pz0RXqgAAAB4nG2MyW6DQBiD+RKYpKT7vqf7Gg55pNHwEyJNGDSMRHj70nKtD7Zly45G0YA0+h8LRoyJSVBMmLJDyoxd9tjngEOOOOaEU84454JLrrjmhlvuuGfOA4888cwLr7zxzgeffPHNgixKtfeuzawUYTZYv16VITXaS8hy11azwf7FibGi/dS4Te2laWLj6k7lYiVIIv3aK9nWusqng2TLsXR900m2VMXaBvFxbXWnvBjn84mXor8pk54kqKa/NmUvVkyIg3NW/VK2jFvtKzQeR0uGRSgIrFlRYsip2FDT0LGNoh/MCkh9AAAA') format('woff')}[class*=' _icon-'],[class^='_icon-']{display:inline-block;font-family:eruda-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}._icon-arrow-left:before{content:'\\f101'}._icon-arrow-right:before{content:'\\f102'}._icon-caret-down:before{content:'\\f103'}._icon-caret-right:before{content:'\\f104'}._icon-clear:before{content:'\\f105'}._icon-compress:before{content:'\\f106'}._icon-copy:before{content:'\\f107'}._icon-delete:before{content:'\\f108'}._icon-error:before{content:'\\f109'}._icon-expand:before{content:'\\f10a'}._icon-eye:before{content:'\\f10b'}._icon-filter:before{content:'\\f10c'}._icon-play:before{content:'\\f10d'}._icon-record:before{content:'\\f10e'}._icon-refresh:before{content:'\\f10f'}._icon-reset:before{content:'\\f110'}._icon-search:before{content:'\\f111'}._icon-select:before{content:'\\f112'}._icon-tool:before{content:'\\f113'}._icon-warn:before{content:'\\f114'}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 6314:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 3693:
/***/ (function(module, exports, __webpack_require__) {

var Select = __webpack_require__(21);
var $offset = __webpack_require__(2230);
var $show = __webpack_require__(8604);
var $css = __webpack_require__(6866);
var $attr = __webpack_require__(9186);
var $property = __webpack_require__(7236);
var last = __webpack_require__(3497);
var $remove = __webpack_require__(2113);
var $data = __webpack_require__(2125);
var $event = __webpack_require__(3793);
var $class = __webpack_require__(7661);
var $insert = __webpack_require__(5360);
var isUndef = __webpack_require__(8971);
var isStr = __webpack_require__(1738);
exports = function(selector) {
    return new Select(selector);
};
Select.methods({
    offset: function() {
        return $offset(this);
    },
    hide: function() {
        return this.css('display', 'none');
    },
    show: function() {
        $show(this);
        return this;
    },
    first: function() {
        return exports(this[0]);
    },
    last: function() {
        return exports(last(this));
    },
    get: function(idx) {
        return this[idx];
    },
    eq: function(idx) {
        return exports(this[idx]);
    },
    on: function(event, selector, handler) {
        $event.on(this, event, selector, handler);
        return this;
    },
    off: function(event, selector, handler) {
        $event.off(this, event, selector, handler);
        return this;
    },
    html: function(val) {
        var result = $property.html(this, val);
        if (isUndef(val)) return result;
        return this;
    },
    text: function(val) {
        var result = $property.text(this, val);
        if (isUndef(val)) return result;
        return this;
    },
    val: function(val) {
        var result = $property.val(this, val);
        if (isUndef(val)) return result;
        return this;
    },
    css: function(name, val) {
        var result = $css(this, name, val);
        if (isGetter(name, val)) return result;
        return this;
    },
    attr: function(name, val) {
        var result = $attr(this, name, val);
        if (isGetter(name, val)) return result;
        return this;
    },
    data: function(name, val) {
        var result = $data(this, name, val);
        if (isGetter(name, val)) return result;
        return this;
    },
    rmAttr: function(name) {
        $attr.remove(this, name);
        return this;
    },
    remove: function() {
        $remove(this);
        return this;
    },
    addClass: function(name) {
        $class.add(this, name);
        return this;
    },
    rmClass: function(name) {
        $class.remove(this, name);
        return this;
    },
    toggleClass: function(name) {
        $class.toggle(this, name);
        return this;
    },
    hasClass: function(name) {
        return $class.has(this, name);
    },
    parent: function() {
        return exports(this[0].parentNode);
    },
    append: function(val) {
        $insert.append(this, val);
        return this;
    },
    prepend: function(val) {
        $insert.prepend(this, val);
        return this;
    },
    before: function(val) {
        $insert.before(this, val);
        return this;
    },
    after: function(val) {
        $insert.after(this, val);
        return this;
    }
});
var isGetter = function(name, val) {
    return isUndef(val) && isStr(name);
};

module.exports = exports;


/***/ }),

/***/ 9186:
/***/ (function(module, exports, __webpack_require__) {

var toArr = __webpack_require__(769);
var isObj = __webpack_require__(9760);
var isStr = __webpack_require__(1738);
var each = __webpack_require__(9100);
var isUndef = __webpack_require__(8971);
var $safeEls = __webpack_require__(3612);
exports = function(els, name, val) {
    els = $safeEls(els);
    var isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getAttr(els[0], name);
    var attrs = name;
    if (!isObj(attrs)) {
        attrs = {};
        attrs[name] = val;
    }
    setAttr(els, attrs);
};
exports.remove = function(els, names) {
    els = $safeEls(els);
    names = toArr(names);
    each(els, function(node) {
        each(names, function(name) {
            node.removeAttribute(name);
        });
    });
};
function getAttr(el, name) {
    return el.getAttribute(name);
}
function setAttr(els, attrs) {
    each(els, function(el) {
        each(attrs, function(val, name) {
            el.setAttribute(name, val);
        });
    });
}

module.exports = exports;


/***/ }),

/***/ 7661:
/***/ (function(module, exports, __webpack_require__) {

var toArr = __webpack_require__(769);
var some = __webpack_require__(2797);
var $safeEls = __webpack_require__(3612);
var isStr = __webpack_require__(1738);
var each = __webpack_require__(9100);
exports = {
    add: function(els, name) {
        els = $safeEls(els);
        var names = safeName(name);
        each(els, function(el) {
            var classList = [];
            each(names, function(name) {
                if (!exports.has(el, name)) classList.push(name);
            });
            if (classList.length !== 0) {
                el.className += (el.className ? ' ' : '') + classList.join(' ');
            }
        });
    },
    has: function(els, name) {
        els = $safeEls(els);
        var regName = new RegExp('(^|\\s)' + name + '(\\s|$)');
        return some(els, function(el) {
            return regName.test(el.className);
        });
    },
    toggle: function(els, name) {
        els = $safeEls(els);
        each(els, function(el) {
            if (!exports.has(el, name)) return exports.add(el, name);
            exports.remove(el, name);
        });
    },
    remove: function(els, name) {
        els = $safeEls(els);
        var names = safeName(name);
        each(els, function(el) {
            each(names, function(name) {
                el.classList.remove(name);
            });
        });
    }
};
function safeName(name) {
    return isStr(name) ? name.split(/\s+/) : toArr(name);
}

module.exports = exports;


/***/ }),

/***/ 6866:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var isObj = __webpack_require__(9760);
var kebabCase = __webpack_require__(7604);
var isUndef = __webpack_require__(8971);
var contain = __webpack_require__(3249);
var isNum = __webpack_require__(6097);
var $safeEls = __webpack_require__(3612);
var prefix = __webpack_require__(6969);
var each = __webpack_require__(9100);
exports = function(nodes, name, val) {
    nodes = $safeEls(nodes);
    var isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getCss(nodes[0], name);
    var css = name;
    if (!isObj(css)) {
        css = {};
        css[name] = val;
    }
    setCss(nodes, css);
};
function getCss(node, name) {
    return (
        node.style[prefix(name)] ||
        getComputedStyle(node, '').getPropertyValue(name)
    );
}
function setCss(nodes, css) {
    each(nodes, function(node) {
        var cssText = ';';
        each(css, function(val, key) {
            key = prefix.dash(key);
            cssText += key + ':' + addPx(key, val) + ';';
        });
        node.style.cssText += cssText;
    });
}
var cssNumProps = [
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
];
function addPx(key, val) {
    var needPx = isNum(val) && !contain(cssNumProps, kebabCase(key));
    return needPx ? val + 'px' : val;
}

module.exports = exports;


/***/ }),

/***/ 2125:
/***/ (function(module, exports, __webpack_require__) {

var $attr = __webpack_require__(9186);
var isStr = __webpack_require__(1738);
var isObj = __webpack_require__(9760);
var each = __webpack_require__(9100);
var $safeEls = __webpack_require__(3612);
exports = function(nodes, name, val) {
    var dataName = name;
    if (isStr(name)) dataName = 'data-' + name;
    if (isObj(name)) {
        dataName = {};
        each(name, function(val, key) {
            dataName['data-' + key] = val;
        });
    }
    return $attr(nodes, dataName, val);
};

module.exports = exports;


/***/ }),

/***/ 3793:
/***/ (function(module, exports, __webpack_require__) {

var delegate = __webpack_require__(8966);
var isUndef = __webpack_require__(8971);
var $safeEls = __webpack_require__(3612);
var each = __webpack_require__(9100);
exports = {
    on: eventFactory('add'),
    off: eventFactory('remove')
};
function eventFactory(type) {
    return function(nodes, event, selector, handler) {
        nodes = $safeEls(nodes);
        if (isUndef(handler)) {
            handler = selector;
            selector = undefined;
        }
        each(nodes, function(node) {
            delegate[type](node, event, selector, handler);
        });
    };
}

module.exports = exports;


/***/ }),

/***/ 5360:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var $safeEls = __webpack_require__(3612);
var isStr = __webpack_require__(1738);
exports = {
    before: insertFactory('beforebegin'),
    after: insertFactory('afterend'),
    append: insertFactory('beforeend'),
    prepend: insertFactory('afterbegin')
};
function insertFactory(type) {
    return function(nodes, val) {
        nodes = $safeEls(nodes);
        each(nodes, function(node) {
            if (isStr(val)) {
                node.insertAdjacentHTML(type, val);
            } else {
                var parentNode = node.parentNode;
                switch (type) {
                    case 'beforebegin':
                        if (parentNode) {
                            parentNode.insertBefore(val, node);
                        }
                        break;
                    case 'afterend':
                        if (parentNode) {
                            parentNode.insertBefore(val, node.nextSibling);
                        }
                        break;
                    case 'beforeend':
                        node.appendChild(val);
                        break;
                    case 'afterbegin':
                        node.prepend(val);
                        break;
                }
            }
        });
    };
}

module.exports = exports;


/***/ }),

/***/ 2230:
/***/ (function(module, exports, __webpack_require__) {

var $safeEls = __webpack_require__(3612);
exports = function(els) {
    els = $safeEls(els);
    var el = els[0];
    var clientRect = el.getBoundingClientRect();
    return {
        left: clientRect.left + window.pageXOffset,
        top: clientRect.top + window.pageYOffset,
        width: Math.round(clientRect.width),
        height: Math.round(clientRect.height)
    };
};

module.exports = exports;


/***/ }),

/***/ 7236:
/***/ (function(module, exports, __webpack_require__) {

var isUndef = __webpack_require__(8971);
var each = __webpack_require__(9100);
var $safeEls = __webpack_require__(3612);
exports = {
    html: propFactory('innerHTML'),
    text: propFactory('textContent'),
    val: propFactory('value')
};
function propFactory(name) {
    return function(nodes, val) {
        nodes = $safeEls(nodes);
        var node = nodes[0];
        if (isUndef(val)) {
            return node ? node[name] : '';
        }
        if (!node) return;
        each(nodes, function(node) {
            node[name] = val;
        });
    };
}

module.exports = exports;


/***/ }),

/***/ 2113:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var $safeEls = __webpack_require__(3612);
exports = function(els) {
    els = $safeEls(els);
    each(els, function(el) {
        var parent = el.parentNode;
        if (parent) parent.removeChild(el);
    });
};

module.exports = exports;


/***/ }),

/***/ 3612:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var toArr = __webpack_require__(769);
var Select = __webpack_require__(21);
exports = function(val) {
    return toArr(isStr(val) ? new Select(val) : val);
};

module.exports = exports;


/***/ }),

/***/ 8604:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var $safeEls = __webpack_require__(3612);
exports = function(els) {
    els = $safeEls(els);
    each(els, function(el) {
        if (isHidden(el)) {
            el.style.display = getDefDisplay(el.nodeName);
        }
    });
};
function isHidden(el) {
    return getComputedStyle(el, '').getPropertyValue('display') == 'none';
}
var elDisplay = {};
function getDefDisplay(elName) {
    var el, display;
    if (!elDisplay[elName]) {
        el = document.createElement(elName);
        document.documentElement.appendChild(el);
        display = getComputedStyle(el, '').getPropertyValue('display');
        el.parentNode.removeChild(el);
        display == 'none' && (display = 'block');
        elDisplay[elName] = display;
    }
    return elDisplay[elName];
}

module.exports = exports;


/***/ }),

/***/ 2717:
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(8105);
var toArr = __webpack_require__(769);
var inherits = __webpack_require__(8009);
var safeGet = __webpack_require__(6186);
var isMiniProgram = __webpack_require__(4460);
exports = function(methods, statics) {
    return Base.extend(methods, statics);
};
function makeClass(parent, methods, statics) {
    statics = statics || {};
    var className =
        methods.className || safeGet(methods, 'initialize.name') || '';
    delete methods.className;
    var ctor = function() {
        var args = toArr(arguments);
        return this.initialize
            ? this.initialize.apply(this, args) || this
            : this;
    };
    if (!isMiniProgram) {
        try {
            ctor = new Function(
                'toArr',
                'return function ' +
                    className +
                    '()' +
                    '{' +
                    'var args = toArr(arguments);' +
                    'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                    '};'
            )(toArr);
        } catch (e) {}
    }
    inherits(ctor, parent);
    ctor.prototype.constructor = ctor;
    ctor.extend = function(methods, statics) {
        return makeClass(ctor, methods, statics);
    };
    ctor.inherits = function(Class) {
        inherits(ctor, Class);
    };
    ctor.methods = function(methods) {
        extend(ctor.prototype, methods);
        return ctor;
    };
    ctor.statics = function(statics) {
        extend(ctor, statics);
        return ctor;
    };
    ctor.methods(methods).statics(statics);
    return ctor;
}
var Base = (exports.Base = makeClass(Object, {
    className: 'Base',
    callSuper: function(parent, name, args) {
        var superMethod = parent.prototype[name];
        return superMethod.apply(this, args);
    },
    toString: function() {
        return this.constructor.name;
    }
}));

module.exports = exports;


/***/ }),

/***/ 8734:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var isStr = __webpack_require__(1738);
var clamp = __webpack_require__(6026);
var rgbToHsl = __webpack_require__(8);
var hslToRgb = __webpack_require__(928);
var hex = __webpack_require__(9848);
exports = Class(
    {
        initialize: function Color(color) {
            if (isStr(color)) color = exports.parse(color);
            this.model = color.model;
            this.val = color.val;
        },
        toRgb: function() {
            var val = this.val;
            if (this.model === 'hsl') val = hslToRgb(val);
            var prefix = 'rgba';
            if (val[3] === 1) {
                prefix = 'rgb';
                val = val.slice(0, 3);
            }
            return prefix + '(' + val.join(', ') + ')';
        },
        toHex: function() {
            var val = this.val;
            if (this.model === 'hsl') val = hslToRgb(val);
            var ret = hex.encode(val.slice(0, 3));
            if (ret[0] === ret[1] && ret[2] === ret[3] && ret[4] === ret[5]) {
                ret = ret[0] + ret[2] + ret[5];
            }
            return '#' + ret;
        },
        toHsl: function() {
            var val = this.val;
            if (this.model === 'rgb') val = rgbToHsl(val);
            var prefix = 'hsla';
            if (val[3] === 1) {
                prefix = 'hsl';
                val = val.slice(0, 3);
            }
            val[1] = val[1] + '%';
            val[2] = val[2] + '%';
            return prefix + '(' + val.join(', ') + ')';
        }
    },
    {
        parse: function(colorStr) {
            var i, match;
            var val = [0, 0, 0, 1],
                model = 'rgb';

            if ((match = colorStr.match(regHexAbbr))) {
                match = match[1];
                for (i = 0; i < 3; i++) {
                    val[i] = parseInt(match[i] + match[i], 16);
                }
            } else if ((match = colorStr.match(regHex))) {
                match = match[1];
                for (i = 0; i < 3; i++) {
                    var i2 = i * 2;
                    val[i] = parseInt(match.slice(i2, i2 + 2), 16);
                }
            } else if ((match = colorStr.match(regRgba))) {
                for (i = 0; i < 3; i++) {
                    val[i] = parseInt(match[i + 1], 0);
                }
                if (match[4]) val[3] = parseFloat(match[4]);
            } else if ((match = colorStr.match(regRgbaPer))) {
                for (i = 0; i < 3; i++) {
                    val[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
                }
                if (match[4]) val[3] = parseFloat(match[4]);
            } else if ((match = colorStr.match(regHsla))) {
                model = 'hsl';
                val = [
                    ((parseFloat(match[1]) % 360) + 360) % 360,
                    clamp(parseFloat(match[2]), 0, 100),
                    clamp(parseFloat(match[3]), 0, 100),
                    clamp(parseFloat(match[4]), 0, 1)
                ];
            }
            return {
                val: val,
                model: model
            };
        }
    }
);
var regHexAbbr = /^#([a-fA-F0-9]{3})$/;
var regHex = /^#([a-fA-F0-9]{6})$/;
var regRgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
var regRgbaPer = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
var regHsla = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;

module.exports = exports;


/***/ }),

/***/ 2263:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var has = __webpack_require__(365);
var each = __webpack_require__(9100);
var slice = __webpack_require__(4951);
var once = __webpack_require__(8996);
var clone = __webpack_require__(8420);
exports = Class(
    {
        initialize: function Emitter() {
            this._events = this._events || {};
        },
        on: function(event, listener) {
            this._events[event] = this._events[event] || [];
            this._events[event].push(listener);
            return this;
        },
        off: function(event, listener) {
            var events = this._events;
            if (!has(events, event)) return;
            var idx = events[event].indexOf(listener);
            if (idx > -1) {
                events[event].splice(idx, 1);
            }
            return this;
        },
        once: function(event, listener) {
            this.on(event, once(listener));
            return this;
        },
        emit: function(event) {
            var _this = this;
            if (!has(this._events, event)) return;
            var args = slice(arguments, 1);
            var events = clone(this._events[event]);
            each(
                events,
                function(val) {
                    return val.apply(_this, args);
                },
                this
            );
            return this;
        },
        removeAllListeners: function(event) {
            if (!event) {
                this._events = {};
            } else {
                delete this._events[event];
            }
            return this;
        }
    },
    {
        mixin: function(obj) {
            each(['on', 'off', 'once', 'emit', 'removeAllListeners'], function(
                val
            ) {
                obj[val] = exports.prototype[val];
            });
            obj._events = obj._events || {};
        }
    }
);

module.exports = exports;


/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var freeze = __webpack_require__(3722);
var isArr = __webpack_require__(6214);
var each = __webpack_require__(9100);
var keys = __webpack_require__(3145);
exports = Class({
    initialize: function Enum(map) {
        if (isArr(map)) {
            this.size = map.length;
            each(
                map,
                function(member, val) {
                    this[member] = val;
                },
                this
            );
        } else {
            this.size = keys(map).length;
            each(
                map,
                function(val, member) {
                    this[member] = val;
                },
                this
            );
        }
        freeze(this);
    }
});

module.exports = exports;


/***/ }),

/***/ 6741:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var safeGet = __webpack_require__(6186);
var extend = __webpack_require__(8105);
var strTpl = __webpack_require__(2508);
var isStr = __webpack_require__(1738);
var isFn = __webpack_require__(3957);
exports = Class({
    initialize: function I18n(locale, langs) {
        this._locale = locale;
        this._langs = langs;
    },
    set: function(locale, lang) {
        if (this._langs[locale]) {
            extend(this._langs[locale], lang);
        } else {
            this._langs[locale] = lang;
        }
    },
    t: function(path, data) {
        var val = '';
        var lang = this._langs[this._locale];
        if (!lang) return '';
        val = safeGet(lang, path);
        if (data) {
            if (isStr(val)) {
                val = strTpl(val, data);
            } else if (isFn(val)) {
                val = val(data);
            }
        }
        return val || '';
    },
    locale: function(locale) {
        this._locale = locale;
    }
});

module.exports = exports;


/***/ }),

/***/ 5021:
/***/ (function(module, exports, __webpack_require__) {

var Store = __webpack_require__(7744);
var safeStorage = __webpack_require__(1931);
var isEmpty = __webpack_require__(9464);
var stringify = __webpack_require__(8032);
var defaults = __webpack_require__(5651);
var isObj = __webpack_require__(9760);
var localStorage = safeStorage('local');
exports = Store.extend({
    initialize: function LocalStore(name, data) {
        this._name = name;
        data = data || {};
        var localData = localStorage.getItem(name);
        try {
            localData = JSON.parse(localData);
        } catch (e) {
            localData = {};
        }
        if (!isObj(localData)) localData = {};
        data = defaults(localData, data);
        this.callSuper(Store, 'initialize', [data]);
    },
    save: function(data) {
        if (isEmpty(data)) return localStorage.removeItem(this._name);
        localStorage.setItem(this._name, stringify(data));
    }
});

module.exports = exports;


/***/ }),

/***/ 7622:
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(2263);
var Enum = __webpack_require__(2192);
var toArr = __webpack_require__(769);
var isUndef = __webpack_require__(8971);
var clone = __webpack_require__(8420);
var isStr = __webpack_require__(1738);
var isNum = __webpack_require__(6097);
exports = Emitter.extend(
    {
        initialize: function Logger(name, level) {
            this.name = name;
            this.setLevel(isUndef(level) ? exports.level.DEBUG : level);
            this.callSuper(Emitter, 'initialize', arguments);
        },
        setLevel: function(level) {
            if (isStr(level)) {
                level = exports.level[level.toUpperCase()];
                if (level) this._level = level;
                return this;
            }
            if (isNum(level)) this._level = level;
            return this;
        },
        getLevel: function() {
            return this._level;
        },
        formatter: function(type, argList) {
            return argList;
        },
        trace: function() {
            return this._log('trace', arguments);
        },
        debug: function() {
            return this._log('debug', arguments);
        },
        info: function() {
            return this._log('info', arguments);
        },
        warn: function() {
            return this._log('warn', arguments);
        },
        error: function() {
            return this._log('error', arguments);
        },
        _log: function(type, argList) {
            argList = toArr(argList);
            if (argList.length === 0) return this;
            this.emit('all', type, clone(argList));
            if (exports.level[type.toUpperCase()] < this._level) return this;
            this.emit(type, clone(argList));

            var consoleMethod = type === 'debug' ? console.log : console[type];
            consoleMethod.apply(console, this.formatter(type, argList));
            return this;
        }
    },
    {
        level: new Enum({
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
        })
    }
);

module.exports = exports;


/***/ }),

/***/ 3737:
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(2263);
exports = Emitter.extend({
    className: 'MediaQuery',
    initialize: function(query) {
        var _this = this;
        this.callSuper(Emitter, 'initialize');
        this._listener = function() {
            _this.emit(_this.isMatch() ? 'match' : 'unmatch');
        };
        this.setQuery(query);
    },
    setQuery: function(query) {
        if (this._mql) {
            this._mql.removeListener(this._listener);
        }
        this._mql = window.matchMedia(query);
        this._mql.addListener(this._listener);
    },
    isMatch: function() {
        return this._mql.matches;
    }
});

module.exports = exports;


/***/ }),

/***/ 2208:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
exports =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
if (!exports) {
    exports = Class({
        initialize: function MutationObserver() {},
        observe: function() {},
        disconnect: function() {},
        takeRecords: function() {}
    });
}

module.exports = exports;


/***/ }),

/***/ 4095:
/***/ (function(module, exports, __webpack_require__) {

var SingleEmitter = __webpack_require__(1023);
var h = __webpack_require__(5241);
var $event = __webpack_require__(3793);
var $css = __webpack_require__(6866);
var contain = __webpack_require__(3249);
var extend = __webpack_require__(8105);
var root = __webpack_require__(5169);
if (root.ResizeObserver && !false) {
    exports = SingleEmitter.extend({
        initialize: function ResizeSensor(el) {
            var _this = this;
            if (el._resizeSensor) {
                return el._resizeSensor;
            }
            this.callSuper(SingleEmitter, 'initialize');
            var resizeObserver = new root.ResizeObserver(function() {
                return _this.emit();
            });
            resizeObserver.observe(el);
            el._resizeSensor = this;
            this._resizeObserver = resizeObserver;
            this._el = el;
        },
        destroy: function() {
            var el = this._el;
            if (!el._resizeSensor) {
                return;
            }
            this.rmAllListeners();
            delete el._resizeSensor;
            this._resizeObserver.unobserve(el);
        }
    });
} else {
    exports = SingleEmitter.extend({
        initialize: function ResizeSensor(el) {
            if (el._resizeSensor) {
                return el._resizeSensor;
            }
            this.callSuper(SingleEmitter, 'initialize');
            this._el = el;
            el._resizeSensor = this;
            if (
                !contain(
                    ['absolute', 'relative', 'fixed', 'sticky'],
                    $css(el, 'position')
                )
            ) {
                $css(el, 'position', 'relative');
            }
            this._appendResizeSensor();
            this._bindEvent();
        },
        destroy: function() {
            var el = this._el;
            if (!el._resizeSensor) {
                return;
            }
            this.rmAllListeners();
            delete el._resizeSensor;
            el.removeChild(this._resizeSensorEl);
        },
        _appendResizeSensor: function() {
            var el = this._el;
            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s'
            };
            var expandChildEl = h('div', {
                style: styleChild
            });
            var expandEl = h(
                'div.resize-sensor-expand',
                {
                    style: style
                },
                expandChildEl
            );
            var shrinkEl = h(
                'div.resize-sensor-shrink',
                {
                    style: style
                },
                h('div', {
                    style: extend(
                        {
                            width: '200%',
                            height: '200%'
                        },
                        styleChild
                    )
                })
            );
            var resizeSensorEl = h(
                'div.resize-sensor',
                {
                    dir: 'ltr',
                    style: style
                },
                expandEl,
                shrinkEl
            );
            this._expandEl = expandEl;
            this._expandChildEl = expandChildEl;
            this._shrinkEl = shrinkEl;
            this._resizeSensorEl = resizeSensorEl;
            el.appendChild(resizeSensorEl);
            this._resetExpandShrink();
        },
        _bindEvent: function() {
            var _this2 = this;
            $event.on(this._expandEl, 'scroll', function() {
                return _this2._onScroll();
            });
            $event.on(this._shrinkEl, 'scroll', function() {
                return _this2._onScroll();
            });
        },
        _onScroll: function() {
            this.emit();
            this._resetExpandShrink();
        },
        _resetExpandShrink: function() {
            var el = this._el;
            var width = el.offsetWidth;
            var height = el.offsetHeight;
            $css(this._expandChildEl, {
                width: width + 10,
                height: height + 10
            });
            extend(this._expandEl, {
                scrollLeft: width + 10,
                scrollTop: height + 10
            });
            extend(this._shrinkEl, {
                scrollLeft: width + 10,
                scrollTop: height + 10
            });
        }
    });
}

module.exports = exports;


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var isStr = __webpack_require__(1738);
var each = __webpack_require__(9100);
var mergeArr = __webpack_require__(8178);
exports = Class({
    className: 'Select',
    initialize: function(selector) {
        this.length = 0;
        if (!selector) return this;
        if (isStr(selector)) return rootSelect.find(selector);
        if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
        }
    },
    find: function(selector) {
        var ret = new exports();
        this.each(function() {
            mergeArr(ret, this.querySelectorAll(selector));
        });
        return ret;
    },
    each: function(fn) {
        each(this, function(element, idx) {
            fn.call(element, idx, element);
        });
        return this;
    }
});
var rootSelect = new exports(document);

module.exports = exports;


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var clone = __webpack_require__(8420);
var each = __webpack_require__(9100);
var toArr = __webpack_require__(769);
exports = Class(
    {
        initialize: function SingleEmitter() {
            this._listeners = [];
        },
        addListener: function(listener) {
            this._listeners.push(listener);
        },
        rmListener: function(listener) {
            var idx = this._listeners.indexOf(listener);
            if (idx > -1) {
                this._listeners.splice(idx, 1);
            }
        },
        rmAllListeners: function() {
            this._listeners = [];
        },
        emit: function() {
            var _this = this;
            var args = toArr(arguments);
            var listeners = clone(this._listeners);
            each(
                listeners,
                function(listener) {
                    return listener.apply(_this, args);
                },
                this
            );
        }
    },
    {
        mixin: function(obj) {
            each(
                ['addListener', 'rmListener', 'emit', 'rmAllListeners'],
                function(val) {
                    obj[val] = exports.prototype[val];
                }
            );
            obj._listeners = obj._listeners || [];
        }
    }
);

module.exports = exports;


/***/ }),

/***/ 7005:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var reverse = __webpack_require__(5395);
exports = Class({
    initialize: function Stack() {
        this.clear();
    },
    clear: function() {
        this._items = [];
        this.size = 0;
    },
    push: function(item) {
        this._items.push(item);
        return ++this.size;
    },
    pop: function() {
        if (!this.size) return;
        this.size--;
        return this._items.pop();
    },
    peek: function() {
        return this._items[this.size - 1];
    },
    forEach: function(iterator, ctx) {
        ctx = arguments.length > 1 ? ctx : this;
        var items = this._items;
        for (var i = this.size - 1, j = 0; i >= 0; i--, j++) {
            iterator.call(ctx, items[i], j, this);
        }
    },
    toArr: function() {
        return reverse(this._items);
    }
});

module.exports = exports;


/***/ }),

/***/ 7744:
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(2263);
var isStr = __webpack_require__(1738);
var isObj = __webpack_require__(9760);
var each = __webpack_require__(9100);
var toArr = __webpack_require__(769);
exports = Emitter.extend({
    initialize: function Store(data) {
        this.callSuper(Emitter, 'initialize', arguments);
        this._data = data || {};
        this.save(this._data);
    },
    set: function(key, val) {
        var data;
        if (isStr(key)) {
            data = {};
            data[key] = val;
        } else if (isObj(key)) {
            data = key;
        }
        var self = this;
        each(data, function(val, key) {
            var oldVal = self._data[key];
            self._data[key] = val;
            self.emit('change', key, val, oldVal);
        });
        this.save(this._data);
    },
    get: function(key) {
        var data = this._data;
        if (isStr(key)) return data[key];
        var ret = {};
        each(key, function(val) {
            ret[val] = data[val];
        });
        return ret;
    },
    remove: function(key) {
        key = toArr(key);
        var data = this._data;
        each(key, function(val) {
            delete data[val];
        });
        this.save(data);
    },
    clear: function() {
        this._data = {};
        this.save(this._data);
    },
    each: function(fn) {
        each(this._data, fn);
    },

    save: function(data) {
        this._data = data;
    }
});

module.exports = exports;


/***/ }),

/***/ 6032:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var extend = __webpack_require__(8105);
var trim = __webpack_require__(9405);
var query = __webpack_require__(7257);
var isEmpty = __webpack_require__(9464);
var each = __webpack_require__(9100);
var isArr = __webpack_require__(6214);
var toArr = __webpack_require__(769);
var isBrowser = __webpack_require__(1909);
var isObj = __webpack_require__(9760);
var toStr = __webpack_require__(2561);
exports = Class(
    {
        className: 'Url',
        initialize: function(url) {
            if (!url && isBrowser) url = window.location.href;
            extend(this, exports.parse(url || ''));
        },
        setQuery: function(name, val) {
            var query = this.query;
            if (isObj(name)) {
                each(name, function(val, key) {
                    query[key] = toStr(val);
                });
            } else {
                query[name] = toStr(val);
            }
            return this;
        },
        rmQuery: function(name) {
            var query = this.query;
            if (!isArr(name)) name = toArr(name);
            each(name, function(key) {
                delete query[key];
            });
            return this;
        },
        toString: function() {
            return exports.stringify(this);
        }
    },
    {
        parse: function(url) {
            var ret = {
                protocol: '',
                auth: '',
                hostname: '',
                hash: '',
                query: {},
                port: '',
                pathname: '',
                slashes: false
            };
            var rest = trim(url);
            var slashes = false;
            var proto = rest.match(regProto);
            if (proto) {
                proto = proto[0];
                ret.protocol = proto.toLowerCase();
                rest = rest.substr(proto.length);
            }
            if (proto) {
                slashes = rest.substr(0, 2) === '//';
                if (slashes) {
                    rest = rest.slice(2);
                    ret.slashes = true;
                }
            }
            if (slashes) {
                var host = rest;
                var hostEnd = -1;
                for (var i = 0, len = hostEndingChars.length; i < len; i++) {
                    var pos = rest.indexOf(hostEndingChars[i]);
                    if (pos !== -1 && (hostEnd === -1 || pos < hostEnd))
                        hostEnd = pos;
                }
                if (hostEnd > -1) {
                    host = rest.slice(0, hostEnd);
                    rest = rest.slice(hostEnd);
                }
                var atSign = host.lastIndexOf('@');
                if (atSign !== -1) {
                    ret.auth = decodeURIComponent(host.slice(0, atSign));
                    host = host.slice(atSign + 1);
                }
                ret.hostname = host;
                var port = host.match(regPort);
                if (port) {
                    port = port[0];
                    if (port !== ':') ret.port = port.substr(1);
                    ret.hostname = host.substr(0, host.length - port.length);
                }
            }
            var hash = rest.indexOf('#');
            if (hash !== -1) {
                ret.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
            }
            var queryMark = rest.indexOf('?');
            if (queryMark !== -1) {
                ret.query = query.parse(rest.substr(queryMark + 1));
                rest = rest.slice(0, queryMark);
            }
            ret.pathname = rest || '/';
            return ret;
        },
        stringify: function(obj) {
            var ret =
                obj.protocol +
                (obj.slashes ? '//' : '') +
                (obj.auth ? encodeURIComponent(obj.auth) + '@' : '') +
                obj.hostname +
                (obj.port ? ':' + obj.port : '') +
                obj.pathname;
            if (!isEmpty(obj.query)) ret += '?' + query.stringify(obj.query);
            if (obj.hash) ret += obj.hash;
            return ret;
        }
    }
);
var regProto = /^([a-z0-9.+-]+:)/i;
var regPort = /:[0-9]*$/;
var hostEndingChars = ['/', '?', '#'];

module.exports = exports;


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var isFn = __webpack_require__(3957);
var noop = __webpack_require__(9993);
var defaults = __webpack_require__(5651);
var isObj = __webpack_require__(9760);
var query = __webpack_require__(7257);
exports = function(options) {
    defaults(options, exports.setting);
    var type = options.type;
    var url = options.url;
    var data = options.data;
    var dataType = options.dataType;
    var success = options.success;
    var error = options.error;
    var timeout = options.timeout;
    var complete = options.complete;
    var xhr = options.xhr();
    var abortTimeout;
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        clearTimeout(abortTimeout);
        var result;
        var status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304) {
            result = xhr.responseText;
            if (dataType === 'xml') result = xhr.responseXML;
            try {
                if (dataType === 'json') result = JSON.parse(result);
            } catch (e) {}
            success(result, xhr);
        } else {
            error(xhr);
        }
        complete(xhr);
    };
    if (type === 'GET') {
        data = query.stringify(data);
        if (data) url += url.indexOf('?') > -1 ? '&' + data : '?' + data;
    } else if (options.contentType === 'application/x-www-form-urlencoded') {
        if (isObj(data)) data = query.stringify(data);
    } else if (options.contentType === 'application/json') {
        if (isObj(data)) data = JSON.stringify(data);
    }
    xhr.open(type, url, true);
    xhr.setRequestHeader('Content-Type', options.contentType);
    if (timeout > 0) {
        abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = noop;
            xhr.abort();
            error(xhr, 'timeout');
            complete(xhr);
        }, timeout);
    }
    xhr.send(type === 'GET' ? null : data);
    return xhr;
};
exports.setting = {
    type: 'GET',
    success: noop,
    error: noop,
    complete: noop,
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded',
    data: {},
    xhr: function() {
        return new XMLHttpRequest();
    },
    timeout: 0
};
exports.get = function() {
    return exports(parseArgs.apply(null, arguments));
};
exports.post = function() {
    var options = parseArgs.apply(null, arguments);
    options.type = 'POST';
    return exports(options);
};
function parseArgs(url, data, success, dataType) {
    if (isFn(data)) {
        dataType = success;
        success = data;
        data = {};
    }
    return {
        url: url,
        data: data,
        success: success,
        dataType: dataType
    };
}

module.exports = exports;


/***/ }),

/***/ 7514:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
var getProto = __webpack_require__(5427);
var unique = __webpack_require__(438);
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
exports = function(obj) {
    var _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
        _ref$prototype = _ref.prototype,
        prototype = _ref$prototype === void 0 ? true : _ref$prototype,
        _ref$unenumerable = _ref.unenumerable,
        unenumerable = _ref$unenumerable === void 0 ? false : _ref$unenumerable,
        _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === void 0 ? false : _ref$symbol;
    var ret = [];
    if ((unenumerable || symbol) && getOwnPropertyNames) {
        var getKeys = keys;
        if (unenumerable && getOwnPropertyNames) getKeys = getOwnPropertyNames;
        do {
            ret = ret.concat(getKeys(obj));
            if (symbol && getOwnPropertySymbols) {
                ret = ret.concat(getOwnPropertySymbols(obj));
            }
        } while (
            prototype &&
            (obj = getProto(obj)) &&
            obj !== Object.prototype
        );
        ret = unique(ret);
    } else {
        if (prototype) {
            for (var key in obj) ret.push(key);
        } else {
            ret = keys(obj);
        }
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var isUndef = __webpack_require__(8971);
var isFn = __webpack_require__(3957);
exports = function(arr, val) {
    if (isUndef(val)) val = true;
    var _isFn = isFn(val);
    var ret = {};
    each(arr, function(key) {
        ret[key] = _isFn ? val(key) : val;
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 2990:
/***/ (function(module, exports) {

exports = {
    encode: function(bytes) {
        var ret = [];
        var len = bytes.length;
        var remain = len % 3;
        len = len - remain;
        for (var i = 0; i < len; i += 3) {
            ret.push(
                numToBase64(
                    (bytes[i] << 16) + (bytes[i + 1] << 8) + bytes[i + 2]
                )
            );
        }
        len = bytes.length;
        var tmp;
        if (remain === 1) {
            tmp = bytes[len - 1];
            ret.push(code[tmp >> 2]);
            ret.push(code[(tmp << 4) & 0x3f]);
            ret.push('==');
        } else if (remain === 2) {
            tmp = (bytes[len - 2] << 8) + bytes[len - 1];
            ret.push(code[tmp >> 10]);
            ret.push(code[(tmp >> 4) & 0x3f]);
            ret.push(code[(tmp << 2) & 0x3f]);
            ret.push('=');
        }
        return ret.join('');
    },
    decode: function(str) {
        var len = str.length,
            remain = 0;
        if (str[len - 2] === '=') remain = 2;
        else if (str[len - 1] === '=') remain = 1;
        var ret = new Array((len * 3) / 4 - remain);
        len = remain > 0 ? len - 4 : len;
        var i, j;
        for (i = 0, j = 0; i < len; i += 4) {
            var num = base64ToNum(str[i], str[i + 1], str[i + 2], str[i + 3]);
            ret[j++] = (num >> 16) & 0xff;
            ret[j++] = (num >> 8) & 0xff;
            ret[j++] = num & 0xff;
        }
        var tmp;
        if (remain === 2) {
            tmp =
                (codeMap[str.charCodeAt(i)] << 2) |
                (codeMap[str.charCodeAt(i + 1)] >> 4);
            ret[j++] = tmp & 0xff;
        } else if (remain === 1) {
            tmp =
                (codeMap[str.charCodeAt(i)] << 10) |
                (codeMap[str.charCodeAt(i + 1)] << 4) |
                (codeMap[str.charCodeAt(i + 2)] >> 2);
            ret[j++] = (tmp >> 8) & 0xff;
            ret[j++] = tmp & 0xff;
        }
        return ret;
    }
};
var codeMap = [];
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; i++) {
    codeMap[code.charCodeAt(i)] = i;
}
function numToBase64(num) {
    return (
        code[(num >> 18) & 0x3f] +
        code[(num >> 12) & 0x3f] +
        code[(num >> 6) & 0x3f] +
        code[num & 0x3f]
    );
}
function base64ToNum(str1, str2, str3, str4) {
    return (
        (codeMap[str1.charCodeAt(0)] << 18) |
        (codeMap[str2.charCodeAt(0)] << 12) |
        (codeMap[str3.charCodeAt(0)] << 6) |
        codeMap[str4.charCodeAt(0)]
    );
}

module.exports = exports;


/***/ }),

/***/ 7542:
/***/ (function(module, exports) {

exports = function(n, fn) {
    var memo;
    return function() {
        if (--n > 0) memo = fn.apply(this, arguments);
        if (n <= 1) fn = null;
        return memo;
    };
};

module.exports = exports;


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var splitCase = __webpack_require__(6833);
exports = function(str) {
    var arr = splitCase(str);
    var ret = arr[0];
    arr.shift();
    arr.forEach(capitalize, arr);
    ret += arr.join('');
    return ret;
};
function capitalize(val, idx) {
    this[idx] = val.replace(/\w/, function(match) {
        return match.toUpperCase();
    });
}

module.exports = exports;


/***/ }),

/***/ 6949:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(365);
var isArr = __webpack_require__(6214);
exports = function(str, obj) {
    if (isArr(str)) return str;
    if (obj && has(obj, str)) return [str];
    var ret = [];
    str.replace(regPropName, function(match, number, quote, str) {
        ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
    });
    return ret;
};

var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var regEscapeChar = /\\(\\)?/g;

module.exports = exports;


/***/ }),

/***/ 7140:
/***/ (function(module, exports) {

exports = function(arr, size) {
    var ret = [];
    size = size || 1;
    for (var i = 0, len = Math.ceil(arr.length / size); i < len; i++) {
        var start = i * size;
        var end = start + size;
        ret.push(arr.slice(start, end));
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 6026:
/***/ (function(module, exports, __webpack_require__) {

var isUndef = __webpack_require__(8971);
exports = function(n, lower, upper) {
    if (isUndef(upper)) {
        upper = lower;
        lower = undefined;
    }
    if (!isUndef(lower) && n < lower) return lower;
    if (n > upper) return upper;
    return n;
};

module.exports = exports;


/***/ }),

/***/ 8420:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
var isArr = __webpack_require__(6214);
var extend = __webpack_require__(8105);
exports = function(obj) {
    if (!isObj(obj)) return obj;
    return isArr(obj) ? obj.slice() : extend({}, obj);
};

module.exports = exports;


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
var isFn = __webpack_require__(3957);
var isArr = __webpack_require__(6214);
var mapObj = __webpack_require__(5154);
exports = function(obj) {
    if (isArr(obj)) {
        return obj.map(function(val) {
            return exports(val);
        });
    }
    if (isObj(obj) && !isFn(obj)) {
        return mapObj(obj, function(val) {
            return exports(val);
        });
    }
    return obj;
};

module.exports = exports;


/***/ }),

/***/ 4069:
/***/ (function(module, exports, __webpack_require__) {

var toArr = __webpack_require__(769);
exports = function() {
    var args = toArr(arguments);
    var ret = [];
    for (var i = 0, len = args.length; i < len; i++) {
        ret = ret.concat(toArr(args[i]));
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 3249:
/***/ (function(module, exports, __webpack_require__) {

var idxOf = __webpack_require__(7375);
var isStr = __webpack_require__(1738);
var isArrLike = __webpack_require__(5793);
var values = __webpack_require__(5119);
exports = function(arr, val) {
    if (isStr(arr)) return arr.indexOf(val) > -1;
    if (!isArrLike(arr)) arr = values(arr);
    return idxOf(arr, val) >= 0;
};

module.exports = exports;


/***/ }),

/***/ 5957:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var base64 = __webpack_require__(2990);
var isArrBuffer = __webpack_require__(4992);
var isArr = __webpack_require__(6214);
var isBuffer = __webpack_require__(3159);
var type = __webpack_require__(2989);
var lowerCase = __webpack_require__(96);
exports = function(bin, t) {
    var result;
    t = lowerCase(t);
    if (isStr(bin)) {
        result = new Uint8Array(base64.decode(bin));
    } else if (isArrBuffer(bin)) {
        bin = bin.slice(0);
        result = new Uint8Array(bin);
    } else if (isArr(bin)) {
        result = new Uint8Array(bin);
    } else if (type(bin) === 'uint8array') {
        result = bin.slice(0);
    } else if (isBuffer(bin)) {
        result = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            result[i] = bin[i];
        }
    }
    if (result) {
        switch (t) {
            case 'base64':
                result = base64.encode(result);
                break;
            case 'arraybuffer':
                result = result.buffer;
                break;
            case 'array':
                result = [].slice.call(result);
                break;
            case 'buffer':
                result = Buffer.from(result);
                break;
            case 'blob':
                result = new Blob([result.buffer]);
                break;
        }
    }
    return result;
};
exports.blobToArrBuffer = function(blob) {
    return new Promise(function(resolve, reject) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            resolve(e.target.result);
        };
        fileReader.onerror = function(err) {
            reject(err);
        };
        fileReader.readAsArrayBuffer(blob);
    });
};

module.exports = exports;


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var defaults = __webpack_require__(5651);
var isNum = __webpack_require__(6097);
var isUndef = __webpack_require__(8971);
var decodeUriComponent = __webpack_require__(6334);
var defOpts = {
    path: '/'
};
function setCookie(key, val, options) {
    if (!isUndef(val)) {
        options = options || {};
        options = defaults(options, defOpts);
        if (isNum(options.expires)) {
            var expires = new Date();
            expires.setMilliseconds(
                expires.getMilliseconds() + options.expires * 864e5
            );
            options.expires = expires;
        }
        val = encodeURIComponent(val);
        key = encodeURIComponent(key);
        document.cookie = [
            key,
            '=',
            val,
            options.expires && '; expires=' + options.expires.toUTCString(),
            options.path && '; path=' + options.path,
            options.domain && '; domain=' + options.domain,
            options.secure ? '; secure' : ''
        ].join('');
        return exports;
    }
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var result = key ? undefined : {};
    for (var i = 0, len = cookies.length; i < len; i++) {
        var c = cookies[i];
        var parts = c.split('=');
        var name = decodeUriComponent(parts.shift());
        c = parts.join('=');
        c = decodeUriComponent(c);
        if (key === name) {
            result = c;
            break;
        }
        if (!key) result[name] = c;
    }
    return result;
}
exports = {
    get: setCookie,
    set: setCookie,
    remove: function(key, options) {
        options = options || {};
        options.expires = -1;
        return setCookie(key, '', options);
    }
};

module.exports = exports;


/***/ }),

/***/ 4844:
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(8105);
var noop = __webpack_require__(9993);
exports = function(text, cb) {
    cb = cb || noop;
    var el = document.createElement('textarea');
    var body = document.body;
    extend(el.style, {
        fontSize: '12pt',
        border: '0',
        padding: '0',
        margin: '0',
        position: 'absolute',
        left: '-9999px'
    });
    el.value = text;
    body.appendChild(el);

    el.setAttribute('readonly', '');
    el.select();
    el.setSelectionRange(0, text.length);
    try {
        document.execCommand('copy');
        cb();
    } catch (e) {
        cb(e);
    } finally {
        body.removeChild(el);
    }
};

module.exports = exports;


/***/ }),

/***/ 6513:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
exports = function(proto) {
    if (!isObj(proto)) return {};
    if (objCreate && !false) return objCreate(proto);
    function noop() {}
    noop.prototype = proto;
    return new noop();
};
var objCreate = Object.create;

module.exports = exports;


/***/ }),

/***/ 6307:
/***/ (function(module, exports, __webpack_require__) {

var isUndef = __webpack_require__(8971);
var each = __webpack_require__(9100);
exports = function(keysFn, defaults) {
    return function(obj) {
        each(arguments, function(src, idx) {
            if (idx === 0) return;
            var keys = keysFn(src);
            each(keys, function(key) {
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            });
        });
        return obj;
    };
};

module.exports = exports;


/***/ }),

/***/ 8534:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(5869);
var isUndef = __webpack_require__(8971);
var camelCase = __webpack_require__(387);
exports = memoize(
    function(name, value) {
        if (isUndef(value)) {
            name = camelCase(name);
            return !isUndef(style[name]);
        }
        style.cssText = '';
        style.cssText = name + ':' + value;
        return !!style.length;
    },
    function(name, value) {
        return name + ' ' + value;
    }
);
var style = document.createElement('p').style;

module.exports = exports;


/***/ }),

/***/ 7030:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var isDate = __webpack_require__(2517);
var toStr = __webpack_require__(2561);
var lpad = __webpack_require__(6392);
exports = function(date, mask, utc, gmt) {
    if (arguments.length === 1 && isStr(date) && !regNum.test(date)) {
        mask = date;
        date = undefined;
    }
    date = date || new Date();
    if (!isDate(date)) date = new Date(date);
    mask = toStr(exports.masks[mask] || mask || exports.masks['default']);
    var maskSlice = mask.slice(0, 4);
    if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
        mask = mask.slice(4);
        utc = true;
        if (maskSlice === 'GMT:') gmt = true;
    }
    var prefix = utc ? 'getUTC' : 'get';
    var d = date[prefix + 'Date']();
    var D = date[prefix + 'Day']();
    var m = date[prefix + 'Month']();
    var y = date[prefix + 'FullYear']();
    var H = date[prefix + 'Hours']();
    var M = date[prefix + 'Minutes']();
    var s = date[prefix + 'Seconds']();
    var L = date[prefix + 'Milliseconds']();
    var o = utc ? 0 : date.getTimezoneOffset();
    var flags = {
        d: d,
        dd: padZero(d),
        ddd: exports.i18n.dayNames[D],
        dddd: exports.i18n.dayNames[D + 7],
        m: m + 1,
        mm: padZero(m + 1),
        mmm: exports.i18n.monthNames[m],
        mmmm: exports.i18n.monthNames[m + 12],
        yy: toStr(y).slice(2),
        yyyy: y,
        h: H % 12 || 12,
        hh: padZero(H % 12 || 12),
        H: H,
        HH: padZero(H),
        M: M,
        MM: padZero(M),
        s: s,
        ss: padZero(s),
        l: padZero(L, 3),
        L: padZero(Math.round(L / 10)),
        t: H < 12 ? 'a' : 'p',
        tt: H < 12 ? 'am' : 'pm',
        T: H < 12 ? 'A' : 'P',
        TT: H < 12 ? 'AM' : 'PM',
        Z: gmt
            ? 'GMT'
            : utc
            ? 'UTC'
            : (toStr(date).match(regTimezone) || [''])
                  .pop()
                  .replace(regTimezoneClip, ''),
        o:
            (o > 0 ? '-' : '+') +
            padZero(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
            d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10
        ]
    };
    return mask.replace(regToken, function(match) {
        if (match in flags) return flags[match];
        return match.slice(1, match.length - 1);
    });
};
var padZero = function(str) {
    var len =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return lpad(toStr(str), len, '0');
};
var regToken = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
var regTimezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
var regNum = /\d/;
var regTimezoneClip = /[^-+\dA-Z]/g;
exports.masks = {
    default: 'ddd mmm dd yyyy HH:MM:ss',
    shortDate: 'm/d/yy',
    mediumDate: 'mmm d, yyyy',
    longDate: 'mmmm d, yyyy',
    fullDate: 'dddd, mmmm d, yyyy',
    shortTime: 'h:MM TT',
    mediumTime: 'h:MM:ss TT',
    longTime: 'h:MM:ss TT Z',
    isoDate: 'yyyy-mm-dd',
    isoTime: 'HH:MM:ss',
    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z'
};
exports.i18n = {
    dayNames: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    monthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};

module.exports = exports;


/***/ }),

/***/ 4534:
/***/ (function(module, exports) {

exports = function(fn, wait, immediate) {
    var timeout;
    return function() {
        var ctx = this;
        var args = arguments;
        var throttler = function() {
            timeout = null;
            fn.apply(ctx, args);
        };
        if (!immediate) clearTimeout(timeout);
        if (!immediate || !timeout) timeout = setTimeout(throttler, wait);
    };
};

module.exports = exports;


/***/ }),

/***/ 6334:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var ucs2 = __webpack_require__(5224);
var map = __webpack_require__(3915);
var utf8 = __webpack_require__(4966);
exports = function(str) {
    try {
        return decodeURIComponent(str);
    } catch (e) {
        var matches = str.match(regMatcher);
        if (!matches) {
            return str;
        }
        each(matches, function(match) {
            str = str.replace(match, decode(match));
        });
        return str;
    }
};
function decode(str) {
    str = str.split('%').slice(1);
    var bytes = map(str, hexToInt);
    str = ucs2.encode(bytes);
    str = utf8.decode(str, true);
    return str;
}
function hexToInt(numStr) {
    return +('0x' + numStr);
}
var regMatcher = /(%[a-f0-9]{2})+/gi;

module.exports = exports;


/***/ }),

/***/ 5651:
/***/ (function(module, exports, __webpack_require__) {

var createAssigner = __webpack_require__(6307);
var allKeys = __webpack_require__(7514);
exports = createAssigner(allKeys, true);

module.exports = exports;


/***/ }),

/***/ 4151:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(6949);
var isStr = __webpack_require__(1738);
var isObj = __webpack_require__(9760);
var each = __webpack_require__(9100);
exports = function(obj, prop, descriptor) {
    if (isStr(prop)) {
        defineProp(obj, prop, descriptor);
    } else if (isObj(prop)) {
        each(prop, function(descriptor, prop) {
            defineProp(obj, prop, descriptor);
        });
    }
    return obj;
};
function defineProp(obj, prop, descriptor) {
    var path = castPath(prop, obj);
    var lastProp = path.pop();

    while ((prop = path.shift())) {
        if (!obj[prop]) obj[prop] = {};
        obj = obj[prop];
    }
    Object.defineProperty(obj, lastProp, descriptor);
}

module.exports = exports;


/***/ }),

/***/ 8966:
/***/ (function(module, exports, __webpack_require__) {

var Class = __webpack_require__(2717);
var contain = __webpack_require__(3249);
function retTrue() {
    return true;
}
function retFalse() {
    return false;
}
function trigger(e) {
    var handlers = this.events[e.type];
    var handler;
    var handlerQueue = formatHandlers.call(this, e, handlers);
    e = new exports.Event(e);
    var i = 0,
        j,
        matched,
        ret;
    while ((matched = handlerQueue[i++]) && !e.isPropagationStopped()) {
        e.curTarget = matched.el;
        j = 0;
        while (
            (handler = matched.handlers[j++]) &&
            !e.isImmediatePropagationStopped()
        ) {
            ret = handler.handler.apply(matched.el, [e]);
            if (ret === false) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
}
function formatHandlers(e, handlers) {
    var current = e.target;
    var ret = [];
    var delegateCount = handlers.delegateCount;
    var selector;
    var matches;
    var handler;
    var i;
    if (current.nodeType) {
        for (; current !== this; current = current.parentNode || this) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
                handler = handlers[i];
                selector = handler.selector + ' ';
                if (matches[selector] === undefined) {
                    matches[selector] = contain(
                        this.querySelectorAll(selector),
                        current
                    );
                }
                if (matches[selector]) matches.push(handler);
            }
            if (matches.length)
                ret.push({
                    el: current,
                    handlers: matches
                });
        }
    }
    if (delegateCount < handlers.length) {
        ret.push({
            el: this,
            handlers: handlers.slice(delegateCount)
        });
    }
    return ret;
}
exports = {
    add: function(el, type, selector, fn) {
        var handler = {
            selector: selector,
            handler: fn
        };
        var handlers;
        if (!el.events) el.events = {};
        if (!(handlers = el.events[type])) {
            handlers = el.events[type] = [];
            handlers.delegateCount = 0;
            el.addEventListener(
                type,
                function() {
                    trigger.apply(el, arguments);
                },
                false
            );
        }
        selector
            ? handlers.splice(handlers.delegateCount++, 0, handler)
            : handlers.push(handler);
    },
    remove: function(el, type, selector, fn) {
        var events = el.events;
        if (!events || !events[type]) return;
        var handlers = events[type];
        var i = handlers.length;
        var handler;
        while (i--) {
            handler = handlers[i];
            if (
                (!selector || handler.selector == selector) &&
                handler.handler == fn
            ) {
                handlers.splice(i, 1);
                if (handler.selector) {
                    handlers.delegateCount--;
                }
            }
        }
    },
    Event: Class({
        className: 'Event',
        initialize: function Event(e) {
            this.origEvent = e;
        },
        isDefaultPrevented: retFalse,
        isPropagationStopped: retFalse,
        isImmediatePropagationStopped: retFalse,
        preventDefault: function() {
            var e = this.origEvent;
            this.isDefaultPrevented = retTrue;
            if (e && e.preventDefault) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.origEvent;
            this.isPropagationStopped = retTrue;
            if (e && e.stopPropagation) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.origEvent;
            this.isImmediatePropagationStopped = retTrue;
            if (e && e.stopImmediatePropagation) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    })
};

module.exports = exports;


/***/ }),

/***/ 6620:
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = __webpack_require__(1909);
var toInt = __webpack_require__(6631);
var keys = __webpack_require__(3145);
exports = function(ua) {
    ua = ua || (isBrowser ? navigator.userAgent : '');
    ua = ua.toLowerCase();
    var ieVer = getVer(ua, 'msie ');
    if (ieVer)
        return {
            version: ieVer,
            name: 'ie'
        };
    if (regIe11.test(ua))
        return {
            version: 11,
            name: 'ie'
        };
    for (var i = 0, len = browsers.length; i < len; i++) {
        var name = browsers[i];
        var match = ua.match(regBrowsers[name]);
        if (match == null) continue;
        var version = toInt(match[1].split('.')[0]);
        if (name === 'opera') version = getVer(ua, 'version/') || version;
        return {
            name: name,
            version: version
        };
    }
    return {
        name: 'unknown',
        version: -1
    };
};
var regBrowsers = {
    edge: /edge\/([0-9._]+)/,
    firefox: /firefox\/([0-9.]+)(?:\s|$)/,
    opera: /opera\/([0-9.]+)(?:\s|$)/,
    android: /android\s([0-9.]+)/,
    ios: /version\/([0-9._]+).*mobile.*safari.*/,
    safari: /version\/([0-9._]+).*safari/,
    chrome: /(?!chrom.*opr)chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/
};
var regIe11 = /trident\/7\./;
var browsers = keys(regBrowsers);
function getVer(ua, mark) {
    var idx = ua.indexOf(mark);
    if (idx > -1)
        return toInt(ua.substring(idx + mark.length, ua.indexOf('.', idx)));
}

module.exports = exports;


/***/ }),

/***/ 5004:
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = __webpack_require__(1909);
var isNode = __webpack_require__(621);
exports = function(ua) {
    if (!ua && isBrowser) {
        ua = navigator.userAgent;
    }
    function detect(keyword) {
        return ua.indexOf(keyword) > -1;
    }
    if (ua) {
        ua = ua.toLowerCase();
        if (detect('windows phone')) return 'windows phone';
        if (detect('win')) return 'windows';
        if (detect('android')) return 'android';
        if (detect('ipad') || detect('iphone') || detect('ipod')) return 'ios';
        if (detect('mac')) return 'os x';
        if (detect('linux')) return 'linux';
    } else if (isNode) {
        var _process = process,
            platform = _process.platform,
            env = _process.env;
        if (
            platform === 'win32' ||
            env.OSTYPE === 'cygwin' ||
            env.OSTYPE === 'msys'
        ) {
            return 'windows';
        }
        if (platform === 'darwin') {
            return 'os x';
        }
        if (platform === 'linux') {
            return 'linux';
        }
    }
    return 'unknown';
};

module.exports = exports;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

var restArgs = __webpack_require__(2510);
var flatten = __webpack_require__(2971);
var filter = __webpack_require__(2571);
var contain = __webpack_require__(3249);
exports = restArgs(function(arr, args) {
    args = flatten(args);
    return filter(arr, function(val) {
        return !contain(args, val);
    });
});

module.exports = exports;


/***/ }),

/***/ 9100:
/***/ (function(module, exports, __webpack_require__) {

var isArrLike = __webpack_require__(5793);
var keys = __webpack_require__(3145);
var optimizeCb = __webpack_require__(6459);
exports = function(obj, iterator, ctx) {
    iterator = optimizeCb(iterator, ctx);
    var i, len;
    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) iterator(obj[i], i, obj);
    } else {
        var _keys = keys(obj);
        for (i = 0, len = _keys.length; i < len; i++) {
            iterator(obj[_keys[i]], _keys[i], obj);
        }
    }
    return obj;
};

module.exports = exports;


/***/ }),

/***/ 1580:
/***/ (function(module, exports) {

exports = function(str, suffix) {
    var idx = str.length - suffix.length;
    return idx >= 0 && str.indexOf(suffix, idx) === idx;
};

module.exports = exports;


/***/ }),

/***/ 5902:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
exports = function(str) {
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
};
var map = (exports.map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
});
var regSrc = '(?:' + keys(map).join('|') + ')';
var regTest = new RegExp(regSrc);
var regReplace = new RegExp(regSrc, 'g');
var replaceFn = function(match) {
    return map[match];
};

module.exports = exports;


/***/ }),

/***/ 4950:
/***/ (function(module, exports, __webpack_require__) {

var toStr = __webpack_require__(2561);
exports = function(str) {
    return toStr(str).replace(regEscapeChars, function(char) {
        switch (char) {
            case '"':
            case "'":
            case '\\':
                return '\\' + char;
            case '\n':
                return '\\n';
            case '\r':
                return '\\r';
            // Line separator
            case '\u2028':
                return '\\u2028';
            // Paragraph separator
            case '\u2029':
                return '\\u2029';
        }
    });
};
var regEscapeChars = /["'\\\n\r\u2028\u2029]/g;

module.exports = exports;


/***/ }),

/***/ 5207:
/***/ (function(module, exports) {

exports = function(str) {
    return str.replace(/\W/g, '\\$&');
};

module.exports = exports;


/***/ }),

/***/ 3048:
/***/ (function(module, exports) {

exports = function(css) {
    var style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.head.appendChild(style);
    return style;
};

module.exports = exports;


/***/ }),

/***/ 8098:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var isArrLike = __webpack_require__(5793);
var keys = __webpack_require__(3145);
exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);
    var _keys = !isArrLike(obj) && keys(obj);
    var len = (_keys || obj).length;
    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        if (!predicate(obj[curKey], curKey, obj)) return false;
    }
    return true;
};

module.exports = exports;


/***/ }),

/***/ 8105:
/***/ (function(module, exports, __webpack_require__) {

var createAssigner = __webpack_require__(6307);
var allKeys = __webpack_require__(7514);
exports = createAssigner(allKeys);

module.exports = exports;


/***/ }),

/***/ 3089:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
var createAssigner = __webpack_require__(6307);
exports = createAssigner(keys);

module.exports = exports;


/***/ }),

/***/ 7901:
/***/ (function(module, exports, __webpack_require__) {

var unique = __webpack_require__(438);
var trim = __webpack_require__(9405);
var map = __webpack_require__(3915);
var toArr = __webpack_require__(769);
exports = function(str) {
    var urlList = toArr(str.match(regUrl));
    return unique(
        map(urlList, function(url) {
            return trim(url);
        })
    );
};
var regUrl = /((https?)|(ftp)):\/\/[\w.]+[^ \f\n\r\t\v"\\<>[\]\u2100-\uFFFF(),]*/gi;

module.exports = exports;


/***/ }),

/***/ 2571:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var each = __webpack_require__(9100);
exports = function(obj, predicate, ctx) {
    var ret = [];
    predicate = safeCb(predicate, ctx);
    each(obj, function(val, idx, list) {
        if (predicate(val, idx, list)) ret.push(val);
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 8438:
/***/ (function(module, exports, __webpack_require__) {

var findKey = __webpack_require__(6195);
var findIdx = __webpack_require__(6167);
var isArrLike = __webpack_require__(5793);
var isUndef = __webpack_require__(8971);
exports = function(obj, predicate, ctx) {
    var keyFinder = isArrLike(obj) ? findIdx : findKey;
    var key = keyFinder(obj, predicate, ctx);
    if (!isUndef(key) && key !== -1) return obj[key];
};

module.exports = exports;


/***/ }),

/***/ 6167:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
exports = function(arr, predicate, ctx, dir) {
    dir = dir || 1;
    predicate = safeCb(predicate, ctx);
    var len = arr.length;
    var i = dir > 0 ? 0 : len - 1;
    while (i >= 0 && i < len) {
        if (predicate(arr[i], i, arr)) return i;
        i += dir;
    }
    return -1;
};

module.exports = exports;


/***/ }),

/***/ 6195:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var keys = __webpack_require__(3145);
exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);
    var _keys = keys(obj);
    var key;
    for (var i = 0, len = _keys.length; i < len; i++) {
        key = _keys[i];
        if (predicate(obj[key], key, obj)) return key;
    }
};

module.exports = exports;


/***/ }),

/***/ 2971:
/***/ (function(module, exports, __webpack_require__) {

var isArr = __webpack_require__(6214);
exports = function(arr) {
    return flat(arr, []);
};
function flat(arr, res) {
    var len = arr.length,
        i = -1,
        cur;
    while (len--) {
        cur = arr[++i];
        isArr(cur) ? flat(cur, res) : res.push(cur);
    }
    return res;
}

module.exports = exports;


/***/ }),

/***/ 3722:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
exports = function(obj) {
    if (Object.freeze) return Object.freeze(obj);
    keys(obj).forEach(function(prop) {
        if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) return;
        Object.defineProperty(obj, prop, {
            writable: false,
            configurable: false
        });
    });
    return obj;
};

module.exports = exports;


/***/ }),

/***/ 5427:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
var isFn = __webpack_require__(3957);
var getPrototypeOf = Object.getPrototypeOf;
var ObjectCtr = {}.constructor;
exports = function(obj) {
    if (!isObj(obj)) return;
    if (getPrototypeOf && !false) return getPrototypeOf(obj);
    var proto = obj.__proto__;
    if (proto || proto === null) return proto;
    if (isFn(obj.constructor)) return obj.constructor.prototype;
    if (obj instanceof ObjectCtr) return ObjectCtr.prototype;
};

module.exports = exports;


/***/ }),

/***/ 5241:
/***/ (function(module, exports, __webpack_require__) {

var isEl = __webpack_require__(2708);
var isStr = __webpack_require__(1738);
var startWith = __webpack_require__(1009);
var $class = __webpack_require__(7661);
var $css = __webpack_require__(6866);
var each = __webpack_require__(9100);
var isFn = __webpack_require__(3957);
exports = function(tag, attrs) {
    for (
        var _len = arguments.length,
            children = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
        _key < _len;
        _key++
    ) {
        children[_key - 2] = arguments[_key];
    }
    if (isEl(attrs) || isStr(attrs)) {
        children.unshift(attrs);
        attrs = null;
    }
    if (!attrs) attrs = {};
    var _parseTag = parseTag(tag),
        tagName = _parseTag.tagName,
        id = _parseTag.id,
        classes = _parseTag.classes;
    var el = document.createElement(tagName);
    if (id) el.setAttribute('id', id);
    $class.add(el, classes);
    each(children, function(child) {
        if (isStr(child)) {
            el.appendChild(document.createTextNode(child));
        } else if (isEl(child)) {
            el.appendChild(child);
        }
    });
    each(attrs, function(val, key) {
        if (isStr(val)) {
            el.setAttribute(key, val);
        } else if (isFn(val) && startWith(key, 'on')) {
            el.addEventListener(key.slice(2), val, false);
        } else if (key === 'style') {
            $css(el, val);
        }
    });
    return el;
};
function parseTag(tag) {
    var tagName = 'div';
    var id = '';
    var classes = [];
    var words = [];
    var word = '';
    for (var i = 0, len = tag.length; i < len; i++) {
        var c = tag[i];
        if (c === '#' || c === '.') {
            words.push(word);
            word = c;
        } else {
            word += c;
        }
    }
    words.push(word);
    for (var _i = 0, _len2 = words.length; _i < _len2; _i++) {
        word = words[_i];
        if (!word) continue;
        if (startWith(word, '#')) {
            id = word.slice(1);
        } else if (startWith(word, '.')) {
            classes.push(word.slice(1));
        } else {
            tagName = word;
        }
    }
    return {
        tagName: tagName,
        id: id,
        classes: classes
    };
}

module.exports = exports;


/***/ }),

/***/ 365:
/***/ (function(module, exports) {

var hasOwnProp = Object.prototype.hasOwnProperty;
exports = function(obj, key) {
    return hasOwnProp.call(obj, key);
};

module.exports = exports;


/***/ }),

/***/ 9848:
/***/ (function(module, exports, __webpack_require__) {

var isOdd = __webpack_require__(6024);
exports = {
    encode: function(bytes) {
        var hex = [];
        for (var i = 0, len = bytes.length; i < len; i++) {
            var byte = bytes[i];
            hex.push((byte >>> 4).toString(16));
            hex.push((byte & 0xf).toString(16));
        }
        return hex.join('');
    },
    decode: function(str) {
        var bytes = [];
        var len = str.length;
        if (isOdd(len)) len--;
        for (var i = 0; i < len; i += 2) {
            bytes.push(parseInt(str.substr(i, 2), 16));
        }
        return bytes;
    }
};

module.exports = exports;


/***/ }),

/***/ 4249:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var defaults = __webpack_require__(5651);

exports = function(str) {
    var lang =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 'js';
    var style =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    defaults(style, defStyle);
    str = str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    lang = language[lang];
    var subLangSi = 0;
    var subLangs = [];
    each(lang, function(val) {
        if (!val.language) return;
        str = str.replace(val.re, function($1, $2) {
            if (!$2) {
                return $1;
            }
            subLangs[subLangSi++] = exports($2, val.language, style);
            return $1.replace($2, '___subtmpl' + (subLangSi - 1) + '___');
        });
    });
    each(lang, function(val, key) {
        if (language[val.language]) return;
        str = str.replace(val.re, '___' + key + '___$1___end' + key + '___');
    });
    var levels = [];
    str = str.replace(/___(?!subtmpl)\w+?___/g, function($0) {
        var end = $0.substr(3, 3) === 'end',
            tag = (!end ? $0.substr(3) : $0.substr(6)).replace(/_/g, ''),
            lastTag = levels.length > 0 ? levels[levels.length - 1] : null;
        if (
            !end &&
            (lastTag == null ||
                tag == lastTag ||
                (lastTag != null &&
                    lang[lastTag] &&
                    lang[lastTag].embed != undefined &&
                    lang[lastTag].embed.indexOf(tag) > -1))
        ) {
            levels.push(tag);
            return $0;
        } else if (end && tag == lastTag) {
            levels.pop();
            return $0;
        }
        return '';
    });
    each(lang, function(val, key) {
        var s = style[val.style]
            ? ' style="'.concat(style[val.style], '"')
            : '';
        str = str
            .replace(new RegExp('___end' + key + '___', 'g'), '</span>')
            .replace(
                new RegExp('___' + key + '___', 'g'),
                '<span class="'.concat(val.style, '"').concat(s, '>')
            );
    });
    each(lang, function(val) {
        if (!val.language) return;
        str = str.replace(/___subtmpl\d+___/g, function($tmpl) {
            var i = parseInt($tmpl.replace(/___subtmpl(\d+)___/, '$1'), 10);
            return subLangs[i];
        });
    });
    return str;
};
var defStyle = {
    comment: 'color:#63a35c;',
    string: 'color:#183691;',
    number: 'color:#0086b3;',
    keyword: 'color:#a71d5d;',
    operator: 'color:#994500;'
};
var language = {};
language.js = {
    comment: {
        re: /(\/\/.*|\/\*([\s\S]*?)\*\/)/g,
        style: 'comment'
    },
    string: {
        re: /(('.*?')|(".*?"))/g,
        style: 'string'
    },
    numbers: {
        re: /(-?(\d+|\d+\.\d+|\.\d+))/g,
        style: 'number'
    },
    keywords: {
        re: /(?:\b)(function|for|foreach|while|if|else|elseif|switch|break|as|return|this|class|self|default|var|const|let|false|true|null|undefined)(?:\b)/gi,
        style: 'keyword'
    },
    operator: {
        re: /(\+|-|\/|\*|%|=|&lt;|&gt;|\||\?|\.)/g,
        style: 'operator'
    }
};
language.html = {
    comment: {
        re: /(&lt;!--([\s\S]*?)--&gt;)/g,
        style: 'comment'
    },
    tag: {
        re: /(&lt;\/?\w(.|\n)*?\/?&gt;)/g,
        style: 'keyword',
        embed: ['string']
    },
    string: language.js.string,
    css: {
        re: /(?:&lt;style.*?&gt;)([\s\S]*)?(?:&lt;\/style&gt;)/gi,
        language: 'css'
    },
    script: {
        re: /(?:&lt;script.*?&gt;)([\s\S]*?)(?:&lt;\/script&gt;)/gi,
        language: 'js'
    }
};
language.css = {
    comment: language.js.comment,
    string: language.js.string,
    numbers: {
        re: /((-?(\d+|\d+\.\d+|\.\d+)(%|px|em|pt|in)?)|#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g,
        style: 'number'
    },
    keywords: {
        re: /(@\w+|:?:\w+|[a-z-]+:)/g,
        style: 'keyword'
    }
};

module.exports = exports;


/***/ }),

/***/ 4307:
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(2263);
var keyCode = __webpack_require__(2767);
var each = __webpack_require__(9100);
var unique = __webpack_require__(438);
var trim = __webpack_require__(9405);
var map = __webpack_require__(3915);
var isFn = __webpack_require__(3957);
exports = {
    on: function(keys, options, listener) {
        if (isFn(options)) {
            listener = options;
            options = {};
        }
        keys = keys.split(regComma);
        each(keys, function(key) {
            key = normalizeKey(key);
            if (options.element) {
                var _options = options,
                    element = _options.element;
                var hotkeyListeners = element._hotkeyListeners || {};
                element._hotkeyListeners = hotkeyListeners;
                hotkeyListeners[key] = hotkeyListeners[key] || [];
                var hotkeyListener = function(e) {
                    if (key === getKeysFromEvent(e)) {
                        listener(e);
                    }
                };
                hotkeyListeners[key].push({
                    listener: hotkeyListener,
                    origin: listener
                });
                element.addEventListener('keydown', hotkeyListener);
            } else {
                emitter.on(key, listener);
            }
        });
    },
    off: function(keys, options, listener) {
        if (isFn(options)) {
            listener = options;
            options = {};
        }
        keys = keys.split(regComma);
        each(keys, function(key) {
            key = normalizeKey(key);
            if (options.element) {
                var _options2 = options,
                    element = _options2.element;
                var hotkeyListeners = element._hotkeyListeners;
                if (hotkeyListeners && hotkeyListeners[key]) {
                    var listeners = hotkeyListeners[key];
                    var hotkeyListener;
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        if (listeners[i].origin === listener) {
                            hotkeyListener = listeners[i].listener;
                            listeners.splice(i, 1);
                        }
                    }
                    if (hotkeyListener) {
                        element.removeEventListener('keydown', hotkeyListener);
                    }
                }
            } else {
                emitter.off(key, listener);
            }
        });
    }
};
var emitter = new Emitter();
document.addEventListener('keydown', function(e) {
    emitter.emit(getKeysFromEvent(e), e);
});
function getKeysFromEvent(e) {
    var keys = [];
    if (e.ctrlKey) keys.push('ctrl');
    if (e.shiftKey) keys.push('shift');
    keys.push(keyCode(e.keyCode));
    return normalizeKey(keys.join('+'));
}
function normalizeKey(keyStr) {
    var keys = keyStr.split(regPlus);
    keys = map(keys, function(key) {
        return trim(key);
    });
    keys = unique(keys);
    keys.sort();
    return keys.join('+');
}
var regComma = /,/g;
var regPlus = /\+/g;

module.exports = exports;


/***/ }),

/***/ 928:
/***/ (function(module, exports) {

exports = function(hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var ret = [];
    var t2;
    var t3;
    var val;
    if (hsl[3]) ret[3] = hsl[3];
    if (s === 0) {
        val = round(l * 255);
        ret[0] = ret[1] = ret[2] = val;
        return ret;
    }
    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }
    var t1 = 2 * l - t2;
    for (var i = 0; i < 3; i++) {
        t3 = h + (1 / 3) * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;
        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }
        ret[i] = round(val * 255);
    }
    return ret;
};
var round = Math.round;

module.exports = exports;


/***/ }),

/***/ 9548:
/***/ (function(module, exports, __webpack_require__) {

var parseHtml = __webpack_require__(383);
var Stack = __webpack_require__(7005);
var isArr = __webpack_require__(6214);
var each = __webpack_require__(9100);
var isStr = __webpack_require__(1738);
var mapObj = __webpack_require__(5154);
function parse(html) {
    var ret = [];
    var stack = new Stack();
    parseHtml(html, {
        start: function(tag, attrs) {
            attrs = mapObj(attrs, function(val) {
                return unescapeQuote(val);
            });
            stack.push({
                tag: tag,
                attrs: attrs
            });
        },
        end: function() {
            var node = stack.pop();
            if (!stack.size) {
                ret.push(node);
                return;
            }
            var lastNode = stack.peek();
            if (!isArr(lastNode.content)) {
                lastNode.content = [];
            }
            lastNode.content.push(node);
        },
        comment: function(text) {
            var comment = '<!--'.concat(text, '-->');
            var lastNode = stack.peek();
            if (!lastNode) {
                ret.push(comment);
                return;
            }
            if (!lastNode.content) lastNode.content = [];
            lastNode.content.push(comment);
        },
        text: function(text) {
            var lastNode = stack.peek();
            if (!lastNode) {
                ret.push(text);
                return;
            }
            if (!lastNode.content) lastNode.content = [];
            lastNode.content.push(text);
        }
    });
    return ret;
}
function stringify(tree) {
    var ret = '';
    if (isArr(tree)) {
        each(tree, function(node) {
            return (ret += stringify(node));
        });
    } else if (isStr(tree)) {
        ret = tree;
    } else {
        ret += '<'.concat(tree.tag);
        each(tree.attrs, function(val, key) {
            return (ret += ' '.concat(key, '="').concat(escapeQuote(val), '"'));
        });
        ret += '>';
        if (tree.content) ret += stringify(tree.content);
        ret += '</'.concat(tree.tag, '>');
    }
    return ret;
}
var unescapeQuote = function(str) {
    return str.replace(/&quot;/g, '"');
};
var escapeQuote = function(str) {
    return str.replace(/"/g, '&quot;');
};
exports = {
    parse: parse,
    stringify: stringify
};

module.exports = exports;


/***/ }),

/***/ 2455:
/***/ (function(module, exports) {

exports = function(val) {
    return val;
};

module.exports = exports;


/***/ }),

/***/ 7375:
/***/ (function(module, exports) {

exports = function(arr, val, fromIdx) {
    return Array.prototype.indexOf.call(arr, val, fromIdx);
};

module.exports = exports;


/***/ }),

/***/ 8009:
/***/ (function(module, exports, __webpack_require__) {

var create = __webpack_require__(6513);
exports = function(Class, SuperClass) {
    Class.prototype = create(SuperClass.prototype);
};

module.exports = exports;


/***/ }),

/***/ 5282:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
exports = function(obj) {
    var ret = {};
    each(obj, function(val, key) {
        ret[val] = key;
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 5132:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Arguments]';
};

module.exports = exports;


/***/ }),

/***/ 6214:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
if (Array.isArray && !false) {
    exports = Array.isArray;
} else {
    exports = function(val) {
        return objToStr(val) === '[object Array]';
    };
}

module.exports = exports;


/***/ }),

/***/ 4992:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object ArrayBuffer]';
};

module.exports = exports;


/***/ }),

/***/ 5793:
/***/ (function(module, exports, __webpack_require__) {

var isNum = __webpack_require__(6097);
var isFn = __webpack_require__(3957);
var MAX_ARR_IDX = Math.pow(2, 53) - 1;
exports = function(val) {
    if (!val) return false;
    var len = val.length;
    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
};

module.exports = exports;


/***/ }),

/***/ 6493:
/***/ (function(module, exports) {

exports = function(val) {
    return val === true || val === false;
};

module.exports = exports;


/***/ }),

/***/ 1909:
/***/ (function(module, exports) {

exports =
    typeof window === 'object' &&
    typeof document === 'object' &&
    document.nodeType === 9;

module.exports = exports;


/***/ }),

/***/ 3159:
/***/ (function(module, exports, __webpack_require__) {

var isFn = __webpack_require__(3957);
exports = function(val) {
    if (val == null) return false;
    if (val._isBuffer) return true;
    return (
        val.constructor &&
        isFn(val.constructor.isBuffer) &&
        val.constructor.isBuffer(val)
    );
};

module.exports = exports;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(3737);
var m = new MediaQuery('(prefers-color-scheme: dark)');
exports = function() {
    return m.isMatch();
};

module.exports = exports;


/***/ }),

/***/ 2517:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Date]';
};

module.exports = exports;


/***/ }),

/***/ 2708:
/***/ (function(module, exports) {

exports = function(val) {
    return !!(val && val.nodeType === 1);
};

module.exports = exports;


/***/ }),

/***/ 9464:
/***/ (function(module, exports, __webpack_require__) {

var isArrLike = __webpack_require__(5793);
var isArr = __webpack_require__(6214);
var isStr = __webpack_require__(1738);
var isArgs = __webpack_require__(5132);
var keys = __webpack_require__(3145);
exports = function(val) {
    if (val == null) return true;
    if (isArrLike(val) && (isArr(val) || isStr(val) || isArgs(val))) {
        return val.length === 0;
    }
    return keys(val).length === 0;
};

module.exports = exports;


/***/ }),

/***/ 5701:
/***/ (function(module, exports, __webpack_require__) {

var isFn = __webpack_require__(3957);
var has = __webpack_require__(365);
var keys = __webpack_require__(3145);
exports = function(a, b) {
    return eq(a, b);
};
function deepEq(a, b, aStack, bStack) {
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b;
        case '[object Number]':
            if (+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            return +a === +b;
    }
    var areArrays = className === '[object Array]';
    if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object') return false;
        var aCtor = a.constructor;
        var bCtor = b.constructor;
        if (
            aCtor !== bCtor &&
            !(
                isFn(aCtor) &&
                aCtor instanceof aCtor &&
                isFn(bCtor) &&
                bCtor instanceof bCtor
            ) &&
            'constructor' in a &&
            'constructor' in b
        )
            return false;
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) if (aStack[length] === a) return bStack[length] === b;
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
        length = a.length;
        if (length !== b.length) return false;
        while (length--)
            if (!eq(a[length], b[length], aStack, bStack)) return false;
    } else {
        var _keys = keys(a);
        var key;
        length = _keys.length;
        if (keys(b).length !== length) return false;
        while (length--) {
            key = _keys[length];
            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    aStack.pop();
    bStack.pop();
    return true;
}
function eq(a, b, aStack, bStack) {
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null) return a === b;
    if (a !== a) return b !== b;
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object')
        return false;
    return deepEq(a, b, aStack, bStack);
}

module.exports = exports;


/***/ }),

/***/ 2650:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Error]';
};

module.exports = exports;


/***/ }),

/***/ 3957:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    var objStr = objToStr(val);
    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]' ||
        objStr === '[object AsyncFunction]'
    );
};

module.exports = exports;


/***/ }),

/***/ 8609:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5169);
var getComputedStyle = root.getComputedStyle;
var document = root.document;
exports = function(el) {
    var _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
        _ref$display = _ref.display,
        display = _ref$display === void 0 ? true : _ref$display,
        _ref$visibility = _ref.visibility,
        visibility = _ref$visibility === void 0 ? false : _ref$visibility,
        _ref$opacity = _ref.opacity,
        opacity = _ref$opacity === void 0 ? false : _ref$opacity,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? false : _ref$size,
        _ref$viewport = _ref.viewport,
        viewport = _ref$viewport === void 0 ? false : _ref$viewport,
        _ref$overflow = _ref.overflow,
        overflow = _ref$overflow === void 0 ? false : _ref$overflow;
    var computedStyle = getComputedStyle(el);
    if (display) {
        var tagName = el.tagName;
        if (
            tagName === 'BODY' ||
            tagName === 'HTML' ||
            computedStyle.position === 'fixed'
        ) {
            if (computedStyle.display === 'none') {
                return true;
            } else {
                var cur = el;
                while ((cur = cur.parentElement)) {
                    var _computedStyle = getComputedStyle(cur);
                    if (_computedStyle.display === 'none') {
                        return true;
                    }
                }
            }
        } else if (el.offsetParent === null) {
            return true;
        }
    }
    if (visibility && computedStyle.visibility === 'hidden') {
        return true;
    }
    if (opacity) {
        if (computedStyle.opacity === '0') {
            return true;
        } else {
            var _cur = el;
            while ((_cur = _cur.parentElement)) {
                var _computedStyle2 = getComputedStyle(_cur);
                if (_computedStyle2.opacity === '0') {
                    return true;
                }
            }
        }
    }
    var clientRect = el.getBoundingClientRect();
    if (size && (clientRect.width === 0 || clientRect.height === 0)) {
        return true;
    }
    if (viewport) {
        var containerRect = {
            top: 0,
            left: 0,
            right: document.documentElement.clientWidth,
            bottom: document.documentElement.clientHeight
        };
        return isOutside(clientRect, containerRect);
    }
    if (overflow) {
        var _cur2 = el;
        while ((_cur2 = _cur2.parentElement)) {
            var _computedStyle3 = getComputedStyle(_cur2);
            var _overflow = _computedStyle3.overflow;
            if (_overflow === 'scroll' || _overflow === 'hidden') {
                var curRect = _cur2.getBoundingClientRect();
                if (isOutside(clientRect, curRect)) return true;
            }
        }
    }
    return false;
};
function isOutside(clientRect, containerRect) {
    return (
        clientRect.right < containerRect.left ||
        clientRect.left > containerRect.right ||
        clientRect.bottom < containerRect.top ||
        clientRect.top > containerRect.bottom
    );
}

module.exports = exports;


/***/ }),

/***/ 2884:
/***/ (function(module, exports, __webpack_require__) {

var isNum = __webpack_require__(6097);
exports = function(val) {
    return isNum(val) && val % 1 === 0;
};

module.exports = exports;


/***/ }),

/***/ 4983:
/***/ (function(module, exports) {

exports = function(val) {
    try {
        JSON.parse(val);
        return true;
    } catch (e) {
        return false;
    }
};

module.exports = exports;


/***/ }),

/***/ 1751:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Map]';
};

module.exports = exports;


/***/ }),

/***/ 7468:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
exports = function(obj, src) {
    var _keys = keys(src);
    var len = _keys.length;
    if (obj == null) return !len;
    obj = Object(obj);
    for (var i = 0; i < len; i++) {
        var key = _keys[i];
        if (src[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
};

module.exports = exports;


/***/ }),

/***/ 4460:
/***/ (function(module, exports, __webpack_require__) {

var isFn = __webpack_require__(3957);

exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

module.exports = exports;


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = __webpack_require__(1909);
var memoize = __webpack_require__(5869);
var regMobileAll = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
var regMobileFour = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
exports = memoize(function(ua) {
    ua = ua || (isBrowser ? navigator.userAgent : '');
    return regMobileAll.test(ua) || regMobileFour.test(ua.substr(0, 4));
});

module.exports = exports;


/***/ }),

/***/ 1932:
/***/ (function(module, exports, __webpack_require__) {

var isNum = __webpack_require__(6097);
exports = function(val) {
    return isNum(val) && val !== +val;
};

module.exports = exports;


/***/ }),

/***/ 9122:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
var isFn = __webpack_require__(3957);
var toSrc = __webpack_require__(1168);
exports = function(val) {
    if (!isObj(val)) return false;
    if (isFn(val)) return regIsNative.test(toSrc(val));

    return regIsHostCtor.test(toSrc(val));
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var regIsNative = new RegExp(
    '^' +
        toSrc(hasOwnProperty)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
            ) +
        '$'
);
var regIsHostCtor = /^\[object .+?Constructor\]$/;

module.exports = exports;


/***/ }),

/***/ 3422:
/***/ (function(module, exports) {

exports = function(val) {
    return val == null;
};

module.exports = exports;


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports =
    typeof process !== 'undefined' && objToStr(process) === '[object process]';

module.exports = exports;


/***/ }),

/***/ 4236:
/***/ (function(module, exports) {

exports = function(val) {
    return val === null;
};

module.exports = exports;


/***/ }),

/***/ 6097:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Number]';
};

module.exports = exports;


/***/ }),

/***/ 9760:
/***/ (function(module, exports) {

exports = function(val) {
    var type = typeof val;
    return !!val && (type === 'function' || type === 'object');
};

module.exports = exports;


/***/ }),

/***/ 6024:
/***/ (function(module, exports, __webpack_require__) {

var isInt = __webpack_require__(2884);
exports = function(num) {
    if (!isInt(num)) return false;
    return num % 2 !== 0;
};

module.exports = exports;


/***/ }),

/***/ 7696:
/***/ (function(module, exports) {

exports = function(val) {
    var type = typeof val;
    return val == null || (type !== 'function' && type !== 'object');
};

module.exports = exports;


/***/ }),

/***/ 8796:
/***/ (function(module, exports, __webpack_require__) {

var isObj = __webpack_require__(9760);
var isFn = __webpack_require__(3957);
exports = function(val) {
    return isObj(val) && isFn(val.then) && isFn(val.catch);
};

module.exports = exports;


/***/ }),

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object RegExp]';
};

module.exports = exports;


/***/ }),

/***/ 5945:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object Set]';
};

module.exports = exports;


/***/ }),

/***/ 9756:
/***/ (function(module, exports) {

exports = function(arr) {
    var cmp =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : exports.defComparator;
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        if (cmp(arr[i], arr[i + 1]) > 0) return false;
    }
    return true;
};
exports.defComparator = function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

module.exports = exports;


/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
exports = function(val) {
    return objToStr(val) === '[object String]';
};

module.exports = exports;


/***/ }),

/***/ 9350:
/***/ (function(module, exports) {

exports = function(val) {
    return typeof val === 'symbol';
};

module.exports = exports;


/***/ }),

/***/ 8971:
/***/ (function(module, exports) {

exports = function(val) {
    return val === void 0;
};

module.exports = exports;


/***/ }),

/***/ 7604:
/***/ (function(module, exports, __webpack_require__) {

var splitCase = __webpack_require__(6833);
exports = function(str) {
    return splitCase(str).join('-');
};

module.exports = exports;


/***/ }),

/***/ 2767:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var invert = __webpack_require__(5282);
exports = function(val) {
    if (isStr(val)) return codeMap[val];
    return nameMap[val];
};
var codeMap = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    'pause/break': 19,
    'caps lock': 20,
    esc: 27,
    space: 32,
    'page up': 33,
    'page down': 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    windows: 91,
    'right windows': 92,
    'windows menu': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
};

// Lower case chars
for (var i = 97; i < 123; i++) codeMap[String.fromCharCode(i)] = i - 32;
// Numbers
for (var _i = 48; _i < 58; _i++) codeMap[_i - 48] = _i;
// Function keys
for (var _i2 = 1; _i2 < 13; _i2++) codeMap['f' + _i2] = _i2 + 111;
// Numpad keys
for (var _i3 = 0; _i3 < 10; _i3++) codeMap['numpad ' + _i3] = _i3 + 96;
var nameMap = invert(codeMap);

module.exports = exports;


/***/ }),

/***/ 3145:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(365);
if (Object.keys && !false) {
    exports = Object.keys;
} else {
    exports = function(obj) {
        var ret = [];
        for (var key in obj) {
            if (has(obj, key)) ret.push(key);
        }
        return ret;
    };
}

module.exports = exports;


/***/ }),

/***/ 3497:
/***/ (function(module, exports) {

exports = function(arr) {
    var len = arr ? arr.length : 0;
    if (len) return arr[len - 1];
};

module.exports = exports;


/***/ }),

/***/ 8091:
/***/ (function(module, exports, __webpack_require__) {

var extractUrls = __webpack_require__(7901);
var each = __webpack_require__(9100);
var escapeRegExp = __webpack_require__(5207);
exports = function(str, hyperlink) {
    hyperlink = hyperlink || defHyperlink;
    var urlList = extractUrls(str);
    each(urlList, function(url) {
        str = str.replace(new RegExp(escapeRegExp(url), 'g'), hyperlink);
    });
    return str;
};
function defHyperlink(url) {
    return '<a href="' + url + '">' + url + '</a>';
}

module.exports = exports;


/***/ }),

/***/ 9410:
/***/ (function(module, exports, __webpack_require__) {

var noop = __webpack_require__(9993);
exports = function(src, cb) {
    cb = cb || noop;
    var img = new Image();
    img.onload = function() {
        cb(null, img);
    };
    img.onerror = function(err) {
        cb(err);
    };
    img.src = src;
};

module.exports = exports;


/***/ }),

/***/ 4866:
/***/ (function(module, exports) {

exports = function(src, cb) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        var isNotLoaded =
            script.readyState &&
            script.readyState != 'complete' &&
            script.readyState != 'loaded';
        cb && cb(!isNotLoaded);
    };
    script.onerror = function() {
        cb(false);
    };
    document.body.appendChild(script);
};

module.exports = exports;


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var toStr = __webpack_require__(2561);
exports = function(str) {
    return toStr(str).toLocaleLowerCase();
};

module.exports = exports;


/***/ }),

/***/ 6392:
/***/ (function(module, exports, __webpack_require__) {

var repeat = __webpack_require__(1710);
var toStr = __webpack_require__(2561);
exports = function(str, len, chars) {
    str = toStr(str);
    var strLen = str.length;
    chars = chars || ' ';
    if (strLen < len) str = (repeat(chars, len - strLen) + str).slice(-len);
    return str;
};

module.exports = exports;


/***/ }),

/***/ 5333:
/***/ (function(module, exports) {

var regSpace = /^\s+/;
exports = function(str, chars) {
    if (chars == null) {
        if (str.trimLeft) {
            return str.trimLeft();
        }
        return str.replace(regSpace, '');
    }
    var start = 0;
    var len = str.length;
    var charLen = chars.length;
    var found = true;
    var i;
    var c;
    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);
        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }
    return start >= len ? '' : str.substr(start, len);
};

module.exports = exports;


/***/ }),

/***/ 3915:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var keys = __webpack_require__(3145);
var isArrLike = __webpack_require__(5793);
exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);
    var _keys = !isArrLike(obj) && keys(obj);
    var len = (_keys || obj).length;
    var results = Array(len);
    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iterator(obj[curKey], curKey, obj);
    }
    return results;
};

module.exports = exports;


/***/ }),

/***/ 5154:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var keys = __webpack_require__(3145);
exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);
    var _keys = keys(obj);
    var len = _keys.length;
    var ret = {};
    for (var i = 0; i < len; i++) {
        var curKey = _keys[i];
        ret[curKey] = iterator(obj[curKey], curKey, obj);
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var extendOwn = __webpack_require__(3089);
var isMatch = __webpack_require__(7468);
exports = function(attrs) {
    attrs = extendOwn({}, attrs);
    return function(obj) {
        return isMatch(obj, attrs);
    };
};

module.exports = exports;


/***/ }),

/***/ 3539:
/***/ (function(module, exports) {

exports = function() {
    var arr = arguments;
    var ret = arr[0];
    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > ret) ret = arr[i];
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 1947:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(3145);
exports = {
    getItem: function(key) {
        return (API_KEYS[key] ? cloak[key] : this[key]) || null;
    },
    setItem: function(key, val) {
        API_KEYS[key] ? (cloak[key] = val) : (this[key] = val);
    },
    removeItem: function(key) {
        API_KEYS[key] ? delete cloak[key] : delete this[key];
    },
    key: function(i) {
        var keys = enumerableKeys();
        return i >= 0 && i < keys.length ? keys[i] : null;
    },
    clear: function() {
        var keys = uncloakedKeys();

        for (var i = 0, key; (key = keys[i]); i++) delete this[key];
        keys = cloakedKeys();

        for (var _i = 0, _key; (_key = keys[_i]); _i++) delete cloak[_key];
    }
};
Object.defineProperty(exports, "length", ({
    enumerable: false,
    configurable: true,
    get: function() {
        return enumerableKeys().length;
    }
}));
var cloak = {};
var API_KEYS = {
    getItem: 1,
    setItem: 1,
    removeItem: 1,
    key: 1,
    clear: 1,
    length: 1
};
function enumerableKeys() {
    return uncloakedKeys().concat(cloakedKeys());
}
function uncloakedKeys() {
    return keys(exports).filter(function(key) {
        return !API_KEYS[key];
    });
}
function cloakedKeys() {
    return keys(cloak);
}

module.exports = exports;


/***/ }),

/***/ 5869:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(365);
exports = function(fn, hashFn) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hashFn ? hashFn.apply(this, arguments) : key);
        if (!has(cache, address)) cache[address] = fn.apply(this, arguments);
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};

module.exports = exports;


/***/ }),

/***/ 8178:
/***/ (function(module, exports, __webpack_require__) {

var restArgs = __webpack_require__(2510);
exports = restArgs(function(first, arrays) {
    var end = first.length;
    for (var i = 0, len = arrays.length; i < len; i++) {
        var arr = arrays[i];
        for (var j = 0, _len = arr.length; j < _len; j++) {
            first[end++] = arr[j];
        }
    }
    first.length = end;
    return first;
});

module.exports = exports;


/***/ }),

/***/ 7308:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
var isStr = __webpack_require__(1738);
var isUndef = __webpack_require__(8971);
var contain = __webpack_require__(3249);
var isArr = __webpack_require__(6214);
var isObj = __webpack_require__(9760);
var toArr = __webpack_require__(769);
exports = function(name, content) {
    if (isUndef(name)) return getAllMeta();
    var isGetter = (isStr(name) && isUndef(content)) || isArr(name);
    if (isGetter) return getMeta(name);
    var metas = name;
    if (!isObj(metas)) {
        metas = {};
        metas[name] = content;
    }
    setMeta(metas);
};
exports.remove = function(nameList) {
    nameList = toArr(nameList);
    each(nameList, function(name) {
        var meta = selectMeta(name);
        if (meta) doc.head.removeChild(meta);
    });
};
var doc = document;
function getAllMeta() {
    var ret = {};
    metaEach(function(name, content) {
        ret[name] = content;
    });
    return ret;
}
function getMeta(name) {
    if (isStr(name)) {
        var meta = selectMeta(name);
        if (meta) return meta.getAttribute('content');
    } else {
        var ret = {};
        metaEach(function(key, val) {
            if (contain(name, key)) ret[key] = val;
        });
        return ret;
    }
}
function setMeta(metas) {
    each(metas, function(content, name) {
        var meta = selectMeta(name);
        if (meta) return meta.setAttribute('content', content);
        meta = doc.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        doc.head.appendChild(meta);
    });
}
function metaEach(fn) {
    var metaList = doc.querySelectorAll('meta');
    each(metaList, function(meta) {
        var name = meta.getAttribute('name');
        var content = meta.getAttribute('content');
        if (!name || !content) return;
        fn(name, content);
    });
}
function selectMeta(name) {
    return doc.querySelector('meta[name="' + name + '"]');
}

module.exports = exports;


/***/ }),

/***/ 8785:
/***/ (function(module, exports) {

exports = function() {
    var arr = arguments;
    var ret = arr[0];
    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i] < ret) ret = arr[i];
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 9117:
/***/ (function(module, exports, __webpack_require__) {

var toNum = __webpack_require__(6030);
var isStr = __webpack_require__(1738);
exports = function(str) {
    if (isStr(str)) {
        var match = str.match(regStrTime);
        if (!match) return 0;
        return toNum(match[1]) * factor[match[2] || 'ms'];
    } else {
        var num = str;
        var suffix = 'ms';
        for (var i = 0, len = suffixList.length; i < len; i++) {
            if (num >= factor[suffixList[i]]) {
                suffix = suffixList[i];
                break;
            }
        }
        return +(num / factor[suffix]).toFixed(2) + suffix;
    }
};
var factor = {
    ms: 1,
    s: 1000
};
factor.m = factor.s * 60;
factor.h = factor.m * 60;
factor.d = factor.h * 24;
factor.y = factor.d * 365.25;
var suffixList = ['y', 'd', 'h', 'm', 's'];
var regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;

module.exports = exports;


/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

var startWith = __webpack_require__(1009);
var root = __webpack_require__(5169);
var toStr = __webpack_require__(2561);
exports = function(arr) {
    return arr.sort(naturalOrderComparator);
};

function naturalOrderComparator(a, b) {
    a = toStr(a);
    b = toStr(b);
    if (startWith(a, '_') && !startWith(b, '_')) {
        return 1;
    }
    if (startWith(b, '_') && !startWith(a, '_')) {
        return -1;
    }
    var chunk = /^\d+|^\D+/;
    var chunka, chunkb, anum, bnum;

    while (true) {
        if (a) {
            if (!b) {
                return 1;
            }
        } else {
            if (b) {
                return -1;
            }
            return 0;
        }
        chunka = a.match(chunk)[0];
        chunkb = b.match(chunk)[0];
        anum = !root.isNaN(chunka);
        bnum = !root.isNaN(chunkb);
        if (anum && !bnum) {
            return -1;
        }
        if (bnum && !anum) {
            return 1;
        }
        if (anum && bnum) {
            var diff = chunka - chunkb;
            if (diff) {
                return diff;
            }
            if (chunka.length !== chunkb.length) {
                if (!+chunka && !+chunkb) {
                    return chunka.length - chunkb.length;
                }
                return chunkb.length - chunka.length;
            }
        } else if (chunka !== chunkb) {
            return chunka < chunkb ? -1 : 1;
        }
        a = a.substring(chunka.length);
        b = b.substring(chunkb.length);
    }
}

module.exports = exports;


/***/ }),

/***/ 9041:
/***/ (function(module, exports) {

if (typeof process === 'object' && process.nextTick && !false) {
    exports = process.nextTick;
} else if (typeof setImmediate === 'function') {
    exports = function(cb) {
        setImmediate(ensureCallable(cb));
    };
} else {
    exports = function(cb) {
        setTimeout(ensureCallable(cb), 0);
    };
}
function ensureCallable(fn) {
    if (typeof fn !== 'function')
        throw new TypeError(fn + ' is not a function');
    return fn;
}

module.exports = exports;


/***/ }),

/***/ 9993:
/***/ (function(module, exports) {

exports = function() {};

module.exports = exports;


/***/ }),

/***/ 3981:
/***/ (function(module, exports) {

if (Date.now && !false) {
    exports = Date.now;
} else {
    exports = function() {
        return new Date().getTime();
    };
}

module.exports = exports;


/***/ }),

/***/ 3974:
/***/ (function(module, exports) {

var ObjToStr = Object.prototype.toString;
exports = function(val) {
    return ObjToStr.call(val);
};

module.exports = exports;


/***/ }),

/***/ 8996:
/***/ (function(module, exports, __webpack_require__) {

var partial = __webpack_require__(3752);
var before = __webpack_require__(7542);
exports = partial(before, 2);

module.exports = exports;


/***/ }),

/***/ 6459:
/***/ (function(module, exports, __webpack_require__) {

var isUndef = __webpack_require__(8971);
exports = function(fn, ctx, argCount) {
    if (isUndef(ctx)) return fn;
    switch (argCount == null ? 3 : argCount) {
        case 1:
            return function(val) {
                return fn.call(ctx, val);
            };
        case 3:
            return function(val, idx, collection) {
                return fn.call(ctx, val, idx, collection);
            };
        case 4:
            return function(accumulator, val, idx, collection) {
                return fn.call(ctx, accumulator, val, idx, collection);
            };
    }
    return function() {
        return fn.apply(ctx, arguments);
    };
};

module.exports = exports;


/***/ }),

/***/ 7571:
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(2263);
var safeGet = __webpack_require__(6186);
var screen = window.screen;
exports = {
    get: function() {
        if (screen) {
            var orientation = safeGet(screen, 'orientation.type');
            if (orientation) return orientation.split('-').shift();
        }
        return window.innerWidth > window.innerHeight
            ? 'landscape'
            : 'portrait';
    }
};
Emitter.mixin(exports);
window.addEventListener(
    'orientationchange',
    function() {
        setTimeout(function() {
            exports.emit('change', exports.get());
        }, 200);
    },
    false
);

module.exports = exports;


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var last = __webpack_require__(3497);
var arrToMap = __webpack_require__(1849);
var startWith = __webpack_require__(1009);
var lowerCase = __webpack_require__(96);

exports = function(html, handler) {
    var stack = [];
    var text;
    var lastHtml = html;
    while (html) {
        text = true;
        if (!last(stack) || !SPECIAL[last(stack)]) {
            if (startWith(html, '<!--')) {
                var endIdx = html.indexOf('-->');
                if (endIdx >= 0) {
                    if (handler.comment) {
                        handler.comment(html.substring(4, endIdx));
                    }
                    html = html.substring(endIdx + 3);
                    text = false;
                }
            } else if (startWith(html, '<!')) {
                var match = html.match(regDoctype);
                if (match) {
                    if (handler.text)
                        handler.text(html.substring(0, match[0].length));
                    html = html.substring(match[0].length);
                    text = false;
                }
            } else if (startWith(html, '</')) {
                var _match = html.match(regEndTag);
                if (_match) {
                    html = html.substring(_match[0].length);
                    _match[0].replace(regEndTag, parseEndTag);
                    text = false;
                }
            } else if (startWith(html, '<')) {
                var _match2 = html.match(regStartTag);
                if (_match2) {
                    html = html.substring(_match2[0].length);
                    _match2[0].replace(regStartTag, parseStartTag);
                    text = false;
                }
            }
            if (text) {
                var _endIdx = html.indexOf('<');
                var _text = _endIdx < 0 ? html : html.substring(0, _endIdx);
                html = _endIdx < 0 ? '' : html.substring(_endIdx);
                if (handler.text) handler.text(_text);
            }
        } else {
            var execRes = new RegExp('</'.concat(last(stack), '[^>]*>')).exec(
                html
            );
            if (execRes) {
                var _text2 = html.substring(0, execRes.index);
                html = html.substring(execRes.index + execRes[0].length);
                if (_text2 && handler.text) handler.text(_text2);
            }
            parseEndTag('', last(stack));
        }
        if (lastHtml === html) {
            throw Error('Parse Error: ' + html);
        }
        lastHtml = html;
    }
    parseEndTag();
    function parseStartTag(tag, tagName, rest, unary) {
        tagName = lowerCase(tagName);
        unary = !!unary;
        if (!unary) stack.push(tagName);
        if (handler.start) {
            var attrs = {};
            rest.replace(regAttr, function(all, $1, $2, $3, $4) {
                attrs[$1] = $2 || $3 || $4 || '';
            });
            handler.start(tagName, attrs, unary);
        }
    }
    function parseEndTag(tag, tagName) {
        tagName = lowerCase(tagName);
        var pos;
        if (!tagName) {
            pos = 0;
        } else {
            for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos] === tagName) break;
            }
        }
        if (pos >= 0) {
            for (var i = stack.length - 1; i >= pos; i--) {
                if (handler.end) handler.end(stack[i]);
            }
            stack.length = pos;
        }
    }
};
var regDoctype = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i;
var regEndTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var regStartTag = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i;
var regAttr = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

var SPECIAL = arrToMap('script,style'.split(','));

module.exports = exports;


/***/ }),

/***/ 3752:
/***/ (function(module, exports, __webpack_require__) {

var restArgs = __webpack_require__(2510);
var toArr = __webpack_require__(769);
exports = restArgs(function(fn, partials) {
    return function() {
        var args = [];
        args = args.concat(partials);
        args = args.concat(toArr(arguments));
        return fn.apply(this, args);
    };
});

module.exports = exports;


/***/ }),

/***/ 5820:
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(3981);
var root = __webpack_require__(5169);
var performance = root.performance;
var process = root.process;
var loadTime;
if (performance && performance.now) {
    exports = function() {
        return performance.now();
    };
} else if (process && process.hrtime) {
    var getNanoSeconds = function() {
        var hr = process.hrtime();
        return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds() - process.uptime() * 1e9;
    exports = function() {
        return (getNanoSeconds() - loadTime) / 1e6;
    };
} else {
    loadTime = now();
    exports = function() {
        return now() - loadTime;
    };
}

module.exports = exports;


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var isArr = __webpack_require__(6214);
var contain = __webpack_require__(3249);
var each = __webpack_require__(9100);
exports = function(obj, filter, omit) {
    if (isStr(filter)) filter = [filter];
    if (isArr(filter)) {
        var keys = filter;
        filter = function(val, key) {
            return contain(keys, key);
        };
    }
    var ret = {};
    var iteratee = function(val, key) {
        if (filter(val, key)) ret[key] = val;
    };
    if (omit) {
        iteratee = function(val, key) {
            if (!filter(val, key)) ret[key] = val;
        };
    }
    each(obj, iteratee);
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 6969:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(5869);
var camelCase = __webpack_require__(387);
var upperFirst = __webpack_require__(9931);
var has = __webpack_require__(365);
var kebabCase = __webpack_require__(7604);
exports = memoize(function(name) {
    name = name.replace(regPrefixes, '');
    name = camelCase(name);
    if (has(style, name)) return name;
    var i = prefixes.length;
    while (i--) {
        var prefixName = prefixes[i] + upperFirst(name);
        if (has(style, prefixName)) return prefixName;
    }
    return name;
});
exports.dash = memoize(function(name) {
    var camelCaseResult = exports(name);
    return (
        (regPrefixes.test(camelCaseResult) ? '-' : '') +
        kebabCase(camelCaseResult)
    );
});
var prefixes = ['O', 'ms', 'Moz', 'Webkit'];
var regPrefixes = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g;
var style = document.createElement('p').style;

module.exports = exports;


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var isArr = __webpack_require__(6214);
var safeGet = __webpack_require__(6186);
exports = function(path) {
    if (!isArr(path)) return shallowProperty(path);
    return function(obj) {
        return safeGet(obj, path);
    };
};
function shallowProperty(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
}

module.exports = exports;


/***/ }),

/***/ 7257:
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(9405);
var each = __webpack_require__(9100);
var isUndef = __webpack_require__(8971);
var isArr = __webpack_require__(6214);
var map = __webpack_require__(3915);
var isEmpty = __webpack_require__(9464);
var filter = __webpack_require__(2571);
var isObj = __webpack_require__(9760);
exports = {
    parse: function(str) {
        var ret = {};
        str = trim(str).replace(regIllegalChars, '');
        each(str.split('&'), function(param) {
            var parts = param.split('=');
            var key = parts.shift(),
                val = parts.length > 0 ? parts.join('=') : null;
            key = decodeURIComponent(key);
            val = decodeURIComponent(val);
            if (isUndef(ret[key])) {
                ret[key] = val;
            } else if (isArr(ret[key])) {
                ret[key].push(val);
            } else {
                ret[key] = [ret[key], val];
            }
        });
        return ret;
    },
    stringify: function(obj, arrKey) {
        return filter(
            map(obj, function(val, key) {
                if (isObj(val) && isEmpty(val)) return '';
                if (isArr(val)) return exports.stringify(val, key);
                return (
                    (arrKey
                        ? encodeURIComponent(arrKey)
                        : encodeURIComponent(key)) +
                    '=' +
                    encodeURIComponent(val)
                );
            }),
            function(str) {
                return str.length > 0;
            }
        ).join('&');
    }
};
var regIllegalChars = /^(\?|#|&)/g;

module.exports = exports;


/***/ }),

/***/ 2228:
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(3981);
var isBrowser = __webpack_require__(1909);
var raf, cancel;
var lastTime = 0;
if (isBrowser) {
    raf = window.requestAnimationFrame;
    cancel = window.cancelAnimationFrame;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var i = 0, len = vendors.length; i < len && !raf; i++) {
        raf = window[vendors[i] + 'RequestAnimationFrame'];
        cancel =
            window[vendors[i] + 'CancelAnimationFrame'] ||
            window[vendors[i] + 'CancelRequestAnimationFrame'];
    }
    if (raf) {
        raf = raf.bind(window);
        cancel = cancel.bind(window);
    }
}
raf =
    raf ||
    function(cb) {
        var curTime = now();
        var timeToCall = Math.max(0, 16 - (curTime - lastTime));
        var id = setTimeout(function() {
            cb(curTime + timeToCall);
        }, timeToCall);
        lastTime = curTime + timeToCall;
        return id;
    };
cancel =
    cancel ||
    function(id) {
        clearTimeout(id);
    };
raf.cancel = cancel;
exports = raf;

module.exports = exports;


/***/ }),

/***/ 6774:
/***/ (function(module, exports) {

exports = function(min, max, floating) {
    if (max == null) {
        max = min;
        min = 0;
    }
    var rand = Math.random();
    if (floating || min % 1 || max % 1) {
        return Math.min(
            min +
                rand *
                    (max - min + parseFloat('1e-' + ((rand + '').length - 1))),
            max
        );
    }
    return min + Math.floor(rand * (max - min + 1));
};

module.exports = exports;


/***/ }),

/***/ 7731:
/***/ (function(module, exports, __webpack_require__) {

var random = __webpack_require__(6774);
var isBrowser = __webpack_require__(1909);
var isNode = __webpack_require__(621);
exports = function(size) {
    var ret = new Uint8Array(size);
    for (var i = 0; i < size; i++) ret[i] = random(0, 255);
    return ret;
};
var crypto;
if (isBrowser) {
    crypto = window.crypto || window.msCrypto;
    if (crypto) {
        exports = function(size) {
            var ret = new Uint8Array(size);
            crypto.getRandomValues(ret);
            return ret;
        };
    }
} else if (isNode) {
    crypto = eval('require')('crypto');
    exports = function(size) {
        return crypto.randomBytes(size);
    };
}

module.exports = exports;


/***/ }),

/***/ 5570:
/***/ (function(module, exports) {

var fns = [];
var listener;
var doc = document;
var hack = doc.documentElement.doScroll;
var domContentLoaded = 'DOMContentLoaded';
var loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
if (!loaded) {
    doc.addEventListener(
        domContentLoaded,
        (listener = function() {
            doc.removeEventListener(domContentLoaded, listener);
            loaded = 1;

            while ((listener = fns.shift())) listener();
        })
    );
}
exports = function(fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
};

module.exports = exports;


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
exports = function(arr, iterator, ctx) {
    var ret = [];
    iterator = safeCb(iterator, ctx);
    var i = -1;
    var len = arr.length;
    while (++i < len) {
        var realIdx = i - ret.length;
        var val = arr[realIdx];
        if (iterator(val, i, arr)) {
            ret.push(val);
            arr.splice(realIdx, 1);
        }
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 1710:
/***/ (function(module, exports) {

exports = function(str, n) {
    var ret = '';
    if (n < 1) return '';
    while (n > 0) {
        if (n & 1) ret += str;
        n >>= 1;
        str += str;
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

var escapeRegExp = __webpack_require__(5207);
exports = function(str, substr, newSubstr) {
    return str.replace(new RegExp(escapeRegExp(substr), 'g'), newSubstr);
};

module.exports = exports;


/***/ }),

/***/ 2510:
/***/ (function(module, exports) {

exports = function(fn, startIdx) {
    startIdx = startIdx == null ? fn.length - 1 : +startIdx;
    return function() {
        var len = Math.max(arguments.length - startIdx, 0);
        var rest = new Array(len);
        var i;
        for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

        switch (startIdx) {
            case 0:
                return fn.call(this, rest);
            case 1:
                return fn.call(this, arguments[0], rest);
            case 2:
                return fn.call(this, arguments[0], arguments[1], rest);
        }
        var args = new Array(startIdx + 1);
        for (i = 0; i < startIdx; i++) args[i] = arguments[i];
        args[startIdx] = rest;
        return fn.apply(this, args);
    };
};

module.exports = exports;


/***/ }),

/***/ 5395:
/***/ (function(module, exports) {

exports = function(arr) {
    var len = arr.length;
    var ret = Array(len);
    len--;
    for (var i = 0; i <= len; i++) {
        ret[len - i] = arr[i];
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

exports = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = mMin(r, g, b);
    var max = mMax(r, g, b);
    var delta = max - min;
    var h;
    var s;
    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else {
        h = 4 + (r - g) / delta;
    }
    h = mMin(h * 60, 360);
    if (h < 0) h += 360;
    var l = (min + max) / 2;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }
    var ret = [round(h), round(s * 100), round(l * 100)];
    if (rgb[3]) ret[3] = rgb[3];
    return ret;
};
var mMin = Math.min;
var mMax = Math.max;
var round = Math.round;

module.exports = exports;


/***/ }),

/***/ 3290:
/***/ (function(module, exports, __webpack_require__) {

var cookie = __webpack_require__(975);
exports = function(key) {
    var location = window.location;
    var hostname = location.hostname;
    var pathname = location.pathname;
    var hostNames = hostname.split('.');
    var pathNames = pathname.split('/');
    var domain = '';
    var pathLen = pathNames.length;
    var path;
    if (del()) return;
    for (var i = hostNames.length - 1; i >= 0; i--) {
        var hostName = hostNames[i];
        if (hostName === '') continue;
        domain = domain === '' ? hostName : hostName + '.' + domain;
        path = '/';
        if (
            del({
                domain: domain,
                path: path
            }) ||
            del({
                domain: domain
            })
        )
            return;
        for (var j = 0; j < pathLen; j++) {
            var pathName = pathNames[j];
            if (pathName === '') continue;
            path += pathName;
            if (
                del({
                    domain: domain,
                    path: path
                }) ||
                del({
                    path: path
                })
            )
                return;
            path += '/';
            if (
                del({
                    domain: domain,
                    path: path
                }) ||
                del({
                    path: path
                })
            )
                return;
        }
    }
    function del(options) {
        options = options || {};
        cookie.remove(key, options);
        return !cookie.get(key);
    }
};

module.exports = exports;


/***/ }),

/***/ 5169:
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = __webpack_require__(1909);
exports = isBrowser ? window : __webpack_require__.g;

module.exports = exports;


/***/ }),

/***/ 9651:
/***/ (function(module, exports) {

exports = function(str, chars) {
    if (chars == null) {
        if (str.trimRight) {
            return str.trimRight();
        }
        chars = ' \r\n\t\f\v';
    }
    var end = str.length - 1;
    var charLen = chars.length;
    var found = true;
    var i;
    var c;
    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);
        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }
    return end >= 0 ? str.substring(0, end + 1) : '';
};

module.exports = exports;


/***/ }),

/***/ 5693:
/***/ (function(module, exports, __webpack_require__) {

var isFn = __webpack_require__(3957);
var isObj = __webpack_require__(9760);
var isArr = __webpack_require__(6214);
var optimizeCb = __webpack_require__(6459);
var matcher = __webpack_require__(199);
var identity = __webpack_require__(2455);
var property = __webpack_require__(500);
exports = function(val, ctx, argCount) {
    if (val == null) return identity;
    if (isFn(val)) return optimizeCb(val, ctx, argCount);
    if (isObj(val) && !isArr(val)) return matcher(val);
    return property(val);
};

module.exports = exports;


/***/ }),

/***/ 6186:
/***/ (function(module, exports, __webpack_require__) {

var isUndef = __webpack_require__(8971);
var castPath = __webpack_require__(6949);
exports = function(obj, path) {
    path = castPath(path, obj);
    var prop;
    prop = path.shift();
    while (!isUndef(prop)) {
        obj = obj[prop];
        if (obj == null) return;
        prop = path.shift();
    }
    return obj;
};

module.exports = exports;


/***/ }),

/***/ 2806:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(6949);
var isUndef = __webpack_require__(8971);
var toStr = __webpack_require__(2561);
var isSymbol = __webpack_require__(9350);
var isStr = __webpack_require__(1738);
exports = function(obj, path, val) {
    path = castPath(path, obj);
    var lastProp = path.pop();
    var prop;
    prop = path.shift();
    while (!isUndef(prop)) {
        if (!isStr(prop) && !isSymbol(prop)) {
            prop = toStr(prop);
        }
        if (
            prop === '__proto__' ||
            prop === 'constructor' ||
            prop === 'prototype'
        ) {
            return;
        }
        if (!obj[prop]) obj[prop] = {};
        obj = obj[prop];
        prop = path.shift();
    }
    obj[lastProp] = val;
};

module.exports = exports;


/***/ }),

/***/ 1931:
/***/ (function(module, exports, __webpack_require__) {

var memStorage = __webpack_require__(1947);
exports = function(type) {
    type = type || 'local';
    var ret;
    switch (type) {
        case 'local':
            ret = window.localStorage;
            break;
        case 'session':
            ret = window.sessionStorage;
            break;
    }
    try {
        var x = 'test-localStorage-' + Date.now();
        ret.setItem(x, x);
        var y = ret.getItem(x);
        ret.removeItem(x);
        if (y !== x) throw new Error();
    } catch (e) {
        return memStorage;
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 4497:
/***/ (function(module, exports, __webpack_require__) {

var Url = __webpack_require__(6032);
exports = function(url1, url2) {
    url1 = new Url(url1);
    url2 = new Url(url2);
    url1.port = url1.port | 0 || (url1.protocol === 'https' ? 443 : 80);
    url2.port = url2.port | 0 || (url2.protocol === 'https' ? 443 : 80);
    return (
        url1.protocol === url2.protocol &&
        url1.hostname === url2.hostname &&
        url1.port === url2.port
    );
};

module.exports = exports;


/***/ }),

/***/ 4951:
/***/ (function(module, exports) {

exports = function(arr, start, end) {
    var len = arr.length;
    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }
    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }
    var ret = [];
    while (start < end) ret.push(arr[start++]);
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 2797:
/***/ (function(module, exports, __webpack_require__) {

var safeCb = __webpack_require__(5693);
var isArrLike = __webpack_require__(5793);
var keys = __webpack_require__(3145);
exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);
    var _keys = !isArrLike(obj) && keys(obj);
    var len = (_keys || obj).length;
    for (var i = 0; i < len; i++) {
        var key = _keys ? _keys[i] : i;
        if (predicate(obj[key], key, obj)) return true;
    }
    return false;
};

module.exports = exports;


/***/ }),

/***/ 5145:
/***/ (function(module, exports, __webpack_require__) {

var isSorted = __webpack_require__(9756);
var defaults = __webpack_require__(5651);
var keys = __webpack_require__(3145);
var isArr = __webpack_require__(6214);
var isObj = __webpack_require__(9760);
exports = function(obj) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    defaults(options, defOpts);
    var deep = options.deep,
        comparator = options.comparator;
    var visited = [];
    var visitedResult = [];
    function sort(obj) {
        var idx = visited.indexOf(obj);
        if (idx > -1) {
            return visitedResult[idx];
        }
        var result;
        if (isArr(obj)) {
            result = [];
            visited.push(obj);
            visitedResult.push(result);
            for (var i = 0, len = obj.length; i < len; i++) {
                var value = obj[i];
                if (deep && isObj(value)) {
                    result[i] = sort(value);
                } else {
                    result[i] = value;
                }
            }
        } else {
            result = {};
            visited.push(obj);
            visitedResult.push(result);
            var _keys = keys(obj).sort(comparator);
            for (var _i = 0, _len = _keys.length; _i < _len; _i++) {
                var key = _keys[_i];
                var _value = obj[key];
                if (deep && isObj(_value)) {
                    result[key] = sort(_value);
                } else {
                    result[key] = _value;
                }
            }
        }
        return result;
    }
    return sort(obj);
};
var defOpts = {
    deep: false,
    comparator: isSorted.defComparator
};

module.exports = exports;


/***/ }),

/***/ 6833:
/***/ (function(module, exports) {

var regUpperCase = /([A-Z])/g;
var regSeparator = /[_.\- ]+/g;
var regTrim = /(^-)|(-$)/g;
exports = function(str) {
    str = str
        .replace(regUpperCase, '-$1')
        .toLowerCase()
        .replace(regSeparator, '-')
        .replace(regTrim, '');
    return str.split('-');
};

module.exports = exports;


/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

exports = function(str, prefix) {
    return str.indexOf(prefix) === 0;
};

module.exports = exports;


/***/ }),

/***/ 2508:
/***/ (function(module, exports, __webpack_require__) {

var safeGet = __webpack_require__(6186);
var toStr = __webpack_require__(2561);
var regSep = /{{(.*?)}}/g;
exports = function(str, data) {
    return str.replace(regSep, function(match, key) {
        return toStr(safeGet(data, key));
    });
};

module.exports = exports;


/***/ }),

/***/ 8032:
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(2989);
var upperFirst = __webpack_require__(9931);
var toStr = __webpack_require__(2561);
var isUndef = __webpack_require__(8971);
var isFn = __webpack_require__(3957);
var isRegExp = __webpack_require__(1976);
exports = function(obj, spaces) {
    return JSON.stringify(obj, serializer(), spaces);
};
function serializer() {
    var stack = [];
    var keys = [];
    return function(key, val) {
        if (stack.length > 0) {
            var pos = stack.indexOf(this);
            if (pos > -1) {
                stack.splice(pos + 1);
                keys.splice(pos, Infinity, key);
            } else {
                stack.push(this);
                keys.push(key);
            }
            var valPos = stack.indexOf(val);
            if (valPos > -1) {
                if (stack[0] === val) {
                    val = '[Circular ~]';
                } else {
                    val =
                        '[Circular ~.' + keys.slice(0, valPos).join('.') + ']';
                }
            }
        } else {
            stack.push(val);
        }
        if (isRegExp(val) || isFn(val)) {
            val = '[' + upperFirst(type(val)) + ' ' + toStr(val) + ']';
        } else if (isUndef(val)) {
            val = null;
        }
        return val;
    };
}

module.exports = exports;


/***/ }),

/***/ 4801:
/***/ (function(module, exports, __webpack_require__) {

var escapeJsStr = __webpack_require__(4950);
var type = __webpack_require__(2989);
var toStr = __webpack_require__(2561);
var endWith = __webpack_require__(1580);
var toSrc = __webpack_require__(1168);
var keys = __webpack_require__(3145);
var each = __webpack_require__(9100);
var Class = __webpack_require__(2717);
var getProto = __webpack_require__(5427);
var difference = __webpack_require__(466);
var extend = __webpack_require__(8105);
var isPromise = __webpack_require__(8796);
var filter = __webpack_require__(2571);
var now = __webpack_require__(3981);
var allKeys = __webpack_require__(7514);
var contain = __webpack_require__(3249);
var isObj = __webpack_require__(9760);
var isMiniProgram = __webpack_require__(4460);
var create = __webpack_require__(6513);
var startWith = __webpack_require__(1009);
var safeSet = __webpack_require__(2806);
var defineProp = __webpack_require__(4151);
var pick = __webpack_require__(896);
var isArrLike = __webpack_require__(5793);
exports = function(obj) {
    var _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
        self = _ref.self,
        _ref$startTime = _ref.startTime,
        startTime = _ref$startTime === void 0 ? now() : _ref$startTime,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? 0 : _ref$timeout,
        _ref$depth = _ref.depth,
        depth = _ref$depth === void 0 ? 0 : _ref$depth,
        _ref$curDepth = _ref.curDepth,
        curDepth = _ref$curDepth === void 0 ? 1 : _ref$curDepth,
        _ref$visitor = _ref.visitor,
        visitor = _ref$visitor === void 0 ? new Visitor() : _ref$visitor,
        _ref$unenumerable = _ref.unenumerable,
        unenumerable = _ref$unenumerable === void 0 ? false : _ref$unenumerable,
        _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === void 0 ? false : _ref$symbol,
        _ref$accessGetter = _ref.accessGetter,
        accessGetter = _ref$accessGetter === void 0 ? false : _ref$accessGetter,
        _ref$ignore = _ref.ignore,
        ignore = _ref$ignore === void 0 ? [] : _ref$ignore;
    var json = '';
    var options = {
        visitor: visitor,
        unenumerable: unenumerable,
        symbol: symbol,
        accessGetter: accessGetter,
        depth: depth,
        curDepth: curDepth + 1,
        timeout: timeout,
        startTime: startTime,
        ignore: ignore
    };
    var t = type(obj, false);
    if (t === 'String') {
        json = wrapStr(obj);
    } else if (t === 'Number') {
        json = toStr(obj);
        if (endWith(json, 'Infinity')) {
            json = '{"value":"'.concat(json, '","type":"Number"}');
        }
    } else if (t === 'NaN') {
        json = '{"value":"NaN","type":"Number"}';
    } else if (t === 'Boolean') {
        json = obj ? 'true' : 'false';
    } else if (t === 'Null') {
        json = 'null';
    } else if (t === 'Undefined') {
        json = '{"type":"Undefined"}';
    } else if (t === 'Symbol') {
        var val = 'Symbol';
        try {
            val = toStr(obj);
        } catch (e) {}
        json = '{"value":'.concat(wrapStr(val), ',"type":"Symbol"}');
    } else {
        if (timeout && now() - startTime > timeout) {
            return wrapStr('Timeout');
        }
        if (depth && curDepth > depth) {
            return wrapStr('{...}');
        }
        json = '{';
        var parts = [];
        var visitedObj = visitor.get(obj);
        var id;
        if (visitedObj) {
            id = visitedObj.id;
            parts.push('"reference":'.concat(id));
        } else {
            id = visitor.set(obj);
            parts.push('"id":'.concat(id));
        }
        parts.push('"type":"'.concat(t, '"'));
        if (endWith(t, 'Function')) {
            parts.push('"value":'.concat(wrapStr(toSrc(obj))));
        } else if (t === 'RegExp') {
            parts.push('"value":'.concat(wrapStr(obj)));
        }
        if (!visitedObj) {
            var enumerableKeys = keys(obj);
            if (enumerableKeys.length) {
                parts.push(
                    iterateObj(
                        'enumerable',
                        enumerableKeys,
                        self || obj,
                        options
                    )
                );
            }
            if (unenumerable) {
                var unenumerableKeys = difference(
                    allKeys(obj, {
                        prototype: false,
                        unenumerable: true
                    }),
                    enumerableKeys
                );
                if (unenumerableKeys.length) {
                    parts.push(
                        iterateObj(
                            'unenumerable',
                            unenumerableKeys,
                            self || obj,
                            options
                        )
                    );
                }
            }
            if (symbol) {
                var symbolKeys = filter(
                    allKeys(obj, {
                        prototype: false,
                        symbol: true
                    }),
                    function(key) {
                        return typeof key === 'symbol';
                    }
                );
                if (symbolKeys.length) {
                    parts.push(
                        iterateObj('symbol', symbolKeys, self || obj, options)
                    );
                }
            }
            var prototype = getProto(obj);
            if (prototype && !contain(ignore, prototype)) {
                var proto = '"proto":'.concat(
                    exports(
                        prototype,
                        extend(options, {
                            self: self || obj
                        })
                    )
                );
                parts.push(proto);
            }
        }
        json += parts.join(',') + '}';
    }
    return json;
};
function iterateObj(name, keys, obj, options) {
    var parts = [];
    each(keys, function(key) {
        var val;
        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
        var hasGetter = descriptor && descriptor.get;
        var hasSetter = descriptor && descriptor.set;
        if (!options.accessGetter && hasGetter) {
            val = '(...)';
        } else {
            try {
                val = obj[key];
                if (contain(options.ignore, val)) {
                    return;
                }
                if (isPromise(val)) {
                    val.catch(function() {});
                }
            } catch (e) {
                val = e.message;
            }
        }
        parts.push(''.concat(wrapKey(key), ':').concat(exports(val, options)));
        if (hasGetter) {
            parts.push(
                ''
                    .concat(wrapKey('get ' + toStr(key)), ':')
                    .concat(exports(descriptor.get, options))
            );
        }
        if (hasSetter) {
            parts.push(
                ''
                    .concat(wrapKey('set ' + toStr(key)), ':')
                    .concat(exports(descriptor.set, options))
            );
        }
    });
    return '"'.concat(name, '":{') + parts.join(',') + '}';
}
function wrapKey(key) {
    return '"'.concat(escapeJsonStr(key), '"');
}
function wrapStr(str) {
    return '"'.concat(escapeJsonStr(toStr(str)), '"');
}
function escapeJsonStr(str) {
    return escapeJsStr(str)
        .replace(/\\'/g, "'")
        .replace(/\t/g, '\\t');
}
var Visitor = Class({
    initialize: function() {
        this.id = 1;
        this.visited = [];
    },
    set: function(val) {
        var visited = this.visited,
            id = this.id;
        var obj = {
            id: id,
            val: val
        };
        visited.push(obj);
        this.id++;
        return id;
    },
    get: function(val) {
        var visited = this.visited;
        for (var i = 0, len = visited.length; i < len; i++) {
            var obj = visited[i];
            if (val === obj.val) return obj;
        }
        return false;
    }
});
exports.parse = function(str) {
    var map = {};
    var obj = parse(JSON.parse(str), {
        map: map
    });
    correctReference(map);
    return obj;
};
function correctReference(map) {
    each(map, function(obj) {
        var enumerableKeys = keys(obj);
        for (var i = 0, len = enumerableKeys.length; i < len; i++) {
            var key = enumerableKeys[i];
            if (isObj(obj[key])) {
                var reference = obj[key].reference;
                if (reference && map[reference]) {
                    obj[key] = map[reference];
                }
            }
        }
        var proto = getProto(obj);
        if (proto && proto.reference) {
            if (map[proto.reference]) {
                Object.setPrototypeOf(obj, map[proto.reference]);
            }
        }
    });
}
function parse(obj, options) {
    var map = options.map;
    if (!isObj(obj)) {
        return obj;
    }
    var id = obj.id,
        type = obj.type,
        value = obj.value,
        proto = obj.proto,
        reference = obj.reference;
    var enumerable = obj.enumerable,
        unenumerable = obj.unenumerable;
    if (reference) {
        return obj;
    }
    if (type === 'Number') {
        if (value === 'Infinity') {
            return Number.POSITIVE_INFINITY;
        } else if (value === '-Infinity') {
            return Number.NEGATIVE_INFINITY;
        }
        return NaN;
    } else if (type === 'Undefined') {
        return undefined;
    }
    var newObj;
    if (type === 'Function') {
        newObj = function() {};
        newObj.toString = function() {
            return value;
        };
        if (proto) {
            Object.setPrototypeOf(newObj, parse(proto, options));
        }
    } else if (type === 'RegExp') {
        newObj = strToRegExp(value);
    } else {
        if (type !== 'Object') {
            var Fn;
            if (!isMiniProgram) {
                Fn = new Function(type, '');
            } else {
                Fn = function() {};
            }
            if (proto) {
                Fn.prototype = parse(proto, options);
            }
            newObj = new Fn();
        } else {
            if (proto) {
                newObj = create(parse(proto, options));
            } else {
                newObj = create(null);
            }
        }
    }
    var defineProps = {};
    if (enumerable) {
        var len;
        if (isArrLike(enumerable)) {
            len = enumerable.length;
            delete enumerable.length;
        }
        enumerable = pick(enumerable, function(value, key) {
            return !handleGetterSetter(enumerable, value, key);
        });
        each(enumerable, function(value, key) {
            var defineProp = defineProps[key] || {};
            if (!defineProp.get) {
                newObj[key] = parse(value, options);
            }
        });
        if (len) {
            newObj.length = len;
        }
    }
    if (unenumerable) {
        unenumerable = pick(unenumerable, function(value, key) {
            return !handleGetterSetter(unenumerable, value, key);
        });
        each(unenumerable, function(value, key) {
            var defineProp = defineProps[key] || {};
            if (!defineProp.get) {
                value = parse(value, options);
                if (isObj(value) && value.reference) {
                    var _reference = value.reference;
                    value = function() {
                        return map[_reference];
                    };
                    defineProp.get = value;
                } else {
                    defineProp.value = value;
                }
            }
            defineProp.enumerable = false;
            defineProps[key] = defineProp;
        });
    }
    defineProp(newObj, defineProps);
    function handleGetterSetter(obj, val, key) {
        key = toStr(key);
        var isGetterAndSetter = false;
        each(['get', 'set'], function(type) {
            if (startWith(key, type + ' ')) {
                var realKey = key.replace(type + ' ', '');
                if (obj[realKey]) {
                    val = parse(val, options);
                    if (val === 'Timeout') {
                        val = retTimeout;
                    }
                    safeSet(defineProps, [realKey, type], val);
                    isGetterAndSetter = true;
                }
            }
        });
        return isGetterAndSetter;
    }
    map[id] = newObj;
    return newObj;
}
function retTimeout() {
    return 'Timeout';
}
function strToRegExp(str) {
    var lastSlash = str.lastIndexOf('/');
    return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
}

module.exports = exports;


/***/ }),

/***/ 6948:
/***/ (function(module, exports) {

var regHtmlTag = /<[^>]*>/g;
exports = function(str) {
    return str.replace(regHtmlTag, '');
};

module.exports = exports;


/***/ }),

/***/ 5773:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
var toArr = __webpack_require__(769);
var min = __webpack_require__(8785);
var map = __webpack_require__(3915);
var trim = __webpack_require__(9405);
exports = function(literals) {
    if (isStr(literals)) literals = toArr(literals);
    var str = '';
    for (
        var _len = arguments.length,
            placeholders = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    ) {
        placeholders[_key - 1] = arguments[_key];
    }
    for (var i = 0, len = literals.length; i < len; i++) {
        str += literals[i];
        if (placeholders[i]) str += placeholders[i];
    }
    var lines = str.split('\n');
    var indentLens = [];
    for (var _i = 0, _len2 = lines.length; _i < _len2; _i++) {
        var line = lines[_i];
        var _indent = line.match(regStartSpaces);
        if (_indent) {
            indentLens.push(_indent[1].length);
        }
    }
    var indent = indentLens.length > 0 ? min.apply(null, indentLens) : 0;
    return trim(
        map(lines, function(line) {
            return line[0] === ' ' ? line.slice(indent) : line;
        }).join('\n')
    );
};
var regStartSpaces = /^(\s+)\S+/;

module.exports = exports;


/***/ }),

/***/ 5865:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(4534);
exports = function(fn, wait) {
    return debounce(fn, wait, true);
};

module.exports = exports;


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

var isArrLike = __webpack_require__(5793);
var map = __webpack_require__(3915);
var isArr = __webpack_require__(6214);
var isStr = __webpack_require__(1738);
exports = function(val) {
    if (!val) return [];
    if (isArr(val)) return val;
    if (isArrLike(val) && !isStr(val)) return map(val);
    return [val];
};

module.exports = exports;


/***/ }),

/***/ 9000:
/***/ (function(module, exports, __webpack_require__) {

var isStr = __webpack_require__(1738);
exports = function(val) {
    if (isStr(val)) {
        val = val.toLowerCase();
        return val !== '0' && val !== '' && val !== 'false';
    }
    return !!val;
};

module.exports = exports;


/***/ }),

/***/ 4433:
/***/ (function(module, exports) {

var doc = document;
exports = function(str) {
    var fragment = doc.createElement('body');
    fragment.innerHTML = str;
    return fragment.childNodes[0];
};
if (doc.createRange && doc.body) {
    var range = doc.createRange();
    range.selectNode(doc.body);
    if (range.createContextualFragment) {
        exports = function(str) {
            return range.createContextualFragment(str).childNodes[0];
        };
    }
}

module.exports = exports;


/***/ }),

/***/ 6631:
/***/ (function(module, exports, __webpack_require__) {

var toNum = __webpack_require__(6030);
exports = function(val) {
    if (!val) return val === 0 ? val : 0;
    val = toNum(val);
    return val - (val % 1);
};

module.exports = exports;


/***/ }),

/***/ 6030:
/***/ (function(module, exports, __webpack_require__) {

var isNum = __webpack_require__(6097);
var isObj = __webpack_require__(9760);
var isFn = __webpack_require__(3957);
var isStr = __webpack_require__(1738);
exports = function(val) {
    if (isNum(val)) return val;
    if (isObj(val)) {
        var temp = isFn(val.valueOf) ? val.valueOf() : val;
        val = isObj(temp) ? temp + '' : temp;
    }
    if (!isStr(val)) return val === 0 ? val : +val;
    return +val;
};

module.exports = exports;


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(3422);
exports = function(fn) {
    if (isNil(fn)) return '';
    try {
        return fnToStr.call(fn);
    } catch (e) {}
    try {
        return fn + '';
    } catch (e) {}
    return '';
};
var fnToStr = Function.prototype.toString;

module.exports = exports;


/***/ }),

/***/ 2561:
/***/ (function(module, exports) {

exports = function(val) {
    return val == null ? '' : val.toString();
};

module.exports = exports;


/***/ }),

/***/ 9405:
/***/ (function(module, exports, __webpack_require__) {

var ltrim = __webpack_require__(5333);
var rtrim = __webpack_require__(9651);
exports = function(str, chars) {
    if (chars == null && str.trim) {
        return str.trim();
    }
    return ltrim(rtrim(str, chars), chars);
};

module.exports = exports;


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var defaults = __webpack_require__(5651);
var isUndef = __webpack_require__(8971);
exports = function(txt, width) {
    var options =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    defaults(options, defOptions);
    var ellipsis = options.ellipsis,
        separator = options.separator;
    var len = txt.length;
    if (width > len) return txt;
    var end = width - ellipsis.length;
    if (end < 1) return ellipsis;
    var ret = txt.slice(0, end);
    if (isUndef(separator)) return ret + ellipsis;
    if (txt.indexOf(separator, end) !== end) {
        var idx = ret.lastIndexOf(separator);
        if (idx > -1) {
            ret = ret.slice(0, idx);
        }
    }
    return ret + ellipsis;
};
var defOptions = {
    ellipsis: '...'
};

module.exports = exports;


/***/ }),

/***/ 2989:
/***/ (function(module, exports, __webpack_require__) {

var objToStr = __webpack_require__(3974);
var isNaN = __webpack_require__(1932);
var lowerCase = __webpack_require__(96);
var isBuffer = __webpack_require__(3159);
exports = function(val) {
    var lower =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : true;
    var ret;
    if (val === null) ret = 'Null';
    if (val === undefined) ret = 'Undefined';
    if (isNaN(val)) ret = 'NaN';
    if (isBuffer(val)) ret = 'Buffer';
    if (!ret) {
        ret = objToStr(val).match(regObj);
        if (ret) ret = ret[1];
    }
    if (!ret) return '';
    return lower ? lowerCase(ret) : ret;
};
var regObj = /^\[object\s+(.*?)]$/;

module.exports = exports;


/***/ }),

/***/ 5224:
/***/ (function(module, exports, __webpack_require__) {

var chunk = __webpack_require__(7140);
var map = __webpack_require__(3915);

exports = {
    encode: function(arr) {
        if (arr.length < 32768) {
            return String.fromCodePoint.apply(String, arr);
        }
        return map(chunk(arr, 32767), function(nums) {
            return String.fromCodePoint.apply(String, nums);
        }).join('');
    },
    decode: function(str) {
        var ret = [];
        var i = 0;
        var len = str.length;
        while (i < len) {
            var c = str.charCodeAt(i++);

            if (c >= 0xd800 && c <= 0xdbff && i < len) {
                var tail = str.charCodeAt(i++);

                if ((tail & 0xfc00) === 0xdc00) {
                    ret.push(((c & 0x3ff) << 10) + (tail & 0x3ff) + 0x10000);
                } else {
                    ret.push(c);
                    i--;
                }
            } else {
                ret.push(c);
            }
        }
        return ret;
    }
};

module.exports = exports;


/***/ }),

/***/ 6962:
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = __webpack_require__(1909);
var SingleEmitter = __webpack_require__(1023);
var isOn = false;
exports = {
    start: function() {
        isOn = true;
    },
    stop: function() {
        isOn = false;
    }
};
SingleEmitter.mixin(exports);
if (isBrowser) {
    window.addEventListener('error', function(event) {
        if (event.error) {
            callListeners(event.error);
        } else if (event.message) {
            var e = new Error(event.message);
            e.stack = 'Error: '
                .concat(event.message, ' \n at ')
                .concat(event.filename, ':')
                .concat(event.lineno, ':')
                .concat(event.colno);
            callListeners(e);
        }
    });
    window.addEventListener('unhandledrejection', function(e) {
        callListeners(e.reason);
    });
} else {
    process.on('uncaughtException', callListeners);
    process.on('unhandledRejection', callListeners);
}
function callListeners(err) {
    if (!isOn) return;
    exports.emit(err);
}

module.exports = exports;


/***/ }),

/***/ 9389:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5902);
var keys = __webpack_require__(3145);
var invert = __webpack_require__(5282);
exports = function(str) {
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
};
var map = invert(escape.map);
var regSrc = '(?:' + keys(map).join('|') + ')';
var regTest = new RegExp(regSrc);
var regReplace = new RegExp(regSrc, 'g');
function replaceFn(match) {
    return map[match];
}

module.exports = exports;


/***/ }),

/***/ 5630:
/***/ (function(module, exports) {

var idCounter = 0;
exports = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};

module.exports = exports;


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(2571);
exports = function(arr, cmp) {
    cmp = cmp || isEqual;
    return filter(arr, function(item, idx, arr) {
        var len = arr.length;
        while (++idx < len) {
            if (cmp(item, arr[idx])) return false;
        }
        return true;
    });
};
function isEqual(a, b) {
    return a === b;
}

module.exports = exports;


/***/ }),

/***/ 3805:
/***/ (function(module, exports, __webpack_require__) {

var toStr = __webpack_require__(2561);
exports = function(str) {
    return toStr(str).toLocaleUpperCase();
};

module.exports = exports;


/***/ }),

/***/ 9931:
/***/ (function(module, exports) {

exports = function(str) {
    if (str.length < 1) return str;
    return str[0].toUpperCase() + str.slice(1);
};

module.exports = exports;


/***/ }),

/***/ 4966:
/***/ (function(module, exports, __webpack_require__) {

var ucs2 = __webpack_require__(5224);

exports = {
    encode: function(str) {
        var codePoints = ucs2.decode(str);
        var byteArr = '';
        for (var i = 0, len = codePoints.length; i < len; i++) {
            byteArr += encodeCodePoint(codePoints[i]);
        }
        return byteArr;
    },
    decode: function(str, safe) {
        byteArr = ucs2.decode(str);
        byteIdx = 0;
        byteCount = byteArr.length;
        codePoint = 0;
        bytesSeen = 0;
        bytesNeeded = 0;
        lowerBoundary = 0x80;
        upperBoundary = 0xbf;
        var codePoints = [];
        var tmp;
        while ((tmp = decodeCodePoint(safe)) !== false) {
            codePoints.push(tmp);
        }
        return ucs2.encode(codePoints);
    }
};
var fromCharCode = String.fromCharCode;
function encodeCodePoint(codePoint) {
    if ((codePoint & 0xffffff80) === 0) {
        return fromCharCode(codePoint);
    }
    var ret = '',
        count,
        offset;

    if ((codePoint & 0xfffff800) === 0) {
        count = 1;
        offset = 0xc0;
    } else if ((codePoint & 0xffff0000) === 0) {
        count = 2;
        offset = 0xe0;
    } else if ((codePoint & 0xffe00000) == 0) {
        count = 3;
        offset = 0xf0;
    }
    ret += fromCharCode((codePoint >> (6 * count)) + offset);
    while (count > 0) {
        var tmp = codePoint >> (6 * (count - 1));
        ret += fromCharCode(0x80 | (tmp & 0x3f));
        count--;
    }
    return ret;
}
var byteArr,
    byteIdx,
    byteCount,
    codePoint,
    bytesSeen,
    bytesNeeded,
    lowerBoundary,
    upperBoundary;
function decodeCodePoint(safe) {
    while (true) {
        if (byteIdx >= byteCount && bytesNeeded) {
            if (safe) return goBack();
            throw new Error('Invalid byte index');
        }
        if (byteIdx === byteCount) return false;
        var byte = byteArr[byteIdx];
        byteIdx++;
        if (!bytesNeeded) {
            if ((byte & 0x80) === 0) {
                return byte;
            }

            if ((byte & 0xe0) === 0xc0) {
                bytesNeeded = 1;
                codePoint = byte & 0x1f;
            } else if ((byte & 0xf0) === 0xe0) {
                if (byte === 0xe0) lowerBoundary = 0xa0;
                if (byte === 0xed) upperBoundary = 0x9f;
                bytesNeeded = 2;
                codePoint = byte & 0xf;
            } else if ((byte & 0xf8) === 0xf0) {
                if (byte === 0xf0) lowerBoundary = 0x90;
                if (byte === 0xf4) upperBoundary = 0x8f;
                bytesNeeded = 3;
                codePoint = byte & 0x7;
            } else {
                if (safe) return goBack();
                throw new Error('Invalid UTF-8 detected');
            }
            continue;
        }
        if (byte < lowerBoundary || byte > upperBoundary) {
            if (safe) {
                byteIdx--;
                return goBack();
            }
            throw new Error('Invalid continuation byte');
        }
        lowerBoundary = 0x80;
        upperBoundary = 0xbf;
        codePoint = (codePoint << 6) | (byte & 0x3f);
        bytesSeen++;
        if (bytesSeen !== bytesNeeded) continue;
        var tmp = codePoint;
        codePoint = 0;
        bytesNeeded = 0;
        bytesSeen = 0;
        return tmp;
    }
}
function goBack() {
    var start = byteIdx - bytesSeen - 1;
    byteIdx = start + 1;
    codePoint = 0;
    bytesNeeded = 0;
    bytesSeen = 0;
    lowerBoundary = 0x80;
    upperBoundary = 0xbf;
    return byteArr[start];
}

module.exports = exports;


/***/ }),

/***/ 8046:
/***/ (function(module, exports, __webpack_require__) {

var randomBytes = __webpack_require__(7731);
exports = function() {
    var b = randomBytes(16);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    return (
        hexBytes[b[0]] +
        hexBytes[b[1]] +
        hexBytes[b[2]] +
        hexBytes[b[3]] +
        '-' +
        hexBytes[b[4]] +
        hexBytes[b[5]] +
        '-' +
        hexBytes[b[6]] +
        hexBytes[b[7]] +
        '-' +
        hexBytes[b[8]] +
        hexBytes[b[9]] +
        '-' +
        hexBytes[b[10]] +
        hexBytes[b[11]] +
        hexBytes[b[12]] +
        hexBytes[b[13]] +
        hexBytes[b[14]] +
        hexBytes[b[15]]
    );
};
var hexBytes = [];
for (var i = 0; i < 256; i++) {
    hexBytes[i] = (i + 0x100).toString(16).substr(1);
}

module.exports = exports;


/***/ }),

/***/ 5119:
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(9100);
exports = function(obj) {
    var ret = [];
    each(obj, function(val) {
        ret.push(val);
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

var meta = __webpack_require__(7308);
var clamp = __webpack_require__(6026);
var trim = __webpack_require__(9405);
var each = __webpack_require__(9100);
var map = __webpack_require__(3915);
var isNaN = __webpack_require__(1932);
exports = function() {
    var viewport = meta('viewport');
    if (!viewport) return 1;
    viewport = map(viewport.split(','), function(val) {
        return trim(val);
    });
    var minScale = 0.25,
        maxScale = 5,
        initialScale = 1;
    each(viewport, function(val) {
        val = val.split('=');
        var key = val[0];
        val = val[1];
        if (key === 'initial-scale') initialScale = +val;
        if (key === 'maximum-scale') maxScale = +val;
        if (key === 'minimum-scale') minScale = +val;
    });
    var ret = clamp(initialScale, minScale, maxScale);

    if (isNaN(ret)) return 1;
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 8862:
/***/ (function(module, exports) {

exports = function(xpath) {
    var ret = [];
    var nodesSnapshot = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        ret.push(nodesSnapshot.snapshotItem(i));
    }
    return ret;
};

module.exports = exports;


/***/ }),

/***/ 3019:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var elementRoles = [
    ['menuitem', 'command'],
    ['rel', 'roletype'],
    ['article', 'article'],
    ['header', 'banner'],
    ['input', 'button', [['type', 'checkbox']]],
    ['summary', 'button', [['aria-expanded', 'false']]],
    ['summary', 'button', [['aria-expanded', 'true']]],
    ['input', 'button', [['type', 'button']]],
    ['input', 'button', [['type', 'image']]],
    ['input', 'button', [['type', 'reset']]],
    ['input', 'button', [['type', 'submit']]],
    ['button', 'button'],
    ['td', 'cell'],
    ['input', 'checkbox', [['type', 'checkbox']]],
    ['th', 'columnheader'],
    ['input', 'combobox', [['type', 'email']]],
    ['input', 'combobox', [['type', 'search']]],
    ['input', 'combobox', [['type', 'tel']]],
    ['input', 'combobox', [['type', 'text']]],
    ['input', 'combobox', [['type', 'url']]],
    ['input', 'combobox', [['type', 'url']]],
    ['select', 'combobox'],
    ['select', 'combobox', [['size', 1]]],
    ['aside', 'complementary'],
    ['footer', 'contentinfo'],
    ['dd', 'definition'],
    ['dialog', 'dialog'],
    ['body', 'document'],
    ['figure', 'figure'],
    ['form', 'form'],
    ['form', 'form'],
    ['form', 'form'],
    ['span', 'generic'],
    ['div', 'generic'],
    ['table', 'grid', [['role', 'grid']]],
    ['td', 'gridcell', [['role', 'gridcell']]],
    ['details', 'group'],
    ['fieldset', 'group'],
    ['optgroup', 'group'],
    ['h1', 'heading'],
    ['h2', 'heading'],
    ['h3', 'heading'],
    ['h4', 'heading'],
    ['h5', 'heading'],
    ['h6', 'heading'],
    ['img', 'img'],
    ['img', 'img'],
    ['a', 'link'],
    ['area', 'link'],
    ['link', 'link'],
    ['menu', 'list'],
    ['ol', 'list'],
    ['ul', 'list'],
    ['select', 'listbox'],
    ['select', 'listbox'],
    ['select', 'listbox'],
    ['datalist', 'listbox'],
    ['li', 'listitem'],
    ['main', 'main'],
    ['math', 'math'],
    ['menuitem', 'command'],
    ['nav', 'navigation'],
    ['option', 'option'],
    ['progress', 'progressbar'],
    ['input', 'radio', [['type', 'radio']]],
    ['section', 'region'],
    ['section', 'region'],
    ['frame', 'region'],
    ['tr', 'row'],
    ['tbody', 'rowgroup'],
    ['tfoot', 'rowgroup'],
    ['thead', 'rowgroup'],
    ['th', 'rowheader', [['scope', 'row']]],
    ['input', 'searchbox', [['type', 'search']]],
    ['hr', 'separator'],
    ['input', 'slider', [['type', 'range']]],
    ['input', 'spinbutton', [['type', 'number']]],
    ['output', 'status'],
    ['table', 'table'],
    ['dfn', 'term'],
    ['input', 'textbox'],
    ['input', 'textbox', [['type', 'email']]],
    ['input', 'textbox', [['type', 'tel']]],
    ['input', 'textbox', [['type', 'text']]],
    ['input', 'textbox', [['type', 'url']]],
    ['textarea', 'textbox'],
];
exports["default"] = elementRoles;


/***/ }),

/***/ 9196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Component_1 = __importDefault(__webpack_require__(7214));
var tool_highlight_1 = __webpack_require__(926);
var util_1 = __webpack_require__(4725);
var ResizeSensor_1 = __importDefault(__webpack_require__(4095));
var throttle_1 = __importDefault(__webpack_require__(5865));
var lowerCase_1 = __importDefault(__webpack_require__(96));
var each_1 = __importDefault(__webpack_require__(9100));
var Color_1 = __importDefault(__webpack_require__(8734));
var hex_1 = __importDefault(__webpack_require__(9848));
var upperCase_1 = __importDefault(__webpack_require__(3805));
var extend_1 = __importDefault(__webpack_require__(8105));
var camelCase_1 = __importDefault(__webpack_require__(387));
var contain_1 = __importDefault(__webpack_require__(3249));
var toNum_1 = __importDefault(__webpack_require__(6030));
var elementRoles_1 = __importDefault(__webpack_require__(3019));
var isStr_1 = __importDefault(__webpack_require__(1738));
__webpack_require__(3270);
var DomHighlighter = (function (_super) {
    __extends(DomHighlighter, _super);
    function DomHighlighter(container, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, container, { compName: 'dom-highlighter' }, options) || this;
        _this.overlay = new tool_highlight_1.HighlightOverlay(window);
        _this.reset = function () {
            var viewportWidth = document.documentElement.clientWidth;
            var viewportHeight = document.documentElement.clientHeight;
            _this.overlay.reset({
                viewportSize: {
                    width: viewportWidth,
                    height: viewportHeight,
                },
                deviceScaleFactor: 1,
                pageScaleFactor: 1,
                pageZoomFactor: 1,
                emulationScaleFactor: 1,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
            });
        };
        _this.initOptions(options, {
            showRulers: false,
            showExtensionLines: false,
            showInfo: true,
            showStyles: true,
            showAccessibilityInfo: true,
            colorFormat: 'hex',
            contentColor: 'rgba(111, 168, 220, .66)',
            paddingColor: 'rgba(147, 196, 125, .55)',
            borderColor: 'rgba(255, 229, 153, .66)',
            marginColor: 'rgba(246, 178, 107, .66)',
            monitorResize: true,
        });
        _this.overlay.setContainer(container);
        _this.overlay.setPlatform('mac');
        _this.redraw = (0, throttle_1.default)(function () {
            _this.reset();
            _this.draw();
        }, 16);
        _this.redraw();
        _this.bindEvent();
        return _this;
    }
    DomHighlighter.prototype.highlight = function (target, options) {
        if (options) {
            (0, extend_1.default)(this.options, options);
        }
        this.target = target;
        if (target instanceof HTMLElement && this.options.monitorResize) {
            if (this.resizeSensor) {
                this.resizeSensor.destroy();
            }
            this.resizeSensor = new ResizeSensor_1.default(target);
            this.resizeSensor.addListener(this.redraw);
        }
        this.redraw();
    };
    DomHighlighter.prototype.hide = function () {
        this.target = null;
        this.redraw();
    };
    DomHighlighter.prototype.intercept = function (interceptor) {
        this.interceptor = interceptor;
    };
    DomHighlighter.prototype.destroy = function () {
        window.removeEventListener('resize', this.redraw);
        window.removeEventListener('scroll', this.redraw);
        if (this.resizeSensor) {
            this.resizeSensor.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    DomHighlighter.prototype.draw = function () {
        var target = this.target;
        if (!target) {
            return;
        }
        if (target instanceof Text) {
            this.drawText(target);
        }
        else {
            this.drawElement(target);
        }
    };
    DomHighlighter.prototype.drawText = function (target) {
        var options = this.options;
        var range = document.createRange();
        range.selectNode(target);
        var _a = range.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
        range.detach();
        var highlight = {
            paths: [
                {
                    path: this.rectToPath({
                        left: left,
                        top: top,
                        width: width,
                        height: height,
                    }),
                    fillColor: normalizeColor(options.contentColor),
                    name: 'content',
                },
            ],
            showExtensionLines: options.showExtensionLines,
            showRulers: options.showRulers,
        };
        if (options.showInfo) {
            highlight.elementInfo = {
                tagName: '#text',
                nodeWidth: width,
                nodeHeight: height,
            };
        }
        this.overlay.drawHighlight(highlight);
    };
    DomHighlighter.prototype.drawElement = function (target) {
        var highlight = {
            paths: this.getPaths(target),
            showExtensionLines: this.options.showExtensionLines,
            showRulers: this.options.showRulers,
            colorFormat: this.options.colorFormat,
        };
        if (this.options.showInfo) {
            highlight.elementInfo = this.getElementInfo(target);
        }
        if (this.interceptor) {
            var result = this.interceptor(highlight);
            if (result) {
                highlight = result;
            }
        }
        this.overlay.drawHighlight(highlight);
    };
    DomHighlighter.prototype.getPaths = function (target) {
        var options = this.options;
        var computedStyle = window.getComputedStyle(target);
        var _a = target.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
        var getNumStyle = function (name) {
            return (0, util_1.pxToNum)(computedStyle.getPropertyValue(name));
        };
        var ml = getNumStyle('margin-left');
        var mr = getNumStyle('margin-right');
        var mt = getNumStyle('margin-top');
        var mb = getNumStyle('margin-bottom');
        var bl = getNumStyle('border-left-width');
        var br = getNumStyle('border-right-width');
        var bt = getNumStyle('border-top-width');
        var bb = getNumStyle('border-bottom-width');
        var pl = getNumStyle('padding-left');
        var pr = getNumStyle('padding-right');
        var pt = getNumStyle('padding-top');
        var pb = getNumStyle('padding-bottom');
        var contentPath = {
            path: this.rectToPath({
                left: left + bl + pl,
                top: top + bt + pt,
                width: width - bl - pl - br - pr,
                height: height - bt - pt - bb - pb,
            }),
            fillColor: normalizeColor(options.contentColor),
            name: 'content',
        };
        var paddingPath = {
            path: this.rectToPath({
                left: left + bl,
                top: top + bt,
                width: width - bl - br,
                height: height - bt - bb,
            }),
            fillColor: normalizeColor(options.paddingColor),
            name: 'padding',
        };
        var borderPath = {
            path: this.rectToPath({
                left: left,
                top: top,
                width: width,
                height: height,
            }),
            fillColor: normalizeColor(options.borderColor),
            name: 'border',
        };
        var marginPath = {
            path: this.rectToPath({
                left: left - ml,
                top: top - mt,
                width: width + ml + mr,
                height: height + mt + mb,
            }),
            fillColor: normalizeColor(options.marginColor),
            name: 'margin',
        };
        return [contentPath, paddingPath, borderPath, marginPath];
    };
    DomHighlighter.prototype.getElementInfo = function (target) {
        var _a = target.getBoundingClientRect(), width = _a.width, height = _a.height;
        var className = target.getAttribute('class') || '';
        className = className
            .split(/\s+/)
            .map(function (c) { return '.' + c; })
            .join('');
        var elementInfo = {
            tagName: (0, lowerCase_1.default)(target.tagName),
            className: className,
            idValue: target.id,
            nodeWidth: width,
            nodeHeight: height,
        };
        if (this.options.showStyles) {
            elementInfo.style = this.getStyles(target);
        }
        if (this.options.showAccessibilityInfo) {
            (0, extend_1.default)(elementInfo, this.getAccessibilityInfo(target));
        }
        return elementInfo;
    };
    DomHighlighter.prototype.getStyles = function (target) {
        var computedStyle = window.getComputedStyle(target);
        var hasTextChildren = false;
        var childNodes = target.childNodes;
        for (var i = 0, len = childNodes.length; i < len; i++) {
            if (childNodes[i].nodeType === 3) {
                hasTextChildren = true;
            }
        }
        var properties = [];
        if (hasTextChildren) {
            properties.push('color', 'font-family', 'font-size', 'line-height');
        }
        properties.push('padding', 'margin', 'background-color');
        return propertiesToValues(computedStyle, properties);
    };
    DomHighlighter.prototype.getAccessibilityInfo = function (target) {
        var computedStyle = window.getComputedStyle(target);
        return __assign({ showAccessibilityInfo: true, contrast: __assign({ contrastAlgorithm: 'aa', textOpacity: 0.1 }, propertiesToValues(computedStyle, ['font-size', 'font-weight', 'background-color', 'text-opacity'], true)), isKeyboardFocusable: this.isFocusable(target) }, this.getAccessibleNameAndRole(target));
    };
    DomHighlighter.prototype.isFocusable = function (target) {
        var tagName = (0, lowerCase_1.default)(target.tagName);
        if ((0, contain_1.default)(['a', 'button', 'input', 'textarea', 'select', 'details'], tagName)) {
            return true;
        }
        var tabIdx = target.getAttribute('tabindex');
        if (tabIdx && (0, toNum_1.default)(tabIdx) > -1) {
            return true;
        }
        return false;
    };
    DomHighlighter.prototype.getAccessibleNameAndRole = function (target) {
        var name = target.getAttribute('labelledby') || target.getAttribute('aria-label');
        var role = target.getAttribute('role');
        var tagName = (0, lowerCase_1.default)(target.tagName);
        elementRoles_1.default.forEach(function (value) {
            var e_1, _a;
            if (role) {
                return;
            }
            var name = value[0];
            var attributes = value[2];
            if (name !== tagName) {
                return;
            }
            if (attributes) {
                try {
                    for (var attributes_1 = __values(attributes), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                        var attribute = attributes_1_1.value;
                        if (target.getAttribute(attribute[0]) !== attribute[1]) {
                            return;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (attributes_1_1 && !attributes_1_1.done && (_a = attributes_1.return)) _a.call(attributes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            role = value[1];
        });
        return {
            accessibleName: name || target.getAttribute('title') || '',
            accessibleRole: role || 'generic',
        };
    };
    DomHighlighter.prototype.bindEvent = function () {
        var _this = this;
        window.addEventListener('resize', this.redraw);
        window.addEventListener('scroll', this.redraw);
        this.on('optionChange', function () { return _this.redraw(); });
    };
    DomHighlighter.prototype.rectToPath = function (_a) {
        var left = _a.left, top = _a.top, width = _a.width, height = _a.height;
        var path = [];
        path.push('M', left, top);
        path.push('L', left + width, top);
        path.push('L', left + width, top + height);
        path.push('L', left, top + height);
        path.push('Z');
        return path;
    };
    return DomHighlighter;
}(Component_1.default));
exports["default"] = DomHighlighter;
module.exports = DomHighlighter;
module.exports["default"] = DomHighlighter;
var regRgb = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
var regRgba = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;
function isColor(color) {
    return regRgb.test(color) || regRgba.test(color);
}
function rgbToHex(rgb) {
    var color = Color_1.default.parse(rgb);
    var opacity = color.val[3] || 1;
    color.val = color.val.slice(0, 3);
    color.val.push(Math.round(255 * opacity));
    return '#' + (0, upperCase_1.default)(hex_1.default.encode(color.val));
}
function normalizeColor(color) {
    if ((0, isStr_1.default)(color)) {
        return color;
    }
    color = color;
    if (color.a) {
        return "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a, ")");
    }
    return "rgb(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ")");
}
function propertiesToValues(computedStyle, properties, useCamelCase) {
    if (useCamelCase === void 0) { useCamelCase = false; }
    var ret = {};
    (0, each_1.default)(properties, function (property) {
        var value = computedStyle[property === 'text-opacity' ? 'color' : property];
        if (!value) {
            return;
        }
        if (isColor(value)) {
            value = rgbToHex(value);
            if (property === 'text-opacity') {
                value = value.slice(7);
                value = hex_1.default.decode(value)[0] / 255;
            }
        }
        if (useCamelCase) {
            property = (0, camelCase_1.default)(property);
        }
        ret[property] = value;
    });
    return ret;
}


/***/ }),

/***/ 3703:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContrastThreshold = exports.isLargeFont = exports.getAPCAThreshold = exports.desiredLuminanceAPCA = exports.contrastRatioByLuminanceAPCA = exports.contrastRatioAPCA = exports.luminanceAPCA = exports.contrastRatio = exports.luminance = exports.rgbaToHsla = exports.blendColors = void 0;
function blendColors(fgRGBA, bgRGBA) {
    var alpha = fgRGBA[3];
    return [
        ((1 - alpha) * bgRGBA[0]) + (alpha * fgRGBA[0]),
        ((1 - alpha) * bgRGBA[1]) + (alpha * fgRGBA[1]),
        ((1 - alpha) * bgRGBA[2]) + (alpha * fgRGBA[2]),
        alpha + (bgRGBA[3] * (1 - alpha)),
    ];
}
exports.blendColors = blendColors;
function rgbaToHsla(_a) {
    var _b = __read(_a, 4), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;
    var sum = max + min;
    var h;
    if (min === max) {
        h = 0;
    }
    else if (r === max) {
        h = ((1 / 6 * (g - b) / diff) + 1) % 1;
    }
    else if (g === max) {
        h = (1 / 6 * (b - r) / diff) + 1 / 3;
    }
    else {
        h = (1 / 6 * (r - g) / diff) + 2 / 3;
    }
    var l = 0.5 * sum;
    var s;
    if (l === 0) {
        s = 0;
    }
    else if (l === 1) {
        s = 0;
    }
    else if (l <= 0.5) {
        s = diff / sum;
    }
    else {
        s = diff / (2 - sum);
    }
    return [h, s, l, a];
}
exports.rgbaToHsla = rgbaToHsla;
function luminance(_a) {
    var _b = __read(_a, 3), rSRGB = _b[0], gSRGB = _b[1], bSRGB = _b[2];
    var r = rSRGB <= 0.03928 ? rSRGB / 12.92 : Math.pow(((rSRGB + 0.055) / 1.055), 2.4);
    var g = gSRGB <= 0.03928 ? gSRGB / 12.92 : Math.pow(((gSRGB + 0.055) / 1.055), 2.4);
    var b = bSRGB <= 0.03928 ? bSRGB / 12.92 : Math.pow(((bSRGB + 0.055) / 1.055), 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
exports.luminance = luminance;
function contrastRatio(fgRGBA, bgRGBA) {
    var blendedFg = blendColors(fgRGBA, bgRGBA);
    var fgLuminance = luminance(blendedFg);
    var bgLuminance = luminance(bgRGBA);
    var contrastRatio = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    return contrastRatio;
}
exports.contrastRatio = contrastRatio;
var mainTRC = 2.4;
var normBgExp = 0.55;
var normFgExp = 0.58;
var revBgExp = 0.62;
var revFgExp = 0.57;
var blkThrs = 0.03;
var blkClmp = 1.45;
var scaleBoW = 1.25;
var scaleWoB = 1.25;
var deltaLuminanceMin = 0.0005;
var loConThresh = 0.078;
var loConFactor = 12.82051282051282;
var loConOffset = 0.06;
var loClip = 0.001;
function luminanceAPCA(_a) {
    var _b = __read(_a, 3), rSRGB = _b[0], gSRGB = _b[1], bSRGB = _b[2];
    var r = Math.pow(rSRGB, mainTRC);
    var g = Math.pow(gSRGB, mainTRC);
    var b = Math.pow(bSRGB, mainTRC);
    return 0.2126729 * r + 0.7151522 * g + 0.0721750 * b;
}
exports.luminanceAPCA = luminanceAPCA;
function contrastRatioAPCA(fgRGBA, bgRGBA) {
    return contrastRatioByLuminanceAPCA(luminanceAPCA(fgRGBA), luminanceAPCA(bgRGBA));
}
exports.contrastRatioAPCA = contrastRatioAPCA;
function clampLuminance(value) {
    return value > blkThrs ? value : (value + Math.pow(blkThrs - value, blkClmp));
}
function contrastRatioByLuminanceAPCA(fgLuminance, bgLuminance) {
    fgLuminance = clampLuminance(fgLuminance);
    bgLuminance = clampLuminance(bgLuminance);
    if (Math.abs(fgLuminance - bgLuminance) < deltaLuminanceMin) {
        return 0;
    }
    var result = 0;
    if (bgLuminance >= fgLuminance) {
        result = (Math.pow(bgLuminance, normBgExp) - Math.pow(fgLuminance, normFgExp)) * scaleBoW;
        result = result < loClip ?
            0 :
            (result < loConThresh ? result - result * loConFactor * loConOffset : result - loConOffset);
    }
    else {
        result = (Math.pow(bgLuminance, revBgExp) - Math.pow(fgLuminance, revFgExp)) * scaleWoB;
        result = result > -loClip ?
            0 :
            (result > -loConThresh ? result - result * loConFactor * loConOffset : result + loConOffset);
    }
    return result * 100;
}
exports.contrastRatioByLuminanceAPCA = contrastRatioByLuminanceAPCA;
function desiredLuminanceAPCA(luminance, contrast, lighter) {
    luminance = clampLuminance(luminance);
    contrast /= 100;
    function computeLuminance() {
        if (!lighter) {
            return Math.pow(Math.abs(Math.pow(luminance, normBgExp) - (contrast + loConOffset) / scaleBoW), 1 / normFgExp);
        }
        return Math.pow(Math.abs(Math.pow(luminance, revBgExp) - (-contrast - loConOffset) / scaleWoB), 1 / revFgExp);
    }
    var desiredLuminance = computeLuminance();
    if (desiredLuminance < 0 || desiredLuminance > 1) {
        lighter = !lighter;
        desiredLuminance = computeLuminance();
    }
    return desiredLuminance;
}
exports.desiredLuminanceAPCA = desiredLuminanceAPCA;
var contrastAPCALookupTable = [
    [12, -1, -1, -1, -1, 100, 90, 80, -1, -1],
    [14, -1, -1, -1, 100, 90, 80, 60, 60, -1],
    [16, -1, -1, 100, 90, 80, 60, 55, 50, 50],
    [18, -1, -1, 90, 80, 60, 55, 50, 40, 40],
    [24, -1, 100, 80, 60, 55, 50, 40, 38, 35],
    [30, -1, 90, 70, 55, 50, 40, 38, 35, 40],
    [36, -1, 80, 60, 50, 40, 38, 35, 30, 25],
    [48, 100, 70, 55, 40, 38, 35, 30, 25, 20],
    [60, 90, 60, 50, 38, 35, 30, 25, 20, 20],
    [72, 80, 55, 40, 35, 30, 25, 20, 20, 20],
    [96, 70, 50, 35, 30, 25, 20, 20, 20, 20],
    [120, 60, 40, 30, 25, 20, 20, 20, 20, 20],
];
contrastAPCALookupTable.reverse();
function getAPCAThreshold(fontSize, fontWeight) {
    var e_1, _a, e_2, _b;
    var size = parseFloat(fontSize.replace('px', ''));
    var weight = parseFloat(fontWeight);
    try {
        for (var contrastAPCALookupTable_1 = __values(contrastAPCALookupTable), contrastAPCALookupTable_1_1 = contrastAPCALookupTable_1.next(); !contrastAPCALookupTable_1_1.done; contrastAPCALookupTable_1_1 = contrastAPCALookupTable_1.next()) {
            var _c = __read(contrastAPCALookupTable_1_1.value), rowSize = _c[0], rowWeights = _c.slice(1);
            if (size >= rowSize) {
                try {
                    for (var _d = (e_2 = void 0, __values([900, 800, 700, 600, 500, 400, 300, 200, 100].entries())), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var _f = __read(_e.value, 2), idx = _f[0], keywordWeight = _f[1];
                        if (weight >= keywordWeight) {
                            var threshold = rowWeights[rowWeights.length - 1 - idx];
                            return threshold === -1 ? null : threshold;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (contrastAPCALookupTable_1_1 && !contrastAPCALookupTable_1_1.done && (_a = contrastAPCALookupTable_1.return)) _a.call(contrastAPCALookupTable_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
exports.getAPCAThreshold = getAPCAThreshold;
function isLargeFont(fontSize, fontWeight) {
    var boldWeights = ['bold', 'bolder', '600', '700', '800', '900'];
    var fontSizePx = parseFloat(fontSize.replace('px', ''));
    var isBold = (boldWeights.indexOf(fontWeight) !== -1);
    var fontSizePt = fontSizePx * 72 / 96;
    if (isBold) {
        return fontSizePt >= 14;
    }
    return fontSizePt >= 18;
}
exports.isLargeFont = isLargeFont;
var contrastThresholds = {
    largeFont: { aa: 3.0, aaa: 4.5 },
    normalFont: { aa: 4.5, aaa: 7.0 },
};
function getContrastThreshold(fontSize, fontWeight) {
    if (isLargeFont(fontSize, fontWeight)) {
        return contrastThresholds.largeFont;
    }
    return contrastThresholds.normalFont;
}
exports.getContrastThreshold = getContrastThreshold;


/***/ }),

/***/ 162:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.adoptStyleSheet = exports.constrainNumber = exports.ellipsify = exports.createElement = exports.createTextChild = exports.createChild = exports.log = exports.Overlay = void 0;
var Overlay = (function () {
    function Overlay(window, style) {
        if (style === void 0) { style = []; }
        this.viewportSize = { width: 800, height: 600 };
        this.deviceScaleFactor = 1;
        this.emulationScaleFactor = 1;
        this.pageScaleFactor = 1;
        this.pageZoomFactor = 1;
        this.scrollX = 0;
        this.scrollY = 0;
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this._installed = false;
        this._window = window;
        this._document = window.document;
        if (!Array.isArray(style)) {
            style = [style];
        }
        this.style = style;
    }
    Overlay.prototype.setCanvas = function (canvas) {
        this.canvas = canvas;
        this._context = canvas.getContext('2d');
    };
    Overlay.prototype.install = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.style), _c = _b.next(); !_c.done; _c = _b.next()) {
                var style = _c.value;
                adoptStyleSheet(style);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._installed = true;
    };
    Overlay.prototype.uninstall = function () {
        var e_2, _a;
        var _loop_1 = function (style) {
            document.adoptedStyleSheets = document.adoptedStyleSheets.filter(function (s) { return s !== style; });
        };
        try {
            for (var _b = __values(this.style), _c = _b.next(); !_c.done; _c = _b.next()) {
                var style = _c.value;
                _loop_1(style);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._installed = false;
    };
    Overlay.prototype.reset = function (resetData) {
        if (resetData) {
            this.viewportSize = resetData.viewportSize;
            this.visualViewportSize = resetData.visualViewportSize;
            this.deviceScaleFactor = resetData.deviceScaleFactor;
            this.pageScaleFactor = resetData.pageScaleFactor;
            this.pageZoomFactor = resetData.pageZoomFactor;
            this.emulationScaleFactor = resetData.emulationScaleFactor;
            this.scrollX = Math.round(resetData.scrollX);
            this.scrollY = Math.round(resetData.scrollY);
        }
        this.resetCanvas();
    };
    Overlay.prototype.resetCanvas = function () {
        if (!this.canvas || !this._context) {
            return;
        }
        this.canvas.width = this.deviceScaleFactor * this.viewportSize.width;
        this.canvas.height = this.deviceScaleFactor * this.viewportSize.height;
        this.canvas.style.width = this.viewportSize.width + 'px';
        this.canvas.style.height = this.viewportSize.height + 'px';
        this._context.scale(this.deviceScaleFactor, this.deviceScaleFactor);
        this.canvasWidth = this.viewportSize.width;
        this.canvasHeight = this.viewportSize.height;
    };
    Overlay.prototype.setPlatform = function (platform) {
        this.platform = platform;
        if (!this._installed) {
            this.install();
        }
    };
    Overlay.prototype.dispatch = function (message) {
        var functionName = message.shift();
        this[functionName].apply(this, message);
    };
    Overlay.prototype.eventHasCtrlOrMeta = function (event) {
        return this.platform === 'mac' ? (event.metaKey && !event.ctrlKey) : (event.ctrlKey && !event.metaKey);
    };
    Object.defineProperty(Overlay.prototype, "context", {
        get: function () {
            if (!this._context) {
                throw new Error('Context object is missing');
            }
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Overlay.prototype, "document", {
        get: function () {
            if (!this._document) {
                throw new Error('Document object is missing');
            }
            return this._document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Overlay.prototype, "window", {
        get: function () {
            if (!this._window) {
                throw new Error('Window object is missing');
            }
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Overlay.prototype, "installed", {
        get: function () {
            return this._installed;
        },
        enumerable: false,
        configurable: true
    });
    return Overlay;
}());
exports.Overlay = Overlay;
function log(text) {
    var element = document.getElementById('log');
    if (!element) {
        element = createChild(document.body, 'div');
        element.id = 'log';
    }
    createChild(element, 'div').textContent = text;
}
exports.log = log;
function createChild(parent, tagName, className) {
    var element = createElement(tagName, className);
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    }, false);
    parent.appendChild(element);
    return element;
}
exports.createChild = createChild;
function createTextChild(parent, text) {
    var element = document.createTextNode(text);
    parent.appendChild(element);
    return element;
}
exports.createTextChild = createTextChild;
function createElement(tagName, className) {
    var element = document.createElement(tagName);
    if (className) {
        var classNames = className.split(/\s+/);
        classNames = classNames.map(function (className) { return 'luna-dom-highlighter-' + className; });
        element.className = classNames.join(' ');
    }
    return element;
}
exports.createElement = createElement;
function ellipsify(str, maxLength) {
    if (str.length <= maxLength) {
        return String(str);
    }
    return str.substr(0, maxLength - 1) + '\u2026';
}
exports.ellipsify = ellipsify;
function constrainNumber(num, min, max) {
    if (num < min) {
        num = min;
    }
    else if (num > max) {
        num = max;
    }
    return num;
}
exports.constrainNumber = constrainNumber;
function adoptStyleSheet(styleSheet) {
    document.adoptedStyleSheets = __spreadArray(__spreadArray([], __read(document.adoptedStyleSheets), false), [styleSheet], false);
}
exports.adoptStyleSheet = adoptStyleSheet;


/***/ }),

/***/ 3979:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawPath = exports.formatColor = exports.formatRgba = exports.parseHexa = exports.createPathForQuad = exports.hatchFillPath = exports.applyMatrixToPoint = exports.emptyBounds = exports.buildPath = exports.fillPathWithBoxStyle = exports.drawPathWithLineStyle = void 0;
var endWith_1 = __importDefault(__webpack_require__(1580));
var ColorUtils_1 = __webpack_require__(3703);
function drawPathWithLineStyle(context, path, lineStyle, lineWidth) {
    if (lineWidth === void 0) { lineWidth = 1; }
    if (lineStyle && lineStyle.color) {
        context.save();
        context.translate(0.5, 0.5);
        context.lineWidth = lineWidth;
        if (lineStyle.pattern === "dashed") {
            context.setLineDash([3, 3]);
        }
        if (lineStyle.pattern === "dotted") {
            context.setLineDash([2, 2]);
        }
        context.strokeStyle = lineStyle.color;
        context.stroke(path);
        context.restore();
    }
}
exports.drawPathWithLineStyle = drawPathWithLineStyle;
function fillPathWithBoxStyle(context, path, bounds, angle, boxStyle) {
    if (!boxStyle) {
        return;
    }
    context.save();
    if (boxStyle.fillColor) {
        context.fillStyle = boxStyle.fillColor;
        context.fill(path);
    }
    if (boxStyle.hatchColor) {
        hatchFillPath(context, path, bounds, 10, boxStyle.hatchColor, angle, false);
    }
    context.restore();
}
exports.fillPathWithBoxStyle = fillPathWithBoxStyle;
function buildPath(commands, bounds, emulationScaleFactor) {
    var commandsIndex = 0;
    function extractPoints(count) {
        var points = [];
        for (var i = 0; i < count; ++i) {
            var x = Math.round(commands[commandsIndex++] * emulationScaleFactor);
            bounds.maxX = Math.max(bounds.maxX, x);
            bounds.minX = Math.min(bounds.minX, x);
            var y = Math.round(commands[commandsIndex++] * emulationScaleFactor);
            bounds.maxY = Math.max(bounds.maxY, y);
            bounds.minY = Math.min(bounds.minY, y);
            bounds.leftmostXForY[y] = Math.min(bounds.leftmostXForY[y] || Number.MAX_VALUE, x);
            bounds.rightmostXForY[y] = Math.max(bounds.rightmostXForY[y] || Number.MIN_VALUE, x);
            bounds.topmostYForX[x] = Math.min(bounds.topmostYForX[x] || Number.MAX_VALUE, y);
            bounds.bottommostYForX[x] = Math.max(bounds.bottommostYForX[x] || Number.MIN_VALUE, y);
            bounds.allPoints.push({ x: x, y: y });
            points.push(x, y);
        }
        return points;
    }
    var commandsLength = commands.length;
    var path = new Path2D();
    while (commandsIndex < commandsLength) {
        switch (commands[commandsIndex++]) {
            case 'M':
                path.moveTo.apply(path, extractPoints(1));
                break;
            case 'L':
                path.lineTo.apply(path, extractPoints(1));
                break;
            case 'C':
                path.bezierCurveTo.apply(path, extractPoints(3));
                break;
            case 'Q':
                path.quadraticCurveTo.apply(path, extractPoints(2));
                break;
            case 'Z':
                path.closePath();
                break;
        }
    }
    return path;
}
exports.buildPath = buildPath;
function emptyBounds() {
    var bounds = {
        minX: Number.MAX_VALUE,
        minY: Number.MAX_VALUE,
        maxX: -Number.MAX_VALUE,
        maxY: -Number.MAX_VALUE,
        leftmostXForY: {},
        rightmostXForY: {},
        topmostYForX: {},
        bottommostYForX: {},
        allPoints: [],
    };
    return bounds;
}
exports.emptyBounds = emptyBounds;
function applyMatrixToPoint(point, matrix) {
    var domPoint = new DOMPoint(point.x, point.y);
    domPoint = domPoint.matrixTransform(matrix);
    return { x: domPoint.x, y: domPoint.y };
}
exports.applyMatrixToPoint = applyMatrixToPoint;
var HATCH_LINE_LENGTH = 5;
var HATCH_LINE_GAP = 3;
var hatchLinePattern;
var hatchLineColor = '';
function hatchFillPath(context, path, bounds, delta, color, rotationAngle, flipDirection) {
    if (context.canvas.width < bounds.maxX - bounds.minX || context.canvas.height < bounds.maxY - bounds.minY) {
        bounds = {
            minX: 0,
            maxX: context.canvas.width,
            minY: 0,
            maxY: context.canvas.height,
            allPoints: [],
        };
    }
    if (!hatchLinePattern || color !== hatchLineColor) {
        hatchLineColor = color;
        var offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = delta;
        offscreenCanvas.height = HATCH_LINE_LENGTH + HATCH_LINE_GAP;
        var offscreenCtx = offscreenCanvas.getContext('2d');
        offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        offscreenCtx.rect(0, 0, 1, HATCH_LINE_LENGTH);
        offscreenCtx.fillStyle = color;
        offscreenCtx.fill();
        hatchLinePattern = context.createPattern(offscreenCanvas, 'repeat');
    }
    context.save();
    var matrix = new DOMMatrix();
    hatchLinePattern.setTransform(matrix.scale(flipDirection ? -1 : 1, 1).rotate(0, 0, -45 + rotationAngle));
    context.fillStyle = hatchLinePattern;
    context.fill(path);
    context.restore();
}
exports.hatchFillPath = hatchFillPath;
function createPathForQuad(outerQuad, quadsToClip, bounds, emulationScaleFactor) {
    var e_1, _a;
    var commands = [
        'M',
        outerQuad.p1.x,
        outerQuad.p1.y,
        'L',
        outerQuad.p2.x,
        outerQuad.p2.y,
        'L',
        outerQuad.p3.x,
        outerQuad.p3.y,
        'L',
        outerQuad.p4.x,
        outerQuad.p4.y,
    ];
    try {
        for (var quadsToClip_1 = __values(quadsToClip), quadsToClip_1_1 = quadsToClip_1.next(); !quadsToClip_1_1.done; quadsToClip_1_1 = quadsToClip_1.next()) {
            var quad = quadsToClip_1_1.value;
            commands = __spreadArray(__spreadArray([], __read(commands), false), [
                'L', quad.p4.x, quad.p4.y, 'L', quad.p3.x, quad.p3.y, 'L', quad.p2.x,
                quad.p2.y, 'L', quad.p1.x, quad.p1.y, 'L', quad.p4.x, quad.p4.y, 'L', outerQuad.p4.x,
                outerQuad.p4.y,
            ], false);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (quadsToClip_1_1 && !quadsToClip_1_1.done && (_a = quadsToClip_1.return)) _a.call(quadsToClip_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    commands.push('Z');
    return buildPath(commands, bounds, emulationScaleFactor);
}
exports.createPathForQuad = createPathForQuad;
function parseHexa(hexa) {
    return (hexa.match(/#(\w\w)(\w\w)(\w\w)(\w\w)/) || []).slice(1).map(function (c) { return parseInt(c, 16) / 255; });
}
exports.parseHexa = parseHexa;
function formatRgba(rgba, colorFormat) {
    if (colorFormat === 'rgb') {
        var _a = __read(rgba, 4), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        return "rgb(".concat((r * 255).toFixed(), " ").concat((g * 255).toFixed(), " ").concat((b * 255).toFixed()).concat(a === 1 ? '' : ' / ' + Math.round(a * 100) / 100, ")");
    }
    if (colorFormat === 'hsl') {
        var _b = __read((0, ColorUtils_1.rgbaToHsla)(rgba), 4), h = _b[0], s = _b[1], l = _b[2], a = _b[3];
        return "hsl(".concat(Math.round(h * 360), "deg ").concat(Math.round(s * 100), " ").concat(Math.round(l * 100)).concat(a === 1 ? '' : ' / ' + Math.round(a * 100) / 100, ")");
    }
    throw new Error('NOT_REACHED');
}
exports.formatRgba = formatRgba;
function formatColor(hexa, colorFormat) {
    if (colorFormat === 'rgb' || colorFormat === 'hsl') {
        return formatRgba(parseHexa(hexa), colorFormat);
    }
    if ((0, endWith_1.default)(hexa, 'FF')) {
        return hexa.substr(0, 7);
    }
    return hexa;
}
exports.formatColor = formatColor;
function drawPath(context, commands, fillColor, outlineColor, outlinePattern, bounds, emulationScaleFactor) {
    context.save();
    var path = buildPath(commands, bounds, emulationScaleFactor);
    if (fillColor) {
        context.fillStyle = fillColor;
        context.fill(path);
    }
    if (outlineColor) {
        if (outlinePattern === "dashed") {
            context.setLineDash([3, 3]);
        }
        if (outlinePattern === "dotted") {
            context.setLineDash([2, 2]);
        }
        context.lineWidth = 2;
        context.strokeStyle = outlineColor;
        context.stroke(path);
    }
    context.restore();
    return path;
}
exports.drawPath = drawPath;


/***/ }),

/***/ 926:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightOverlay = void 0;
var endWith_1 = __importDefault(__webpack_require__(1580));
var ColorUtils_1 = __webpack_require__(3703);
var common_1 = __webpack_require__(162);
var highlight_common_1 = __webpack_require__(3979);
var HighlightOverlay = (function (_super) {
    __extends(HighlightOverlay, _super);
    function HighlightOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gridLabelState = { gridLayerCounter: 0 };
        return _this;
    }
    HighlightOverlay.prototype.setContainer = function (container) {
        this._container = container;
    };
    HighlightOverlay.prototype.setPlatform = function (platform) {
        if (this.container) {
            this.container.classList.add('luna-dom-highlighter-platform-' + platform);
        }
        _super.prototype.setPlatform.call(this, platform);
    };
    Object.defineProperty(HighlightOverlay.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    HighlightOverlay.prototype.reset = function (resetData) {
        _super.prototype.reset.call(this, resetData);
        this.tooltip.innerHTML = '';
        this.gridLabelState.gridLayerCounter = 0;
    };
    HighlightOverlay.prototype.install = function () {
        var canvas = this.document.createElement('canvas');
        canvas.classList.add('luna-dom-highlighter-fill');
        this.container.appendChild(canvas);
        var tooltip = this.document.createElement('div');
        this.container.appendChild(tooltip);
        this.tooltip = tooltip;
        this.setCanvas(canvas);
        _super.prototype.install.call(this);
    };
    HighlightOverlay.prototype.uninstall = function () {
        this.document.body.classList.remove('fill');
        this.document.body.innerHTML = '';
        _super.prototype.uninstall.call(this);
    };
    HighlightOverlay.prototype.drawHighlight = function (highlight) {
        this.context.save();
        var bounds = (0, highlight_common_1.emptyBounds)();
        for (var paths = highlight.paths.slice(); paths.length;) {
            var path = paths.pop();
            if (!path) {
                continue;
            }
            this.context.save();
            (0, highlight_common_1.drawPath)(this.context, path.path, path.fillColor, path.outlineColor, undefined, bounds, this.emulationScaleFactor);
            if (paths.length) {
                this.context.globalCompositeOperation = 'destination-out';
                (0, highlight_common_1.drawPath)(this.context, paths[paths.length - 1].path, 'red', undefined, undefined, bounds, this.emulationScaleFactor);
            }
            this.context.restore();
        }
        this.context.restore();
        this.context.save();
        var rulerAtRight = Boolean(highlight.paths.length && highlight.showRulers && bounds.minX < 20 && bounds.maxX + 20 < this.canvasWidth);
        var rulerAtBottom = Boolean(highlight.paths.length && highlight.showRulers && bounds.minY < 20 && bounds.maxY + 20 < this.canvasHeight);
        if (highlight.showRulers) {
            this.drawAxis(this.context, rulerAtRight, rulerAtBottom);
        }
        if (highlight.paths.length) {
            if (highlight.showExtensionLines) {
                drawRulers(this.context, bounds, rulerAtRight, rulerAtBottom, undefined, false, this.canvasWidth, this.canvasHeight);
            }
            if (highlight.elementInfo) {
                drawElementTitle(this.tooltip, highlight.elementInfo, highlight.colorFormat, bounds, this.canvasWidth, this.canvasHeight);
            }
        }
        this.context.restore();
        return { bounds: bounds };
    };
    HighlightOverlay.prototype.drawAxis = function (context, rulerAtRight, rulerAtBottom) {
        context.save();
        var pageFactor = this.pageZoomFactor * this.pageScaleFactor * this.emulationScaleFactor;
        var scrollX = this.scrollX * this.pageScaleFactor;
        var scrollY = this.scrollY * this.pageScaleFactor;
        function zoom(x) {
            return Math.round(x * pageFactor);
        }
        function unzoom(x) {
            return Math.round(x / pageFactor);
        }
        var width = this.canvasWidth / pageFactor;
        var height = this.canvasHeight / pageFactor;
        var gridSubStep = 5;
        var gridStep = 50;
        {
            context.save();
            context.fillStyle = gridBackgroundColor;
            if (rulerAtBottom) {
                context.fillRect(0, zoom(height) - 15, zoom(width), zoom(height));
            }
            else {
                context.fillRect(0, 0, zoom(width), 15);
            }
            context.globalCompositeOperation = 'destination-out';
            context.fillStyle = 'red';
            if (rulerAtRight) {
                context.fillRect(zoom(width) - 15, 0, zoom(width), zoom(height));
            }
            else {
                context.fillRect(0, 0, 15, zoom(height));
            }
            context.restore();
            context.fillStyle = gridBackgroundColor;
            if (rulerAtRight) {
                context.fillRect(zoom(width) - 15, 0, zoom(width), zoom(height));
            }
            else {
                context.fillRect(0, 0, 15, zoom(height));
            }
        }
        context.lineWidth = 1;
        context.strokeStyle = darkGridColor;
        context.fillStyle = darkGridColor;
        {
            context.save();
            context.translate(-scrollX, 0.5 - scrollY);
            var maxY = height + unzoom(scrollY);
            for (var y = 2 * gridStep; y < maxY; y += 2 * gridStep) {
                context.save();
                context.translate(scrollX, zoom(y));
                context.rotate(-Math.PI / 2);
                context.fillText(String(y), 2, rulerAtRight ? zoom(width) - 7 : 13);
                context.restore();
            }
            context.translate(0.5, -0.5);
            var maxX = width + unzoom(scrollX);
            for (var x = 2 * gridStep; x < maxX; x += 2 * gridStep) {
                context.save();
                context.fillText(String(x), zoom(x) + 2, rulerAtBottom ? scrollY + zoom(height) - 7 : scrollY + 13);
                context.restore();
            }
            context.restore();
        }
        {
            context.save();
            if (rulerAtRight) {
                context.translate(zoom(width), 0);
                context.scale(-1, 1);
            }
            context.translate(-scrollX, 0.5 - scrollY);
            var maxY = height + unzoom(scrollY);
            for (var y = gridStep; y < maxY; y += gridStep) {
                context.beginPath();
                context.moveTo(scrollX, zoom(y));
                var markLength = (y % (gridStep * 2)) ? 5 : 8;
                context.lineTo(scrollX + markLength, zoom(y));
                context.stroke();
            }
            context.strokeStyle = lightGridColor;
            for (var y = gridSubStep; y < maxY; y += gridSubStep) {
                if (!(y % gridStep)) {
                    continue;
                }
                context.beginPath();
                context.moveTo(scrollX, zoom(y));
                context.lineTo(scrollX + gridSubStep, zoom(y));
                context.stroke();
            }
            context.restore();
        }
        {
            context.save();
            if (rulerAtBottom) {
                context.translate(0, zoom(height));
                context.scale(1, -1);
            }
            context.translate(0.5 - scrollX, -scrollY);
            var maxX = width + unzoom(scrollX);
            for (var x = gridStep; x < maxX; x += gridStep) {
                context.beginPath();
                context.moveTo(zoom(x), scrollY);
                var markLength = (x % (gridStep * 2)) ? 5 : 8;
                context.lineTo(zoom(x), scrollY + markLength);
                context.stroke();
            }
            context.strokeStyle = lightGridColor;
            for (var x = gridSubStep; x < maxX; x += gridSubStep) {
                if (!(x % gridStep)) {
                    continue;
                }
                context.beginPath();
                context.moveTo(zoom(x), scrollY);
                context.lineTo(zoom(x), scrollY + gridSubStep);
                context.stroke();
            }
            context.restore();
        }
        context.restore();
    };
    return HighlightOverlay;
}(common_1.Overlay));
exports.HighlightOverlay = HighlightOverlay;
var lightGridColor = 'rgba(0,0,0,0.2)';
var darkGridColor = 'rgba(0,0,0,0.7)';
var gridBackgroundColor = 'rgba(255, 255, 255, 0.8)';
function getElementLayoutType(elementInfo) {
    if (elementInfo.layoutObjectName && (0, endWith_1.default)(elementInfo.layoutObjectName, 'Grid')) {
        return 'grid';
    }
    if (elementInfo.layoutObjectName && elementInfo.layoutObjectName === 'LayoutNGFlexibleBox') {
        return 'flex';
    }
    return null;
}
function createElementDescription(elementInfo, colorFormat) {
    var elementInfoElement = (0, common_1.createElement)('div', 'element-info');
    var elementInfoHeaderElement = (0, common_1.createChild)(elementInfoElement, 'div', 'element-info-header');
    var layoutType = getElementLayoutType(elementInfo);
    if (layoutType) {
        (0, common_1.createChild)(elementInfoHeaderElement, 'div', "element-layout-type ".concat(layoutType));
    }
    var descriptionElement = (0, common_1.createChild)(elementInfoHeaderElement, 'div', 'element-description');
    var tagNameElement = (0, common_1.createChild)(descriptionElement, 'span', 'material-tag-name');
    tagNameElement.textContent = elementInfo.tagName;
    var nodeIdElement = (0, common_1.createChild)(descriptionElement, 'span', 'material-node-id');
    var maxLength = 80;
    nodeIdElement.textContent = elementInfo.idValue ? '#' + (0, common_1.ellipsify)(elementInfo.idValue, maxLength) : '';
    nodeIdElement.classList.toggle('hidden', !elementInfo.idValue);
    var classNameElement = (0, common_1.createChild)(descriptionElement, 'span', 'material-class-name');
    if (nodeIdElement.textContent.length < maxLength) {
        classNameElement.textContent = (0, common_1.ellipsify)(elementInfo.className || '', maxLength - nodeIdElement.textContent.length);
    }
    classNameElement.classList.toggle('hidden', !elementInfo.className);
    var dimensionsElement = (0, common_1.createChild)(elementInfoHeaderElement, 'div', 'dimensions');
    (0, common_1.createChild)(dimensionsElement, 'span', 'material-node-width').textContent =
        String(Math.round(elementInfo.nodeWidth * 100) / 100);
    (0, common_1.createTextChild)(dimensionsElement, '\u00d7');
    (0, common_1.createChild)(dimensionsElement, 'span', 'material-node-height').textContent =
        String(Math.round(elementInfo.nodeHeight * 100) / 100);
    var style = elementInfo.style || {};
    var elementInfoBodyElement;
    if (elementInfo.isLockedAncestor) {
        addTextRow('Showing content-visibility ancestor', '');
    }
    if (elementInfo.isLocked) {
        addTextRow('Descendants are skipped due to content-visibility', '');
    }
    var color = style['color'];
    if (color && color !== '#00000000') {
        addColorRow('Color', color, colorFormat);
    }
    var fontFamily = style['font-family'];
    var fontSize = style['font-size'];
    if (fontFamily && fontSize !== '0px') {
        addTextRow('Font', "".concat(fontSize, " ").concat(fontFamily));
    }
    var bgcolor = style['background-color'];
    if (bgcolor && bgcolor !== '#00000000') {
        addColorRow('Background', bgcolor, colorFormat);
    }
    var margin = style['margin'];
    if (margin && margin !== '0px') {
        addTextRow('Margin', margin);
    }
    var padding = style['padding'];
    if (padding && padding !== '0px') {
        addTextRow('Padding', padding);
    }
    var cbgColor = elementInfo.contrast ? elementInfo.contrast.backgroundColor : null;
    var hasContrastInfo = color && color !== '#00000000' && cbgColor && cbgColor !== '#00000000';
    if (elementInfo.showAccessibilityInfo) {
        addSection('Accessibility');
        if (hasContrastInfo && style['color'] && elementInfo.contrast) {
            addContrastRow(style['color'], elementInfo.contrast);
        }
        addTextRow('Name', elementInfo.accessibleName);
        addTextRow('Role', elementInfo.accessibleRole);
        addIconRow('Keyboard-focusable', elementInfo.isKeyboardFocusable ? 'a11y-icon a11y-icon-ok' : 'a11y-icon a11y-icon-not-ok');
    }
    function ensureElementInfoBody() {
        if (!elementInfoBodyElement) {
            elementInfoBodyElement = (0, common_1.createChild)(elementInfoElement, 'div', 'element-info-body');
        }
    }
    function addSection(name) {
        ensureElementInfoBody();
        var rowElement = (0, common_1.createChild)(elementInfoBodyElement, 'div', 'element-info-row element-info-section');
        var nameElement = (0, common_1.createChild)(rowElement, 'div', 'section-name');
        nameElement.textContent = name;
        (0, common_1.createChild)((0, common_1.createChild)(rowElement, 'div', 'separator-container'), 'div', 'separator');
    }
    function addRow(name, rowClassName, valueClassName) {
        ensureElementInfoBody();
        var rowElement = (0, common_1.createChild)(elementInfoBodyElement, 'div', 'element-info-row');
        if (rowClassName) {
            rowElement.classList.add(rowClassName);
        }
        var nameElement = (0, common_1.createChild)(rowElement, 'div', 'element-info-name');
        nameElement.textContent = name;
        (0, common_1.createChild)(rowElement, 'div', 'element-info-gap');
        return (0, common_1.createChild)(rowElement, 'div', valueClassName || '');
    }
    function addIconRow(name, value) {
        (0, common_1.createChild)(addRow(name, '', 'element-info-value-icon'), 'div', value);
    }
    function addTextRow(name, value) {
        (0, common_1.createTextChild)(addRow(name, '', 'element-info-value-text'), value);
    }
    function addColorRow(name, color, colorFormat) {
        var valueElement = addRow(name, '', 'element-info-value-color');
        var swatch = (0, common_1.createChild)(valueElement, 'div', 'color-swatch');
        var inner = (0, common_1.createChild)(swatch, 'div', 'color-swatch-inner');
        inner.style.backgroundColor = color;
        (0, common_1.createTextChild)(valueElement, (0, highlight_common_1.formatColor)(color, colorFormat));
    }
    function addContrastRow(fgColor, contrast) {
        var parsedFgColor = (0, highlight_common_1.parseHexa)(fgColor);
        var parsedBgColor = (0, highlight_common_1.parseHexa)(contrast.backgroundColor);
        parsedFgColor[3] *= contrast.textOpacity;
        var valueElement = addRow('Contrast', '', 'element-info-value-contrast');
        var sampleText = (0, common_1.createChild)(valueElement, 'div', 'contrast-text');
        sampleText.style.color = (0, highlight_common_1.formatRgba)(parsedFgColor, 'rgb');
        sampleText.style.backgroundColor = contrast.backgroundColor;
        sampleText.textContent = 'Aa';
        var valueSpan = (0, common_1.createChild)(valueElement, 'span');
        if (contrast.contrastAlgorithm === 'apca') {
            var percentage = (0, ColorUtils_1.contrastRatioAPCA)(parsedFgColor, parsedBgColor);
            var threshold = (0, ColorUtils_1.getAPCAThreshold)(contrast.fontSize, contrast.fontWeight);
            valueSpan.textContent = String(Math.floor(percentage * 100) / 100) + '%';
            (0, common_1.createChild)(valueElement, 'div', threshold === null || Math.abs(percentage) < threshold ? 'a11y-icon a11y-icon-warning' :
                'a11y-icon a11y-icon-ok');
        }
        else if (contrast.contrastAlgorithm === 'aa' || contrast.contrastAlgorithm === 'aaa') {
            var ratio = (0, ColorUtils_1.contrastRatio)(parsedFgColor, parsedBgColor);
            var threshold = (0, ColorUtils_1.getContrastThreshold)(contrast.fontSize, contrast.fontWeight)[contrast.contrastAlgorithm];
            valueSpan.textContent = String(Math.floor(ratio * 100) / 100);
            (0, common_1.createChild)(valueElement, 'div', ratio < threshold ? 'a11y-icon a11y-icon-warning' : 'a11y-icon a11y-icon-ok');
        }
    }
    return elementInfoElement;
}
function drawElementTitle(tooltipContainer, elementInfo, colorFormat, bounds, canvasWidth, canvasHeight) {
    tooltipContainer.innerHTML = '';
    var wrapper = (0, common_1.createChild)(tooltipContainer, 'div');
    var tooltipContent = (0, common_1.createChild)(wrapper, 'div', 'tooltip-content');
    var tooltip = createElementDescription(elementInfo, colorFormat);
    tooltipContent.appendChild(tooltip);
    var titleWidth = tooltipContent.offsetWidth;
    var titleHeight = tooltipContent.offsetHeight;
    var arrowHalfWidth = 8;
    var pageMargin = 2;
    var arrowWidth = arrowHalfWidth * 2;
    var arrowInset = arrowHalfWidth + 2;
    var containerMinX = pageMargin + arrowInset;
    var containerMaxX = canvasWidth - pageMargin - arrowInset - arrowWidth;
    var boundsAreTooNarrow = bounds.maxX - bounds.minX < arrowWidth + 2 * arrowInset;
    var arrowX;
    if (boundsAreTooNarrow) {
        arrowX = (bounds.minX + bounds.maxX) * 0.5 - arrowHalfWidth;
    }
    else {
        var xFromLeftBound = bounds.minX + arrowInset;
        var xFromRightBound = bounds.maxX - arrowInset - arrowWidth;
        if (xFromLeftBound > containerMinX && xFromLeftBound < containerMaxX) {
            arrowX = xFromLeftBound;
        }
        else {
            arrowX = (0, common_1.constrainNumber)(containerMinX, xFromLeftBound, xFromRightBound);
        }
    }
    var arrowHidden = arrowX < containerMinX || arrowX > containerMaxX;
    var boxX = arrowX - arrowInset;
    boxX = (0, common_1.constrainNumber)(boxX, pageMargin, canvasWidth - titleWidth - pageMargin);
    var boxY = bounds.minY - arrowHalfWidth - titleHeight;
    var onTop = true;
    if (boxY < 0) {
        boxY = Math.min(canvasHeight - titleHeight, bounds.maxY + arrowHalfWidth);
        onTop = false;
    }
    else if (bounds.minY > canvasHeight) {
        boxY = canvasHeight - arrowHalfWidth - titleHeight;
    }
    var includes = boxX >= bounds.minX && boxX + titleWidth <= bounds.maxX && boxY >= bounds.minY &&
        boxY + titleHeight <= bounds.maxY;
    var overlaps = boxX < bounds.maxX && boxX + titleWidth > bounds.minX && boxY < bounds.maxY && boxY + titleHeight > bounds.minY;
    if (overlaps && !includes) {
        tooltipContent.style.display = 'none';
        return;
    }
    tooltipContent.style.top = boxY + 'px';
    tooltipContent.style.left = boxX + 'px';
    if (arrowHidden) {
        return;
    }
    var tooltipArrow = (0, common_1.createChild)(tooltipContent, 'div', 'tooltip-arrow');
    tooltipArrow.style.clipPath = onTop ? 'polygon(0 0, 100% 0, 50% 100%)' : 'polygon(50% 0, 0 100%, 100% 100%)';
    tooltipArrow.style.top = (onTop ? titleHeight - 1 : -arrowHalfWidth) + 'px';
    tooltipArrow.style.left = (arrowX - boxX) + 'px';
}
var DEFAULT_RULER_COLOR = 'rgba(128, 128, 128, 0.3)';
function drawRulers(context, bounds, rulerAtRight, rulerAtBottom, color, dash, canvasWidth, canvasHeight) {
    context.save();
    var width = canvasWidth;
    var height = canvasHeight;
    context.strokeStyle = color || DEFAULT_RULER_COLOR;
    context.lineWidth = 1;
    context.translate(0.5, 0.5);
    if (dash) {
        context.setLineDash([3, 3]);
    }
    if (rulerAtRight) {
        for (var y in bounds.rightmostXForY) {
            context.beginPath();
            context.moveTo(width, Number(y));
            context.lineTo(bounds.rightmostXForY[y], Number(y));
            context.stroke();
        }
    }
    else {
        for (var y in bounds.leftmostXForY) {
            context.beginPath();
            context.moveTo(0, Number(y));
            context.lineTo(bounds.leftmostXForY[y], Number(y));
            context.stroke();
        }
    }
    if (rulerAtBottom) {
        for (var x in bounds.bottommostYForX) {
            context.beginPath();
            context.moveTo(Number(x), height);
            context.lineTo(Number(x), bounds.topmostYForX[x]);
            context.stroke();
        }
    }
    else {
        for (var x in bounds.topmostYForX) {
            context.beginPath();
            context.moveTo(Number(x), 0);
            context.lineTo(Number(x), bounds.topmostYForX[x]);
            context.stroke();
        }
    }
    context.restore();
}


/***/ }),

/***/ 7214:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Emitter_1 = __importDefault(__webpack_require__(2263));
var _1 = __importDefault(__webpack_require__(3693));
var util_1 = __webpack_require__(4725);
var each_1 = __importDefault(__webpack_require__(9100));
var extend_1 = __importDefault(__webpack_require__(8105));
var defaults_1 = __importDefault(__webpack_require__(5651));
var remove_1 = __importDefault(__webpack_require__(961));
var Component = (function (_super) {
    __extends(Component, _super);
    function Component(container, _a, _b) {
        var compName = _a.compName;
        var _c = _b === void 0 ? {} : _b, _d = _c.theme, theme = _d === void 0 ? 'light' : _d;
        var _this = _super.call(this) || this;
        _this.subComponents = [];
        _this.compName = compName;
        _this.c = (0, util_1.classPrefix)(compName);
        _this.options = {};
        _this.container = container;
        _this.$container = (0, _1.default)(container);
        _this.$container.addClass([
            "luna-".concat(compName),
            _this.c("platform-".concat((0, util_1.getPlatform)())),
        ]);
        _this.on('optionChange', function (name, val, oldVal) {
            var c = _this.c;
            if (name === 'theme') {
                _this.$container
                    .rmClass(c("theme-".concat(oldVal)))
                    .addClass(c("theme-".concat(val)));
                (0, each_1.default)(_this.subComponents, function (component) {
                    return component.setOption('theme', val);
                });
            }
        });
        _this.setOption('theme', theme);
        return _this;
    }
    Component.prototype.destroy = function () {
        this.destroySubComponents();
        var c = this.c;
        this.$container
            .rmClass("luna-".concat(this.compName))
            .rmClass(c("platform-".concat((0, util_1.getPlatform)())))
            .rmClass(c("theme-".concat(this.options.theme)));
        this.$container.html('');
        this.emit('destroy');
        this.removeAllListeners();
    };
    Component.prototype.setOption = function (name, val) {
        var _this = this;
        var options = this.options;
        var newOptions = {};
        if (typeof name === 'string') {
            newOptions[name] = val;
        }
        else {
            newOptions = name;
        }
        (0, each_1.default)(newOptions, function (val, name) {
            var oldVal = options[name];
            options[name] = val;
            _this.emit('optionChange', name, val, oldVal);
        });
    };
    Component.prototype.getOption = function (name) {
        return this.options[name];
    };
    Component.prototype.addSubComponent = function (component) {
        component.setOption('theme', this.options.theme);
        this.subComponents.push(component);
    };
    Component.prototype.removeSubComponent = function (component) {
        (0, remove_1.default)(this.subComponents, function (com) { return com === component; });
    };
    Component.prototype.destroySubComponents = function () {
        (0, each_1.default)(this.subComponents, function (component) { return component.destroy(); });
        this.subComponents = [];
    };
    Component.prototype.initOptions = function (options, defs) {
        if (defs === void 0) { defs = {}; }
        (0, defaults_1.default)(options, defs);
        (0, extend_1.default)(this.options, options);
    };
    Component.prototype.find = function (selector) {
        return this.$container.find(this.c(selector));
    };
    return Component;
}(Emitter_1.default));
exports["default"] = Component;


/***/ }),

/***/ 4725:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetCanvasSize = exports.getPlatform = exports.pxToNum = exports.executeAfterTransition = exports.hasVerticalScrollbar = exports.measuredScrollbarWidth = exports.eventPage = exports.eventClient = exports.drag = exports.classPrefix = void 0;
var map_1 = __importDefault(__webpack_require__(3915));
var trim_1 = __importDefault(__webpack_require__(9405));
var root_1 = __importDefault(__webpack_require__(5169));
var html_1 = __importDefault(__webpack_require__(9548));
var isNum_1 = __importDefault(__webpack_require__(6097));
var contain_1 = __importDefault(__webpack_require__(3249));
var toNum_1 = __importDefault(__webpack_require__(6030));
var detectOs_1 = __importDefault(__webpack_require__(5004));
var isHidden_1 = __importDefault(__webpack_require__(8609));
function classPrefix(name) {
    var prefix = "luna-".concat(name, "-");
    function processClass(str) {
        return (0, map_1.default)((0, trim_1.default)(str).split(/\s+/), function (singleClass) {
            if ((0, contain_1.default)(singleClass, prefix)) {
                return singleClass;
            }
            return singleClass.replace(/[\w-]+/, function (match) { return "".concat(prefix).concat(match); });
        }).join(' ');
    }
    return function (str) {
        if (/<[^>]*>/g.test(str)) {
            try {
                var tree = html_1.default.parse(str);
                traverseTree(tree, function (node) {
                    if (node.attrs && node.attrs.class) {
                        node.attrs.class = processClass(node.attrs.class);
                    }
                });
                return html_1.default.stringify(tree);
            }
            catch (e) {
                return processClass(str);
            }
        }
        return processClass(str);
    };
}
exports.classPrefix = classPrefix;
function traverseTree(tree, handler) {
    for (var i = 0, len = tree.length; i < len; i++) {
        var node = tree[i];
        handler(node);
        if (node.content) {
            traverseTree(node.content, handler);
        }
    }
}
var hasTouchSupport = 'ontouchstart' in root_1.default;
var touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend',
};
var mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup',
};
function drag(name) {
    return hasTouchSupport ? touchEvents[name] : mouseEvents[name];
}
exports.drag = drag;
function eventClient(type, e) {
    var name = type === 'x' ? 'clientX' : 'clientY';
    if (e[name]) {
        return e[name];
    }
    if (e.changedTouches) {
        return e.changedTouches[0][name];
    }
    return 0;
}
exports.eventClient = eventClient;
function eventPage(type, e) {
    var name = type === 'x' ? 'pageX' : 'pageY';
    if (e[name]) {
        return e[name];
    }
    if (e.changedTouches) {
        return e.changedTouches[0][name];
    }
    return 0;
}
exports.eventPage = eventPage;
var scrollbarWidth;
function measuredScrollbarWidth() {
    if ((0, isNum_1.default)(scrollbarWidth)) {
        return scrollbarWidth;
    }
    if (!document) {
        return 16;
    }
    var scrollDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    scrollDiv.setAttribute('style', 'display: block; width: 100px; height: 100px; overflow: scroll;');
    innerDiv.setAttribute('style', 'height: 200px');
    scrollDiv.appendChild(innerDiv);
    document.body.appendChild(scrollDiv);
    scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}
exports.measuredScrollbarWidth = measuredScrollbarWidth;
function hasVerticalScrollbar(el) {
    return el.scrollHeight > el.offsetHeight;
}
exports.hasVerticalScrollbar = hasVerticalScrollbar;
function executeAfterTransition(el, callback) {
    if ((0, isHidden_1.default)(el)) {
        return callback();
    }
    var handler = function (e) {
        var target = e.target;
        if (target !== el) {
            return;
        }
        el.removeEventListener('transitionend', handler);
        callback();
    };
    el.addEventListener('transitionend', handler);
}
exports.executeAfterTransition = executeAfterTransition;
function pxToNum(str) {
    return (0, toNum_1.default)(str.replace('px', ''));
}
exports.pxToNum = pxToNum;
function getPlatform() {
    var os = (0, detectOs_1.default)();
    if (os === 'os x') {
        return 'mac';
    }
    return os;
}
exports.getPlatform = getPlatform;
function resetCanvasSize(canvas) {
    canvas.width = Math.round(canvas.offsetWidth * window.devicePixelRatio);
    canvas.height = Math.round(canvas.offsetHeight * window.devicePixelRatio);
}
exports.resetCanvasSize = resetCanvasSize;


/***/ }),

/***/ 3270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ src; }
/* harmony export */ });
var ARG_LENGTH = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
var SEGMENT_PATTERN = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
var NUMBER = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
function parseValues(args) {
  var numbers = args.match(NUMBER);
  return numbers ? numbers.map(Number) : [];
}

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * https://www.w3.org/TR/SVG/paths.html#PathDataGeneralInformation
 * @ignore
 *
 * @param {string} path
 * @returns {array}
 */
function parse(path) {
  var data = [];
  var p = String(path).trim();

  // A path data segment (if there is one) must begin with a "moveto" command
  if (p[0] !== "M" && p[0] !== "m") {
    return data;
  }
  p.replace(SEGMENT_PATTERN, function (_, command, args) {
    var type = command.toLowerCase();
    var theArgs = parseValues(args);
    var theCommand = command;
    // overloaded moveTo
    if (type === "m" && theArgs.length > 2) {
      data.push([theCommand].concat(theArgs.splice(0, 2)));
      type = "l";
      theCommand = theCommand === "m" ? "l" : "L";
    }

    // Ignore invalid commands
    if (theArgs.length < ARG_LENGTH[type]) {
      return "";
    }
    data.push([theCommand].concat(theArgs.splice(0, ARG_LENGTH[type])));

    // The command letter can be eliminated on subsequent commands if the
    // same command is used multiple times in a row (e.g., you can drop the
    // second "L" in "M 100 200 L 200 100 L -100 -200" and use
    // "M 100 200 L 200 100 -100 -200" instead).
    while (theArgs.length >= ARG_LENGTH[type] && theArgs.length && ARG_LENGTH[type]) {
      data.push([theCommand].concat(theArgs.splice(0, ARG_LENGTH[type])));
    }
    return "";
  });
  return data;
}
var parsePath$2 = parse;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var parsePath$1 = parsePath$2;

/**
 * Work around for https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8438884/
 * @ignore
 */
function supportsSvgPathArgument(window) {
  var canvas = window.document.createElement("canvas");
  var g = canvas.getContext("2d");
  var p = new window.Path2D("M0 0 L1 1");
  g.strokeStyle = "red";
  g.lineWidth = 1;
  g.stroke(p);
  var imgData = g.getImageData(0, 0, 1, 1);
  return imgData.data[0] === 255; // Check if pixel is red
}

function rotatePoint(point, angle) {
  var nx = point.x * Math.cos(angle) - point.y * Math.sin(angle);
  var ny = point.y * Math.cos(angle) + point.x * Math.sin(angle);
  point.x = nx;
  point.y = ny;
}
function translatePoint(point, dx, dy) {
  point.x += dx;
  point.y += dy;
}
function scalePoint(point, s) {
  point.x *= s;
  point.y *= s;
}
function polyFillPath2D(window) {
  if (typeof window === "undefined" || !window.CanvasRenderingContext2D) {
    return;
  }
  if (window.Path2D && supportsSvgPathArgument(window)) {
    return;
  }

  /**
   * Crates a Path2D polyfill object
   * @constructor
   * @ignore
   * @param {String} path
   */
  var Path2D = /*#__PURE__*/function () {
    function Path2D(path) {
      _classCallCheck(this, Path2D);
      this.segments = [];
      if (path && path instanceof Path2D) {
        var _this$segments;
        (_this$segments = this.segments).push.apply(_this$segments, _toConsumableArray(path.segments));
      } else if (path) {
        this.segments = parsePath$1(path);
      }
    }
    _createClass(Path2D, [{
      key: "addPath",
      value: function addPath(path) {
        if (path && path instanceof Path2D) {
          var _this$segments2;
          (_this$segments2 = this.segments).push.apply(_this$segments2, _toConsumableArray(path.segments));
        }
      }
    }, {
      key: "moveTo",
      value: function moveTo(x, y) {
        this.segments.push(["M", x, y]);
      }
    }, {
      key: "lineTo",
      value: function lineTo(x, y) {
        this.segments.push(["L", x, y]);
      }
    }, {
      key: "arc",
      value: function arc(x, y, r, start, end, ccw) {
        this.segments.push(["AC", x, y, r, start, end, !!ccw]);
      }
    }, {
      key: "arcTo",
      value: function arcTo(x1, y1, x2, y2, r) {
        this.segments.push(["AT", x1, y1, x2, y2, r]);
      }
    }, {
      key: "ellipse",
      value: function ellipse(x, y, rx, ry, angle, start, end, ccw) {
        this.segments.push(["E", x, y, rx, ry, angle, start, end, !!ccw]);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        this.segments.push(["Z"]);
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.segments.push(["C", cp1x, cp1y, cp2x, cp2y, x, y]);
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(cpx, cpy, x, y) {
        this.segments.push(["Q", cpx, cpy, x, y]);
      }
    }, {
      key: "rect",
      value: function rect(x, y, width, height) {
        this.segments.push(["R", x, y, width, height]);
      }
    }]);
    return Path2D;
  }();
  function buildPath(canvas, segments) {
    var endAngle;
    var startAngle;
    var largeArcFlag;
    var sweepFlag;
    var endPoint;
    var midPoint;
    var angle;
    var lambda;
    var t1;
    var t2;
    var x;
    var x1;
    var y;
    var y1;
    var r;
    var rx;
    var ry;
    var w;
    var h;
    var pathType;
    var centerPoint;
    var cpx;
    var cpy;
    var qcpx;
    var qcpy;
    var ccw;
    var startPoint = {
      x: 0,
      y: 0
    };
    var currentPoint = {
      x: 0,
      y: 0
    };
    canvas.beginPath();
    for (var i = 0; i < segments.length; ++i) {
      var s = segments[i];
      pathType = s[0];

      // Reset control point if command is not cubic
      if (pathType !== "S" && pathType !== "s" && pathType !== "C" && pathType !== "c") {
        cpx = null;
        cpy = null;
      }
      if (pathType !== "T" && pathType !== "t" && pathType !== "Q" && pathType !== "q") {
        qcpx = null;
        qcpy = null;
      }
      switch (pathType) {
        case "m":
        case "M":
          if (pathType === "m") {
            x += s[1];
            y += s[2];
          } else {
            x = s[1];
            y = s[2];
          }
          if (pathType === "M" || !startPoint) {
            startPoint = {
              x: x,
              y: y
            };
          }
          canvas.moveTo(x, y);
          break;
        case "l":
          x += s[1];
          y += s[2];
          canvas.lineTo(x, y);
          break;
        case "L":
          x = s[1];
          y = s[2];
          canvas.lineTo(x, y);
          break;
        case "H":
          x = s[1];
          canvas.lineTo(x, y);
          break;
        case "h":
          x += s[1];
          canvas.lineTo(x, y);
          break;
        case "V":
          y = s[1];
          canvas.lineTo(x, y);
          break;
        case "v":
          y += s[1];
          canvas.lineTo(x, y);
          break;
        case "a":
        case "A":
          if (pathType === "a") {
            x += s[6];
            y += s[7];
          } else {
            x = s[6];
            y = s[7];
          }
          rx = s[1]; // rx
          ry = s[2]; // ry
          angle = s[3] * Math.PI / 180;
          largeArcFlag = !!s[4];
          sweepFlag = !!s[5];
          endPoint = {
            x: x,
            y: y
          };

          // https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes

          midPoint = {
            x: (currentPoint.x - endPoint.x) / 2,
            y: (currentPoint.y - endPoint.y) / 2
          };
          rotatePoint(midPoint, -angle);

          // radius correction
          lambda = midPoint.x * midPoint.x / (rx * rx) + midPoint.y * midPoint.y / (ry * ry);
          if (lambda > 1) {
            lambda = Math.sqrt(lambda);
            rx *= lambda;
            ry *= lambda;
          }
          centerPoint = {
            x: rx * midPoint.y / ry,
            y: -(ry * midPoint.x) / rx
          };
          t1 = rx * rx * ry * ry;
          t2 = rx * rx * midPoint.y * midPoint.y + ry * ry * midPoint.x * midPoint.x;
          if (sweepFlag !== largeArcFlag) {
            scalePoint(centerPoint, Math.sqrt((t1 - t2) / t2) || 0);
          } else {
            scalePoint(centerPoint, -Math.sqrt((t1 - t2) / t2) || 0);
          }
          startAngle = Math.atan2((midPoint.y - centerPoint.y) / ry, (midPoint.x - centerPoint.x) / rx);
          endAngle = Math.atan2(-(midPoint.y + centerPoint.y) / ry, -(midPoint.x + centerPoint.x) / rx);
          rotatePoint(centerPoint, angle);
          translatePoint(centerPoint, (endPoint.x + currentPoint.x) / 2, (endPoint.y + currentPoint.y) / 2);
          canvas.save();
          canvas.translate(centerPoint.x, centerPoint.y);
          canvas.rotate(angle);
          canvas.scale(rx, ry);
          canvas.arc(0, 0, 1, startAngle, endAngle, !sweepFlag);
          canvas.restore();
          break;
        case "C":
          cpx = s[3]; // Last control point
          cpy = s[4];
          x = s[5];
          y = s[6];
          canvas.bezierCurveTo(s[1], s[2], cpx, cpy, x, y);
          break;
        case "c":
          canvas.bezierCurveTo(s[1] + x, s[2] + y, s[3] + x, s[4] + y, s[5] + x, s[6] + y);
          cpx = s[3] + x; // Last control point
          cpy = s[4] + y;
          x += s[5];
          y += s[6];
          break;
        case "S":
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          canvas.bezierCurveTo(2 * x - cpx, 2 * y - cpy, s[1], s[2], s[3], s[4]);
          cpx = s[1]; // last control point
          cpy = s[2];
          x = s[3];
          y = s[4];
          break;
        case "s":
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          canvas.bezierCurveTo(2 * x - cpx, 2 * y - cpy, s[1] + x, s[2] + y, s[3] + x, s[4] + y);
          cpx = s[1] + x; // last control point
          cpy = s[2] + y;
          x += s[3];
          y += s[4];
          break;
        case "Q":
          qcpx = s[1]; // last control point
          qcpy = s[2];
          x = s[3];
          y = s[4];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "q":
          qcpx = s[1] + x; // last control point
          qcpy = s[2] + y;
          x += s[3];
          y += s[4];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "T":
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          qcpx = 2 * x - qcpx; // last control point
          qcpy = 2 * y - qcpy;
          x = s[1];
          y = s[2];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "t":
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          qcpx = 2 * x - qcpx; // last control point
          qcpy = 2 * y - qcpy;
          x += s[1];
          y += s[2];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "z":
        case "Z":
          x = startPoint.x;
          y = startPoint.y;
          startPoint = undefined;
          canvas.closePath();
          break;
        case "AC":
          // arc
          x = s[1];
          y = s[2];
          r = s[3];
          startAngle = s[4];
          endAngle = s[5];
          ccw = s[6];
          canvas.arc(x, y, r, startAngle, endAngle, ccw);
          break;
        case "AT":
          // arcTo
          x1 = s[1];
          y1 = s[2];
          x = s[3];
          y = s[4];
          r = s[5];
          canvas.arcTo(x1, y1, x, y, r);
          break;
        case "E":
          // ellipse
          x = s[1];
          y = s[2];
          rx = s[3];
          ry = s[4];
          angle = s[5];
          startAngle = s[6];
          endAngle = s[7];
          ccw = s[8];
          canvas.save();
          canvas.translate(x, y);
          canvas.rotate(angle);
          canvas.scale(rx, ry);
          canvas.arc(0, 0, 1, startAngle, endAngle, ccw);
          canvas.restore();
          break;
        case "R":
          // rect
          x = s[1];
          y = s[2];
          w = s[3];
          h = s[4];
          startPoint = {
            x: x,
            y: y
          };
          canvas.rect(x, y, w, h);
          break;
        // throw new Error(`${pathType} is not implemented`); ?
      }

      currentPoint.x = x;
      currentPoint.y = y;
    }
  }
  var cFill = window.CanvasRenderingContext2D.prototype.fill;
  var cStroke = window.CanvasRenderingContext2D.prototype.stroke;
  window.CanvasRenderingContext2D.prototype.fill = function fill() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var fillRule = "nonzero";
    if (args.length === 0 || args.length === 1 && typeof args[0] === "string") {
      cFill.apply(this, args);
      return;
    }
    if (arguments.length === 2) {
      fillRule = args[1];
    }
    var path = args[0];
    buildPath(this, path.segments);
    cFill.call(this, fillRule);
  };
  window.CanvasRenderingContext2D.prototype.stroke = function stroke(path) {
    if (!path) {
      cStroke.call(this);
      return;
    }
    buildPath(this, path.segments);
    cStroke.call(this);
  };
  var cIsPointInPath = window.CanvasRenderingContext2D.prototype.isPointInPath;
  window.CanvasRenderingContext2D.prototype.isPointInPath = function isPointInPath() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    // let fillRule = 'nonzero';
    if (args[0].constructor.name === "Path2D") {
      // first argument is a Path2D object
      var x = args[1];
      var y = args[2];
      var fillRule = args[3] || "nonzero";
      var path = args[0];
      buildPath(this, path.segments);
      return cIsPointInPath.apply(this, [x, y, fillRule]);
    } else {
      return cIsPointInPath.apply(this, args);
    }
  };
  window.Path2D = Path2D;
}
var path2dPolyfill$1 = polyFillPath2D;

var parsePath = parsePath$2;
var path2dPolyfill = path2dPolyfill$1;
if (typeof window !== "undefined") {
  path2dPolyfill(window);
}
var src = {
  path2dPolyfill: path2dPolyfill,
  parsePath: parsePath
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 7119:
/***/ (function(module) {

module.exports = ".luna-dom-highlighter{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100000;pointer-events:none;font-size:13px}.luna-dom-highlighter-fill{position:absolute;top:0;right:0;bottom:0;left:0}.luna-dom-highlighter-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-dom-highlighter-platform-mac{color:#303942;font-family:'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',sans-serif}.luna-dom-highlighter-platform-windows{font-family:'Segoe UI',Tahoma,sans-serif}.luna-dom-highlighter-px{color:gray}#luna-dom-highlighter-element-title{position:absolute;z-index:10}.luna-dom-highlighter-tooltip-content{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#fff;padding:5px 8px;border:1px solid #fff;border-radius:3px;box-sizing:border-box;min-width:100px;max-width:min(300px,100% - 4px);z-index:2;background-clip:padding-box;will-change:transform;text-rendering:optimizeLegibility;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))}.luna-dom-highlighter-tooltip-content .luna-dom-highlighter-tooltip-arrow{background:#fff;width:15px;height:8px;position:absolute}.luna-dom-highlighter-element-info-section{margin-top:12px;margin-bottom:6px}.luna-dom-highlighter-section-name{color:#333;font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.05em;line-height:12px}.luna-dom-highlighter-element-info{display:flex;flex-direction:column}.luna-dom-highlighter-element-info-header{display:flex;align-items:center}.luna-dom-highlighter-element-info-body{display:flex;flex-direction:column;padding-top:2px;margin-top:2px}.luna-dom-highlighter-element-info-row{display:flex;line-height:19px}.luna-dom-highlighter-separator-container{display:flex;align-items:center;flex:auto;margin-left:7px}.luna-dom-highlighter-separator{border-top:1px solid #ddd;width:100%}.luna-dom-highlighter-element-info-name{flex-shrink:0;color:#666}.luna-dom-highlighter-element-info-gap{flex:auto}.luna-dom-highlighter-element-info-value-color{display:flex;color:#303942;margin-left:10px;align-items:baseline}.luna-dom-highlighter-a11y-icon{width:16px;height:16px;background-repeat:no-repeat;display:inline-block}.luna-dom-highlighter-element-info-value-contrast{display:flex;align-items:center;text-align:right;color:#303942;margin-left:10px}.luna-dom-highlighter-element-info-value-contrast .luna-dom-highlighter-a11y-icon{margin-left:8px}.luna-dom-highlighter-element-info-value-icon{display:flex;align-items:center}.luna-dom-highlighter-element-info-value-text{text-align:right;color:#303942;margin-left:10px;align-items:baseline;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.luna-dom-highlighter-color-swatch{display:flex;margin-right:2px;width:10px;height:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);line-height:10px}.luna-dom-highlighter-color-swatch-inner{flex:auto;border:1px solid #808002}.luna-dom-highlighter-element-layout-type{margin-right:10px;width:16px;height:16px}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-grid{background-image:url('data:image/svg+xml,<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2.5\" y=\"2.5\" width=\"4\" height=\"4\" stroke=\"%231A73E8\"/><rect x=\"9.5\" y=\"2.5\" width=\"4\" height=\"4\" stroke=\"%231A73E8\"/><rect x=\"9.5\" y=\"9.5\" width=\"4\" height=\"4\" stroke=\"%231A73E8\"/><rect x=\"2.5\" y=\"9.5\" width=\"4\" height=\"4\" stroke=\"%231A73E8\"/></svg>')}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-flex{background-image:url('data:image/svg+xml,<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 3.5h8v3H1v-3zm-1 0a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1v-3zm12 0h3v3h-3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm-7 6H1v3h3v-3zm-3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H1zm6 4v-3h8v3H7zm-1-3a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3z\" fill=\"%231A73E8\"/></svg>')}.luna-dom-highlighter-element-description{flex:1 1;font-weight:700;word-wrap:break-word;word-break:break-all}.luna-dom-highlighter-dimensions{color:#737373;text-align:right;margin-left:10px}.luna-dom-highlighter-material-node-width{margin-right:2px}.luna-dom-highlighter-material-node-height{margin-left:2px}.luna-dom-highlighter-material-tag-name{color:#881280}.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id{color:#1a1aa6}.luna-dom-highlighter-contrast-text{width:16px;height:16px;text-align:center;line-height:16px;margin-right:8px;border:1px solid #000;padding:0 1px}.luna-dom-highlighter-a11y-icon-not-ok{background-image:url('data:image/svg+xml,<svg fill=\"none\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.315 0-6-2.685-6-6 0-1.3875.4725-2.6625 1.2675-3.675l8.4075 8.4075c-1.0125.795-2.2875 1.2675-3.675 1.2675zm4.7325-2.325-8.4075-8.4075c1.0125-.795 2.2875-1.2675 3.675-1.2675 3.315 0 6 2.685 6 6 0 1.3875-.4725 2.6625-1.2675 3.675z\" fill=\"%239e9e9e\"/></svg>')}.luna-dom-highlighter-a11y-icon-warning{background-image:url('data:image/svg+xml,<svg fill=\"none\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.25 11.25h1.5v1.5h-1.5zm0-6h1.5v4.5h-1.5zm.7425-3.75c-4.14 0-7.4925 3.36-7.4925 7.5s3.3525 7.5 7.4925 7.5c4.1475 0 7.5075-3.36 7.5075-7.5s-3.36-7.5-7.5075-7.5zm.0075 13.5c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" fill=\"%23e37400\"/></svg>')}.luna-dom-highlighter-a11y-icon-ok{background-image:url('data:image/svg+xml,<svg fill=\"none\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.3075 0-6-2.6925-6-6s2.6925-6 6-6 6 2.6925 6 6-2.6925 6-6 6zm-1.5-4.35-1.95-1.95-1.05 1.05 3 3 6-6-1.05-1.05z\" fill=\"%230ca40c\"/></svg>')}@media (forced-colors:active){:root,body{background-color:transparent;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content{border-color:Highlight;background-color:canvas;color:text;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content::after{background-color:Highlight}.luna-dom-highlighter-color-swatch-inner,.luna-dom-highlighter-contrast-text,.luna-dom-highlighter-separator{border-color:Highlight}.luna-dom-highlighter-section-name{color:Highlight}.luna-dom-highlighter-dimensions,.luna-dom-highlighter-element-info-name,.luna-dom-highlighter-element-info-value-color,.luna-dom-highlighter-element-info-value-contrast,.luna-dom-highlighter-element-info-value-icon,.luna-dom-highlighter-element-info-value-text,.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id,.luna-dom-highlighter-material-tag-name{color:canvastext}}\n\n/*# sourceMappingURL=luna-dom-highlighter.css.map*/";

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ 3029:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ 2901:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(816);

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ 4467:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(816);

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ 991:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _get; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = (0,getPrototypeOf/* default */.A)(t)););
  return t;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}


/***/ }),

/***/ 3954:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 5361:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _inherits; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}


/***/ }),

/***/ 388:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _possibleConstructorReturn; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,esm_typeof/* default */.A)(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}


/***/ }),

/***/ 7528:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}


/***/ }),

/***/ 5458:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(5526);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,arrayLikeToArray/* default */.A)(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(7800);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || (0,unsupportedIterableToArray/* default */.A)(r) || _nonIterableSpread();
}


/***/ }),

/***/ 816:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ toPropertyKey; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != (0,esm_typeof/* default */.A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,esm_typeof/* default */.A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == (0,esm_typeof/* default */.A)(i) ? i : i + "";
}


/***/ }),

/***/ 2284:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 7800:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5526);

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a) : void 0;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(7523);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});