import React from "react";
import cn from "classnames";
import "./Container.scss";

const Container = ({ fluid, children }) => {
	return (
		<section className={cn("container", { "container--fluid": fluid })}>
			{children}
		</section>
	);
};

export default Container;
