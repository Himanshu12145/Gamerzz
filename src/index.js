import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Setting up Redux
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
// Importing react-thunk for asynchronous scripting  in redux
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";

// Why composeEnhancer??
// A- as in createStore() we could only pass 2 params one is our rootReducer n the other is for REDUX.DEVTOOLS settings but for async scripting in Reducers we have to use the library called redux-thunk so for that reason only we have to get applyMiddleware and compose to make the other 2 params as one single param  named as composeEnhancer

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
