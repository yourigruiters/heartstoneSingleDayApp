import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Heroes.view.scss";
import { connect } from "react-redux";
import * as _ from "lodash";
import Container from "../../components/container/Container";
import Heroesdisplay from "../../components/heroesdisplay/Heroesdisplay";
import Divider from "../../components/divider/Divider";

const HeroesView = ({ metaData }) => {
	const heroes = _.get(metaData, "classes", []);

	return (
		<section className="cardbacks">
			<Smallbanner title={"fourth"} />
			<Container>
				<article className="heroes__content">
					<h2>Heroes</h2>
					<p>
						Below you can find the active heroes available in Hearthstone,
						attached to their image is the name and the default ability of the
						hero. Try hovering over one for a special effect!
					</p>
				</article>
				<Divider />
			</Container>
			<Heroesdisplay heroes={heroes} />
		</section>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
	metaData: state.metadataReducer,
});

export default connect(mapStateToProps)(HeroesView);
