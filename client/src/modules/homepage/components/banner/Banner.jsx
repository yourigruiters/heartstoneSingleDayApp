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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
						fuga? Sapiente, eligendi illum dolor est sit?
					</p>
				</section>
			</Container>
		</section>
	);
};

export default Banner;
