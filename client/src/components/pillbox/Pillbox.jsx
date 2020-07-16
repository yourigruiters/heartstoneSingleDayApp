import React from "react";
import "./Pillbox.scss";

const Pillbox = ({ title, onClick }) => {
	return (
		<article className="pillbox" onClick={onClick}>
			<p>{title}</p>
		</article>
	);
};

export default Pillbox;
