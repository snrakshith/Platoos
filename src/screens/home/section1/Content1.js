import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Context from "./components/Context";
import Slider from "../../../components/Slider";
// import Navbar from "../NavBar";

class Content1 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex"
          // flexDirection: "row",
          // justifyContent: "center",
          // backgroundColor: "blue",
          // marginTop: "5%",
          // alignItems: "center"
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
                  display: "flex"
                  // flexDirection: "column",
                  // justifyContent: "center",
                  // alignItems: "center"
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

export default Content1;
