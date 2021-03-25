import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import smoothscroll from "smoothscroll-polyfill";

import "./styles.scss";

smoothscroll.polyfill();

class SideMenu extends PureComponent {
  constructor() {
    super();
    this.state = { sideLinks: [] };
  }

  componentDidMount() {
    this._setSideLlinks();
    if (window.location.hash) {
      this._handleClick(
        "cs-side-link-" + window.location.hash.replace("#", "")
      );
    }
  }

  _setSideLlinks() {
    const { depth = 2 } = this.props;

    let h = ["h1", "h2", "h3", "h4", "h5", "h6"];
    let sideLinks = [];

    const allContentChildren = document.querySelectorAll(
      ".cs-content > *, .cs-side-menu-searchable > *"
    );

    for (let i = 0; i < allContentChildren.length; i++) {
      const contentChildIndex = h.indexOf(
        allContentChildren[i].tagName.toLocaleLowerCase()
      );

      if (contentChildIndex > -1 && depth >= contentChildIndex) {
        const buildId =
          "cs-side-link-" +
          allContentChildren[i].textContent
            .toLowerCase()
            .replace(/\s/, "-")
            .trim();
        allContentChildren[i].id = buildId;

        sideLinks.push({
          text: allContentChildren[i].textContent,
          link: buildId,
          level: contentChildIndex
        });
      }
    }

    this.setState({ sideLinks });
  }

  _handleClick(id) {
    const ele = document.getElementById(id);
    const eleOriginalClassName = ele.className;
    ele.className = eleOriginalClassName + " highlight-heading";
    const scrollAmount = ele.offsetTop - 80;
    window.scroll({
      top: scrollAmount,
      left: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      ele.className = eleOriginalClassName;
    }, 2000);
  }

  _renderSideLinks(sideLinks) {
    return sideLinks.map(sideLinkItem => {
      return (
        <span
          onClick={() => {
            this._handleClick(sideLinkItem.link);
          }}
          className={"cs-side-link level-" + sideLinkItem.level}
          key={"cs-side-link-" + sideLinkItem.link}
          href={"#" + sideLinkItem.link}
        >
          {sideLinkItem.text}
        </span>
      );
    });
  }

  render() {
    const { sideLinks } = this.state;

    return (
      <div className="cs-side-links-menu">
        {sideLinks.length ? (
          this._renderSideLinks(sideLinks)
        ) : (
          <h3>
            No headings!{" "}
            <span role="img" aria-label="No Headings!">
              🤯
            </span>
          </h3>
        )}
      </div>
    );
  }
}

SideMenu.propTypes = {
  depth: PropTypes.number
};

export default SideMenu;
