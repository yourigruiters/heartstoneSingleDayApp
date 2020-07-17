import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import Decktracker from "../../components/decktracker/Decktracker";
import "./Decktracker.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner";

const DecktrackerView = ({ match, accessToken }) => {
	const [inputValue, setInputValue] = React.useState("");
	const [cardsData, setCardsData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState("");
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
	}, []);

	const getCards = async (deckId) => {
		setIsLoading(true);
		await fetch(`/api/deck/${deckId}/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				if (data.cards.length !== 30) {
					setError(true);
					setCardsData([]);
					setIsLoading(false);
				} else {
					setTimeout(() => {
						setError(false);
						setCardsData(data.cards);
						setIsLoading(false);
					}, 250);
				}
			})
			.catch(() => {
				setError(true);
				setCardsData([]);
				setIsLoading(false);
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
			{isLoading ? (
				<Spinner />
			) : (
				<Carddisplay cards={cardsData} error={error} />
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(DecktrackerView);
