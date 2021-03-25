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

var PhoneIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PhoneIcon, _PureComponent);

  function PhoneIcon() {
    _classCallCheck(this, PhoneIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(PhoneIcon).apply(this, arguments));
  }

  _createClass(PhoneIcon, [{
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
        fill: "#0BD318"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M37.9592 62.4458C34.3474 59.1146 26.1759 52.965 22.4208 45.7895C17.7904 36.9417 17.2414 34.0451 17.2414 30.7988C17.2414 27.5525 18.0787 26.3765 18.9679 25.8019C19.857 25.2289 26.4073 20.9449 26.4073 20.9449C26.4073 20.9449 28.0077 19.7923 29.4753 22.3857C30.6424 24.4494 36.2327 32.4644 36.2327 32.4644C36.2327 32.4644 37.645 33.5371 37.8867 35.2011C38.068 36.4403 36.7127 37.936 35.7925 38.8438C33.883 40.726 33.3357 40.8859 33.3357 43.3543C33.3357 45.8228 39.5873 52.5653 41.3587 54.2742C43.1283 55.9815 42.9488 55.9915 44.8116 57.6055C47.0233 59.521 52.7846 64.5445 55.2241 63.8C57.4599 63.1154 58.3352 63.1037 60.3707 60.9751C62.0679 59.1995 65.4293 60.2439 66.8243 61.3015C68.2194 62.3575 75.3653 66.1169 77.4043 67.4061C79.4415 68.6969 79.3086 70.8123 79.3086 70.8123C79.3086 70.8123 75.1322 76.8719 74.5676 77.688C73.972 78.5458 72.4009 79.3104 69.036 79.3104C65.6728 79.3104 62.2233 79.337 53.4976 74.1053C46.5796 69.9562 41.571 65.7771 37.9592 62.4458Z",
        fill: "white"
      }));
    }
  }]);

  return PhoneIcon;
}(_react.PureComponent);

var _default = PhoneIcon;
exports.default = _default;