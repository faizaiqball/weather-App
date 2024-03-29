// lib
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// src
import App from "./App";
import store from "./store";
import "./style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
