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

var ProfileIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProfileIcon, _PureComponent);

  function ProfileIcon() {
    _classCallCheck(this, ProfileIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileIcon).apply(this, arguments));
  }

  _createClass(ProfileIcon, [{
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
        fill: "#7975E2"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M72.3689 28.8016L56.5859 44.3857V52.142L63.0944 82.33C63.5126 84.2694 62.2563 86.1748 60.2904 86.5877C58.3246 86.999 56.3916 85.7619 55.9734 83.8224L50.6257 59.0172H49.3744L44.0266 83.8224C43.6084 85.7619 41.6755 86.999 39.7096 86.5877C37.7437 86.1748 36.4875 84.2694 36.9057 82.33L43.4141 52.142V44.3857L27.6311 28.8016C26.3452 27.5319 26.3452 25.4738 27.6311 24.2041C28.917 22.9344 31.0031 22.9344 32.289 24.2041L44.4959 36.2571H55.5042L67.7111 24.2041C68.997 22.9344 71.083 22.9344 72.3689 24.2041C73.6548 25.4738 73.6548 27.5319 72.3689 28.8016ZM50 33.0057C46.363 33.0057 43.4141 30.094 43.4141 26.5028C43.4141 22.9116 46.363 20 50 20C53.6371 20 56.5859 22.9116 56.5859 26.5028C56.5859 30.094 53.6371 33.0057 50 33.0057Z",
        fill: "white"
      }));
    }
  }]);

  return ProfileIcon;
}(_react.PureComponent);

var _default = ProfileIcon;
exports.default = _default;