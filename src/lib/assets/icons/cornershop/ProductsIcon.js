import React, { PureComponent } from "react";

class ProductsIcon extends PureComponent {
  render() {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="#FF404C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.2975 79.3104H26.7025C23.383 79.3104 20.6897 76.617 20.6897 73.2975L23.6971 26.7025C23.6971 23.383 26.3884 20.6897 29.7079 20.6897H35.3563C35.3563 28.7948 41.9116 35.3647 49.9958 35.3647C58.08 35.3647 64.6353 28.7948 64.6353 20.6897H70.2921C73.6116 20.6897 76.3029 23.383 76.3029 26.7025L79.3104 73.2975C79.3104 76.617 76.617 79.3104 73.2975 79.3104ZM60.4906 20.6897H39.499H35.3563H64.6353H60.4906ZM49.9958 31.1509C44.1987 31.1509 39.499 26.468 39.499 20.6897H60.4906C60.4906 26.468 55.793 31.1509 49.9958 31.1509Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default ProductsIcon;
