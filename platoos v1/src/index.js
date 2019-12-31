import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Cart from "./components/Cart";
// import Discounts from "./components/Discounts";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// ReactDOM.render(<Cart />, document.getElementById("root"));
// ReactDOM.render(<Discounts />, document.getElementById("root"));
