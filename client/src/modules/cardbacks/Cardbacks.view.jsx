import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cardbacks.view.scss";
import Carddisplay from "../../components/carddisplay/Carddisplay";
import { connect } from "react-redux";
import Container from "../../components/container/Container";

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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, et
						nulla rerum beatae quis quod, architecto eius eaque unde
						reprehenderit, repellat laboriosam ipsum dignissimos quisquam.
					</p>
				</article>
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
