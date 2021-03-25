import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CrossIcon extends PureComponent {
  render() {
    const { fillColor, size = 24 } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        <path
          d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

CrossIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default CrossIcon;
