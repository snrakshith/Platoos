import React, { Component } from "react";
import "../styles/Menu.css";

class Menu extends Component {
  state = {
    resources: [
      {
        status: "Breakfast",
        imageName: "fake_icon",
        text: "_icon1"
      },
      {
        status: "Afternoon",
        imageName: "fake_icon",
        text: "_icon2"
      },
      {
        status: "Dinner",
        imageName: "fake_icon",
        text: "_icon3"
      }
    ]
  };

  render() {
    // let resources = ["fake_icon", "fake_icon", "fake_icon"];
    let icon = this.state.resources.map(resource => {
      let period = `${resource.status}`;
      return (
        <img
          style={{ marginLeft: "80px" }}
          src={require(`../images/${resource.imageName}.jpeg`)}
          alt={resource.text}
          width="150px"
          height="100px"
        />
      );
    });
    console.log(icon);

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
          <p className="menu-paragraph">Breakfast</p>
        </div>
        <div style={{}}>{icon}</div>
      </div>
    );
  }
}

export default Menu;
