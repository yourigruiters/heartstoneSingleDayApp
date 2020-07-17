import React from "react";
import "./Spinner.scss";

import frontSpinner from "../../utils/images/spinner/front.png";
import backSpinner from "../../utils/images/spinner/back.png";

const Spinner = () => {
	return (
		<section className="spinner">
			<article className="spinner__content">
				<section className="spinner__content__front">
					<img src={frontSpinner} alt="spinner-front" />
				</section>
				<section className="spinner__content__back">
					<img src={backSpinner} alt="spinner-back" />
				</section>
			</article>
		</section>
	);
};

export default Spinner;
