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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var SkeletonBlock = function SkeletonBlock(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? "100%" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "100%" : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "rgba(0,0,0,0.01)" : _ref$color,
    _ref$animationSpeed = _ref.animationSpeed,
    animationSpeed =
      _ref$animationSpeed === void 0 ? "1.5s" : _ref$animationSpeed,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? "5px" : _ref$borderRadius,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? "none" : _ref$border,
    style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    children = _ref.children;

  var computedStyle = _objectSpread(
    {
      width: width,
      height: height,
      borderRadius: borderRadius,
      border: border
    },
    style
  );

  return _react.default.createElement(
    _react.Fragment,
    null,
    _react.default.createElement(
      "div",
      {
        style: computedStyle,
        className: "cs-skeleton-block ".concat(className)
      },
      _react.default.createElement(
        "div",
        {
          className: "loading-block",
          style: {
            backgroundColor: color
          }
        },
        _react.default.createElement("span", {
          style: {
            animation: "pulseLoadingPlaceholder ".concat(
              animationSpeed,
              " infinite"
            )
          }
        })
      ),
      children
    )
  );
};

var _default = (0, _react.memo)(SkeletonBlock);

exports.default = _default;
