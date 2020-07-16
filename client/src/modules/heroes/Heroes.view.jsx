import React from "react";
import Smallbanner from "../../components/smallbanner/Smallbanner";
import "./Heroes.view.scss";
import { connect } from "react-redux";
import * as _ from "lodash";
import Container from "../../components/container/Container";
import Heroesdisplay from "../../components/heroesdisplay/Heroesdisplay";

const HeroesView = ({ metaData }) => {
	const heroes = _.get(metaData, "classes", []);

	return (
		<section className="cardbacks">
			<Smallbanner title={"fourth"} />
			<Container>
				<article className="heroes__content">
					<h2>Heroes</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, et
						nulla rerum beatae quis quod, architecto eius eaque unde
						reprehenderit, repellat laboriosam ipsum dignissimos quisquam.
					</p>
				</article>
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
