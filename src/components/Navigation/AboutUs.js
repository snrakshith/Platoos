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
          backgroundColor: "orange",
          height: "100%",
          margin: "0% 10%"
          // justifyContent: "space-around",
          // padding: "5%"
        }}
      >
        <div>
          <div>
            <h3>Our goal is to change what you eat</h3>
            <h6> Changing how you eat is just a means to an end.</h6>
          </div>
          <hr />
          <div>
            <Slider />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "blue",
            margin: "0% 10%",
            justifyContent: "center"
            // padding: "5%"
          }}
        >
          <div
            style={{
              // backgroundColor: "black",
              padding: "5%"
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
              // backgroundColor: "black",
              margin: "2%",
              // backgroundColor: "red",
              width: "450px",
              height: "300px"
              // padding: "5%"
            }}
          >
            <img
              src="https://picsum.photos/id/1/5616/3744"
              alt="Coding"
              height="300px"
              width="450px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
