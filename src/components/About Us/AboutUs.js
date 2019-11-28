import React, { Component } from "react";
import Slider from "../Slider";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "orange",
          height: "100%",
          margin: "0% 15%"
          // justifyContent: "space-around",
          // padding: "5%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
            // backgroundColor: "red"
            // height: "100%"
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
              // backgroundColor: "green",
              // marginLeft: "5%"
              padding: " 1.5% 5%"
            }}
          >
            <h2>Our goal is to change what you eat</h2>
            <h6> Changing how you eat is just a means to an end.</h6>
          </div>
          <div style={{}}>
            <hr
              style={{
                display: "flex",
                // paddingRight: "2%",
                backgroundColor: "red"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              // backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Slider />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
            // backgroundColor: "blue"
            // justifyContent: "center"
            // margin: "0% 10%",
            // padding: "5%"
          }}
        >
          <div
            style={{
              padding: "5%"
              // justifyContent: "space-between"
              // backgroundColor: "black",
              // marginLeft: "5%"
            }}
          >
            <h2>Who are we?</h2>
            <hr />
            <p>
              Launched in Delhi 11 years ago, Zomato has grown from a home
              project to one of the largest food aggregators in the world. We
              are present in 24 countries and 10000+ cities globally, enabling
              our vision of better food for more people. We not only connect
              people to food in every context but work closely with restaurants
              to enable a sustainable ecosystem.
            </p>
          </div>
          <div
            style={{
              // backgroundColor: "red",
              // margin: "2%",
              padding: "3% 0%",
              width: "450px",
              height: "350px"
            }}
          >
            <img
              src="https://picsum.photos/id/1/5616/3744"
              alt="Coding"
              width="450px"
              height="300px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
