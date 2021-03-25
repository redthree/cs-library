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

var DubiousIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DubiousIcon, _PureComponent);

  function DubiousIcon() {
    _classCallCheck(this, DubiousIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(DubiousIcon).apply(this, arguments));
  }

  _createClass(DubiousIcon, [{
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
        fill: "#2B2B2B"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M53.5897 69.4872C49.5333 69.4872 45.7256 68.4333 42.4141 66.5949C41.2859 67.5846 39.8244 68.2051 38.2051 68.2051C34.6654 68.2051 31.7949 65.3346 31.7949 61.7949C31.7949 60.1756 32.4154 58.7141 33.4051 57.5859C31.5667 54.2743 30.5128 50.4666 30.5128 46.4102C30.5128 33.6654 40.8449 23.3333 53.5897 23.3333C66.3346 23.3333 76.6667 33.6654 76.6667 46.4102C76.6667 59.1551 66.3346 69.4872 53.5897 69.4872ZM52.3077 61.7949C54.4321 61.7949 56.1538 60.0756 56.1538 57.9538C56.1538 55.832 54.4321 54.1128 52.3077 54.1128C50.1833 54.1128 48.4615 55.832 48.4615 57.9538C48.4615 60.0756 50.1833 61.7949 52.3077 61.7949ZM61.7436 36.9705C59.8667 33.0846 54.2385 31.2166 49.9269 33.0474C46.6538 34.4295 44.1385 38.3154 44.7372 40.9679C45.1359 42.5743 47.1718 44.032 48.6897 43.7705C50.2859 43.4718 51.3244 42.4628 51.6833 40.9307C52.0026 39.4359 52.841 38.8756 54.2385 39.2115C56.0744 39.6231 55.5962 40.7808 52.3615 43.6949C50.0462 45.75 49.3282 46.6474 49.1282 47.7308C48.7692 49.5615 49.1282 50.8692 50.3256 51.9897C52.1628 53.7077 56.1141 52.6243 56.1141 50.4205C56.1141 49.8231 56.9526 48.7384 58.8295 47.0205C62.5423 43.5833 63.4205 40.4449 61.7436 36.9705ZM33.0769 70.1282C33.0769 71.8987 31.6423 73.3333 29.8718 73.3333C28.1013 73.3333 26.6667 71.8987 26.6667 70.1282C26.6667 68.3577 28.1013 66.9231 29.8718 66.9231C31.6423 66.9231 33.0769 68.3577 33.0769 70.1282Z",
        fill: "white"
      }));
    }
  }]);

  return DubiousIcon;
}(_react.PureComponent);

var _default = DubiousIcon;
exports.default = _default;