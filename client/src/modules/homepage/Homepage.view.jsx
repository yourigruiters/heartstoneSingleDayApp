import React from "react";
import "./Homepage.view.scss";
import Banner from "./components/banner/Banner";
import Bannermodes from "./components/bannermodes/Bannermodes";
import Information from "./components/information/Information";
import Decktracker from "./components/decktracker/Decktracker";

const HomepageView = () => {
	const informationData = [
		{
			id: 0,
			title: "Heartstone Heroes",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam fugiat explicabo aspernatur inventore esse ipsum voluptatem quaerat culpa minima possimus, deserunt sed a dicta, consectetur maiores dolorem ut pariatur distinctio rerum eum ipsam? Sequi, fugiat. Ipsam ut enim repellat, sed, consectetur dicta provident, fuga natus necessitatibus obcaecati animi quasi!",
			order: true,
		},
		{
			id: 1,
			title: "Cards and tracker",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam fugiat explicabo aspernatur inventore esse ipsum voluptatem quaerat culpa minima possimus, deserunt sed a dicta, consectetur maiores dolorem ut pariatur distinctio rerum eum ipsam? Sequi, fugiat. Ipsam ut enim repellat, sed, consectetur dicta provident, fuga natus necessitatibus obcaecati animi quasi!",
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
			<Decktracker />
		</section>
	);
};

export default HomepageView;
