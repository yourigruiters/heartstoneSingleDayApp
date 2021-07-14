import React from "react";
import * as _ from "lodash";
import "./Card.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Card = ({ card, page, metaData }) => {
  const keywords = _.get(card, "keywordIds", []);
  const keywordsDescription = _.get(metaData, "keywords", []);

  const foundKeywords = keywords.map((keyword) => {
    const result = keywordsDescription.find(
      (keywordId) => keywordId.id === keyword
    );

    if (result && result !== undefined) {
      return result;
    }
    return;
  });

  return (
    <section className="card">
      <img src={card.image} alt="card" />
      {page === "cardbacks" ? (
        <section className="card__overlay">
          <article className="card__overlay__box">{card.text.en_US}</article>
        </section>
      ) : (
        <section className="card__overlay">
          <article className="card__overlay__box">{card.flavorText}</article>
          {foundKeywords &&
            foundKeywords[0] !== undefined &&
            foundKeywords.map((foundKeyword, index) => {
              if (foundKeyword !== undefined) {
                return (
                  <article
                    className="card__overlay__box card__overlay__box--ability"
                    key={index}
                  >
                    <span>{foundKeyword.name}: </span>
                    {foundKeyword.refText}
                  </article>
                );
              }
            })}
        </section>
      )}
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.any,
  page: PropTypes.string,
  metaData: PropTypes.any
};

const mapStateToProps = (state) => ({
  metaData: state.metadataReducer
});

export default connect(mapStateToProps)(Card);
