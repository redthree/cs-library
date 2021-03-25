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

var LogoutIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LogoutIcon, _PureComponent);

  function LogoutIcon() {
    _classCallCheck(this, LogoutIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogoutIcon).apply(this, arguments));
  }

  _createClass(LogoutIcon, [{
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
        fill: "#007AFF"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.2414 22.6897C17.2414 21.5851 18.1368 20.6897 19.2414 20.6897H80.7586C81.8632 20.6897 82.7586 21.5851 82.7586 22.6897V80.7586C82.7586 81.8632 81.8632 82.7586 80.7586 82.7586H19.2414C18.1368 82.7586 17.2414 81.8632 17.2414 80.7586V64.7486L24.1379 71.6452V74.8621C24.1379 75.4144 24.5856 75.8621 25.1379 75.8621H28.3548H74.8621C75.4144 75.8621 75.8621 75.4144 75.8621 74.8621V28.5862C75.8621 28.0339 75.4143 27.5862 74.8621 27.5862H25.1379C24.5856 27.5862 24.1379 28.0339 24.1379 28.5862V31.8031L17.2414 38.6997V22.6897ZM17.2414 52.6797V50.7686L24.1379 43.8721V59.5763L17.2414 52.6797Z",
        fill: "white",
        fillOpacity: "0.75"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.9745 46.5787L13.7931 51.76L18.9745 56.9414L34.5186 72.4856L39.7 67.3042L27.5683 55.1724H48.2758V48.2759H27.64L39.7 36.2159L34.5187 31.0345L18.9745 46.5787Z",
        fill: "white"
      }));
    }
  }]);

  return LogoutIcon;
}(_react.PureComponent);

var _default = LogoutIcon;
exports.default = _default;