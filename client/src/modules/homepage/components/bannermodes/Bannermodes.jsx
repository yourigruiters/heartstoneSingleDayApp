import React from "react";
import Container from "../../../../components/container/Container";
import "./Bannermodes.scss";
import Modecard from "./components/modecard/Modecard";

const Bannermodes = () => {
	const modeNames = ["Standard", "Wild", "Battlegrounds", "Arena"];

	return (
		<section className="bannermodes">
			<Container>
				<section className="bannermodes__content">
					{modeNames.map((mode, index) => (
						<Modecard title={mode} index={index} key={index} />
					))}
				</section>
			</Container>
		</section>
	);
};

export default Bannermodes;
