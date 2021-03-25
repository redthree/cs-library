"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _smoothscrollPolyfill = _interopRequireDefault(
  require("smoothscroll-polyfill")
);

require("./styles.scss");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

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
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

_smoothscrollPolyfill.default.polyfill();

var SideMenu =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(SideMenu, _PureComponent);

    function SideMenu() {
      var _this;

      _classCallCheck(this, SideMenu);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(SideMenu).call(this)
      );
      _this.state = {
        sideLinks: []
      };
      return _this;
    }

    _createClass(SideMenu, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._setSideLlinks();

          if (window.location.hash) {
            this._handleClick(
              "cs-side-link-" + window.location.hash.replace("#", "")
            );
          }
        }
      },
      {
        key: "_setSideLlinks",
        value: function _setSideLlinks() {
          var _this$props$depth = this.props.depth,
            depth = _this$props$depth === void 0 ? 2 : _this$props$depth;
          var h = ["h1", "h2", "h3", "h4", "h5", "h6"];
          var sideLinks = [];
          var allContentChildren = document.querySelectorAll(
            ".cs-content > *, .cs-side-menu-searchable > *"
          );

          for (var i = 0; i < allContentChildren.length; i++) {
            var contentChildIndex = h.indexOf(
              allContentChildren[i].tagName.toLocaleLowerCase()
            );

            if (contentChildIndex > -1 && depth >= contentChildIndex) {
              var buildId =
                "cs-side-link-" +
                allContentChildren[i].textContent
                  .toLowerCase()
                  .replace(/\s/, "-")
                  .trim();
              allContentChildren[i].id = buildId;
              sideLinks.push({
                text: allContentChildren[i].textContent,
                link: buildId,
                level: contentChildIndex
              });
            }
          }

          this.setState({
            sideLinks: sideLinks
          });
        }
      },
      {
        key: "_handleClick",
        value: function _handleClick(id) {
          var ele = document.getElementById(id);
          var eleOriginalClassName = ele.className;
          ele.className = eleOriginalClassName + " highlight-heading";
          var scrollAmount = ele.offsetTop - 80;
          window.scroll({
            top: scrollAmount,
            left: 0,
            behavior: "smooth"
          });
          setTimeout(function() {
            ele.className = eleOriginalClassName;
          }, 2000);
        }
      },
      {
        key: "_renderSideLinks",
        value: function _renderSideLinks(sideLinks) {
          var _this2 = this;

          return sideLinks.map(function(sideLinkItem) {
            return _react.default.createElement(
              "span",
              {
                onClick: function onClick() {
                  _this2._handleClick(sideLinkItem.link);
                },
                className: "cs-side-link level-" + sideLinkItem.level,
                key: "cs-side-link-" + sideLinkItem.link,
                href: "#" + sideLinkItem.link
              },
              sideLinkItem.text
            );
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var sideLinks = this.state.sideLinks;
          return _react.default.createElement(
            "div",
            {
              className: "cs-side-links-menu"
            },
            sideLinks.length
              ? this._renderSideLinks(sideLinks)
              : _react.default.createElement(
                  "h3",
                  null,
                  "No headings!",
                  " ",
                  _react.default.createElement(
                    "span",
                    {
                      role: "img",
                      "aria-label": "No Headings!"
                    },
                    "\uD83E\uDD2F"
                  )
                )
          );
        }
      }
    ]);

    return SideMenu;
  })(_react.PureComponent);

SideMenu.propTypes = {
  depth: _propTypes.default.number
};
var _default = SideMenu;
exports.default = _default;
