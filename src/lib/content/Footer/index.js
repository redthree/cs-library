import React, { PureComponent } from "react";

import "./styles.scss";

import CSLogo from "../../assets/CSLogo";

class Footer extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <footer className="cs-footer-container">
        <div className="cs-footer-content">
          <div className="cs-footer-top">
            <span className="cs-footer-logo">
              <CSLogo fillColor="white" width="176" />
            </span>
          </div>
          {children}
        </div>
      </footer>
    );
  }
}

export default Footer;
