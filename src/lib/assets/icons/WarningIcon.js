import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class WarningIcon extends PureComponent {
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
          d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
          fill={fillColor || "#ff9500"}
        />
      </svg>
    );
  }
}

WarningIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default WarningIcon;
