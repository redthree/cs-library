import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CopyIcon extends PureComponent {
  render() {
    const { fillColor, size = 24 } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 10.5H3V3.5H8.5V10.5ZM8.5 2.5H3C2.45 2.5 2 2.95 2 3.5V10.5C2 11.05 2.45 11.5 3 11.5H8.5C9.05 11.5 9.5 11.05 9.5 10.5V3.5C9.5 2.95 9.05 2.5 8.5 2.5ZM7 0.5H1C0.45 0.5 0 0.95 0 1.5V8.5H1V1.5H7V0.5Z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

CopyIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default CopyIcon;
