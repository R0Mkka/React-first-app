webpackHotUpdate(8,{

/***/ "./components/ContentBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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

/***/ "./components/Footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header_HeadMenu__ = __webpack_require__("./components/Header/HeadMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ContentBox__ = __webpack_require__("./components/ContentBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss__ = __webpack_require__("./scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_style_scss__);
var _jsxFileName = "/home/roman/work/next_project/pages/about.js";







var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\u041E \u041D\u0430\u0441 | \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header_HeadMenu__["a" /* default */], {
    home_link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ContentBox__["a" /* default */], {
    footer_padding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content content__about content_padding-left-right-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content__about-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "\u041E \u043D\u0430\u0441"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0435 Ruby on Rails \u0438\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F Drupal."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u043B\u0438\u0441\u044C \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0432 2014 \u0433\u043E\u0434\u0443 \u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u043D\u0430\u0434 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 8 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0441 \u0442\u0435\u0445 \u043F\u043E\u0440. \u0421 2016 \u0433\u043E\u0434\u0430 \u043A \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u043B\u0438\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442 PHP/Drupal, UI/UX \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440, SMM \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0438 \u0448\u0442\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u043F\u0438\u0440\u0430\u0439\u0442\u0435\u0440."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "\u041D\u0430\u0448\u0438 \u0446\u0435\u043B\u0438 \u0432 2018 \u0433\u043E\u0434\u0443 \u043F\u0440\u043E\u043A\u0430\u0447\u0430\u0442\u044C \u043D\u0430\u0448 \u0434\u0438\u0437\u0430\u0439\u043D, \u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0430. \u0411\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0438 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content__about-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "\u041F\u0435\u0440\u0435\u0434 \u043D\u0430\u0447\u0430\u043B\u043E\u043C \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435, \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u043C\u0443 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044E \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0434\u0435\u0442\u0430\u043B\u0435\u0439.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "\u0414\u0438\u0437\u0430\u0439\u043D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "\u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u0441\u0430\u0439\u0442\u043E\u043C, \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0432\u043E\u0440\u043E\u043D\u043A\u0430 \u043F\u0440\u043E\u0434\u0430\u0436, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "Ruby on Rails \u2014 \u043D\u0430\u0448\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430 Drupal \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0434\u043B\u044F \u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row row_last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "\u0420\u0435\u043A\u043B\u0430\u043C\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "\u041F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043A\u0430\u043A \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0442\u0430\u043A \u0438 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0435\u0433\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "\u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043E\u0431\u043E\u0440\u043E\u0442\u043E\u0432 \u043F\u0440\u0438 \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E\u043C \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row__block row__block_margin-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "\u041C\u044B \u0431\u0435\u0440\u0451\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0442\u0430\u0434\u0438\u044F\u0445 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u0438, \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432 \u0435\u0434\u0438\u043D\u044B\u0439 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u044B\u0439 \u0443\u0437\u0435\u043B."))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.1a732b2e49a18695c4f5.hot-update.js.map