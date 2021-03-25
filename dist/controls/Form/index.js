"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

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

var Form =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Form, _PureComponent);

    function Form() {
      var _this;

      _classCallCheck(this, Form);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Form).call(this)
      );
      _this._handleSubmit = _this._handleSubmit.bind(
        _assertThisInitialized(_this)
      );
      _this._renderChildren = _this._renderChildren.bind(
        _assertThisInitialized(_this)
      );
      _this.state = {
        inputsWithRef: null,
        inputReferencesNames: null,
        error: false,
        errorMessasge: null
      };
      return _this;
    }

    _createClass(Form, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._renderChildren();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.children !== this.props.children) {
            this._renderChildren();
          }
        }
      },
      {
        key: "_renderChildren",
        value: function _renderChildren() {
          var _this2 = this;

          var children = this.props.children;
          var inputsWithRef = [];
          var inputReferencesNames = [];

          _react.default.Children.forEach(children, function(child, index) {
            var refName = "cs-input-ref-" + index;
            _this2[refName] = _react.default.createRef();
            var inputProps = {
              ref: _this2[refName],
              key: refName,
              submit: child.props.submitOnEnter ? _this2._handleSubmit : null
            };

            var childClone = _react.default.cloneElement(child, inputProps);

            inputsWithRef.push(childClone);
            inputReferencesNames.push(refName);
          });

          this.setState({
            inputsWithRef: inputsWithRef,
            inputReferencesNames: inputReferencesNames
          });
        }
      },
      {
        key: "_handleSubmit",
        value: function _handleSubmit() {
          var submitCallback = this.props.submitCallback;
          var inputReferencesNames = this.state.inputReferencesNames;
          var formValues = {};
          this.setState({
            error: false,
            errorMessage: null
          });

          for (var i = 0; i < inputReferencesNames.length; i++) {
            var inputReference = this[inputReferencesNames[i]].current;

            if (
              inputReference &&
              inputReference.props &&
              inputReference.props.label
            ) {
              var labelName = inputReference.props.label
                .toLowerCase()
                .replace(/\s/g, "_");
              var isRequired = inputReference.props.required;
              var isDisabled = inputReference.props.disabled;
              var inputValue =
                inputReference.props.type === "date"
                  ? inputReference.state.selectedDate.toString()
                  : inputReference.props.type === "radio" ||
                    inputReference.props.type === "checkbox"
                  ? inputReference.input.current.checked
                  : inputReference.props.type === "file"
                  ? inputReference.state.imageBase64
                  : inputReference.input.current.value;

              if (
                isRequired &&
                inputReference.props.type !== "radio" &&
                inputReference.props.type !== "checkbox" &&
                !inputValue.length
              ) {
                this.setState({
                  error: true,
                  errorMessage: "All required fields must be completed"
                });
                return false;
              } else {
                if (inputReference.state.error) {
                  this.setState({
                    error: true,
                    errorMessage: "There are some errors in the form"
                  });
                  return false;
                } else {
                  formValues[labelName] = !isDisabled ? inputValue : null;
                }
              }
            }
          }

          return submitCallback(formValues);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            _this$props$submitBut = _this$props.submitButtonText,
            submitButtonText =
              _this$props$submitBut === void 0
                ? "Submit"
                : _this$props$submitBut,
            submitCallback = _this$props.submitCallback,
            _this$props$submitBut2 = _this$props.submitButtonPrimary,
            submitButtonPrimary =
              _this$props$submitBut2 === void 0 ? true : _this$props$submitBut2,
            _this$props$centerFie = _this$props.centerFields,
            centerFields =
              _this$props$centerFie === void 0 ? false : _this$props$centerFie,
            _this$props$loading = _this$props.loading,
            loading =
              _this$props$loading === void 0 ? false : _this$props$loading;
          var _this$state = this.state,
            inputsWithRef = _this$state.inputsWithRef,
            error = _this$state.error,
            errorMessage = _this$state.errorMessage;
          return _react.default.createElement(
            "div",
            {
              className: (0, _classnames.default)("cs-form-container", {
                "center-fields": centerFields
              })
            },
            submitCallback
              ? _react.default.createElement(
                  "div",
                  {
                    className: "cs-form"
                  },
                  inputsWithRef,
                  _react.default.createElement(
                    _Button.default,
                    {
                      clickCallback: this._handleSubmit,
                      primary: submitButtonPrimary,
                      loading: loading
                    },
                    submitButtonText
                  ),
                  error
                    ? _react.default.createElement(
                        "div",
                        {
                          className: "cs-form-error"
                        },
                        _react.default.createElement(
                          "span",
                          {
                            className: "highlight important no-bg"
                          },
                          errorMessage
                        )
                      )
                    : null
                )
              : _react.default.createElement(
                  "h3",
                  null,
                  "Did you know that a",
                  " ",
                  _react.default.createElement(
                    "span",
                    {
                      className: "highlight important"
                    },
                    "submitCallback"
                  ),
                  " is really important for forms?",
                  " ",
                  _react.default.createElement(
                    "span",
                    {
                      role: "img",
                      "aria-label": "emoji"
                    },
                    "\uD83D\uDC68\u200D\uD83D\uDCBB"
                  )
                )
          );
        }
      }
    ]);

    return Form;
  })(_react.PureComponent);

Form.propTypes = {
  submitCallback: _propTypes.default.func.isRequired,
  submitButtonText: _propTypes.default.string
};
var _default = Form;
exports.default = _default;
