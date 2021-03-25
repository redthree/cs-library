import React, { Fragment, memo } from "react";
import "./styles.scss";

const SkeletonBlock = ({
  width = "100%",
  height = "100%",
  color = "rgba(0,0,0,0.01)",
  animationSpeed = "1.5s",
  borderRadius = "5px",
  border = "none",
  style,
  className = "",
  children
}) => {
  const computedStyle = {
    width,
    height,
    borderRadius,
    border,
    ...style
  };

  return (
    <Fragment>
      <div style={computedStyle} className={`cs-skeleton-block ${className}`}>
        <div className="loading-block" style={{ backgroundColor: color }}>
          <span
            style={{
              animation: `pulseLoadingPlaceholder ${animationSpeed} infinite`
            }}
          />
        </div>
        {children}
      </div>
    </Fragment>
  );
};

export default memo(SkeletonBlock);
