import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "30px"
          }}
        >
          <p>Breakfast</p>
        </div>
        <div style={{}}>
          <img
            style={{ marginLeft: "80px" }}
            src={require("../images/fake_icon.jpeg")}
            alt="_image"
            width="150px"
            height="100px"
          />
        </div>
        <div>
          <img
            style={{ marginLeft: "80px" }}
            src={require("../images/fake_icon.jpeg")}
            alt="_image"
            width="150px"
            height="100px"
          />
        </div>
        <div>
          <img
            style={{ marginLeft: "80px" }}
            src={require("../images/fake_icon.jpeg")}
            alt="_image"
            width="150px"
            height="100px"
          />
        </div>
      </div>
    );
  }
}

export default Menu;
