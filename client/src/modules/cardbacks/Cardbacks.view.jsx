import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cardbacks.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";

const CardbacksView = ({ match, accessToken }) => {
	const [cardsData, setCardsData] = React.useState([]);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		getCardbacks();
	}, []);

	const getCardbacks = async () => {
		await fetch(`/api/cardbacks/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				setError(false);
				setCardsData(data.cardBacks);
			})
			.catch((error) => {
				setError(true);
				setCardsData([]);
			});
	};

	console.log(error);

	return (
		<section className="cardbacks">
			<Smallbanner title={"fourth"} />
			<Carddisplay cards={cardsData} />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(CardbacksView);
