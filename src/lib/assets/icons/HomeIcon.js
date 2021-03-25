import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class HomeIcon extends PureComponent {
  render() {
    const { fillColor, width = 24 } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

HomeIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default HomeIcon;
