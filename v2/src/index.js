import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Tracker from "../src/components/map/Tracker";
import MenuEx from "../src/experimantal/components/MenuEx";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<MenuEx />, document.getElementById("root"));
