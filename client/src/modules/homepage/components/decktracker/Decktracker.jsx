import React from "react";
import Container from "../../../../components/container/Container";
import "./Decktracker.scss";

const Decktracker = () => {
	return (
		<section className="decktracker">
			<Container>
				<section className="decktracker__content">
					<article className="decktracker__content__content">
						<h1>Decktracker</h1>
						<p>Have a deck code? Paste it here and view your cards!</p>
					</article>
					<article className="decktracker__content__form">123</article>
				</section>
			</Container>
		</section>
	);
};

export default Decktracker;
