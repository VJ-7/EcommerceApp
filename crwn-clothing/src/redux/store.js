import { creatStore, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(
  rootReducer /* preloadedState, */,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
