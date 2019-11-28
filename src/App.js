import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Services from "./components/services/Services";
import Home from "./components/home/Home";
import AboutUs from "./components/about_us/AboutUs";
import ContactUs from "./components/contact_us/ContactUs";
import NotFound from "./components/not_found/NotFound";

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
