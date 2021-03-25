import React, { PureComponent } from "react";

class CheckIcon extends PureComponent {
  render() {
    const { fillColor, size = 24 } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
          fill={fillColor || "#0bd318"}
        />
      </svg>
    );
  }
}

export default CheckIcon;
