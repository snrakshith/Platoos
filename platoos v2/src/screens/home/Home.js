import React, { Component } from "react";
import Section1 from "./section1/Section1";

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
          <div style={{ marginTop: "10%" }}>
            <Section1 />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
