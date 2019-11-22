import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Context extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <h1>Food For Every Kind Of Hunger</h1>
        </div>
        <div>
          <h3>India's Fastest Growing Food Start-up</h3>
          <p>Do check out for our Services</p>
        </div>
        <div>
          <Button variant="outline-info">Click Here</Button>
        </div>
      </div>
    );
  }
}

export default Context;
