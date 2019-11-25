import React, { Component } from "react";
import Context from "../Context";
import Slider from "../Slider";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
        className="body"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1.5% "
          }}
          className="context"
        >
          <Context />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.5% "
          }}
          className="slider"
        >
          <Slider />
        </div>
      </div>
    );
  }
}

export default Home;
