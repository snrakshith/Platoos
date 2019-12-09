import React, { Component } from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/components/Verification";

class Partners extends Component {
  state = {};
  render() {
    return (
      <div>
        <main>
          <div style={{ marginTop: "5%" }}>
            <Section1 />
          </div>
          <div style={{ marginTop: "5%" }}>
            <Section2 />
          </div>
          <div style={{}}></div>
        </main>
      </div>
    );
  }
}

export default Partners;
