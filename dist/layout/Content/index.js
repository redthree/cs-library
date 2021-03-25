"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

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

var Content =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Content, _PureComponent);

    function Content() {
      var _this;

      _classCallCheck(this, Content);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Content).call(this)
      );
      _this.state = {
        hasSideBar: false,
        footerHeight: 0
      };
      return _this;
    }

    _createClass(Content, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.setState({
            hasSideBar: this._hasSidebar(),
            footerHeight: this._getFooterHeight()
          });

          window.onresize = function() {
            _this2.setState({
              footerHeight: _this2._getFooterHeight()
            });
          };
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
              hasSideBar: this._hasSidebar()
            });
          }
        }
      },
      {
        key: "_hasSidebar",
        value: function _hasSidebar() {
          return document.getElementsByClassName("cs-side-links-menu").length
            ? true
            : false;
        }
      },
      {
        key: "_getFooterHeight",
        value: function _getFooterHeight() {
          var footer = document.getElementsByTagName("footer");
          return footer[0] ? footer[0].clientHeight : 0;
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            fullWidth = _this$props.fullWidth;
          var _this$state = this.state,
            hasSideBar = _this$state.hasSideBar,
            footerHeight = _this$state.footerHeight;
          return _react.default.createElement(
            "div",
            {
              className: (0, _classnames.default)(
                "cs-content",
                {
                  "full-width": fullWidth
                },
                {
                  "has-sidebar": hasSideBar
                }
              ),
              style: {
                minHeight: "calc(100vh - " + footerHeight + "px)"
              }
            },
            children
          );
        }
      }
    ]);

    return Content;
  })(_react.PureComponent);

var _default = (0, _reactRouterDom.withRouter)(Content);

exports.default = _default;
