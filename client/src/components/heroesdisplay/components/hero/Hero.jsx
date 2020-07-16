import React from "react";
import * as _ from "lodash";
import "./Hero.scss";

import hero1a from "../../../../utils/images/heroes/demonhunter_static.png";
import hero2a from "../../../../utils/images/heroes/druid_static.png";
import hero3a from "../../../../utils/images/heroes/hunter_static.png";
import hero4a from "../../../../utils/images/heroes/mage_static.png";
import hero5a from "../../../../utils/images/heroes/paladin_static.png";
import hero6a from "../../../../utils/images/heroes/priest_static.png";
import hero7a from "../../../../utils/images/heroes/rogue_static.png";
import hero8a from "../../../../utils/images/heroes/shaman_static.png";
import hero9a from "../../../../utils/images/heroes/warlock_static.png";
import hero10a from "../../../../utils/images/heroes/warrior_static.png";

import hero1b from "../../../../utils/images/heroes/demonhunter_hover.png";
import hero2b from "../../../../utils/images/heroes/druid_hover.png";
import hero3b from "../../../../utils/images/heroes/hunter_hover.png";
import hero4b from "../../../../utils/images/heroes/mage_hover.png";
import hero5b from "../../../../utils/images/heroes/paladin_hover.png";
import hero6b from "../../../../utils/images/heroes/priest_hover.png";
import hero7b from "../../../../utils/images/heroes/rogue_hover.png";
import hero8b from "../../../../utils/images/heroes/shaman_hover.png";
import hero9b from "../../../../utils/images/heroes/warlock_hover.png";
import hero10b from "../../../../utils/images/heroes/warrior_hover.png";

const Hero = ({ hero }) => {
	const getImage = (index) => {
		switch (index) {
			case 14:
				return hero1a;
			case 2:
				return hero2a;
			case 3:
				return hero3a;
			case 4:
				return hero4a;
			case 5:
				return hero5a;
			case 6:
				return hero6a;
			case 7:
				return hero7a;
			case 8:
				return hero8a;
			case 9:
				return hero9a;
			case 10:
				return hero10a;
			default:
				return "";
		}
	};

	const getImage2 = (index) => {
		switch (index) {
			case 14:
				return hero1b;
			case 2:
				return hero2b;
			case 3:
				return hero3b;
			case 4:
				return hero4b;
			case 5:
				return hero5b;
			case 6:
				return hero6b;
			case 7:
				return hero7b;
			case 8:
				return hero8b;
			case 9:
				return hero9b;
			case 10:
				return hero10b;
			default:
				return "";
		}
	};

	return (
		<section className="hero">
			{hero.id !== 12 && (
				<section className="hero__content">
					<article className="hero__content__images">
						<img src={getImage(hero.id)} alt="hero" />
						<img src={getImage2(hero.id)} alt="hero" />
					</article>
					<article className="hero__content__title">
						<p>{hero.slug === "demonhunter" ? "Demon Hunter" : hero.slug}</p>
					</article>
				</section>
			)}
		</section>
	);
};

export default Hero;
