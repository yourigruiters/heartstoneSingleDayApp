import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cardbacks.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Divider from "../../components/divider/Divider";
import Spinner from "../../components/spinner/Spinner";

const CardbacksView = ({ accessToken }) => {
	const [cardsData, setCardsData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		getCardbacks();
	}, [accessToken]);

	const getCardbacks = async () => {
		await fetch(`/api/cardbacks/${accessToken}`, {})
			.then((response) => response.json())
			.then((data) => {
				setTimeout(() => {
					setError(false);
					setCardsData(data.cardBacks);
					setIsLoading(false);
				}, 250);
			})
			.catch(() => {
				setError(true);
				setCardsData([]);
				setIsLoading(true);
			});
	};

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
			{isLoading ? (
				<Spinner />
			) : (
				<Carddisplay cards={cardsData} page="cardbacks" error={error} />
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(CardbacksView);
