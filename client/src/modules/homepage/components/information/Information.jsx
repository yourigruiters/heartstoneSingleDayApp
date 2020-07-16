import React from "react";
import Container from "../../../../components/container/Container";
import cn from "classnames";
import "./Information.scss";
import Button from "../../../../components/button/Button";
import { Link } from "react-router-dom";

import homepage1 from "../../../../utils/images/homepage/information1.png";

const Information = ({ information }) => {
	const getImage = (index) => {
		switch (index) {
			case 0:
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
							<Link to={!information.id ? "/heroes" : "/cards"}>
								<Button content={information.button} type="brown" />
							</Link>
							{information.button2 && (
								<Link to="/cardbacks">
									<Button content={information.button2} type="brown" />
								</Link>
							)}
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
