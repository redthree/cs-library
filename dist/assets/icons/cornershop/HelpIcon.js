"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HelpIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HelpIcon, _PureComponent);

  function HelpIcon() {
    _classCallCheck(this, HelpIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelpIcon).apply(this, arguments));
  }

  _createClass(HelpIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("rect", {
        width: "100",
        height: "100",
        fill: "#FF667B"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M50 82.7586C31.9081 82.7586 17.2414 68.0919 17.2414 50C17.2414 31.9082 31.9081 17.2414 50 17.2414C68.0919 17.2414 82.7586 31.9082 82.7586 50C82.7586 68.0919 68.0919 82.7586 50 82.7586ZM50 79.1188C54.6827 79.1188 59.0923 77.9868 63.0106 76.0231L58.1314 66.2647C55.6818 67.4913 52.9264 68.1992 50 68.1992C47.0736 68.1992 44.3182 67.4913 41.8686 66.2647L36.9894 76.0231C40.9077 77.9868 45.3173 79.1188 50 79.1188ZM33.7353 41.8686L23.9769 36.9894C22.0132 40.9077 20.8812 45.3174 20.8812 50C20.8812 54.6827 22.0132 59.0924 23.9769 63.0106L33.7353 58.1314C32.5087 55.6818 31.8008 52.9265 31.8008 50C31.8008 47.0736 32.5087 44.3182 33.7353 41.8686ZM50 20.8812C45.3173 20.8812 40.9077 22.0132 36.9894 23.9769L41.8686 33.7354C44.3182 32.5087 47.0736 31.8008 50 31.8008C52.9264 31.8008 55.6818 32.5087 58.1314 33.7354L63.0106 23.9769C59.0923 22.0132 54.6827 20.8812 50 20.8812ZM50 35.4406C41.9596 35.4406 35.4406 41.9596 35.4406 50C35.4406 58.0404 41.9596 64.5594 50 64.5594C58.0404 64.5594 64.5594 58.0404 64.5594 50C64.5594 41.9596 58.0404 35.4406 50 35.4406ZM66.2647 41.8686C67.4913 44.3182 68.1992 47.0736 68.1992 50C68.1992 52.9265 67.4913 55.6818 66.2647 58.1314L76.0231 63.0106C77.9868 59.0924 79.1188 54.6827 79.1188 50C79.1188 45.3174 77.9868 40.9077 76.0231 36.9894L66.2647 41.8686Z",
        fill: "white"
      }));
    }
  }]);

  return HelpIcon;
}(_react.PureComponent);

var _default = HelpIcon;
exports.default = _default;