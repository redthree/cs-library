import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class Grid extends PureComponent {
  render() {
    const { children, gridTitle, columns } = this.props;

    return (
      <div className="cs-grid-container">
        {gridTitle && gridTitle.length ? (
          <div className="cs-grid-title">
            <h3>{gridTitle}</h3>
          </div>
        ) : null}
        <div
          className={
            "cs-grid columns-" + (columns && columns.length ? columns : "auto")
          }
        >
          {children}
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  gridTitle: PropTypes.string,
  columns: PropTypes.string
};

export default Grid;
