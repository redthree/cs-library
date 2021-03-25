import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class GoUpIcon extends PureComponent {
  render() {
    const { fillColor, size = 24 } = this.props;

    return (
      <svg id="arrow-up" viewBox="0 0 32 32" width={size} height={size}>
        <path
          d="M16 32C24.8 32 32 24.8 32 16 32 7.2 24.8 0 16 0 7.2 0 0 7.2 0 16 0 24.8 7.2 32 16 32ZM12.1 15.9C11.4 16.6 10.2 16.6 9.5 15.9 8.8 15.3 8.8 14.2 9.5 13.5L14.7 8.5C15.4 7.8 16.6 7.8 17.3 8.5L22.5 13.5C23.2 14.2 23.2 15.3 22.5 15.9 21.8 16.6 20.6 16.6 19.9 15.9L17.9 14.1V22.1C17.9 23.2 17.1 24 16 24 14.9 24 14.1 23.2 14.1 22.1V14.1L12.1 15.9Z"
          fill={fillColor || "white"}
        ></path>
      </svg>
    );
  }
}

GoUpIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default GoUpIcon;
