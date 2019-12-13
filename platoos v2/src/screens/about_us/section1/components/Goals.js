import React, { Component } from "react";
import Slider from "../../../../components/slider/Slider";

class Goals extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "red"
            height: "100%"
            // margin: "0% 10%"
            // justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: " 1.5% 5%"
              // backgroundColor: "green",
              // marginLeft: "5%"
            }}
          >
            <h2>Our goal is to change what you eat</h2>
            <h6> Changing how you eat is just a means to an end.</h6>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "5%",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <hr
              align="left"
              width="25%"
              noshade
              style={{
                backgroundColor: "orange",
                padding: ".15% 0%"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2%"
              // backgroundColor: "yellow",
            }}
          >
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
