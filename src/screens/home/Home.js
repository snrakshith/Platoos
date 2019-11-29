import React, { Component } from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/components/Banner";
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
          // justifyContent: "center",
          // alignItems: "center",
          margin: "0% 5%"
        }}
        className="body"
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            // flexDirection: "column"
            // backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Section1 />
        </div>
        <div style={{ height: "100%" }}>
          <Section2 />
        </div>
      </div>
    );
  }
}

export default Home;
