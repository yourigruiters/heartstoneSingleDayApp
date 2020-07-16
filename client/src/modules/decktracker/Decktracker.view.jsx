import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import Decktracker from "../../components/decktracker/Decktracker";
import "./Decktracker.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";

const DecktrackerView = ({ match, accessToken }) => {
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
		await fetch(`/api/deck/${deckId}/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				if (data.cards.length !== 30) {
					setError(true);
					setCardsData([]);
				} else {
					setError(false);
					setCardsData(data.cards);
				}
			})
			.catch((error) => {
				setError(true);
				setCardsData([]);
			});
	};

	return (
		<section className="decktrackerView">
			<Smallbanner title={"third"} />
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

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(DecktrackerView);
