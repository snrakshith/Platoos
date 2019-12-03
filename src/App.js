import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Services from "./screens/services/Services";
import Home from "./screens/home/Home";
import AboutUs from "./screens/about_us/AboutUs";
import NotFound from "./screens/not_found/NotFound";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/about" component={AboutUs} />
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default App;
