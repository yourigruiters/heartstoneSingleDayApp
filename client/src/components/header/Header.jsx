import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import Container from "../container/Container";
import logo from "../../utils/images/logo/hearstone.png";
import Navbar from "./components/navbar/Navbar";

const Header = () => {
	return (
		<header className="header">
			<Container fluid={true}>
				<section className="header__content">
					<article className="header__logo">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</article>
					<Navbar />
				</section>
			</Container>
		</header>
	);
};

export default Header;
