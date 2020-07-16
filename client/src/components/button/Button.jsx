import React from "react";
import "./Button.scss";

const Button = ({ content, type, onClick = () => false }) => {
	return (
		<button className={`button button--${type}`} onClick={() => onClick()}>
			{content}
		</button>
	);
};

export default Button;
