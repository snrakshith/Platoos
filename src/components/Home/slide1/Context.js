import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Context.css";

class Context extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontFamily: "'Nunito', sans-serif"

          // padding: "5%",
          // maxWidth: "100%"
        }}
        className="context-body"
      >
        <div>
          <p className="title-1">Food For Every Kind Of Hunger</p>
          <p className="title-2">India's Fastest Growing Food Start-up</p>
          <p className="paragraph">Do check out for our Services</p>
        </div>
        <div className="btn">
          <Button variant="outline-info">Click Here</Button>
        </div>
      </div>
    );
  }
}

export default Context;
