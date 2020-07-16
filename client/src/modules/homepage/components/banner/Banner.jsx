import React from "react";
import Container from "../../../../components/container/Container";
import "./Banner.scss";
import Button from "../../../../components/button/Button";

const Banner = () => {
	return (
		<section className="banner">
			<Container>
				<section className="banner__content">
					<h1>Heartstone Tracker</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
						fuga? Sapiente, eligendi illum dolor est sit?
					</p>
					<Button content="hit me!" />
				</section>
			</Container>
		</section>
	);
};

export default Banner;
