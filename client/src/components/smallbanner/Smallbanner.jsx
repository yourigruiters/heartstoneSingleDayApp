import React from "react";
import "./Smallbanner.scss";

const Smallbanner = ({ title }) => {
	return (
		<section className="smallbanner">
			<h2>{title}</h2>
		</section>
	);
};

export default Smallbanner;
