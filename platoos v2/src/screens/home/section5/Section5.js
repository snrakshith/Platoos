import React, { Component } from "react";
import Pickup from "./components/Pickup";
import Map from "../../../components/map/Map";

class Section5 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <Pickup />
        </div>
        <div>
          {/* <Map /> */}
          <h3>Map Component</h3>
        </div>
      </div>
    );
  }
}

export default Section5;
