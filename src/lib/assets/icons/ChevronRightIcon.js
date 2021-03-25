import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ChevronRightIcon extends PureComponent {
  render() {
    const { fillColor, size = 24 } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

ChevronRightIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default ChevronRightIcon;
