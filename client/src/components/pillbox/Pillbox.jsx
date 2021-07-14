import React from "react";
import "./Pillbox.scss";
import PropTypes from "prop-types";

const Pillbox = ({ title, onClick }) => {
  return (
    <article className="pillbox" onClick={onClick}>
      <p>{title}</p>
    </article>
  );
};

Pillbox.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Pillbox;
