import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Context from "./components/Context";
import Slider from "../../../components/Slider";
// import Navbar from "../NavBar";

class Content1 extends Component {
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
                display: "flex"
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
              className="slider"
            >
              <Slider />
              {/* <Slider img={} des={this.state}/> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content1;
