import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ChevronLeftIcon extends PureComponent {
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
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

ChevronLeftIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default ChevronLeftIcon;
