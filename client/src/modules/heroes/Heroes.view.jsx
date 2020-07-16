import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Heroes.view.scss";
import { connect } from "react-redux";

const HeroesView = () => {
	return (
		<section className="heroes">
			<Smallbanner title={"second"} />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(HeroesView);
