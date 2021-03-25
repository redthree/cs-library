"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Code = _interopRequireDefault(require("../Code"));

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

var ComponentInfo =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ComponentInfo, _PureComponent);

    function ComponentInfo() {
      _classCallCheck(this, ComponentInfo);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(ComponentInfo).apply(this, arguments)
      );
    }

    _createClass(ComponentInfo, [
      {
        key: "_renderComponentsProps",
        value: function _renderComponentsProps(componentProps) {
          return componentProps.map(function(componentProp) {
            return _react.default.createElement(
              "div",
              {
                key: "cs-component-prop-info-" + componentProp.propName,
                className: "cs-component-prop-info"
              },
              _react.default.createElement(
                "span",
                {
                  className: "pre bold-text"
                },
                componentProp.propName
              ),
              _react.default.createElement(
                "span",
                {
                  className: "pre no-bg bold-text cs-component-prop-type"
                },
                componentProp.type
                  ? "type: " + componentProp.type
                  : "this prop needs a type 🤓"
              ),
              componentProp.default
                ? _react.default.createElement(
                    "span",
                    {
                      className: "pre no-bg cs-component-prop-default"
                    },
                    "default: ",
                    componentProp.default
                  )
                : null,
              componentProp.required
                ? _react.default.createElement(
                    "span",
                    {
                      className:
                        "pre bold-text cs-component-prop-required highlight no-bg important"
                    },
                    "required"
                  )
                : null,
              componentProp.propValues
                ? _react.default.createElement(
                    "span",
                    {
                      className: "pre no-bg cs-component-prop-values"
                    },
                    "values: ",
                    componentProp.propValues.split(",").join(" | ")
                  )
                : null,
              _react.default.createElement(
                "span",
                {
                  className: "cs-component-prop-description"
                },
                componentProp.propDescription
              )
            );
          });
        }
      },
      {
        key: "_renderCodeExamples",
        value: function _renderCodeExamples(codeExamples) {
          var name = this.props.name;
          return codeExamples.map(function(codeExample, index) {
            return _react.default.createElement(
              "span",
              {
                key: "cs-component-info-code-example-" + name + "-" + index,
                className: "cs-component-info-code-example"
              },
              _react.default.createElement("h5", null, "Example"),
              _react.default.createElement(
                _Code.default,
                {
                  format: codeExample.formatExample
                },
                codeExample.code
              ),
              codeExample.output
                ? _react.default.createElement(
                    _react.Fragment,
                    null,
                    _react.default.createElement("h5", null, "Output"),
                    codeExample.output
                  )
                : null
            );
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            name = _this$props.name,
            description = _this$props.description,
            componentProps = _this$props.componentProps,
            codeExamples = _this$props.codeExamples;
          return _react.default.createElement(
            "div",
            {
              className: "cs-component-info-container cs-side-menu-searchable"
            },
            name && name.length
              ? _react.default.createElement("h3", null, name)
              : _react.default.createElement(
                  "h3",
                  null,
                  "A component without a",
                  " ",
                  _react.default.createElement(
                    "span",
                    {
                      className: "highlight important"
                    },
                    "name"
                  ),
                  ", interesting \uD83E\uDD14"
                ),
            description && description.length
              ? _react.default.createElement("p", null, description)
              : _react.default.createElement(
                  "p",
                  null,
                  "A brief ",
                  _react.default.createElement(
                    "span",
                    {
                      className: "highlight important"
                    },
                    "description"
                  ),
                  " of what this component does will be nice, don't you think? \uD83D\uDE44"
                ),
            componentProps && componentProps.length
              ? _react.default.createElement(
                  "div",
                  {
                    className: "cs-component-info-props"
                  },
                  _react.default.createElement("h4", null, "Props"),
                  this._renderComponentsProps(componentProps)
                )
              : null,
            codeExamples && codeExamples.length
              ? _react.default.createElement(
                  "div",
                  {
                    className: "cs-component-info-code-examples"
                  },
                  this._renderCodeExamples(codeExamples)
                )
              : _react.default.createElement(
                  "h5",
                  null,
                  "No ",
                  _react.default.createElement(
                    "span",
                    {
                      className: "highlight important"
                    },
                    "codeExamples"
                  ),
                  "? Really? \uD83D\uDE11"
                ),
            children ? children : null
          );
        }
      }
    ]);

    return ComponentInfo;
  })(_react.PureComponent);

ComponentInfo.propTypes = {
  name: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  componentProps: _propTypes.default.array,
  codeExamples: _propTypes.default.array.isRequired,
  formatCodeExamples: _propTypes.default.bool
};
var _default = ComponentInfo;
exports.default = _default;
