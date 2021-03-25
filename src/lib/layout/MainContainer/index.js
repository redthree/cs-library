import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.scss";

class MainContainer extends PureComponent {
  componentDidUpdate(prevProps) {
    const { scrollToTop } = this.props;
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      scrollToTop
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return <main className={"cs-main-container"}>{children}</main>;
  }
}

MainContainer.propTypes = {
  fullWidth: PropTypes.bool
};

export default withRouter(MainContainer);
