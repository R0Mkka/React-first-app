webpackHotUpdate(6,{

/***/ "./components/Header/HeadMenu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
        var menu = document.querySelector('.menu'),
            preview = document.querySelector('.preview'),
            header = document.querySelector('.header'),
            preview_height;
        preview_height = preview !== null ? preview.offsetHeight : 112;

        var menuShow = function menuShow() {
          var menuClassList = window.pageYOffset >= preview_height - 112 ? "menu menu_scroll" : "menu";

          _this.setState({
            menuClassList: menuClassList
          });
        };

        menuShow();

        window.onscroll = function () {
          menuShow();
        };

        menu.style.width = header.clientWidth + 'px';

        window.onresize = function (event) {
          menu.style.width = header.clientWidth + 'px';
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
      menuBtn: "../../static/img/menu_nofocus.png",
      menuClassList: "menu"
    };
    return _this;
  }

  _createClass(HeadMenu, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.menuClassList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__button",
        title: "\u041C\u0435\u043D\u044E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        onClick: this.handleOnclick,
        src: this.state.menuBtn,
        onMouseOver: this.handleOnmouseover,
        onMouseOut: this.handleOnmouseout,
        alt: "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "DIGITAL HEROES CLUB ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("sup", {
        className: "menu__beta-word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "\u03B2eta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu__contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "menu__phone",
        title: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "+7 (926) 934-33-73"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../../static/img/facebook.png",
        alt: "Facebook",
        title: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "menu__social",
        src: "../../../static/img/telegram.png",
        alt: "Telegram",
        title: "Telegram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), " "))));
    }
  }]);

  return HeadMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeadMenu);

/***/ })

})
//# sourceMappingURL=6.b0cd1a164791addf95f7.hot-update.js.map