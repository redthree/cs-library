import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import prism from "prismjs";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { toast } from "../../helpers";

import { CopyIcon } from "../../assets/icons";

import "./styles.scss";

class Code extends PureComponent {
  _copyConfirmation() {
    toast("🤓 Code snippet copied to the clipboard!");
  }

  render() {
    const { children, format = true, language = "html" } = this.props;

    const code = children
      ? prism.highlight(
          format
            ? children
                .replace(/>/g, ">\n\t")
                .replace(/<\//g, "\n</")
                .trim()
            : children,
          prism.languages[language],
          language
        )
      : null;

    return code ? (
      <div className="cs-code-container">
        <div
          className="cs-code"
          dangerouslySetInnerHTML={{ __html: "<pre>" + code + "</pre>" }}
        ></div>
        <CopyToClipboard
          text={children}
          onCopy={() => this._copyConfirmation()}
        >
          <span className="cs-code-copy-button">
            <CopyIcon fillColor="white" size={16} />
          </span>
        </CopyToClipboard>
      </div>
    ) : (
      <div className="cs-code-container">
        <div className="cs-code">
          <pre>
            <span className="token comment">
              {"//"} A bit of{" "}
              <span className="highlight important no-bg bold-text">code</span>{" "}
              will be nice... 👨‍💻
            </span>
          </pre>
        </div>
      </div>
    );
  }
}

Code.propTypes = {
  format: PropTypes.bool,
  language: PropTypes.string
};

export default Code;
