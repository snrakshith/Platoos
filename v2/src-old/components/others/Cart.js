import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12} sm={12}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>Everyday Value Offer</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={12}>
              <div style={{}}>
                <img
                  src={require("./images/image1.jpg")}
                  alt="image1"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col
              lg={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <svg height="50" width="100">
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="0"
                  style={{ stroke: "#999966", strokeWidth: "15" }}
                />
              </svg>
            </Col>
            <Col lg={3} sm={12}>
              <div style={{}}>
                <img
                  src={require("./images/image2.jpg")}
                  alt="image2"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col
              lg={2.25}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <svg height="50" width="100">
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="0"
                  style={{ stroke: "#999966", strokeWidth: "15" }}
                />
              </svg>
            </Col>
            <Col lg={3} sm={12}>
              <div style={{}}>
                <div>
                  <img
                    src={require("./images/image3.jpg")}
                    alt="image3"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px"
                }}
              >
                Image 1
              </p>
            </Col>
            <Col lg={4}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px"
                }}
              >
                Image 2
              </p>
            </Col>
            <Col lg={4}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px"
                }}
              >
                Image 3
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cart;
