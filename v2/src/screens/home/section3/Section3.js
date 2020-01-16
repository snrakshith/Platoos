import React, { Component } from "react";
import Selector from "./components/Selector";
import Card from "./components/Card";

class Section3 extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Card />
        </div>
        <div style={{ marginLeft: "75px" }}>
          <Selector />
        </div>
      </div>
    );
  }
}

export default Section3;
