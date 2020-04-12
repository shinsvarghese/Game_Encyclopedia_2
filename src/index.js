import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import data from "../data/data_file";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App data={data} />,
  // document.getElementById("root")
  rootElement
);
