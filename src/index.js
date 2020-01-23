import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { featuresReducer } from "./reducers/featuresReducer";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
console.log(store.getState(), "store");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
