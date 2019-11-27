import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Context from "../Context";
import Slider from "../Slider";
// import Navbar from "../NavBar";

class Home extends Component {
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
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // backgroundColor: "blue",
          marginTop: "5%",
          alignItems: "flex-start"
        }}
      >
        <Container>
          <Row style={{ marginLeft: "0%" }}>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className=" order-lg-first order-md-first order-sm-last order-last"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center"
                  // alignContent: "center",
                  // backgroundColor: "orange"
                }}
                className="context"
              >
                <Context />
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className=" order-lg-last order-md-last order-sm-first order-first"
              style={{ marginTop: "0%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                  // backgroundColor: "orange"
                }}
                className="slider"
              >
                <Slider />
                {/* <Slider img={} des={this.state}/> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
