import React, { Fragment, useState } from "react";
import SkeletonBlock from "../Placeholders/SkeletonBlock";

const Image = ({
  src,
  width,
  height,
  alt,
  color = "#dedede",
  borderRadius = "5px",
  border,
  style,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Fragment>
      <img
        src={src}
        style={{ width, height, display: "none" }}
        onLoad={() => setLoading(false)}
        alt={alt}
      />
      <SkeletonBlock
        color={color}
        width={width}
        height={height}
        borderRadius={borderRadius}
        border={border}
        style={style}
        {...rest}
      />
    </Fragment>
  ) : (
    <img
      src={src}
      style={{ width, height, borderRadius, border, ...style }}
      alt={alt}
      {...rest}
    />
  );
};

export default Image;
