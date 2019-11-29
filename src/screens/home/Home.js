import React, { Component } from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/components/Banner";
import Section3 from "./section3/components/FoodShow";
// import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          flexDirection: "row",
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          margin: "0% 6%"
        }}
      >
        <main>
          <div style={{}}>
            <Section1 />
          </div>
          <div style={{}}>
            <Section2 />
          </div>
          <div style={{}}>
            <Section3 />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
