"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

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

var Button =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(Button, _Component);

    function Button() {
      var _this;

      _classCallCheck(this, Button);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Button).call(this)
      );
      _this._doClickCallBack = _this._doClickCallBack.bind(
        _assertThisInitialized(_this)
      );
      _this._generateContent = _this._generateContent.bind(
        _assertThisInitialized(_this)
      );
      _this.state = {
        className: "cs-button",
        clickCallback: null,
        loading: false
      };
      return _this;
    }

    _createClass(Button, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props = this.props,
            modalText = _this$props.modalText,
            type = _this$props.type,
            clickCallback = _this$props.clickCallback,
            modalCallback = _this$props.modalCallback,
            modalAcceptButtonText = _this$props.modalAcceptButtonText,
            modalCancelButtonText = _this$props.modalCancelButtonText;
          var className = this.state.className + " ";
          var setClickCallBack = clickCallback;

          if (type && type === "confirmation") {
            if (modalText) {
              if (modalCallback) {
                setClickCallBack = function setClickCallBack() {
                  (0, _helpers.simpleModal)(
                    modalText,
                    "confirmation",
                    modalCallback,
                    modalAcceptButtonText,
                    modalCancelButtonText
                  );
                };
              } else {
                console.error("Ups! you missed the 'modalCallback' prop.");
              }
            } else {
              console.error("Ups! you missed the 'modalText' prop.");
            }

            this.setState({
              className: className + "cs-modal",
              clickCallback: setClickCallBack
            });
          } else {
            this.setState({
              className: className + (type || ""),
              clickCallback: setClickCallBack
            });
          }
        }
      },
      {
        key: "_doClickCallBack",
        value: function _doClickCallBack() {
          var clickCallback = this.state.clickCallback;
          var loading = this.props.loading;
          var classes = this.state.className.trim();

          if (!loading) {
            this.setState({
              className: classes + " cs-button-clicked"
            });

            if (clickCallback) {
              clickCallback();
            }

            this.setState({
              className: classes
            });
          }
        }
      },
      {
        key: "_generateContent",
        value: function _generateContent() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            type = _this$props2.type,
            primary = _this$props2.primary;
          var buttonContent;

          switch (type) {
            case "back":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "save":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.SaveIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "download":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.DownloadIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "copy":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.CopyIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "doc":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.DocumentIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "pdf":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.PdfIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            case "zip":
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(_icons.ZipIcon, {
                  fillColor: primary ? "white" : _colors.darkGrey,
                  size: 16
                }),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;

            default:
              buttonContent = _react.default.createElement(
                "span",
                {
                  className: "cs-button-content"
                },
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-button-text"
                  },
                  children
                )
              );
              break;
          }

          return buttonContent;
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props3 = this.props,
            primary = _this$props3.primary,
            _this$props3$disabled = _this$props3.disabled,
            disabled =
              _this$props3$disabled === void 0 ? false : _this$props3$disabled,
            customClassName = _this$props3.customClassName,
            _this$props3$slim = _this$props3.slim,
            slim = _this$props3$slim === void 0 ? false : _this$props3$slim,
            _this$props3$noBackgr = _this$props3.noBackground,
            noBackground =
              _this$props3$noBackgr === void 0 ? false : _this$props3$noBackgr,
            _this$props3$loading = _this$props3.loading,
            loading =
              _this$props3$loading === void 0 ? false : _this$props3$loading;
          return _react.default.createElement(
            "button",
            {
              className: (0, _classnames.default)(
                this.state.className,
                {
                  disabled: disabled || loading
                },
                {
                  primary: primary
                },
                {
                  slim: slim
                },
                {
                  "no-background": noBackground
                },
                customClassName
              ),
              onClick: function onClick() {
                _this2._doClickCallBack();
              },
              disabled: disabled
            },
            this._generateContent()
          );
        }
      }
    ]);

    return Button;
  })(_react.Component);

Button.propsTypes = {
  type: _propTypes.default.string,
  clickCallback: _propTypes.default.func,
  modalText: _propTypes.default.string,
  modalCallback: _propTypes.default.func,
  modalAcceptButtonText: _propTypes.default.string,
  modalCancelButtonText: _propTypes.default.string,
  primary: _propTypes.default.bool,
  disabled: _propTypes.default.disabled
};
var _default = Button;
exports.default = _default;
