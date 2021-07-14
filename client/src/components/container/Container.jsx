import React from "react";
import cn from "classnames";
import "./Container.scss";
import PropTypes from "prop-types";

const Container = ({ fluid, children }) => {
  return (
    <section className={cn("container", { "container--fluid": fluid })}>
      {children}
    </section>
  );
};

Container.propTypes = {
  fluid: PropTypes.any,
  children: PropTypes.any
};

export default Container;
