import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { ChevronDownIcon } from "../../assets/icons";
import { darkGrey } from "../../assets/colors";

import "./styles.scss";

class Section extends PureComponent {
  constructor() {
    super();

    this._toggleCollapse = this._toggleCollapse.bind(this);

    this.state = {
      collapsed: true
    };
  }

  componentDidMount() {
    const { startCollapsed } = this.props;

    if (startCollapsed !== undefined) {
      this.setState({
        collapsed: startCollapsed
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsed !== this.props.collapsed) {
      this.setState({ collapsed: this.props.collapsed });
    }
  }

  _toggleCollapse() {
    const { clickCallback = null } = this.props;
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });

    if (clickCallback !== null) {
      clickCallback(collapsed);
    }
  }

  render() {
    const { collapsed } = this.state;

    const {
      children,
      title,
      description,
      customClassName,
      collapsable = false
    } = this.props;

    return (
      <section
        className={classnames(
          "cs-section",
          {
            collapsed: collapsed && collapsable,
            collapsable: collapsable
          },
          customClassName
        )}
        id={
          title && title.length
            ? title
                .toLowerCase()
                .trim()
                .replace(/\s/, "-")
            : null
        }
      >
        {title || description ? (
          <div
            className="cs-section-info"
            onClick={collapsable ? this._toggleCollapse : null}
          >
            {title ? <span className="cs-section-title">{title}</span> : null}
            {description ? (
              <span className="cs-section-description">{description}</span>
            ) : null}
            {collapsable ? (
              <span className="collapse-toggle-button">
                <ChevronDownIcon fillColor={darkGrey} />
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="cs-section-content">{children}</div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.any,
  description: PropTypes.string,
  collapsed: PropTypes.bool,
  customClassName: PropTypes.string
};

export default Section;
