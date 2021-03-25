import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class Title extends PureComponent {
  render() {
    const { mainTitle, subtitle } = this.props;

    return mainTitle && mainTitle.length ? (
      <div className="cs-title">
        <h1>{mainTitle}</h1>
        {subtitle && subtitle.length ? (
          <span className="cs-title-subtitle">{subtitle}</span>
        ) : null}
      </div>
    ) : (
      <div className="cs-title">
        <h1>
          You haven't set the{" "}
          <span className="highlight important">mainTitle</span> prop for this
          Title
        </h1>
      </div>
    );
  }
}

Title.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Title;
