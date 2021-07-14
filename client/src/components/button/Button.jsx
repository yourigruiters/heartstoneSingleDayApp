import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ content, type, onClick = () => false }) => {
  return (
    <button className={`button button--${type}`} onClick={() => onClick()}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
