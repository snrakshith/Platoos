import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Navigation/Services";
import Home from "./components/Navigation/Home";
import AboutUs from "./components/Navigation/AboutUs";
import ContactUs from "./components/Navigation/ContactUs";
import NotFound from "./components/Navigation/NotFound";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
