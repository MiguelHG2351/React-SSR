import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default ReactDOM.hydrate(
  <App />,
  document.getElementById("root")
);
