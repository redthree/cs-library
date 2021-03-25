"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ACCESSORY = exports.CONTENT = exports.MAIN_ICON = exports.DEFAULT = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var DEFAULT = "default";
exports.DEFAULT = DEFAULT;
var MAIN_ICON = "mainIcon";
exports.MAIN_ICON = MAIN_ICON;
var CONTENT = "content";
exports.CONTENT = CONTENT;
var ACCESSORY = "accessory";
exports.ACCESSORY = ACCESSORY;

var Cell =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Cell, _PureComponent);

    function Cell() {
      _classCallCheck(this, Cell);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Cell).apply(this, arguments)
      );
    }

    _createClass(Cell, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            cellClassName = _this$props.cellClassName,
            accessoryClassName = _this$props.accessoryClassName,
            contentClassName = _this$props.contentClassName,
            mainIconClassName = _this$props.mainIconClassName,
            label = _this$props.label,
            detailLabel = _this$props.detailLabel,
            descriptionLabel = _this$props.descriptionLabel,
            mainIcon = _this$props.mainIcon,
            accessory = _this$props.accessory,
            clickValue = _this$props.clickValue,
            _this$props$clickable = _this$props.clickable,
            clickable =
              _this$props$clickable === void 0 ? true : _this$props$clickable,
            _this$props$hoverable = _this$props.hoverable,
            hoverable =
              _this$props$hoverable === void 0 ? true : _this$props$hoverable,
            _this$props$clickCall = _this$props.clickCallback,
            clickCallback =
              _this$props$clickCall === void 0 ? null : _this$props$clickCall,
            _this$props$disabled = _this$props.disabled,
            disabled =
              _this$props$disabled === void 0 ? false : _this$props$disabled,
            _this$props$isActive = _this$props.isActive,
            isActive =
              _this$props$isActive === void 0 ? false : _this$props$isActive,
            _this$props$loading = _this$props.loading,
            loading =
              _this$props$loading === void 0 ? false : _this$props$loading,
            _this$props$bordered = _this$props.bordered,
            bordered =
              _this$props$bordered === void 0 ? false : _this$props$bordered,
            _this$props$addItem = _this$props.addItem,
            addItem =
              _this$props$addItem === void 0 ? false : _this$props$addItem;

          var OnClickCallback = function OnClickCallback(event, type) {
            if (clickCallback && !loading) {
              return clickCallback(event, clickValue, type);
            }
          };

          return _react.default.createElement(
            "div",
            {
              className: "cs-cell-container"
            },
            _react.default.createElement(
              "div",
              {
                className: (0, _classnames.default)(
                  "cs-cell",
                  {
                    clickable: clickable,
                    hoverable: hoverable,
                    "is-disabled": disabled,
                    "is-active": isActive,
                    loading: loading,
                    bordered: bordered,
                    "add-item": addItem
                  },
                  cellClassName ? cellClassName : ""
                ),
                onClick: function onClick(event) {
                  return OnClickCallback(event, DEFAULT);
                }
              },
              mainIcon || addItem
                ? _react.default.createElement(
                    "div",
                    {
                      className: (0, _classnames.default)(
                        "cs-cell-main-icon",
                        mainIconClassName
                      ),
                      onClick: function onClick(event) {
                        return OnClickCallback(event, MAIN_ICON);
                      }
                    },
                    !addItem
                      ? mainIcon
                      : _react.default.createElement("span", {
                          className: "add-item"
                        })
                  )
                : null,
              label || detailLabel
                ? _react.default.createElement(
                    "div",
                    {
                      className: (0, _classnames.default)(
                        "cs-cell-content",
                        contentClassName
                      ),
                      onClick: function onClick(event) {
                        return OnClickCallback(event, CONTENT);
                      }
                    },
                    label
                      ? _react.default.createElement(
                          "div",
                          {
                            className: "cs-cell-label"
                          },
                          label
                        )
                      : null,
                    detailLabel
                      ? _react.default.createElement(
                          "div",
                          {
                            className: "cs-cell-detail-label"
                          },
                          detailLabel
                        )
                      : null,
                    descriptionLabel
                      ? _react.default.createElement(
                          "div",
                          {
                            className: "cs-cell-description-label"
                          },
                          descriptionLabel
                        )
                      : null
                  )
                : null,
              accessory
                ? _react.default.createElement(
                    "div",
                    {
                      className: (0, _classnames.default)(
                        "cs-cell-accessory",
                        accessoryClassName
                      ),
                      onClick: function onClick(event) {
                        return OnClickCallback(event, ACCESSORY);
                      }
                    },
                    !isActive
                      ? accessory
                      : _react.default.createElement(_icons.CheckIcon, null)
                  )
                : null
            )
          );
        }
      }
    ]);

    return Cell;
  })(_react.PureComponent);

Cell.propTypes = {
  cellClassName: _propTypes.default.string,
  accessoryClassName: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  mainIconClassName: _propTypes.default.any,
  resource: _propTypes.default.any,
  label: _propTypes.default.any,
  detailLabel: _propTypes.default.any,
  descriptionLabel: _propTypes.default.any,
  mainIcon: _propTypes.default.object,
  accessory: _propTypes.default.any,
  clickable: _propTypes.default.bool,
  hoverable: _propTypes.default.bool,
  clickCallback: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  isActive: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  bordered: _propTypes.default.bool,
  noBorder: _propTypes.default.bool,
  addItem: _propTypes.default.bool
};
var _default = Cell;
exports.default = _default;
