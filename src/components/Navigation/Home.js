import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Context from "../Context";
import Slider from "../Slider";

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
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1.5% "
          }}
        >
          <Context />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.5% "
          }}
        >
          <Slider />
        </div>
      </div>
    );
  }
}

export default Home;
