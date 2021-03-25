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

var CouponsIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CouponsIcon, _PureComponent);

  function CouponsIcon() {
    _classCallCheck(this, CouponsIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouponsIcon).apply(this, arguments));
  }

  _createClass(CouponsIcon, [{
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
        fill: "#4CD964"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M83.3333 50.0134L75.065 56.7347L78.8608 66.6784L68.3404 68.3654L66.655 78.8741L56.7014 75.075L49.9867 83.3333L43.2653 75.065L33.3217 78.8608L31.638 68.362L21.1392 66.6784L24.935 56.7347L16.6667 50.0134L24.925 43.2987L21.1259 33.345L31.6347 31.6597L33.3217 21.1392L43.2653 24.935L49.9867 16.6667L56.7014 24.925L66.655 21.1259L68.3437 31.6564L78.8741 33.345L75.075 43.2987L83.3333 50.0134Z",
        fill: "white"
      }));
    }
  }]);

  return CouponsIcon;
}(_react.PureComponent);

var _default = CouponsIcon;
exports.default = _default;