"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../../assets/icons");

var _colors = require("../../assets/colors");

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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
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

var Section =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Section, _PureComponent);

    function Section() {
      var _this;

      _classCallCheck(this, Section);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Section).call(this)
      );
      _this._toggleCollapse = _this._toggleCollapse.bind(
        _assertThisInitialized(_this)
      );
      _this.state = {
        collapsed: true
      };
      return _this;
    }

    _createClass(Section, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var startCollapsed = this.props.startCollapsed;

          if (startCollapsed !== undefined) {
            this.setState({
              collapsed: startCollapsed
            });
          }
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.collapsed !== this.props.collapsed) {
            this.setState({
              collapsed: this.props.collapsed
            });
          }
        }
      },
      {
        key: "_toggleCollapse",
        value: function _toggleCollapse() {
          var _this$props$clickCall = this.props.clickCallback,
            clickCallback =
              _this$props$clickCall === void 0 ? null : _this$props$clickCall;
          var collapsed = !this.state.collapsed;
          this.setState({
            collapsed: collapsed
          });

          if (clickCallback !== null) {
            clickCallback(collapsed);
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var collapsed = this.state.collapsed;
          var _this$props = this.props,
            children = _this$props.children,
            title = _this$props.title,
            description = _this$props.description,
            customClassName = _this$props.customClassName,
            _this$props$collapsab = _this$props.collapsable,
            collapsable =
              _this$props$collapsab === void 0 ? false : _this$props$collapsab;
          return _react.default.createElement(
            "section",
            {
              className: (0, _classnames.default)(
                "cs-section",
                {
                  collapsed: collapsed && collapsable,
                  collapsable: collapsable
                },
                customClassName
              ),
              id:
                title && title.length
                  ? title
                      .toLowerCase()
                      .trim()
                      .replace(/\s/, "-")
                  : null
            },
            title || description
              ? _react.default.createElement(
                  "div",
                  {
                    className: "cs-section-info",
                    onClick: collapsable ? this._toggleCollapse : null
                  },
                  title
                    ? _react.default.createElement(
                        "span",
                        {
                          className: "cs-section-title"
                        },
                        title
                      )
                    : null,
                  description
                    ? _react.default.createElement(
                        "span",
                        {
                          className: "cs-section-description"
                        },
                        description
                      )
                    : null,
                  collapsable
                    ? _react.default.createElement(
                        "span",
                        {
                          className: "collapse-toggle-button"
                        },
                        _react.default.createElement(_icons.ChevronDownIcon, {
                          fillColor: _colors.darkGrey
                        })
                      )
                    : null
                )
              : null,
            _react.default.createElement(
              "div",
              {
                className: "cs-section-content"
              },
              children
            )
          );
        }
      }
    ]);

    return Section;
  })(_react.PureComponent);

Section.propTypes = {
  title: _propTypes.default.any,
  description: _propTypes.default.string,
  collapsed: _propTypes.default.bool,
  customClassName: _propTypes.default.string
};
var _default = Section;
exports.default = _default;
