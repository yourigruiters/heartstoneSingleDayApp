import React from "react";
import Container from "../../../../components/container/Container";
import "./Banner.scss";

const Banner = () => {
	return (
		<section className="banner">
			<Container>
				<section className="banner__content">
					<h1>Hearthstone Tracker</h1>
					<p>
						Whether you’re a seasoned card game veteran or a brand new player
						eager to learn, there is a place at the hearth for everyone.
					</p>
				</section>
			</Container>
		</section>
	);
};

export default Banner;
