"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var Pagination = function Pagination(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(
    "div",
    _extends({}, rest, {
      className: "cs-pagination"
    }),
    children
  );
};

Pagination.Prev = function(props) {
  return _react.default.createElement(
    "i",
    _extends({}, props, {
      className: "arrow left"
    })
  );
};

Pagination.Next = function(props) {
  return _react.default.createElement(
    "i",
    _extends({}, props, {
      className: "arrow right"
    })
  );
};

Pagination.Page = function(_ref2) {
  var _ref2$number = _ref2.number,
    number = _ref2$number === void 0 ? 1 : _ref2$number,
    _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active,
    _ref2$visited = _ref2.visited,
    visited = _ref2$visited === void 0 ? false : _ref2$visited,
    rest = _objectWithoutProperties(_ref2, ["number", "active", "visited"]);

  var classes = (0, _classnames.default)({
    number: true,
    active: active,
    visited: visited
  });
  return _react.default.createElement(
    "div",
    _extends({}, rest, {
      className: classes
    }),
    number
  );
};

var _default = Pagination;
exports.default = _default;
