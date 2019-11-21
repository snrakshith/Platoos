import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Context extends Component {
  state = {};
  render() {
    return (
      <div style={{}}>
        <div>
          <h2>Food For Every Kind Of Hunger</h2>
        </div>
        <div>
          <h3>India's Fastest Growing Food Start-up</h3>
          <small>Do check out for our Services</small>
        </div>
        <br />
        <div>
          <Button variant="outline-info">Click Here</Button>
        </div>
      </div>
    );
  }
}

export default Context;
