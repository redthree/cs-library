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
        fill: "#DCDCDF"
      }), _react.default.createElement("path", {
        d: "M78.9237 62.5885C79.0198 57.4075 76.815 50.4212 74.6813 43.6634C73.116 38.7026 71.4964 33.5714 70.6563 28.8557C70.115 25.8186 68.5832 20.8349 64.3847 21.5183C63.9312 21.5931 63.4924 21.6222 62.7965 21.24C59.0766 19.1917 55.0031 21.4664 53.4483 24.1379C51.0345 28.2824 48.0083 33.8032 44.8276 37.931C40.4954 43.5546 34.4514 50.2718 32.7586 55.1724C29.8789 63.4986 32.2683 70.1607 35.4636 75.5536C39.6078 82.5461 47.5909 84.8832 51.9795 85.6539C52.0422 85.6643 52.2909 85.7079 52.3536 85.7204C56.7422 86.4911 65.0472 87.0125 71.3501 81.8543C76.2111 77.872 78.7607 71.3905 78.9237 62.5885Z",
        fill: "#61BD6E"
      }), _react.default.createElement("path", {
        d: "M34.4828 77.5861C30.7127 71.2251 28.2412 63.0685 31.4888 53.6786C33.378 48.213 37.8377 42.4274 42.5565 36.3033C45.6661 32.2669 48.8803 28.0955 51.1749 24.1546C51.8876 22.931 52.6462 21.8591 53.4382 20.9409C51.8207 21.7074 49.6489 22.0355 48.2759 24.1379C45.6761 28.1265 41.6635 32.3906 37.931 36.2068C32.5685 41.687 26.0041 47.6813 24.1379 53.4482C21.534 61.4877 23.585 68.5611 26.7699 73.819C28.9413 77.4025 32.976 79.4182 36.2069 81.0344C35.0157 79.8129 35.3396 79.032 34.4828 77.5861Z",
        fill: "#61BD6E"
      }), _react.default.createElement("path", {
        d: "M41.7629 56.7753C43.1279 49.1474 51.4591 40.5628 56.6362 41.4416C58.9606 41.8582 61.5121 44.5335 63.3058 48.4288C65.176 52.4956 65.9361 57.2674 65.2919 60.8788C63.3244 71.887 56.5157 73.0932 51.1439 72.1617C45.7721 71.2188 39.7954 67.7836 41.7629 56.7753Z",
        fill: "#F7942D"
      }), _react.default.createElement("path", {
        d: "M57.8896 41.2544C57.8796 41.2524 57.8293 41.2424 57.8293 41.2424C54.5808 40.6868 50.691 42.4297 47.149 46.0316C43.8743 49.3609 41.5103 53.6708 40.8207 57.5636C39.892 62.8121 40.6318 67.0639 43.024 70.1986C44.9799 72.7637 48.0174 74.4744 51.8047 75.1543C51.8107 75.1563 51.871 75.1663 51.879 75.1663C55.6703 75.8241 59.1119 75.2526 61.8297 73.5117C65.1526 71.3838 67.3076 67.6435 68.2363 62.3949C68.9258 58.5022 68.182 53.6447 66.2502 49.399C64.1676 44.8163 61.1221 41.8541 57.8896 41.2544ZM44.3266 58.1813C45.5106 51.4968 52.7374 43.9739 57.2283 44.7441C59.2445 45.1091 61.4578 47.4536 63.0137 50.867C64.636 54.4309 65.2953 58.6125 64.7365 61.7772C63.0298 71.424 57.1237 72.4809 52.464 71.6646C47.8043 70.8383 42.6199 67.828 44.3266 58.1813Z",
        fill: "#232629"
      }), _react.default.createElement("path", {
        d: "M55.0076 48.4322C51.7853 48.8655 48.1962 53.3202 47.7341 55.7824C47.5619 56.7004 48.2124 57.5784 49.1892 57.7406C50.164 57.9029 51.0963 57.2902 51.2685 56.3702C51.5279 54.9865 54.1544 51.9613 55.5183 51.7762C56.4992 51.6445 57.1801 50.7875 57.0403 49.8637C56.8984 48.9418 55.9885 48.2986 55.0076 48.4322Z",
        fill: "#232629"
      }), _react.default.createElement("path", {
        d: "M79.9153 61.7337C80.0168 56.1826 77.927 49.4997 75.7138 42.4276C74.2569 37.7668 72.7483 32.9482 71.988 28.6407C70.7779 21.7901 67.2073 18.0954 62.3928 18.6623C58.0839 16.4506 49.8461 15.9436 44.8047 23.7423C42.5179 27.2813 39.1224 30.7825 35.528 34.4892C30.1383 40.0463 24.5655 45.793 22.5354 52.1226C19.7291 60.8614 20.1252 68.3168 23.7077 74.2831C28.5899 82.4091 37.7671 85.1198 42.8005 86.01C42.8005 86.01 45.6685 86.563 46.9403 86.5909C47.9673 86.8724 49.0261 87.1139 50.1188 87.3075C50.1785 87.3175 50.4153 87.3594 50.475 87.3714C58.7227 88.8325 66.1624 87.2456 71.4188 82.9041C76.8821 78.397 79.7402 71.273 79.9153 61.7337ZM51.088 83.8922C51.0283 83.8822 50.7915 83.8403 50.7318 83.8283C46.5522 83.0878 38.9493 80.8422 35.0025 74.1234C31.9574 68.9416 31.8062 62.2567 34.5488 54.2564C36.1629 49.5476 40.4301 43.9626 44.5539 38.5592C47.5831 34.593 50.7158 30.491 53.0146 26.5089C54.4954 23.9439 57.4908 19.9677 61.0335 21.9358C61.6962 22.3051 62.1142 22.2752 62.5461 22.2033C66.5426 21.5466 68.0035 26.3352 68.5189 29.2535C69.319 33.7846 70.8615 38.7149 72.3522 43.4815C74.3843 49.9748 76.4841 56.6876 76.3925 61.6658C76.2373 70.1252 73.8111 76.351 69.1797 80.1735C63.177 85.1338 55.2676 84.6328 51.088 83.8922ZM26.725 72.4607C23.6898 67.4086 23.4091 60.9313 25.889 53.2064C27.6684 47.6653 32.9486 42.22 38.0537 36.9544C41.6083 33.2875 45.2863 29.497 47.7623 25.6645C49.0679 23.6445 50.5825 22.3889 52.123 21.6524C51.3687 22.5347 50.6462 23.5646 49.9675 24.7403C47.7822 28.5249 44.7191 32.535 41.7596 36.4134C37.2635 42.2999 33.0182 47.8589 31.219 53.1086C28.1261 62.1309 28.3789 69.8059 31.9694 75.9179C32.7854 77.3071 33.7706 78.5946 34.907 79.7683C31.828 78.2153 28.7929 75.9019 26.725 72.4607Z",
        fill: "#232629"
      }));
    }
  }]);

  return StoreIcon;
}(_react.PureComponent);

var _default = StoreIcon;
exports.default = _default;