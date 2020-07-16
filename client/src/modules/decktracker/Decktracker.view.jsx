import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import Decktracker from "../../components/decktracker/Decktracker";
import "./Decktracker.view.scss";
import Container from "../../components/container/Container";

const DecktrackerView = () => {
	const [inputValue, setInputValue] = React.useState("");
	const onSubmit = () => {
		console.log("Haha");
	};

	return (
		<section className="decktrackerView">
			<Smallbanner title={""} />
			<Decktracker
				inputValue={inputValue}
				onChange={setInputValue}
				onSubmit={onSubmit}
				page="decktracker"
			/>
			<Container></Container>
		</section>
	);
};

export default DecktrackerView;
