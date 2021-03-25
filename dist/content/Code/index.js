"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _prismjs = _interopRequireDefault(require("prismjs"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _helpers = require("../../helpers");

var _icons = require("../../assets/icons");

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

var Code =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Code, _PureComponent);

    function Code() {
      _classCallCheck(this, Code);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Code).apply(this, arguments)
      );
    }

    _createClass(Code, [
      {
        key: "_copyConfirmation",
        value: function _copyConfirmation() {
          (0, _helpers.toast)("🤓 Code snippet copied to the clipboard!");
        }
      },
      {
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props = this.props,
            children = _this$props.children,
            _this$props$format = _this$props.format,
            format = _this$props$format === void 0 ? true : _this$props$format,
            _this$props$language = _this$props.language,
            language =
              _this$props$language === void 0 ? "html" : _this$props$language;
          var code = children
            ? _prismjs.default.highlight(
                format
                  ? children
                      .replace(/>/g, ">\n\t")
                      .replace(/<\//g, "\n</")
                      .trim()
                  : children,
                _prismjs.default.languages[language],
                language
              )
            : null;
          return code
            ? _react.default.createElement(
                "div",
                {
                  className: "cs-code-container"
                },
                _react.default.createElement("div", {
                  className: "cs-code",
                  dangerouslySetInnerHTML: {
                    __html: "<pre>" + code + "</pre>"
                  }
                }),
                _react.default.createElement(
                  _reactCopyToClipboard.CopyToClipboard,
                  {
                    text: children,
                    onCopy: function onCopy() {
                      return _this._copyConfirmation();
                    }
                  },
                  _react.default.createElement(
                    "span",
                    {
                      className: "cs-code-copy-button"
                    },
                    _react.default.createElement(_icons.CopyIcon, {
                      fillColor: "white",
                      size: 16
                    })
                  )
                )
              )
            : _react.default.createElement(
                "div",
                {
                  className: "cs-code-container"
                },
                _react.default.createElement(
                  "div",
                  {
                    className: "cs-code"
                  },
                  _react.default.createElement(
                    "pre",
                    null,
                    _react.default.createElement(
                      "span",
                      {
                        className: "token comment"
                      },
                      "//",
                      " A bit of",
                      " ",
                      _react.default.createElement(
                        "span",
                        {
                          className: "highlight important no-bg bold-text"
                        },
                        "code"
                      ),
                      " ",
                      "will be nice... \uD83D\uDC68\u200D\uD83D\uDCBB"
                    )
                  )
                )
              );
        }
      }
    ]);

    return Code;
  })(_react.PureComponent);

Code.propTypes = {
  format: _propTypes.default.bool,
  language: _propTypes.default.string
};
var _default = Code;
exports.default = _default;
