import React, { Component } from "react";
import Section1 from "./section1/Content1";
import Section2 from "./section2/Content2";
// import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          justifyContent: "space-around",
          alignItems: "space-around"
          // marginTop: "5%"
        }}
        className="body"
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
            // flexDirection: "row",
            // height: "100%",
            // marginTop: "5%",
          }}
        >
          <Section1 />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange"
            // height: "100%",
            // flexDirection: "column"
            // marginTop: "5%"
          }}
        >
          <Section2 />
        </div>
      </div>
    );
  }
}

export default Home;
