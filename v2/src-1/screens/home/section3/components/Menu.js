import React, { Component } from "react";
import Hover from "./hover/Hover";
import "../styles/Menu.css";

class Menu extends Component {
  state = {
    hoverEffect: false,
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
  handleMouseHover() {
    this.setState({
      hoverEffect: !this.state.hoverEffect
    });
  }

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
        <div
          style={{}}
          onMouseEnter={this.handleMouseHover.bind(this)}
          onMouseLeave={this.handleMouseHover.bind(this)}
        >
          {/* {icon} */}
          {this.state.hoverEffect && <Hover /> ? <Hover /> : icon}
          {/* {this.state.hoverEffect && <Hover /> } */}
        </div>
      </div>
    );
  }
}

export default Menu;
