import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { CheckIcon } from "../../assets/icons";

import "./styles.scss";

export const DEFAULT = "default";
export const MAIN_ICON = "mainIcon";
export const CONTENT = "content";
export const ACCESSORY = "accessory";

class Cell extends PureComponent {
  render() {
    const {
      cellClassName,
      accessoryClassName,
      contentClassName,
      mainIconClassName,
      label,
      detailLabel,
      descriptionLabel,
      mainIcon,
      accessory,
      clickValue,
      clickable = true,
      hoverable = true,
      clickCallback = null,
      disabled = false,
      isActive = false,
      loading = false,
      bordered = false,
      addItem = false
    } = this.props;

    const OnClickCallback = (event, type) => {
      if (clickCallback && !loading) {
        return clickCallback(event, clickValue, type);
      }
    };

    return (
      <div className="cs-cell-container">
        <div
          className={classnames(
            "cs-cell",
            {
              clickable: clickable,
              hoverable: hoverable,
              "is-disabled": disabled,
              "is-active": isActive,
              loading: loading,
              bordered: bordered,
              "add-item": addItem
            },
            cellClassName ? cellClassName : ""
          )}
          onClick={event => OnClickCallback(event, DEFAULT)}
        >
          {mainIcon || addItem ? (
            <div
              className={classnames("cs-cell-main-icon", mainIconClassName)}
              onClick={event => OnClickCallback(event, MAIN_ICON)}
            >
              {!addItem ? mainIcon : <span className="add-item"></span>}
            </div>
          ) : null}
          {label || detailLabel ? (
            <div
              className={classnames("cs-cell-content", contentClassName)}
              onClick={event => OnClickCallback(event, CONTENT)}
            >
              {label ? <div className="cs-cell-label">{label}</div> : null}
              {detailLabel ? (
                <div className="cs-cell-detail-label">{detailLabel}</div>
              ) : null}
              {descriptionLabel ? (
                <div className="cs-cell-description-label">
                  {descriptionLabel}
                </div>
              ) : null}
            </div>
          ) : null}
          {accessory ? (
            <div
              className={classnames("cs-cell-accessory", accessoryClassName)}
              onClick={event => OnClickCallback(event, ACCESSORY)}
            >
              {!isActive ? accessory : <CheckIcon />}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

Cell.propTypes = {
  cellClassName: PropTypes.string,
  accessoryClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  mainIconClassName: PropTypes.any,
  resource: PropTypes.any,
  label: PropTypes.any,
  detailLabel: PropTypes.any,
  descriptionLabel: PropTypes.any,
  mainIcon: PropTypes.object,
  accessory: PropTypes.any,
  clickable: PropTypes.bool,
  hoverable: PropTypes.bool,
  clickCallback: PropTypes.func,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  noBorder: PropTypes.bool,
  addItem: PropTypes.bool
};

export default Cell;
