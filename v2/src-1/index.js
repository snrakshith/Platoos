import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Tracker from "../src/components/map/Tracker";
import ScheduleEx from "../src/experimantal/components/ScheduleEx";
import RadioEx from "../src/experimantal/components/RadioEx";
import PickupEx from "../src/experimantal/components/PickupEx";
import HoverEx from "../src/experimantal/components/HoverEx";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<HoverEx />, document.getElementById("root"));
