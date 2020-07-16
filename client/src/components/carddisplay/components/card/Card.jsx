import React from "react";
import * as _ from "lodash";
import "./Card.scss";

const Card = ({ card, page }) => {
	console.log(card);
	const keywords = _.get(card, "keywordIds", []);
	return (
		<section className="card">
			<img src={card.image} alt="card" />
			{page === "cardbacks" ? (
				<section className="card__overlay">
					<article className="card__overlay__box">{card.text.en_US}</article>
				</section>
			) : (
				<section className="card__overlay">
					<article className="card__overlay__box">{card.flavorText}</article>
					{keywords.map((keyword) => {
						console.log(keyword);
						return <article className="card__overlay__box">123456</article>;
					})}
				</section>
			)}
		</section>
	);
};

export default Card;
