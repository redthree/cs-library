"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles.scss");

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

var Modal =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Modal, _PureComponent);

    function Modal() {
      _classCallCheck(this, Modal);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Modal).apply(this, arguments)
      );
    }

    _createClass(Modal, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var showModal = this.props.showModal;
          return showModal ? (document.body.style.overflow = "hidden") : null;
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var showModal = this.props.showModal;

          if (prevProps.showModal && !showModal) {
            document.body.style.overflow = "auto";
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            headerLeft = _this$props.headerLeft,
            headerTitle = _this$props.headerTitle,
            headerRight = _this$props.headerRight,
            _this$props$showModal = _this$props.showModalHeader,
            showModalHeader =
              _this$props$showModal === void 0 ? true : _this$props$showModal,
            showModal = _this$props.showModal,
            outsideClickCallback = _this$props.outsideClickCallback;
          return showModal
            ? _react.default.createElement(
                "div",
                {
                  className: "cs-modal-overall-container"
                },
                _react.default.createElement(
                  "div",
                  {
                    className: "cs-modal-overlay",
                    onClick: outsideClickCallback
                  },
                  _react.default.createElement(
                    "div",
                    {
                      className: "cs-modal-container"
                    },
                    showModalHeader
                      ? _react.default.createElement(
                          "div",
                          {
                            className: "cs-modal-header"
                          },
                          headerLeft
                            ? _react.default.createElement(
                                "div",
                                {
                                  className: "cs-modal-header-left"
                                },
                                headerLeft
                              )
                            : null,
                          headerTitle
                            ? _react.default.createElement(
                                "h3",
                                {
                                  className: "cs-modal-header-title"
                                },
                                headerTitle
                              )
                            : null,
                          _react.default.createElement(
                            "div",
                            {
                              className: "cs-modal-header-right"
                            },
                            headerRight ? headerRight : null
                          )
                        )
                      : null,
                    _react.default.createElement(
                      "div",
                      {
                        className: "cs-modal-content"
                      },
                      children
                    ),
                    _react.default.createElement("div", {
                      className: "cs-modal-footer"
                    })
                  )
                )
              )
            : null;
        }
      }
    ]);

    return Modal;
  })(_react.PureComponent);

var _default = Modal;
exports.default = _default;
