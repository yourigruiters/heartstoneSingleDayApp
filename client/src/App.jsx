import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import HomepageView from "./modules/homepage/Homepage.view";
import HeroesView from "./modules/heroes/Heroes.view";
import CardsView from "./modules/cards/Cards.view";
import DecktrackerView from "./modules/decktracker/Decktracker.view";
import { fetchAccessToken } from "./redux/actions";

const App = ({ accessToken, fetchAccessToken }) => {
	React.useEffect(() => {
		if (!accessToken) {
			fetchAccessToken();
		}
	});

	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path="/" exact component={HomepageView} />
					<Route path="/heroes" exact component={HeroesView} />
					<Route path="/cards" exact component={CardsView} />
					<Route path="/decktracker" exact component={DecktrackerView} />
				</Switch>
			</main>
			<Footer />
		</>
	);
};

const mapStateToProps = (state) => ({
	accessToken: state.accessReducer,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAccessToken: () => dispatch(fetchAccessToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
