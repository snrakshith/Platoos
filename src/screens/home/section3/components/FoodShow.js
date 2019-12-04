import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../FoodShow.css";

class FoodShow extends Component {
  state = {};
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      // infinite: true,
      speed: 100,
      arrows: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true
    };
    return (
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "2%"
          }}
        >
          <h2>Menu Tonight</h2>
        </div>
        <div style={{}}>
          <Slider {...settings}>
            <div style={{}}>
              <img
                src={require("../images/i1.jpg")}
                alt=""
                height="400px"
                width="600px"
                style={{ paddingRight: "25px" }}
              />
            </div>
            <br />
            <div style={{}}>
              <img
                src={require("../images/i2.jpg")}
                alt=""
                height="400px"
                width="400px"
                style={{ paddingRight: "25px" }}
              />
            </div>
            <div style={{}}>
              <img
                src={require("../images/i3.jpg")}
                alt=""
                height="400px"
                width="350px"
                style={{ paddingRight: "25px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default FoodShow;
