//Store
import {createStore, combineReducers, applyMiddleware} from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import questions from "./questionsReducer"
import gameStats from "./gameStatsReducer"

const reducer = combineReducers({
  questions,
  gameStats,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware);
export default store;
