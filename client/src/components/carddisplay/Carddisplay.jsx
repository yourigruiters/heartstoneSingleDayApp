import React from "react";
import "./Carddisplay.scss";
import Container from "../container/Container";
import Card from "./components/card/Card";
import PropTypes from "prop-types";

const Carddisplay = ({ cards, page, error }) => {
  return (
    <section className="carddisplay">
      <Container>
        <section className="carddisplay__content">
          {error && (
            <article className="carddisplay__content__error">
              <p>
                Our apologies, we have experienced an error in fetching your
                Hearthstone information! Try to refresh this page.
              </p>
            </article>
          )}
          {cards &&
            cards.map((card, index) => (
              <Card key={index} card={card} page={page} />
            ))}
        </section>
      </Container>
    </section>
  );
};

Carddisplay.propTypes = {
  cards: PropTypes.any,
  page: PropTypes.string,
  error: PropTypes.any
};

export default Carddisplay;
