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
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true
    };
    return (
      <div style={{ margin: "0%" }}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={{ width: 450, margin: "0% 5%" }}>
            <img src={require("../images/i1.jpg")} alt="" height="300px" />
          </div>
          <div style={{ width: 200, margin: "0% 5%" }}>
            <img src={require("../images/i2.jpg")} alt="" height="300px" />
          </div>
          <div style={{ width: 250, margin: "0% 5%" }}>
            <img src={require("../images/i3.jpg")} alt="" height="300px" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default FoodShow;
