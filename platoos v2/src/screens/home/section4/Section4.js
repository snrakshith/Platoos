import React, { Component } from "react";
import Choice from "./components/Choice";
import Schedule from "./components/Schedule";
import Menu from "./components/Menu";
import Serve from "./components/Serve";

class Section4 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <Choice />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Schedule />
        </div>
        <div style={{ marginTop: "25px" }}>
          <Menu />
          <Menu />
          <Menu />
        </div>
        <div style={{ marginTop: "25px" }}>
          <Serve />
        </div>
      </div>
    );
  }
}

export default Section4;
