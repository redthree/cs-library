import React, { PureComponent } from "react";

class PaymentsIcon extends PureComponent {
  render() {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="#FFCC00" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.9841 71.0345H23.0159C19.5095 71.0345 16.6667 68.2791 16.6667 64.8806V46.4191H83.3333V64.8806C83.3333 68.2791 80.4905 71.0345 76.9841 71.0345ZM16.6667 37.1883C16.6667 33.7899 19.5095 31.0345 23.0159 31.0345H76.9841C80.4905 31.0345 83.3333 33.7899 83.3333 37.1883V40.2653H16.6667V37.1883Z"
          fill="#2B2B2B"
        />
      </svg>
    );
  }
}

export default PaymentsIcon;
