import React from "react";
import "./Carddisplay.scss";
import Container from "../container/Container";

const Carddisplay = ({ cards }) => {
	return (
		<section className="carddisplay">
			<Container>
				{cards &&
					cards.map((card, index) => (
						<div key={index}>
							{card.slug}
							<img src={card.image} alt="card" />
						</div>
					))}
			</Container>
		</section>
	);
};

export default Carddisplay;
