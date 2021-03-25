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

var DeliveryIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DeliveryIcon, _PureComponent);

  function DeliveryIcon() {
    _classCallCheck(this, DeliveryIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(DeliveryIcon).apply(this, arguments));
  }

  _createClass(DeliveryIcon, [{
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
        fill: "#FF404C"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M86.6667 62.2222V70.4694C86.6667 71.8062 85.6038 72.8889 84.2913 72.8889H83.176C83.176 66.9974 78.488 62.2222 72.7039 62.2222C66.9198 62.2222 62.2318 66.9974 62.2318 72.8889H44.7783V33.7814V30.2222C44.7783 28.2578 46.3404 26.6667 48.269 26.6667H83.176C85.1046 26.6667 86.6667 28.2578 86.6667 30.2222V33.7938V62.2222ZM30.8155 62.2222C25.0314 62.2222 20.3434 66.9974 20.3434 72.8889H15.7375C14.425 72.8889 13.362 71.8062 13.362 70.4694V62.2222C13.362 62.2222 13.2975 61.1165 13.362 59.3547V57.5307C13.362 57.1965 13.4284 56.8782 13.5488 56.5885C14.3656 48.2969 18.1059 33.7778 34.3062 33.7778L41.2876 33.7796V72.8889C41.2876 66.9974 36.5996 62.2222 30.8155 62.2222ZM34.3062 40.8889H26.8885C23.2739 40.8889 18.5981 50.3982 18.5981 55.1111H27.3248V53.3334C27.3248 50.3876 29.6688 48 32.5609 48H34.3062V40.8889H37.7934C37.7952 40.8889 34.3062 40.8854 34.3062 40.8889ZM34.3062 55.1111C34.3062 55.1147 37.7952 55.1111 37.7934 55.1111H34.3062ZM30.8155 65.7778C34.671 65.7778 37.7969 68.9618 37.7969 72.8889C37.7969 76.816 34.671 80 30.8155 80C26.9601 80 23.8341 76.816 23.8341 72.8889C23.8341 68.9618 26.9601 65.7778 30.8155 65.7778ZM72.7039 65.7778C76.5594 65.7778 79.6853 68.9618 79.6853 72.8889C79.6853 76.816 76.5594 80 72.7039 80C68.8484 80 65.7225 76.816 65.7225 72.8889C65.7225 68.9618 68.8484 65.7778 72.7039 65.7778Z",
        fill: "white"
      }));
    }
  }]);

  return DeliveryIcon;
}(_react.PureComponent);

var _default = DeliveryIcon;
exports.default = _default;