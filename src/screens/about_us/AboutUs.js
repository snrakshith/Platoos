import React, { Component } from "react";
import Section1 from "./section1/components/Goals";
import Section2 from "./section2/components/WhoAreWe";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment style={{}}>
        <div style={{ margin: "0% 15%" }}>
          <Section1 />
        </div>
        <div style={{ margin: "0% 15%" }}>
          <Section2 />
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
