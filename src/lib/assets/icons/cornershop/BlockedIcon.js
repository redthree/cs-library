import React, { PureComponent } from "react";

class BlockedIcon extends PureComponent {
  render() {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="#2B2B2B" />
        <path
          d="M50 27.7777C37.7333 27.7777 27.7778 37.7333 27.7778 50C27.7778 62.2666 37.7333 72.2222 50 72.2222C62.2667 72.2222 72.2222 62.2666 72.2222 50C72.2222 37.7333 62.2667 27.7777 50 27.7777ZM61.1111 52.2222H38.8889V47.7777H61.1111V52.2222Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default BlockedIcon;
