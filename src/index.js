import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "url-search-params-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.scss";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
