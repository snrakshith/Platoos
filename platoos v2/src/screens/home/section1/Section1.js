import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "./components/Content";
// import Slider from "../../../components/slider/Slider";
// import Navbar from "../NavBar";

class Section1 extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row style={{}}>
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
                margin: "10% 0%"
              }}
              className="context"
            >
              <Content />
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className=" order-lg-last order-md-last order-sm-first order-first"
            style={{}}
          >
            <div
              style={{
                display: "flex",
                // padding: "0% 5%"
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
                // backgroundColor: "orange"
              }}
              // className="slider"
            >
              <img
                src={require("./images/fake_icon.jpeg")}
                alt="logo"
                width="450px"
                height="350px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Section1;
