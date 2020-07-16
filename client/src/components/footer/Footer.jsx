import React from "react";
import "./Footer.scss";
import Container from "../container/Container";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<section className="footer__content">
					<article className="footer__content__text">
						<p>© Hearthstone | Salt</p>
					</article>
					<article className="footer__content__text">
						<p className="footer__content__text--right">
							Created by Youri Gruiters
						</p>
					</article>
				</section>
			</Container>
		</footer>
	);
};

export default Footer;
