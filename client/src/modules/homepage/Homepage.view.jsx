import React from "react";
import "./Homepage.view.scss";
import Banner from "./components/banner/Banner";
import Bannermodes from "./components/bannermodes/Bannermodes";
import Information from "./components/information/Information";
import Decktracker from "../../components/decktracker/Decktracker";

const HomepageView = (props) => {
	const [inputValue, setInputValue] = React.useState("");
	const onSubmit = () => {
		props.history.push(`/decktracker/${inputValue}`);
	};

	const informationData = [
		{
			id: 0,
			title: "Hearthstone Heroes",
			description:
				"Want to find more details regarding the heroes available to you in Hearthstone? Navigate to the heroes page and see what heroes and abilities are open for your needs! More information about these heroes can be found on the official Hearthstone website.",
			button: "View heroes",
			order: true,
		},
		{
			id: 1,
			title: "Cards and cardbacks",
			description:
				"We provide you with access to all the cards and cardbacks currently used in the Hearthstone game. The cardbacks provide you with an extra view of their description and the playing cards can be filtered in a lot of different ways to provide the correct view.",
			button: "View cards",
			button2: "View cardbacks",
			order: false,
		},
	];

	return (
		<section className="homepage">
			<Banner />
			<Bannermodes />
			<section className="homepage__information">
				{informationData.map((information, index) => (
					<Information information={information} key={index} />
				))}
			</section>
			<Decktracker
				inputValue={inputValue}
				onChange={setInputValue}
				onSubmit={onSubmit}
			/>
		</section>
	);
};

export default HomepageView;
