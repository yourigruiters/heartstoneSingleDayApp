import React from "react";
import "./Intro.scss";
import Container from "../container/Container";
import Divider from "../divider/Divider";

const Intro = ({ title, description }) => {
	return (
		<section className="intro">
			<Container>
				<article className="intro__content">
					<h2>{title}</h2>
					<p>{description}</p>
				</article>
				<Divider />
			</Container>
		</section>
	);
};

export default Intro;
