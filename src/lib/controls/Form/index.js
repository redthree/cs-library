import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../Button";

import "./styles.scss";

class Form extends PureComponent {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._renderChildren = this._renderChildren.bind(this);

    this.state = {
      inputsWithRef: null,
      inputReferencesNames: null,
      error: false,
      errorMessasge: null
    };
  }

  componentDidMount() {
    this._renderChildren();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this._renderChildren();
    }
  }

  _renderChildren() {
    const { children } = this.props;

    let inputsWithRef = [];
    let inputReferencesNames = [];

    React.Children.forEach(children, (child, index) => {
      let refName = "cs-input-ref-" + index;
      this[refName] = React.createRef();
      const inputProps = {
        ref: this[refName],
        key: refName,
        submit: child.props.submitOnEnter ? this._handleSubmit : null
      };
      const childClone = React.cloneElement(child, inputProps);
      inputsWithRef.push(childClone);
      inputReferencesNames.push(refName);
    });

    this.setState({ inputsWithRef, inputReferencesNames });
  }

  _handleSubmit() {
    const { submitCallback } = this.props;
    const { inputReferencesNames } = this.state;
    let formValues = {};

    this.setState({ error: false, errorMessage: null });

    for (let i = 0; i < inputReferencesNames.length; i++) {
      const inputReference = this[inputReferencesNames[i]].current;

      if (
        inputReference &&
        inputReference.props &&
        inputReference.props.label
      ) {
        const labelName = inputReference.props.label
          .toLowerCase()
          .replace(/\s/g, "_");
        const isRequired = inputReference.props.required;
        const isDisabled = inputReference.props.disabled;
        const inputValue =
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

  render() {
    const {
      submitButtonText = "Submit",
      submitCallback,
      submitButtonPrimary = true,
      centerFields = false,
      loading = false
    } = this.props;

    const { inputsWithRef, error, errorMessage } = this.state;

    return (
      <div
        className={classnames("cs-form-container", {
          "center-fields": centerFields
        })}
      >
        {submitCallback ? (
          <div className="cs-form">
            {inputsWithRef}
            <Button
              clickCallback={this._handleSubmit}
              primary={submitButtonPrimary}
              loading={loading}
            >
              {submitButtonText}
            </Button>
            {error ? (
              <div className="cs-form-error">
                <span className="highlight important no-bg">
                  {errorMessage}
                </span>
              </div>
            ) : null}
          </div>
        ) : (
          <h3>
            Did you know that a{" "}
            <span className="highlight important">submitCallback</span> is
            really important for forms?{" "}
            <span role="img" aria-label="emoji">
              👨‍💻
            </span>
          </h3>
        )}
      </div>
    );
  }
}

Form.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string
};

export default Form;
