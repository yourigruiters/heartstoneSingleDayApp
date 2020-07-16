import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
	// const [dataFromBackend, setDataFromBackend] = React.useState({});
	// const [isLoading, setIsLoading] = React.useState(true);

	// // ComponentDidMount
	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		await fetch("/setup")
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				setDataFromBackend(data);
	// 				setIsLoading(false);
	// 			})
	// 			.catch((e) => console.error(e));
	// 	};
	// 	fetchData();
	// }, []);

	return (
		// <div className="App">
		// 	{isLoading ? (
		// 		<div>...isLoading...</div>
		// 	) : (
		// 		<>
		// 			<h1>{dataFromBackend.name}</h1>
		// 		</>
		// 	)}
		// </div>
		<>
			<Header />
			<main>
				<Switch>{/* <Route path="/" component={App} /> */}</Switch>
			</main>
			<Footer />
		</>
	);
}

export default App;
