import React from "react";
import Container from "../../../../components/container/Container";
import "./Decktracker.scss";
import Button from "../../../../components/button/Button";

const Decktracker = () => {
	const [inputValue, setInputValue] = React.useState("");

	return (
		<section className="decktracker">
			<Container>
				<section className="decktracker__content">
					<article className="decktracker__content__content">
						<h1>Decktracker</h1>
						<p>Have a deck code? Paste it here and view your cards!</p>
					</article>
					<article className="decktracker__content__form">
						<input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<Button content="Submit" type="yellow" />
					</article>
				</section>
			</Container>
		</section>
	);
};

export default Decktracker;
