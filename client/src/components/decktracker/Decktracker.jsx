import React from "react";
import Container from "../container/Container";
import "./Decktracker.scss";
import Button from "../button/Button";
import Pillbox from "../pillbox/Pillbox";
import PropTypes from "prop-types";

const Decktracker = ({
  inputValue,
  onChange,
  onSubmit,
  page = "",
  error = false
}) => {
  const loggedIn = !true;

  return (
    <section className="decktracker">
      <Container>
        <section className="decktracker__content">
          <article className="decktracker__content__content">
            <h2>Decktracker</h2>
            <p>Have a deck code? Paste it here and view your cards!</p>
          </article>
          {error && (
            <article className="decktracker__error">
              <p className="decktracker__error__message">
                The provided deck code does not exist.
              </p>
            </article>
          )}
          <article className="decktracker__content__form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => onChange(e.target.value)}
            />
            <Button content="Track" type="yellow" onClick={() => onSubmit()} />
          </article>
        </section>
        {page === "decktracker" && (
          <section className="decktracker__options">
            {loggedIn ? (
              <>
                <article className="decktracker__options__title">
                  <p>- Your last decks:</p>
                </article>
                <Pillbox title="olee" />
                <Pillbox title="olee" />
              </>
            ) : (
              <article className="decktracker__options__title">
                <p>
                  - <span>Login</span> to your account to keep track of your
                  decks.
                </p>
                <Pillbox
                  title="Example deck"
                  onClick={() =>
                    onSubmit(
                      "AAEBAf0EHooByQOrBMUEywThB+wHjQi+7ALO7wLu9gLG+AKggAPoiQODlgOfmwOgmwOKngP8owOLpAOSpAPypQOEpwP6rAPwrwORsQOEtgOMtgPhtgOftwMAAA=="
                    )
                  }
                />
              </article>
            )}
          </section>
        )}
      </Container>
    </section>
  );
};

Decktracker.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  page: PropTypes.any,
  error: PropTypes.any
};

export default Decktracker;
