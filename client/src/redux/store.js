import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers/index";

export const store = createStore(
	combineReducers(reducers),
	compose(applyMiddleware(thunk), composeWithDevTools())
);
