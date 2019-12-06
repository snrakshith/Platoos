import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavBrand from "./components/modals/NavBrand";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// ReactDOM.render(<NavBrand />, document.getElementById("root"));
