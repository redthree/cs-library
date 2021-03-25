"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

var _icons = require("../../assets/icons");

var _colors = require("../../assets/colors");

require("react-datepicker/dist/react-datepicker.css");

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

var Input =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Input, _PureComponent);

    function Input() {
      var _this;

      _classCallCheck(this, Input);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Input).call(this)
      );
      _this.input = _react.default.createRef();
      _this._dateChange = _this._dateChange.bind(_assertThisInitialized(_this));
      _this._handleInputChange = _this._handleInputChange.bind(
        _assertThisInitialized(_this)
      );
      _this._handleChangeImage = _this._handleChangeImage.bind(
        _assertThisInitialized(_this)
      );
      _this._handleBlur = _this._handleBlur.bind(_assertThisInitialized(_this));
      _this._selectOnFocus = _this._selectOnFocus.bind(
        _assertThisInitialized(_this)
      );
      _this._setName = _this._setName.bind(_assertThisInitialized(_this));
      _this.state = {
        selectedDate: null,
        error: false,
        errorMessage: null,
        inputName: null,
        imageBase64: null
      };
      return _this;
    }

    _createClass(Input, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var _this$props = this.props,
            type = _this$props.type,
            submitOnEnter = _this$props.submitOnEnter,
            submit = _this$props.submit;

          if (type === "date") {
            this.setState({
              selectedDate: new Date()
            });
          }

          if (submitOnEnter) {
            this.input.current.addEventListener("keyup", function(event) {
              if (event.which === 13 || event.keyCode === 13) {
                _this2.input.current.blur();

                submit(event);
                return false;
              }

              return true;
            });
          }

          this._setName();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.value !== this.props.value) {
            this.setState(
              _defineProperty({}, this.state.inputName, this.props.value)
            );
          }
        }
      },
      {
        key: "_handleBlur",
        value: function _handleBlur(event) {
          var _this$props2 = this.props,
            required = _this$props2.required,
            type = _this$props2.type,
            onBlurCallback = _this$props2.onBlurCallback;
          var inputValue = event.target.value;

          if (
            type === "email" &&
            (0, _helpers.emailValidation)(inputValue) === false
          ) {
            this.setState({
              error: true,
              errorMessage: "Please, enter a valid email"
            });
            return false;
          }

          if (required) {
            var hasValue = inputValue.length ? true : false;

            if (!hasValue) {
              this.setState({
                error: true,
                errorMessage: "This field is required"
              });
              return false;
            } else {
              this.setState({
                error: false,
                errorMessage: null
              });
            }
          }

          if (onBlurCallback) {
            onBlurCallback(event);
          }
        }
      },
      {
        key: "_dateChange",
        value: function _dateChange(date) {
          this.setState({
            selectedDate: date
          });
        }
      },
      {
        key: "_handleInputChange",
        value: function _handleInputChange(event) {
          var _this$props$onChangeC = this.props.onChangeCallback,
            onChangeCallback =
              _this$props$onChangeC === void 0 ? null : _this$props$onChangeC;
          var target = event.target;
          var value =
            target.type === "checkbox" || target.type === "radio"
              ? target.checked
              : target.value;
          var name = target.name;
          this.setState(_defineProperty({}, name, value));

          if (onChangeCallback) {
            onChangeCallback(event);
          }
        }
      },
      {
        key: "_setName",
        value: function _setName() {
          var label = this.props.label;
          var inputName =
            label && label.length
              ? label.toLowerCase().replace(/\s/, "")
              : null;
          this.setState({
            inputName: inputName
          });
        }
      },
      {
        key: "_selectOnFocus",
        value: function _selectOnFocus(event) {
          var onFocus = this.props.onFocus;
          event.preventDefault();
          event.target.select();

          if (onFocus) {
            onFocus(event);
          }
        }
      },
      {
        key: "_handleChangeImage",
        value: function _handleChangeImage(event) {
          var self = this;
          var reader = new FileReader();
          var file = event.target.files[0];

          reader.onload = function(upload) {
            self.setState({
              imageBase64: upload.target.result
            });
          };

          reader.readAsDataURL(file);
        }
      },
      {
        key: "render",
        value: function render() {
          var _this3 = this;

          var _this$state = this.state,
            selectedDate = _this$state.selectedDate,
            error = _this$state.error,
            errorMessage = _this$state.errorMessage,
            inputName = _this$state.inputName;
          var _this$props3 = this.props,
            children = _this$props3.children,
            _this$props3$type = _this$props3.type,
            type = _this$props3$type === void 0 ? "text" : _this$props3$type,
            label = _this$props3.label,
            _this$props3$noLabel = _this$props3.noLabel,
            noLabel =
              _this$props3$noLabel === void 0 ? false : _this$props3$noLabel,
            placeholder = _this$props3.placeholder,
            _this$props3$dateForm = _this$props3.dateFormat,
            dateFormat =
              _this$props3$dateForm === void 0
                ? "dd/MM/yyyy"
                : _this$props3$dateForm,
            _this$props3$required = _this$props3.required,
            required =
              _this$props3$required === void 0 ? false : _this$props3$required,
            _this$props3$disabled = _this$props3.disabled,
            disabled =
              _this$props3$disabled === void 0 ? false : _this$props3$disabled,
            _this$props3$minDate = _this$props3.minDate,
            minDate =
              _this$props3$minDate === void 0 ? null : _this$props3$minDate,
            _this$props3$maxDate = _this$props3.maxDate,
            maxDate =
              _this$props3$maxDate === void 0 ? null : _this$props3$maxDate,
            radioButtonGroupName = _this$props3.radioButtonGroupName,
            _this$props3$checked = _this$props3.checked,
            checked =
              _this$props3$checked === void 0 ? false : _this$props3$checked,
            _this$props3$value = _this$props3.value,
            value = _this$props3$value === void 0 ? null : _this$props3$value,
            _this$props3$onFocus = _this$props3.onFocus,
            onFocus =
              _this$props3$onFocus === void 0 ? null : _this$props3$onFocus,
            _this$props3$selectOn = _this$props3.selectOnFocus,
            selectOnFocus =
              _this$props3$selectOn === void 0 ? false : _this$props3$selectOn;
          var textType = ["text", "email", "password"].indexOf(type) > -1;
          return _react.default.createElement(
            "div",
            {
              className: (0, _classnames.default)("cs-input-container", {
                "cs-input-container-radio-button": type === "radio"
              })
            },
            type === "radio"
              ? _react.default.createElement(
                  "label",
                  {
                    className: (0, _classnames.default)(
                      "cs-input cs-input-type-radio",
                      {
                        disabled: disabled
                      }
                    )
                  },
                  _react.default.createElement("input", {
                    ref: this.input,
                    type: "radio",
                    onChange: this._handleInputChange,
                    name: radioButtonGroupName,
                    defaultChecked: checked,
                    disabled: disabled,
                    value: value
                  }),
                  _react.default.createElement("span", {
                    className: "cs-radio-button-checkmark"
                  }),
                  _react.default.createElement(
                    "span",
                    {
                      className: "cs-radio-button-text"
                    },
                    label
                  )
                )
              : null,
            type === "checkbox"
              ? _react.default.createElement(
                  "label",
                  {
                    className: (0, _classnames.default)(
                      "cs-input cs-input-type-checkbox",
                      {
                        disabled: disabled
                      }
                    )
                  },
                  _react.default.createElement("input", {
                    ref: this.input,
                    type: "checkbox",
                    onChange: this._handleInputChange,
                    name: inputName,
                    defaultChecked: checked,
                    disabled: disabled
                  }),
                  _react.default.createElement("span", {
                    className: "cs-checkbox-checkmark"
                  }),
                  !noLabel &&
                    _react.default.createElement(
                      "span",
                      {
                        className: "cs-checkbox-text"
                      },
                      label
                    )
                )
              : null,
            !noLabel && type !== "radio" && type !== "checkbox"
              ? _react.default.createElement(
                  "label",
                  {
                    htmlFor: inputName
                  },
                  label && label.length
                    ? _react.default.createElement(
                        "span",
                        {
                          className: "cs-input-name"
                        },
                        label,
                        " ",
                        required
                          ? _react.default.createElement(
                              "span",
                              {
                                className: "cs-input-required"
                              },
                              "required"
                            )
                          : null
                      )
                    : _react.default.createElement(
                        "span",
                        null,
                        "Hey! ",
                        _react.default.createElement(
                          "span",
                          {
                            className: "highlight important"
                          },
                          "label"
                        ),
                        " me"
                      )
                )
              : null,
            _react.default.createElement(
              "div",
              {
                className: (0, _classnames.default)(
                  "cs-input cs-input-type-" + type,
                  {
                    disabled: disabled
                  }
                )
              },
              textType
                ? _react.default.createElement("input", {
                    type: type,
                    name: inputName,
                    required: required,
                    placeholder: placeholder,
                    disabled: disabled,
                    onBlur: this._handleBlur,
                    onChange: this._handleInputChange,
                    ref: this.input,
                    onFocus: selectOnFocus
                      ? function(event) {
                          return _this3._selectOnFocus(event);
                        }
                      : onFocus,
                    onMouseUp: selectOnFocus
                      ? function(event) {
                          return _this3._selectOnFocus(event);
                        }
                      : null,
                    value: this.state[inputName]
                      ? this.state[inputName]
                      : value
                      ? value
                      : ""
                  })
                : type === "date"
                ? _react.default.createElement(_reactDatepicker.default, {
                    selected: selectedDate,
                    dateFormat: dateFormat,
                    disabled: disabled,
                    className: "cs-input-datepicker",
                    onChange: this._dateChange,
                    minDate:
                      minDate && minDate.length ? new Date(minDate) : null,
                    maxDate:
                      maxDate && maxDate.length ? new Date(maxDate) : null,
                    placeholderText: placeholder
                  })
                : type === "select"
                ? _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    _react.default.createElement(
                      "span",
                      {
                        className: "cs-input-selector"
                      },
                      _react.default.createElement(_icons.ChevronDownIcon, {
                        fillColor: _colors.black,
                        size: 16
                      })
                    ),
                    _react.default.createElement(
                      "select",
                      {
                        ref: this.input,
                        className: "cs-input-select",
                        name: inputName,
                        disabled: disabled,
                        required: required,
                        onBlur: this._handleBlur,
                        onChange: this._handleInputChange,
                        value: this.state[inputName]
                          ? this.state[inputName]
                          : value
                          ? value
                          : ""
                      },
                      children
                    )
                  )
                : type === "textarea"
                ? _react.default.createElement("textarea", {
                    ref: this.input,
                    name: inputName,
                    className: "cs-input-textarea",
                    disabled: disabled,
                    required: required,
                    onBlur: this._handleBlur,
                    onFocus: onFocus,
                    defaultValue: value,
                    onChange: this._handleInputChange,
                    value: this.state[inputName]
                  })
                : type === "file"
                ? _react.default.createElement("input", {
                    ref: this.input,
                    type: "file",
                    name: inputName,
                    defaultChecked: checked,
                    accept: "image/png, image/jpeg",
                    className: "cs-input-file",
                    onChange: this._handleChangeImage
                  })
                : type === "radio" || type === "checkbox" || type === "file"
                ? null
                : _react.default.createElement(
                    "label",
                    null,
                    "No ",
                    _react.default.createElement(
                      "span",
                      {
                        className: "highlight important"
                      },
                      "type"
                    ),
                    " for me? \uD83E\uDD7A"
                  )
            ),
            error
              ? _react.default.createElement(
                  "span",
                  {
                    className: "cs-input-error"
                  },
                  errorMessage
                )
              : null
          );
        }
      }
    ]);

    return Input;
  })(_react.PureComponent);

Input.propTypes = {
  type: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  minDate: _propTypes.default.string,
  maxDate: _propTypes.default.string,
  componentType: _propTypes.default.string
};
Input.defaultProps = {
  componentType: "Input"
};
var _default = Input;
exports.default = _default;
