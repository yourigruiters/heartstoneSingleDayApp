import React from "react";
import "./Carddisplay.scss";
import Container from "../container/Container";

const Carddisplay = ({ cards }) => {
	return (
		<section className="carddisplay">
			<Container>
				<section className="carddisplay__content">
					{cards &&
						cards.map((card, index) => (
							<article key={index}>
								<img src={card.image} alt="card" />
							</article>
						))}
				</section>
			</Container>
		</section>
	);
};

export default Carddisplay;
