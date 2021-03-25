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

var WorkWithUsIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(WorkWithUsIcon, _PureComponent);

  function WorkWithUsIcon() {
    _classCallCheck(this, WorkWithUsIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(WorkWithUsIcon).apply(this, arguments));
  }

  _createClass(WorkWithUsIcon, [{
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
        d: "M50.7939 76.6667V72.6564C60.8738 71.8854 66.6667 67.1041 66.6667 59.4546C66.6667 52.9458 62.6147 48.9659 54.11 47.1463L50.7939 46.4989V34.0063C54.812 34.4997 57.6256 37.0285 57.7261 40.2059H65.7284C65.5614 33.2656 59.7345 28.3304 50.7939 27.5897V23.3333H46.1729V27.5897C36.7299 28.3304 31.0375 33.1116 31.0375 40.3914C31.0375 46.5607 35.224 50.7552 42.9587 52.5143L46.1729 53.2235V66.3634C41.5193 65.9015 38.4721 63.4333 38.1707 59.9783H30C30.0326 67.2581 36.1949 72.1315 46.1729 72.6867V76.6667H50.7939ZM58.4961 60.2559C58.4961 63.8964 55.6838 66.1476 50.7939 66.4253V54.0248C56.0844 54.9813 58.4961 56.9561 58.4961 60.2559ZM39.3086 39.744C39.3086 36.5969 42.1888 34.1906 46.1729 33.9748V45.6042C41.6863 44.7411 39.3086 42.7044 39.3086 39.744Z",
        fill: "white"
      }));
    }
  }]);

  return WorkWithUsIcon;
}(_react.PureComponent);

var _default = WorkWithUsIcon;
exports.default = _default;