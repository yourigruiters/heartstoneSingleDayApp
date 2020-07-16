import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cards.view.scss";
import { connect } from "react-redux";
import Carddisplay from "../../components/carddisplay/Carddisplay";

const CardsView = ({ accessToken }) => {
	const [cardsData, setCardsData] = React.useState([]);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		getCardbacks();
	}, []);

	const getCardbacks = async () => {
		await fetch(`/api/cardsdata/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				setError(false);
				setCardsData(data.cards);
			})
			.catch((error) => {
				setError(true);
				setCardsData([]);
			});
	};

	console.log(error);

	return (
		<section className="cards">
			<Smallbanner title={"first"} />
			<Carddisplay cards={cardsData} />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(CardsView);
