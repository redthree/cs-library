"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
(0, _react2.storiesOf)("Section", module)
  .add("with title", function() {
    return _react.default.createElement(
      _index.default,
      {
        title: "This is the title"
      },
      _react.default.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, itaque."
      )
    );
  })
  .add("with title and description", function() {
    return _react.default.createElement(
      _index.default,
      {
        title: "This is the title",
        description: "This is the description"
      },
      _react.default.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, itaque."
      )
    );
  })
  .add("with description only", function() {
    return _react.default.createElement(
      _index.default,
      {
        description: "This is the description"
      },
      _react.default.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, itaque."
      )
    );
  })
  .add("without props", function() {
    return _react.default.createElement(
      _index.default,
      null,
      _react.default.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, itaque."
      )
    );
  });
