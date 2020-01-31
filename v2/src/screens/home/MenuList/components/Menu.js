import React, { Component } from "react";
import ReactHover from "react-hover";
import Hover from "./Hover";
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
        status: "Launch",
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
    const hoverOptions = {
      followCursor: false,
      shiftX: 20,
      shiftY: 20
    };
    let icon = this.state.resources.map(resource => {
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
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
          //   marginRight: "30px"
        }}
      >
        {this.state.resources.map((resource, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                // marginRight: "30px"
              }}
            >
              <div>
                <p className="menu-paragraph">{resource.status}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <ReactHover options={hoverOptions}>
                  <ReactHover.Trigger type="trigger">{icon}</ReactHover.Trigger>
                  <ReactHover.Hover type="hover">
                    <Hover />
                  </ReactHover.Hover>
                </ReactHover>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
