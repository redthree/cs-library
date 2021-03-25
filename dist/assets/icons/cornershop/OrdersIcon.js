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

var OrdersIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OrdersIcon, _PureComponent);

  function OrdersIcon() {
    _classCallCheck(this, OrdersIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrdersIcon).apply(this, arguments));
  }

  _createClass(OrdersIcon, [{
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
        fill: "#4A4A4A"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M31.7544 78.1111V70.5555H83.3333V78.1111H31.7544ZM31.7544 47.8889H83.3333V55.4444H31.7544V47.8889ZM31.7544 25.2222H83.3333V32.7778H31.7544V25.2222ZM18.8597 80C15.8073 80 13.3333 77.4632 13.3333 74.3333C13.3333 71.2034 15.8073 68.6667 18.8597 68.6667C21.912 68.6667 24.386 71.2034 24.386 74.3333C24.386 77.4632 21.912 80 18.8597 80ZM18.8597 57.3333C15.8073 57.3333 13.3333 54.7965 13.3333 51.6667C13.3333 48.5368 15.8073 46 18.8597 46C21.912 46 24.386 48.5368 24.386 51.6667C24.386 54.7965 21.912 57.3333 18.8597 57.3333ZM18.8597 34.6666C15.8073 34.6666 13.3333 32.1299 13.3333 29C13.3333 25.8701 15.8073 23.3333 18.8597 23.3333C21.912 23.3333 24.386 25.8701 24.386 29C24.386 32.1299 21.912 34.6666 18.8597 34.6666Z",
        fill: "white"
      }));
    }
  }]);

  return OrdersIcon;
}(_react.PureComponent);

var _default = OrdersIcon;
exports.default = _default;