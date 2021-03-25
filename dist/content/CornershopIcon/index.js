"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cornershop = require("../../assets/icons/cornershop");

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

var CornershopIcon =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(CornershopIcon, _PureComponent);

    function CornershopIcon() {
      _classCallCheck(this, CornershopIcon);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(CornershopIcon).apply(this, arguments)
      );
    }

    _createClass(CornershopIcon, [
      {
        key: "_renderIcon",
        value: function _renderIcon(type) {
          switch (type) {
            case "cornershop-pop":
              return _react.default.createElement(
                _cornershop.CornershopPopIcon,
                null
              );

            case "blocked":
              return _react.default.createElement(
                _cornershop.BlockedIcon,
                null
              );

            case "coupons":
              return _react.default.createElement(
                _cornershop.CouponsIcon,
                null
              );

            case "delivery":
              return _react.default.createElement(
                _cornershop.DeliveryIcon,
                null
              );

            case "discontinued":
              return _react.default.createElement(
                _cornershop.DiscontinuedIcon,
                null
              );

            case "dubious":
              return _react.default.createElement(
                _cornershop.DubiousIcon,
                null
              );

            case "help":
              return _react.default.createElement(_cornershop.HelpIcon, null);

            case "logout":
              return _react.default.createElement(_cornershop.LogoutIcon, null);

            case "orders":
              return _react.default.createElement(_cornershop.OrdersIcon, null);

            case "payments":
              return _react.default.createElement(
                _cornershop.PaymentsIcon,
                null
              );

            case "phone":
              return _react.default.createElement(_cornershop.PhoneIcon, null);

            case "privacy":
              return _react.default.createElement(
                _cornershop.PrivacyIcon,
                null
              );

            case "products":
              return _react.default.createElement(
                _cornershop.ProductsIcon,
                null
              );

            case "profile":
              return _react.default.createElement(
                _cornershop.ProfileIcon,
                null
              );

            case "season-unavailable":
              return _react.default.createElement(
                _cornershop.SeasonUnavailableIcon,
                null
              );

            case "share":
              return _react.default.createElement(_cornershop.ShareIcon, null);

            case "shopper":
              return _react.default.createElement(
                _cornershop.ShopperIcon,
                null
              );

            case "store":
              return _react.default.createElement(_cornershop.StoreIcon, null);

            case "work-with-us":
              return _react.default.createElement(
                _cornershop.WorkWithUsIcon,
                null
              );

            default:
              return _react.default.createElement(
                "span",
                {
                  role: "img",
                  "aria-label": "facepalm"
                },
                " ",
                "\uD83E\uDD26\u200D"
              );
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            type = _this$props.type,
            _this$props$size = _this$props.size,
            size = _this$props$size === void 0 ? 100 : _this$props$size;
          var finalSize =
            size && size > 29
              ? {
                  width: size + "px",
                  height: size + "px"
                }
              : {
                  width: "100px",
                  height: "100px"
                };
          return _react.default.createElement(
            "span",
            {
              className: "cs-cornershop-icon-container cs-icon-" + type,
              style: finalSize
            },
            this._renderIcon(type)
          );
        }
      }
    ]);

    return CornershopIcon;
  })(_react.PureComponent);

CornershopIcon.propTypes = {
  type: _propTypes.default.string.isRequired,
  size: _propTypes.default.number
};
var _default = CornershopIcon;
exports.default = _default;
