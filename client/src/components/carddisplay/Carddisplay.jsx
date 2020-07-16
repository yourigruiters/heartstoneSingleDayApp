import React from "react";
import "./Carddisplay.scss";
import Container from "../container/Container";
import Card from "./components/card/Card";

const Carddisplay = ({ cards, page }) => {
	return (
		<section className="carddisplay">
			<Container>
				<section className="carddisplay__content">
					{cards &&
						cards.map((card, index) => (
							<Card key={index} card={card} page={page} />
						))}
				</section>
			</Container>
		</section>
	);
};

export default Carddisplay;
