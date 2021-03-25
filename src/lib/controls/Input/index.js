import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import classnames from "classnames";

import { emailValidation } from "../../helpers";
import { ChevronDownIcon } from "../../assets/icons";
import { black } from "../../assets/colors";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

class Input extends PureComponent {
  constructor() {
    super();

    this.input = React.createRef();

    this._dateChange = this._dateChange.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleChangeImage = this._handleChangeImage.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._selectOnFocus = this._selectOnFocus.bind(this);
    this._setName = this._setName.bind(this);

    this.state = {
      selectedDate: null,
      error: false,
      errorMessage: null,
      inputName: null,
      imageBase64: null
    };
  }

  componentDidMount() {
    const { type, submitOnEnter, submit } = this.props;

    if (type === "date") {
      this.setState({ selectedDate: new Date() });
    }

    if (submitOnEnter) {
      this.input.current.addEventListener("keyup", event => {
        if (event.which === 13 || event.keyCode === 13) {
          this.input.current.blur();
          submit(event);
          return false;
        }
        return true;
      });
    }

    this._setName();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        [this.state.inputName]: this.props.value
      });
    }
  }

  _handleBlur(event) {
    const { required, type, onBlurCallback } = this.props;

    const inputValue = event.target.value;

    if (type === "email" && emailValidation(inputValue) === false) {
      this.setState({
        error: true,
        errorMessage: "Please, enter a valid email"
      });
      return false;
    }

    if (required) {
      const hasValue = inputValue.length ? true : false;
      if (!hasValue) {
        this.setState({ error: true, errorMessage: "This field is required" });
        return false;
      } else {
        this.setState({ error: false, errorMessage: null });
      }
    }

    if (onBlurCallback) {
      onBlurCallback(event);
    }
  }

  _dateChange(date) {
    this.setState({ selectedDate: date });
  }

  _handleInputChange(event) {
    const { onChangeCallback = null } = this.props;
    const target = event.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;

    const name = target.name;

    this.setState({
      [name]: value
    });

    if (onChangeCallback) {
      onChangeCallback(event);
    }
  }

  _setName() {
    const { label } = this.props;
    const inputName =
      label && label.length ? label.toLowerCase().replace(/\s/, "") : null;
    this.setState({ inputName });
  }

  _selectOnFocus(event) {
    const { onFocus } = this.props;

    event.preventDefault();
    event.target.select();

    if (onFocus) {
      onFocus(event);
    }
  }

  _handleChangeImage(event) {
    const self = this;
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = upload => {
      self.setState({
        imageBase64: upload.target.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { selectedDate, error, errorMessage, inputName } = this.state;

    const {
      children,
      type = "text",
      label,
      noLabel = false,
      placeholder,
      dateFormat = "dd/MM/yyyy",
      required = false,
      disabled = false,
      minDate = null,
      maxDate = null,
      radioButtonGroupName,
      checked = false,
      value = null,
      onFocus = null,
      selectOnFocus = false
    } = this.props;

    const textType = ["text", "email", "password"].indexOf(type) > -1;

    return (
      <div
        className={classnames("cs-input-container", {
          "cs-input-container-radio-button": type === "radio"
        })}
      >
        {type === "radio" ? (
          <label
            className={classnames("cs-input cs-input-type-radio", {
              disabled: disabled
            })}
          >
            <input
              ref={this.input}
              type="radio"
              onChange={this._handleInputChange}
              name={radioButtonGroupName}
              defaultChecked={checked}
              disabled={disabled}
              value={value}
            />
            <span className="cs-radio-button-checkmark"></span>
            <span className="cs-radio-button-text">{label}</span>
          </label>
        ) : null}

        {type === "checkbox" ? (
          <label
            className={classnames("cs-input cs-input-type-checkbox", {
              disabled: disabled
            })}
          >
            <input
              ref={this.input}
              type="checkbox"
              onChange={this._handleInputChange}
              name={inputName}
              defaultChecked={checked}
              disabled={disabled}
            />
            <span className="cs-checkbox-checkmark"></span>
            {!noLabel && <span className="cs-checkbox-text">{label}</span>}
          </label>
        ) : null}

        {!noLabel && type !== "radio" && type !== "checkbox" ? (
          <label htmlFor={inputName}>
            {label && label.length ? (
              <span className="cs-input-name">
                {label}{" "}
                {required ? (
                  <span className="cs-input-required">required</span>
                ) : null}
              </span>
            ) : (
              <span>
                Hey! <span className="highlight important">label</span> me
              </span>
            )}
          </label>
        ) : null}
        <div
          className={classnames("cs-input cs-input-type-" + type, {
            disabled: disabled
          })}
        >
          {textType ? (
            <input
              type={type}
              name={inputName}
              required={required}
              placeholder={placeholder}
              disabled={disabled}
              onBlur={this._handleBlur}
              onChange={this._handleInputChange}
              ref={this.input}
              onFocus={
                selectOnFocus ? event => this._selectOnFocus(event) : onFocus
              }
              onMouseUp={
                selectOnFocus ? event => this._selectOnFocus(event) : null
              }
              value={
                this.state[inputName]
                  ? this.state[inputName]
                  : value
                  ? value
                  : ""
              }
            />
          ) : type === "date" ? (
            <DatePicker
              selected={selectedDate}
              dateFormat={dateFormat}
              disabled={disabled}
              className="cs-input-datepicker"
              onChange={this._dateChange}
              minDate={minDate && minDate.length ? new Date(minDate) : null}
              maxDate={maxDate && maxDate.length ? new Date(maxDate) : null}
              placeholderText={placeholder}
            />
          ) : type === "select" ? (
            <>
              <span className="cs-input-selector">
                <ChevronDownIcon fillColor={black} size={16} />
              </span>
              <select
                ref={this.input}
                className="cs-input-select"
                name={inputName}
                disabled={disabled}
                required={required}
                onBlur={this._handleBlur}
                onChange={this._handleInputChange}
                value={
                  this.state[inputName]
                    ? this.state[inputName]
                    : value
                    ? value
                    : ""
                }
              >
                {children}
              </select>
            </>
          ) : type === "textarea" ? (
            <textarea
              ref={this.input}
              name={inputName}
              className="cs-input-textarea"
              disabled={disabled}
              required={required}
              onBlur={this._handleBlur}
              onFocus={onFocus}
              defaultValue={value}
              onChange={this._handleInputChange}
              value={this.state[inputName]}
            />
          ) : type === "file" ? (
            <input
              ref={this.input}
              type="file"
              name={inputName}
              defaultChecked={checked}
              accept="image/png, image/jpeg"
              className="cs-input-file"
              onChange={this._handleChangeImage}
            />
          ) : type === "radio" ||
            type === "checkbox" ||
            type === "file" ? null : (
            <label>
              No <span className="highlight important">type</span> for me? 🥺
            </label>
          )}
        </div>
        {error ? <span className="cs-input-error">{errorMessage}</span> : null}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  componentType: PropTypes.string
};

Input.defaultProps = {
  componentType: "Input"
};

export default Input;
