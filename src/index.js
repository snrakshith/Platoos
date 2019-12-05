import React from "react";
import ReactDOM from "react-dom";
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";
import SignupOrLogin from "./components/modals/SignupOrLogin";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
ReactDOM.render(<SignupOrLogin />, document.getElementById("root"));
