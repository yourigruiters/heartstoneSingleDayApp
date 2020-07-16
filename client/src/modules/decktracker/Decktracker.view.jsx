import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import Decktracker from "../../components/decktracker/Decktracker";
import "./Decktracker.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";

const DecktrackerView = ({ match }) => {
	const [inputValue, setInputValue] = React.useState("");
	const [cardsData, setCardsData] = React.useState([]);
	const [error, setError] = React.useState(false);

	const onSubmit = (value) => {
		if (value) {
			setInputValue(value);
			getCards(value);
		} else {
			getCards(inputValue);
		}
	};

	React.useEffect(() => {
		const deckId = match.params.id;

		if (deckId) {
			getCards(deckId);
		}

		return;
	}, []);

	const getCards = async (deckId) => {
		const accessToken = "EUrByZ0ipR0ophSWVguAM6lkE2qVtT0KCh";

		await fetch(`/api/deck/${deckId}/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				// console.log("DATA", data);
				if (data.cards.length !== 30) {
					setError(true);
					setCardsData([]);
				} else {
					setError(false);
					console.log(data.cards);
					setCardsData(data.cards);
				}
			})
			.catch((error) => {
				setError(true);
				setCardsData([]);
				// console.log(("ERROR", error));
			});
	};

	return (
		<section className="decktrackerView">
			<Smallbanner title={""} />
			<Decktracker
				inputValue={inputValue}
				onChange={setInputValue}
				onSubmit={onSubmit}
				page="decktracker"
				error={error}
			/>
			<Carddisplay cards={cardsData} />
		</section>
	);
};

export default DecktrackerView;
