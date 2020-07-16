import React from "react";
import "./Pillbox.scss";

const Pillbox = ({ title }) => {
	return (
		<article className="pillbox">
			<p>{title}</p>
		</article>
	);
};

export default Pillbox;
