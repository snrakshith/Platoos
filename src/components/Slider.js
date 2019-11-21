import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div style={{}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.box8.co.in/square/web/category/5"
              alt="First Slide"
              // width="100%"
              // height="100%"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.box8.co.in/square/web/category/22"
              alt="Second Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.box8.co.in/square/web/category/22"
              alt="Third Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.box8.co.in/square/web/category/22"
              alt="Forth Slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
