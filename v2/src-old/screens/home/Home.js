import React, { Component } from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/components/Banner";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";

// import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          flexDirection: "row",
          // backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          margin: "0% 6%"
        }}
      >
        <main>
          <div style={{ marginTop: "5%" }}>
            <Section1 />
          </div>
          <div style={{ marginTop: "5%" }}>
            <Section2 />
          </div>
          <div style={{ marginTop: "10%" }}>
            <Section3 />
          </div>
          <div style={{ marginTop: "10%" }}>
            <Section4 />
          </div>
          <div style={{ margin: "10% 0% 10% 0%" }}>
            <Section5 />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
