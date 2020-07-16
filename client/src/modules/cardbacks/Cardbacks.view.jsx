import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cardbacks.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Divider from "../../components/divider/Divider";

const CardbacksView = ({ accessToken }) => {
	const [cardsData, setCardsData] = React.useState([]);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		getCardbacks();
	}, [accessToken]);

	const getCardbacks = async () => {
		await fetch(`/api/cardbacks/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				setError(false);
				setCardsData(data.cardBacks);
			})
			.catch(() => {
				setError(true);
				setCardsData([]);
			});
	};

	console.log(error);

	return (
		<section className="cardbacks">
			<Smallbanner title={"fourth"} />
			<Container>
				<article className="cardbacks__content">
					<h2>Cardbacks</h2>
					<p>
						Below you can find all cardbacks that have been in play since the
						start of Hearthstone. Hovering over a cardback will provide you with
						the description of the respective cardback.
					</p>
				</article>
				<Divider />
			</Container>
			<Carddisplay cards={cardsData} page="cardbacks" />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(CardbacksView);
