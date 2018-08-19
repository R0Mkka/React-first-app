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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContentBox_scss__ = __webpack_require__("./components/ContentBox/ContentBox.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContentBox_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ContentBox_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/ContentBox/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function LeftMenu(props) {
  var classes = props.leftMenu === "padding-top" ? "left-menu left-menu_padding-top" : "left-menu";
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.children);
}

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
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bordered-visible-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LeftMenu, {
        leftMenu: this.props.leftMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041E \u043D\u0430\u0441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u041E \u043D\u0430\u0441"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0431\u043E\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "\u0420\u0430\u0431\u043E\u0442\u044B"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))))), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
        footer_padding: this.props.footer_padding,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var footerClassList = _this.props.footer_padding == true ? "footer footer_padding-left-right-50" : "footer";

        _this.setState({
          footerClassList: footerClassList
        });
      }
    });
    _this.props = props;
    _this.state = {
      footerClassList: "footer"
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.footerClassList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer__copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "digitalheroes.club \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 \xA9 2014 - 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer__links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041E \u043D\u0430\u0441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u041E \u043D\u0430\u0441")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0431\u043E\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "\u0420\u0430\u0431\u043E\u0442\u044B")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header/HeadMenu/HeadMenu.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/HeadMenu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeadMenu_scss__ = __webpack_require__("./components/Header/HeadMenu/HeadMenu.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeadMenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HeadMenu_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Header/HeadMenu/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var HeadMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(HeadMenu, _Component);

  function HeadMenu(props) {
    var _this;

    _classCallCheck(this, HeadMenu);

    _this = _possibleConstructorReturn(this, (HeadMenu.__proto__ || Object.getPrototypeOf(HeadMenu)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var preview = document.querySelector('.preview'),
            preview_height;
        preview_height = preview !== null ? preview.offsetHeight : 100;

        var menuShow = function menuShow() {
          var menuClassList = window.pageYOffset >= preview_height - 100 ? "menu menu_scroll" : "menu";

          _this.setState({
            menuClassList: menuClassList
          });
        };

        menuShow();

        window.onscroll = function () {
          menuShow();
        };
      }
    });
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
            content = document.querySelector('.content'),
            footer = document.querySelector('.footer');

        if (prevState === "../../static/img/menu_focus.png") {
          afterState = "../../static/img/cross.png";
        } else {
          afterState = "../../static/img/menu_focus.png";
        }

        _this.ToggleClass(leftMenu, 'open');

        _this.ToggleClass(content, 'slick');

        _this.ToggleClass(footer, 'slick');

        _this.setState({
          menuBtn: afterState
        });
      }
    });
    _this.props = props;
    _this.state = {
      menuBtn: "../../static/img/menu_nofocus.png",
      menuClassList: "menu menu_scroll"
    };
    return _this;
  }

  _createClass(HeadMenu, [{
    key: "render",
    value: function render() {
      var menu__logo = this.props.home_link !== true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "DIGITAL HEROES CLUB ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("sup", {
        className: "menu__beta-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "\u03B2eta")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "menu__home-link",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, " DIGITAL HEROES CLUB ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("sup", {
        className: "menu__beta-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "\u03B2eta"), " "));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.menuClassList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__button",
        title: "\u041C\u0435\u043D\u044E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        onClick: this.handleOnclick,
        src: this.state.menuBtn,
        onMouseOver: this.handleOnmouseover,
        onMouseOut: this.handleOnmouseout,
        alt: "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), menu__logo, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "menu__phone",
        title: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "+7 (926) 934-33-73"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../../static/img/facebook.png",
        alt: "Facebook",
        title: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../../static/img/telegram.png",
        alt: "Telegram",
        title: "Telegram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), " "))));
    }
  }]);

  return HeadMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeadMenu);

/***/ }),

/***/ "./components/Header/Header.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/Preview/Preview.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/Preview/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview_scss__ = __webpack_require__("./components/Header/Preview/Preview.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Preview_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Header/Preview/index.js";




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

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Preview__ = __webpack_require__("./components/Header/Preview/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HeadMenu__ = __webpack_require__("./components/Header/HeadMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_scss__ = __webpack_require__("./components/Header/Header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_scss__);
var _jsxFileName = "/home/roman/work/next_project/components/Header/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HeadMenu__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Preview__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/ImgBlock/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/home/roman/work/next_project/components/ImgBlock/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ImgBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(ImgBlock, _Component);

  function ImgBlock(props) {
    var _this;

    _classCallCheck(this, ImgBlock);

    _this = _possibleConstructorReturn(this, (ImgBlock.__proto__ || Object.getPrototypeOf(ImgBlock)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(ImgBlock, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content__block content__block_margin-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: this.props.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: this.props.title,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content__block-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))));
    }
  }]);

  return ImgBlock;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ImgBlock);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ContentBox__ = __webpack_require__("./components/ContentBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__ = __webpack_require__("./components/ImgBlock/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_style_scss__ = __webpack_require__("./scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scss_style_scss__);
var _jsxFileName = "/home/roman/work/next_project/pages/index.js";








var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 | Digital heroes club")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ContentBox__["a" /* default */], {
    leftMenu: "padding-top",
    footer_padding: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content__blocks-wrapper content_alignment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content__block content__text-block content__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C "), "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0439 \u0432\u044B\u0434\u0430\u0447\u0435, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044F \u0438\u0445 \u0441\u0430\u0439\u0442\u044B")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__["a" /* default */], {
    href: "http://m-kran.ru/",
    title: "\u0410\u0440\u0435\u043D\u0434\u0430 \u043A\u0440\u0430\u043D\u043E\u0432 Liebherr",
    img: "../../static/img/first-site-img.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__["a" /* default */], {
    href: "https://iamrealtor.ru/",
    title: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u0439",
    img: "../../static/img/second-site-img.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__["a" /* default */], {
    href: "http://spektra.ru/",
    title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u0436\u0438\u043B\u044B\u0445 \u0438 \u043D\u0435\u0436\u0438\u043B\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
    img: "../../static/img/third-site-img.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__["a" /* default */], {
    href: "https://refurni.ru/",
    title: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437",
    img: "../../static/img/fourth-site-img.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImgBlock__["a" /* default */], {
    href: "http://gsps.ru/",
    title: "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0439",
    img: "../../static/img/fifth-site-img.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })))));
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

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

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