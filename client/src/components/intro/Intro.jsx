import React from "react";
import "./Intro.scss";
import Container from "../container/Container";
import Divider from "../divider/Divider";
import PropTypes from "prop-types";

const Intro = ({ title, description }) => {
  return (
    <section className="intro">
      <Container>
        <article className="intro__content">
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
        <Divider />
      </Container>
    </section>
  );
};

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
