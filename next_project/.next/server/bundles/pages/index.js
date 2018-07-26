module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content/Content.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Content/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Content_scss__ = __webpack_require__("./components/Content/Content.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Content_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Content_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Content/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Content =
/*#__PURE__*/
function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row row_img-alignment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__text-block row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C"), "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0439 \u0432\u044B\u0434\u0430\u0447\u0435, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044F \u0438\u0445 \u0441\u0430\u0439\u0442\u044B")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__block-background row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "http://m-kran.ru/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0440\u0430\u043D\u043E\u0432 Liebherr",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0440\u0430\u043D\u043E\u0432 Liebherr"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../../static/img/first-site-img.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__block-background row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "https://iamrealtor.ru/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u0439",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u0439"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../../static/img/second-site-img.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row row_img-alignment row_last",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__block-background row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "http://spektra.ru/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u0436\u0438\u043B\u044B\u0445 \u0438 \u043D\u0435\u0436\u0438\u043B\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u0436\u0438\u043B\u044B\u0445 \u0438 \u043D\u0435\u0436\u0438\u043B\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../../static/img/third-site-img.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__block-background row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "https://refurni.ru/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../../static/img/fourth-site-img.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row__block row__block-background row__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "http://gsps.ru/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0439",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0439"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../../static/img/fifth-site-img.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }))))));
    }
  }]);

  return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/ContentBox/ContentBox.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ContentBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Content__ = __webpack_require__("./components/Content/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContentBox_scss__ = __webpack_require__("./components/ContentBox/ContentBox.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContentBox_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ContentBox_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/ContentBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ContentBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentBox, _Component);

  function ContentBox(props) {
    var _this;

    _classCallCheck(this, ContentBox);

    _this = _possibleConstructorReturn(this, (ContentBox.__proto__ || Object.getPrototypeOf(ContentBox)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(ContentBox, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bordered-visible-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "left-menu left-menu_padding-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041E \u043D\u0430\u0441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "\u041E \u043D\u0430\u0441"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0431\u043E\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "\u0420\u0430\u0431\u043E\u0442\u044B"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Content__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })));
    }
  }]);

  return ContentBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ContentBox);

/***/ }),

/***/ "./components/Footer/Footer.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss__ = __webpack_require__("./components/Footer/Footer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Footer/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer__copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "digitalheroes.club \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 \xA9 2014 - 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer__links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041E \u043D\u0430\u0441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "\u041E \u043D\u0430\u0441")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0431\u043E\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "\u0420\u0430\u0431\u043E\u0442\u044B")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header/Header.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preview__ = __webpack_require__("./components/Preview/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_scss__ = __webpack_require__("./components/Header/Header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Header_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Header/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleOnmouseover", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.menuBtn !== "../../static/img/cross.png") {
          _this.setState({
            menuBtn: "../../static/img/menu_focus.png"
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOnmouseout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.menuBtn !== "../../static/img/cross.png") {
          _this.setState({
            menuBtn: "../../static/img/menu_nofocus.png"
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "ToggleClass", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(elem, classStr) {
        if (elem.classList.contains(classStr)) {
          elem.classList.remove(classStr);
        } else {
          elem.classList.add(classStr);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOnclick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var prevState = _this.state.menuBtn,
            afterState = '';
        var leftMenu = document.querySelector('.left-menu'),
            content = document.querySelector('.content');

        if (prevState === "../../static/img/menu_focus.png") {
          afterState = "../../static/img/cross.png";
        } else {
          afterState = "../../static/img/menu_focus.png";
        }

        _this.ToggleClass(leftMenu, 'open');

        _this.ToggleClass(content, 'slick');

        _this.setState({
          menuBtn: afterState
        });
      }
    });
    _this.props = props;
    _this.state = {
      menuBtn: "../../static/img/menu_nofocus.png"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__button",
        title: "\u041C\u0435\u043D\u044E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        onClick: this.handleOnclick,
        src: this.state.menuBtn,
        onMouseOver: this.handleOnmouseover,
        onMouseOut: this.handleOnmouseout,
        alt: "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "DIGITAL HEROES CLUB ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("sup", {
        className: "menu__beta-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "\u03B2eta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "menu__phone",
        title: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "+7 (926) 934-33-73"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../static/img/facebook.png",
        alt: "Facebook",
        title: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../static/img/telegram.png",
        alt: "Telegram",
        title: "Telegram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), " ")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Preview__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/PageWrap/PageWrap.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/PageWrap/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentBox__ = __webpack_require__("./components/ContentBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageWrap_scss__ = __webpack_require__("./components/PageWrap/PageWrap.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageWrap_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PageWrap_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/PageWrap/index.js";





var PageWrap = function PageWrap() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ContentBox__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PageWrap);

/***/ }),

/***/ "./components/Preview/Preview.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Preview/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview_scss__ = __webpack_require__("./components/Preview/Preview.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Preview_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Preview/index.js";




var Preview = function Preview() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "preview__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "preview__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "\u0414\u0415\u041B\u0410\u0415\u041C")), ' ', "\u0418", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/promotion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "preview__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\u0420\u0410\u0417\u0412\u0418\u0412\u0410\u0415\u041C")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), "\u0425\u041E\u0420\u041E\u0428\u0418\u0415 \u0421\u0410\u0419\u0422\u042B"));
};

/* harmony default export */ __webpack_exports__["a"] = (Preview);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageWrap__ = __webpack_require__("./components/PageWrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ContentBox__ = __webpack_require__("./components/ContentBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_style_scss__ = __webpack_require__("./scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_style_scss__);
var _jsxFileName = "/home/roman/work/next_project/pages/index.js";





var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_PageWrap__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./scss/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map