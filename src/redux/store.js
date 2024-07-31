import { createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducers";
import { default as thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(
  // cakeReducer,
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
