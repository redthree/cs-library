import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DocumentIcon extends PureComponent {
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
          d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"
          fill={fillColor || "black"}
        />
      </svg>
    );
  }
}

DocumentIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number
};

export default DocumentIcon;
