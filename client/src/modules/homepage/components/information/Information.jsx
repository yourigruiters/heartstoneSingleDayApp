import React from "react";
import Container from "../../../../components/container/Container";
import cn from "classnames";
import "./Information.scss";
import Button from "../../../../components/button/Button";

import homepage1 from "../../../../utils/images/homepage/information1.png";

const Information = ({ information }) => {
	const getImage = (index) => {
		switch (index) {
			case 0:
				console.log("this one");
				return homepage1;
			case 1:
				return homepage1;
			default:
				return "";
		}
	};

	return (
		<>
			<section className="information">
				<Container>
					<section className="information__content">
						<article
							className={cn("information__content__content", {
								"information__content__content--order": !information.order,
							})}
						>
							<h1>{information.title}</h1>
							<p>{information.description}</p>
							<Button content="hit me!" />
						</article>
						<article className="information__content__image">
							<img src={getImage(information.id)} alt="information" />
						</article>
					</section>
				</Container>
			</section>
			{!information.id && (
				<section className="divider">
					<Container>
						<article className="divider__line"></article>
					</Container>
				</section>
			)}
		</>
	);
};

export default Information;
