import React from "react";
import "./Modecard.scss";
import PropTypes from "prop-types";

import mode1 from "../../../../../../utils/images/modes/mode1.png";
import mode2 from "../../../../../../utils/images/modes/mode2.png";
import mode3 from "../../../../../../utils/images/modes/mode3.png";
import mode4 from "../../../../../../utils/images/modes/mode4.png";

const Modecard = ({ title, index }) => {
  const getImage = (index) => {
    switch (index) {
      case 0:
        return mode1;
      case 1:
        return mode2;
      case 2:
        return mode3;
      case 3:
        return mode4;
      default:
        return "";
    }
  };

  return (
    <article className="modecard">
      <section className="modecard__image">
        <img src={getImage(index)} alt="mode" />
      </section>
      <section className="modecard__title">
        <p>{title}</p>
      </section>
    </article>
  );
};

Modecard.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number
};

export default Modecard;
