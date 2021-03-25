import React, { PureComponent } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class Content extends PureComponent {
  constructor() {
    super();

    this.state = {
      hasSideBar: false,
      footerHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      hasSideBar: this._hasSidebar(),
      footerHeight: this._getFooterHeight()
    });

    window.onresize = () => {
      this.setState({
        footerHeight: this._getFooterHeight()
      });
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        hasSideBar: this._hasSidebar()
      });
    }
  }

  _hasSidebar() {
    return document.getElementsByClassName("cs-side-links-menu").length
      ? true
      : false;
  }

  _getFooterHeight() {
    const footer = document.getElementsByTagName("footer");
    return footer[0] ? footer[0].clientHeight : 0;
  }

  render() {
    const { children, fullWidth } = this.props;

    const { hasSideBar, footerHeight } = this.state;

    return (
      <div
        className={classnames(
          "cs-content",
          { "full-width": fullWidth },
          { "has-sidebar": hasSideBar }
        )}
        style={{ minHeight: "calc(100vh - " + footerHeight + "px)" }}
      >
        {children}
      </div>
    );
  }
}

export default withRouter(Content);
