"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
(0, _react2.storiesOf)("Button", module)
  .add("normal", function() {
    return _react.default.createElement(_index.default, null, "Normal");
  })
  .add("clickCallback OK", function() {
    return _react.default.createElement(
      _index.default,
      {
        clickCallback: function clickCallback() {
          return true;
        },
        clickCallbackText: "Yassss"
      },
      "clickCallback OK"
    );
  })
  .add("clickCallback no OK", function() {
    return _react.default.createElement(
      _index.default,
      {
        clickCallback: function clickCallback() {
          return false;
        }
      },
      "clickCallback not OK"
    );
  })
  .add("with icon", function() {
    return _react.default.createElement(
      _index.default,
      {
        type: "pdf"
      },
      "Icon"
    );
  })
  .add("triggers simple modal", function() {
    return _react.default.createElement(
      _index.default,
      {
        type: "modal",
        modalText: "Hey! I'm a simple modal"
      },
      "Simple modal"
    );
  })
  .add("triggers simple modal question", function() {
    return _react.default.createElement(
      _index.default,
      {
        type: "modal-question",
        modalText: "Hey! I'm a simple modal for a question",
        modalCallback: function modalCallback() {
          alert("I'm the callback");
        }
      },
      "Simple question modal"
    );
  });
