import React from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
