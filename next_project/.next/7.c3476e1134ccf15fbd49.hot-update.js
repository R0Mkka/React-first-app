webpackHotUpdate(7,{

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
        var footerClassList = _this.props.padding_left_right == true ? "footer footer_padding-left-right-50" : "footer";

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
        className: "footer",
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

/***/ })

})
//# sourceMappingURL=7.c3476e1134ccf15fbd49.hot-update.js.map