import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import HomepageView from "./modules/homepage/Homepage.view";
import HeroesView from "./modules/heroes/Heroes.view";
import CardsView from "./modules/cards/Cards.view";
import DecktrackerView from "./modules/decktracker/Decktracker.view";
import { fetchAccessToken, fetchMetaData } from "./redux/actions/index";
import CardbacksView from "./modules/cardbacks/Cardbacks.view";

const App = ({ accessToken, fetchAccessToken, metaData, fetchMetaData }) => {
  React.useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) {
        await fetchAccessToken();
      }
      if (
        Object.keys(metaData).length === 0 &&
        metaData.constructor === Object &&
        accessToken
      ) {
        await fetchMetaData(accessToken);
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomepageView} />
          <Route path="/heroes" exact component={HeroesView} />
          <Route path="/cards" exact component={CardsView} />
          <Route path="/cardbacks" exact component={CardbacksView} />
          <Route path="/decktracker/:id?" component={DecktrackerView} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

App.propTypes = {
  accessToken: PropTypes.string,
  metaData: PropTypes.object,
  fetchAccessToken: PropTypes.func,
  fetchMetaData: PropTypes.func
};

const mapStateToProps = (state) => ({
  accessToken: state.accessReducer,
  metaData: state.metadataReducer
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccessToken: () => dispatch(fetchAccessToken()),
  fetchMetaData: (accessToken) => dispatch(fetchMetaData(accessToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
