import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ChevronLeft extends PureComponent {
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
          d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

ChevronLeft.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default ChevronLeft;
