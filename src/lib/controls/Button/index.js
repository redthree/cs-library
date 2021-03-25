import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { simpleModal } from "../../helpers";

import {
  SaveIcon,
  DownloadIcon,
  CopyIcon,
  DocumentIcon,
  PdfIcon,
  ZipIcon
} from "../../assets/icons";

import { darkGrey } from "../../assets/colors";

import "./styles.scss";

class Button extends Component {
  constructor() {
    super();

    this._doClickCallBack = this._doClickCallBack.bind(this);
    this._generateContent = this._generateContent.bind(this);

    this.state = {
      className: "cs-button",
      clickCallback: null,
      loading: false
    };
  }

  componentDidMount() {
    const {
      modalText,
      type,
      clickCallback,
      modalCallback,
      modalAcceptButtonText,
      modalCancelButtonText
    } = this.props;

    let className = this.state.className + " ";
    let setClickCallBack = clickCallback;

    if (type && type === "confirmation") {
      if (modalText) {
        if (modalCallback) {
          setClickCallBack = () => {
            simpleModal(
              modalText,
              "confirmation",
              modalCallback,
              modalAcceptButtonText,
              modalCancelButtonText
            );
          };
        } else {
          console.error("Ups! you missed the 'modalCallback' prop.");
        }
      } else {
        console.error("Ups! you missed the 'modalText' prop.");
      }

      this.setState({
        className: className + "cs-modal",
        clickCallback: setClickCallBack
      });
    } else {
      this.setState({
        className: className + (type || ""),
        clickCallback: setClickCallBack
      });
    }
  }

  _doClickCallBack() {
    const { clickCallback } = this.state;
    const { loading } = this.props;

    let classes = this.state.className.trim();

    if (!loading) {
      this.setState({
        className: classes + " cs-button-clicked"
      });

      if (clickCallback) {
        clickCallback();
      }

      this.setState({
        className: classes
      });
    }
  }

  _generateContent() {
    const { children, type, primary } = this.props;

    let buttonContent;

    switch (type) {
      case "back":
        buttonContent = (
          <span className="cs-button-content">
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "save":
        buttonContent = (
          <span className="cs-button-content">
            <SaveIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "download":
        buttonContent = (
          <span className="cs-button-content">
            <DownloadIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "copy":
        buttonContent = (
          <span className="cs-button-content">
            <CopyIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "doc":
        buttonContent = (
          <span className="cs-button-content">
            <DocumentIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "pdf":
        buttonContent = (
          <span className="cs-button-content">
            <PdfIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      case "zip":
        buttonContent = (
          <span className="cs-button-content">
            <ZipIcon fillColor={primary ? "white" : darkGrey} size={16} />
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;

      default:
        buttonContent = (
          <span className="cs-button-content">
            <span className="cs-button-text">{children}</span>
          </span>
        );
        break;
    }

    return buttonContent;
  }

  render() {
    const {
      primary,
      disabled = false,
      customClassName,
      slim = false,
      noBackground = false,
      loading = false
    } = this.props;

    return (
      <button
        className={classnames(
          this.state.className,
          { disabled: disabled || loading },
          { primary: primary },
          { slim: slim },
          { "no-background": noBackground },
          customClassName
        )}
        onClick={() => {
          this._doClickCallBack();
        }}
        disabled={disabled}
      >
        {this._generateContent()}
      </button>
    );
  }
}

Button.propsTypes = {
  type: PropTypes.string,
  clickCallback: PropTypes.func,
  modalText: PropTypes.string,
  modalCallback: PropTypes.func,
  modalAcceptButtonText: PropTypes.string,
  modalCancelButtonText: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.disabled
};

export default Button;
