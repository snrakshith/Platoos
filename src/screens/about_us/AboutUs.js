import React, { Component } from "react";
import Goals from "./section1/components/Goals";
import WhoAreWe from "./section2/components/WhoAreWe";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment style={{}}>
        <div style={{ margin: "0% 15%" }}>
          <Goals />
        </div>
        <div style={{ margin: "0% 15%" }}>
          <WhoAreWe />
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
