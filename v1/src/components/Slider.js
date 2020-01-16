import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Slider extends Component {
  state = {
    images: [
      {
        image: "https://assets.box8.co.in/square/web/category/22",
        description: "First Slide"
      },
      {
        image: "https://assets.box8.co.in/square/web/category/22",
        description: "Second Slide"
      },
      {
        image: "https://assets.box8.co.in/square/web/category/5",
        description: "Third Slide"
      }
    ]
  };
  render() {
    return (
      <div>
        <Carousel slide={false} style={{ padding: "0% 5%" }}>
          {this.state.images.map(item => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.description}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
