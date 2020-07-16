import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Cards.view.scss";
import { connect } from "react-redux";

const CardsView = () => {
	return (
		<section className="cards">
			<Smallbanner title={"first"} />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(CardsView);
