import React from "react";
import "./Button.scss";

const Button = ({ content, type }) => {
	return <button className={`button button--${type}`}>{content}</button>;
};

export default Button;
