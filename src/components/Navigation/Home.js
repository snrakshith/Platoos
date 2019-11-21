import React, { Component } from "react";
import Context from "../Context";
import Slider from "../Slider";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              margin: "2%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Context />
          </div>
          <div
            style={{
              margin: "2%",
              display: "flex",
              flexDirection: "column"
              // backgroundColor: "blue"
            }}
          >
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
