import React from "react";
import classnames from "classnames";
import "./styles.scss";

const Pagination = ({ children, ...rest }) => (
  <div {...rest} className="cs-pagination">
    {children}
  </div>
);

Pagination.Prev = props => <i {...props} className="arrow left" />;

Pagination.Next = props => <i {...props} className="arrow right" />;

Pagination.Page = ({
  number = 1,
  active = false,
  visited = false,
  ...rest
}) => {
  const classes = classnames({
    number: true,
    active,
    visited
  });

  return (
    <div {...rest} className={classes}>
      {number}
    </div>
  );
};

export default Pagination;
