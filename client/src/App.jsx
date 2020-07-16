import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import HomepageView from "./modules/homepage/Homepage.view";
import HeroesView from "./modules/heroes/Heroes.view";
import CardsView from "./modules/cards/Cards.view";
import DecktrackerView from "./modules/decktracker/Decktracker.view";

const App = () => {
	// const [dataFromBackend, setDataFromBackend] = React.useState({});

	// // ComponentDidMount
	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		await fetch("/accesstoken")
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				setDataFromBackend(data);
	// 			})
	// 			.catch((e) => console.error(e));
	// 	};
	// 	fetchData();
	// }, []);

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

export default App;
