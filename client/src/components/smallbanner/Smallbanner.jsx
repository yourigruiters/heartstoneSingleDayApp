import React from "react";
import "./Smallbanner.scss";
import PropTypes from "prop-types";

const Smallbanner = ({ title }) => {
  return <section className={`smallbanner smallbanner--${title}`}></section>;
};

Smallbanner.propTypes = {
  title: PropTypes.string
};

export default Smallbanner;
