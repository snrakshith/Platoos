import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/header/NavBar";

import Services from "./screens/services/Services";
import Home from "./screens/home/Home";
import Partners from "./screens/partner_with_us/Partners";
import AboutUs from "./screens/about_us/AboutUs";
import NotFound from "./screens/not_found/NotFound";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <header style={{}}>
        <NavBar />
      </header>
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/about" component={AboutUs} />
        <Route path="/partners" component={Partners} />
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <footer style={{ marginTop: "5%" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
