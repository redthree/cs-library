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

var PrivacyIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PrivacyIcon, _PureComponent);

  function PrivacyIcon() {
    _classCallCheck(this, PrivacyIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrivacyIcon).apply(this, arguments));
  }

  _createClass(PrivacyIcon, [{
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
        fill: "#888B90"
      }), _react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M78.4541 51.2209L70.9741 64.3716C70.5034 67.8458 68.9962 70.3904 67.2536 72.1738C64.6288 80.3127 56.9642 86.2069 47.9076 86.2069C36.6851 86.2069 27.5862 77.1585 27.5862 65.9984C27.5862 64.9324 27.6946 63.8933 27.8538 62.8711C27.6929 62.541 27.5862 62.1807 27.5862 61.7883V29.7915C27.5862 28.3971 28.7242 27.2654 30.1264 27.2654C31.5286 27.2654 32.6666 28.3971 32.6666 29.7915V44.0772V50.8706V52.6625C32.8444 52.4621 33.0425 52.2835 33.2271 52.0899C33.5218 52.3543 33.9028 52.526 34.3312 52.526H34.3888C35.3084 52.526 36.0535 51.7851 36.0535 50.8706V49.6211V20.5293C36.0535 18.6684 37.5691 17.1612 39.4404 17.1612C41.3116 17.1612 42.8273 18.6684 42.8273 20.5293V46.4972V49.1866C42.8273 50.101 43.5724 50.842 44.4919 50.842H44.5495C45.4691 50.842 46.2142 50.101 46.2142 49.1866V49.158V45.9263V17.1612C46.2142 15.3003 47.7298 13.7931 49.6011 13.7931C51.4724 13.7931 52.988 15.3003 52.988 17.1612V46.4803V49.158V49.1866C52.988 50.101 53.7331 50.842 54.6527 50.842H54.7102C55.6298 50.842 56.3749 50.101 56.3749 49.1866V47.6524V20.5293C56.3749 18.6684 57.8905 17.1612 59.7618 17.1612C61.6331 17.1612 63.1487 18.6684 63.1487 20.5293V52.526C63.1487 52.5766 63.1369 52.622 63.1335 52.6726C63.1385 52.6776 63.1436 52.681 63.1487 52.6877V55.3721C63.1487 56.5896 64.1428 57.5782 65.3671 57.5782H66.0106C66.1224 57.5782 66.2172 57.531 66.3256 57.5142C66.4425 57.7651 66.5729 58.0059 66.6796 58.2619L67.3705 57.0713C67.7922 56.7378 68.0699 56.2663 68.1596 55.7123L72.6896 47.9101C73.4551 46.5915 76.2611 46.1385 77.5888 46.9013L78.549 47.452C79.8749 48.2149 79.2213 49.9006 78.4541 51.2209Z",
        fill: "white"
      }));
    }
  }]);

  return PrivacyIcon;
}(_react.PureComponent);

var _default = PrivacyIcon;
exports.default = _default;