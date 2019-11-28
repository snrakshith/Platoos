import React, { Component } from "react";
import Slider from "../../components/Slider";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
              padding: " 1.5% 5%"
              // backgroundColor: "green",
              // marginLeft: "5%"
            }}
          >
            <h2>Our goal is to change what you eat</h2>
            <h6> Changing how you eat is just a means to an end.</h6>
          </div>
          <div style={{}}>
            <hr
              style={{
                display: "flex",
                backgroundColor: "red"
                // paddingRight: "2%",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
              // backgroundColor: "yellow",
            }}
          >
            <Slider />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "lightgrey"
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "450px",
              height: "350px",
              // backgroundColor: "red",
              margin: "5%"
              // padding: "20%"
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
