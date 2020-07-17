import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cards.view.scss";
import { connect } from "react-redux";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import Spinner from "../../components/spinner/Spinner";
import Intro from "../../components/intro/Intro";

const CardsView = ({ accessToken }) => {
	const [cardsData, setCardsData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		getCardbacks();
	}, [accessToken]);

	const getCardbacks = async () => {
		await fetch(`/api/cardsdata/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				setTimeout(() => {
					setError(false);
					setCardsData(data.cards);
					setIsLoading(false);
				}, 250);
			})
			.catch((error) => {
				setError(true);
				setCardsData([]);
				setIsLoading(true);
			});
	};

	return (
		<section className="cards">
			<Smallbanner title={"first"} />
			<Intro
				title="Cards"
				description="We have made 100 Hearthstone cards available for you to navigate through in this demo of the cards page. In the future this will extend to all cards with different filter options."
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

export default connect(mapStateToProps)(CardsView);
