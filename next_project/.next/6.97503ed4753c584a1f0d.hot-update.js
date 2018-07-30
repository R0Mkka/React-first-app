webpackHotUpdate(6,{

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
} // function Script() {
//   let content = document.querySelector('.content'),
//       menu = document.querySelector('.menu'),
//       header = document.querySelector('.header'),
//       backs = document.getElementsByClassName('row__block-background'),
//       imgs = content.getElementsByTagName('img'),
//       preview = document.querySelector('.preview');
//
//   for(let i = 0; i < imgs.length; i++){
//       backs[i].style.height = imgs[i].offsetHeight + 'px';
//   }
//   menu.style.width = header.clientWidth + 'px';
//
//   if(preview !== null){
//       preview_height = preview.offsetHeight;
//   } else {
//       preview_height = 112;
//   }
//
//   if(window.pageYOffset >= (preview_height - 112)){
//       menu.classList.add('menu_scroll');
//   } else {
//       menu.classList.remove('menu_scroll');
//   }
//
//   window.onscroll = function() {
//     if(window.pageYOffset >= (preview_height - 112)){
//       menu.classList.add('menu_scroll');
//     } else {
//       menu.classList.remove('menu_scroll');
//     }
//   }
//
//   window.onresize = function(event) {
//     for(let i = 0; i < imgs.length; i++){
//         backs[i].style.height = imgs[i].offsetHeight + 'px';
//     }
//     menu.style.width = header.clientWidth + 'px';
//   };
// }


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
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bordered-visible-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LeftMenu, {
        leftMenu: this.props.leftMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041E \u043D\u0430\u0441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "\u041E \u043D\u0430\u0441"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u0420\u0430\u0431\u043E\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "\u0420\u0430\u0431\u043E\u0442\u044B"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))))), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })));
    }
  }]);

  return ContentBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ContentBox);

/***/ })

})
//# sourceMappingURL=6.97503ed4753c584a1f0d.hot-update.js.map