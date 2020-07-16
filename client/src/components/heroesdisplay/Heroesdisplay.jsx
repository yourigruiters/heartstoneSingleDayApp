import React from "react";
import "./Heroesdisplay.scss";
import Container from "../container/Container";
import Hero from "./components/hero/Hero";

const Heroesdisplay = ({ heroes }) => {
	return (
		<section className="heroesdisplay">
			<Container>
				<section className="heroesdisplay__content">
					{heroes &&
						heroes.map((hero, index) => <Hero key={index} hero={hero} />)}
				</section>
			</Container>
		</section>
	);
};

export default Heroesdisplay;
