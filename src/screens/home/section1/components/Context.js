import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../styles/Context.css";

class Context extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          margin: "0%"
        }}
        className="context-body"
      >
        <div>
          <p
            style={{
              margin: "0%"
            }}
            className="title-1"
          >
            Food For Every Kind Of Hunger
          </p>
          <p
            style={{
              margin: "0%"
            }}
            className="title-2"
          >
            India's Fastest Growing Food Start-up
          </p>
          <p
            style={
              {
                // margin: "0%"
              }
            }
            className="paragraph"
          >
            Do check out for our Services
          </p>
        </div>
        <div className="btn">
          <Button variant="outline-info">Click Here</Button>
        </div>
      </div>
    );
  }
}

export default Context;
