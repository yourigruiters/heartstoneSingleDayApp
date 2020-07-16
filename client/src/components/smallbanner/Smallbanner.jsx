import React from "react";
import "./Smallbanner.scss";

const Smallbanner = ({ title }) => {
	return <section className={`smallbanner smallbanner--${title}`}></section>;
};

export default Smallbanner;
