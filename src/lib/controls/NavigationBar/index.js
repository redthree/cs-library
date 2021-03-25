import React, { PureComponent, Fragment } from "react";
import { Route, NavLink, Redirect, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./styles.scss";

import CSLogo from "../../assets/CSLogo";

class NavigationBar extends PureComponent {
  constructor() {
    super();

    this._toggleMenu = this._toggleMenu.bind(this);
    this._checkHideNavigationBar = this._checkHideNavigationBar.bind(this);

    this.state = {
      showMenu: false,
      hideNavigationBar: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ showMenu: false });
    });

    this._checkHideNavigationBar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this._checkHideNavigationBar();
    }
  }

  _checkHideNavigationBar() {
    const { location, hideNavigationBar } = this.props;

    if (hideNavigationBar && hideNavigationBar.length) {
      this.setState({
        hideNavigationBar:
          hideNavigationBar.indexOf(location.pathname) > -1 ? true : false
      });
    }
  }

  _toggleMenu() {
    const showMenu = !this.state.showMenu;
    this.setState({ showMenu });
  }

  _renderLinks(linksArray) {
    return linksArray.map((linkItem, index) => {
      if (!linkItem.noLink) {
        if (!linkItem.external) {
          const keyAndClassName =
            "cs-nav-link-" + linkItem.name.toLowerCase().replace(/\s/g, "-");
          return (
            <NavLink
              key={keyAndClassName}
              exact={linkItem.exact}
              className={keyAndClassName}
              activeClassName="active"
              to={linkItem.route}
              onClick={this._toggleMenu}
            >
              {linkItem.name}
            </NavLink>
          );
        } else {
          const keyName = linkItem.customClassName
            ? "cs-nav-link-" + linkItem.customClassName
            : "cs-nav-link-" + index;

          return (
            <a
              key={keyName}
              className={
                linkItem.customClassName ? linkItem.customClassName : null
              }
              href={linkItem.route}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkItem.name}
            </a>
          );
        }
      } else {
        return null;
      }
    });
  }

  _renderRoutes(linksArray) {
    return linksArray.map(linkItem => {
      let routePath = linkItem.param
        ? linkItem.route + linkItem.param
        : linkItem.route;
      return !linkItem.external ? (
        <Route
          key={"cs-nav-route-" + linkItem.route.toLowerCase()}
          exact={linkItem.exact}
          path={routePath}
          component={linkItem.component}
        />
      ) : null;
    });
  }

  render() {
    const { links, subtitle = null, children } = this.props;
    const { showMenu, hideNavigationBar } = this.state;

    return (
      <Fragment>
        <div className="cs-nav-container">
          <nav className="cs-nav">
            <h1 className="cs-nav-primary">
              <a href="/" className="cs-nav-logo">
                <CSLogo width="150" fillColor="#2b2b2b" />
                {subtitle ? (
                  <span className="cs-nav-subtitle">{subtitle}</span>
                ) : null}
              </a>
            </h1>

            <span
              className="cs-nav-links-toggle-button"
              onClick={this._toggleMenu}
            >
              <span></span>
            </span>

            {!hideNavigationBar ? (
              <div
                className={classnames("cs-nav-links-list", { show: showMenu })}
              >
                {this._renderLinks(links)}
                {children}
              </div>
            ) : null}
          </nav>
        </div>

        <Switch>
          {this._renderRoutes(links)}
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

NavigationBar.propTypes = {
  links: PropTypes.array.isRequired,
  subtitle: PropTypes.string
};

export default withRouter(NavigationBar);
