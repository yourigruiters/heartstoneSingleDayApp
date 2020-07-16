import React from "react";
import Container from "../../components/container/Container";
import "./Divider.scss";

const Divider = () => {
	return (
		<section className="divider">
			<Container>
				<article className="divider__line"></article>
			</Container>
		</section>
	);
};

export default Divider;
