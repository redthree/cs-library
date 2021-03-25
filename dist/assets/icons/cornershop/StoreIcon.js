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

var StoreIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StoreIcon, _PureComponent);

  function StoreIcon() {
    _classCallCheck(this, StoreIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(StoreIcon).apply(this, arguments));
  }

  _createClass(StoreIcon, [{
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
        fill: "#FF9500"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M86.2069 40.7441C86.2069 45.0034 82.6822 48.4574 78.3358 48.4574C75.2016 48.4574 72.5175 46.6494 71.2519 44.0516C69.9862 46.6494 67.3022 48.4574 64.1679 48.4574C61.0337 48.4574 58.3496 46.6494 57.084 44.05C55.8183 46.6494 53.1343 48.4574 50 48.4574C46.8657 48.4574 44.1817 46.6494 42.916 44.05C41.6504 46.6494 38.9663 48.4574 35.8321 48.4574C32.6978 48.4574 30.0138 46.6494 28.7481 44.0516C27.4825 46.6494 24.7984 48.4574 21.6642 48.4574C17.3178 48.4574 13.7931 45.0034 13.7931 40.7441C13.7931 38.9994 14.407 37.4089 15.4035 36.1162H15.3673L26.2121 23.4803C27.1109 22.6504 30.7757 20.6897 31.8084 20.6897H68.1916C69.2243 20.6897 72.8891 22.6504 73.7879 23.4803L84.6327 36.1162H84.5965C85.593 37.4089 86.2069 38.9994 86.2069 40.7441ZM33.4708 65.4265C32.1673 65.4265 31.1094 64.3899 31.1094 63.1125V61.5699C31.1094 60.2926 32.1673 59.2559 33.4708 59.2559H66.5292C67.8327 59.2559 68.8906 60.2926 68.8906 61.5699V63.1125C68.8906 64.3899 67.8327 65.4265 66.5292 65.4265H33.4708ZM27.961 65.4265C27.961 67.1311 29.3699 68.5118 31.1094 68.5118H68.8906C70.6301 68.5118 72.039 67.1311 72.039 65.4265V49.6051C73.8241 50.8238 75.9902 51.5427 78.3295 51.5427C78.3311 51.5427 78.3343 51.5427 78.3358 51.5427V70.0545C78.3358 75.1668 74.1075 79.3104 68.8906 79.3104H31.1094C25.8925 79.3104 21.6642 75.1668 21.6642 70.0545V51.5427C24.0066 51.5427 26.1759 50.8207 27.961 49.5989V65.4265Z",
        fill: "white"
      }));
    }
  }]);

  return StoreIcon;
}(_react.PureComponent);

var _default = StoreIcon;
exports.default = _default;