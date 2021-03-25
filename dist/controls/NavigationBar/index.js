"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

var _CSLogo = _interopRequireDefault(require("../../assets/CSLogo"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var NavigationBar =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(NavigationBar, _PureComponent);

    function NavigationBar() {
      var _this;

      _classCallCheck(this, NavigationBar);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(NavigationBar).call(this)
      );
      _this._toggleMenu = _this._toggleMenu.bind(_assertThisInitialized(_this));
      _this._checkHideNavigationBar = _this._checkHideNavigationBar.bind(
        _assertThisInitialized(_this)
      );
      _this.state = {
        showMenu: false,
        hideNavigationBar: false
      };
      return _this;
    }

    _createClass(NavigationBar, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          window.addEventListener("resize", function() {
            _this2.setState({
              showMenu: false
            });
          });

          this._checkHideNavigationBar();
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.location.pathname !== this.props.location.pathname) {
            this._checkHideNavigationBar();
          }
        }
      },
      {
        key: "_checkHideNavigationBar",
        value: function _checkHideNavigationBar() {
          var _this$props = this.props,
            location = _this$props.location,
            hideNavigationBar = _this$props.hideNavigationBar;

          if (hideNavigationBar && hideNavigationBar.length) {
            this.setState({
              hideNavigationBar:
                hideNavigationBar.indexOf(location.pathname) > -1 ? true : false
            });
          }
        }
      },
      {
        key: "_toggleMenu",
        value: function _toggleMenu() {
          var showMenu = !this.state.showMenu;
          this.setState({
            showMenu: showMenu
          });
        }
      },
      {
        key: "_renderLinks",
        value: function _renderLinks(linksArray) {
          var _this3 = this;

          return linksArray.map(function(linkItem, index) {
            if (!linkItem.noLink) {
              if (!linkItem.external) {
                var keyAndClassName =
                  "cs-nav-link-" +
                  linkItem.name.toLowerCase().replace(/\s/g, "-");
                return _react.default.createElement(
                  _reactRouterDom.NavLink,
                  {
                    key: keyAndClassName,
                    exact: linkItem.exact,
                    className: keyAndClassName,
                    activeClassName: "active",
                    to: linkItem.route,
                    onClick: _this3._toggleMenu
                  },
                  linkItem.name
                );
              } else {
                var keyName = linkItem.customClassName
                  ? "cs-nav-link-" + linkItem.customClassName
                  : "cs-nav-link-" + index;
                return _react.default.createElement(
                  "a",
                  {
                    key: keyName,
                    className: linkItem.customClassName
                      ? linkItem.customClassName
                      : null,
                    href: linkItem.route,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  linkItem.name
                );
              }
            } else {
              return null;
            }
          });
        }
      },
      {
        key: "_renderRoutes",
        value: function _renderRoutes(linksArray) {
          return linksArray.map(function(linkItem) {
            var routePath = linkItem.param
              ? linkItem.route + linkItem.param
              : linkItem.route;
            return !linkItem.external
              ? _react.default.createElement(_reactRouterDom.Route, {
                  key: "cs-nav-route-" + linkItem.route.toLowerCase(),
                  exact: linkItem.exact,
                  path: routePath,
                  component: linkItem.component
                })
              : null;
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
            links = _this$props2.links,
            _this$props2$subtitle = _this$props2.subtitle,
            subtitle =
              _this$props2$subtitle === void 0 ? null : _this$props2$subtitle,
            children = _this$props2.children;
          var _this$state = this.state,
            showMenu = _this$state.showMenu,
            hideNavigationBar = _this$state.hideNavigationBar;
          return _react.default.createElement(
            _react.Fragment,
            null,
            _react.default.createElement(
              "div",
              {
                className: "cs-nav-container"
              },
              _react.default.createElement(
                "nav",
                {
                  className: "cs-nav"
                },
                _react.default.createElement(
                  "h1",
                  {
                    className: "cs-nav-primary"
                  },
                  _react.default.createElement(
                    "a",
                    {
                      href: "/",
                      className: "cs-nav-logo"
                    },
                    _react.default.createElement(_CSLogo.default, {
                      width: "150",
                      fillColor: "#2b2b2b"
                    }),
                    subtitle
                      ? _react.default.createElement(
                          "span",
                          {
                            className: "cs-nav-subtitle"
                          },
                          subtitle
                        )
                      : null
                  )
                ),
                _react.default.createElement(
                  "span",
                  {
                    className: "cs-nav-links-toggle-button",
                    onClick: this._toggleMenu
                  },
                  _react.default.createElement("span", null)
                ),
                !hideNavigationBar
                  ? _react.default.createElement(
                      "div",
                      {
                        className: (0, _classnames.default)(
                          "cs-nav-links-list",
                          {
                            show: showMenu
                          }
                        )
                      },
                      this._renderLinks(links),
                      children
                    )
                  : null
              )
            ),
            _react.default.createElement(
              _reactRouterDom.Switch,
              null,
              this._renderRoutes(links),
              _react.default.createElement(_reactRouterDom.Redirect, {
                to: "/"
              })
            )
          );
        }
      }
    ]);

    return NavigationBar;
  })(_react.PureComponent);

NavigationBar.propTypes = {
  links: _propTypes.default.array.isRequired,
  subtitle: _propTypes.default.string
};

var _default = (0, _reactRouterDom.withRouter)(NavigationBar);

exports.default = _default;
