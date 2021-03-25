"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
(0, _react2.storiesOf)("Title", module)
  .add("with mainTitle", function() {
    return _react.default.createElement(_index.default, {
      mainTitle: "This is the title"
    });
  })
  .add("with mainTitle and subtitle", function() {
    return _react.default.createElement(_index.default, {
      mainTitle: "This is the title",
      subtitle: "This is the subtitle"
    });
  });
