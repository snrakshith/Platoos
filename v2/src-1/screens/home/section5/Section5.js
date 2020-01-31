import React, { Component } from "react";
import Pickup from "./components/Pickup";
import Map from "../../../components/map/Track";

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
        <div style={{ marginLeft: "75px" }}>
          <Map />
        </div>
      </div>
    );
  }
}

export default Section5;
