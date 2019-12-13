import React, { Component } from "react";
import Section1 from "./section1/components/Goals";
import Section2 from "./section2/components/WhoAreWe";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "100%", margin: "0% 15%" }}>
        <div style={{ marginTop: "5%" }}>
          <Section1 />
        </div>
        <div style={{ marginTop: "5%" }}>
          <Section2 />
        </div>
        <div style={{ marginTop: "5%" }}></div>
      </div>
    );
  }
}

export default AboutUs;
