import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          // margin: "0% 10%",
          flexDirection: "row"
        }}
      >
        <Container>
          <Row>
            <Col lg={4} md={4} xs={12} sm={12} style={{ padding: "0%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "skyblue",
                  padding: " 5%"
                }}
              >
                <img
                  src={require("../images/meal.png")}
                  alt="meals"
                  height="100px"
                  width="100px"
                />
                <br />
                <h5>No Minimum Order</h5>
                <p
                  style={{
                    display: "flex",
                    padding: "5%"
                  }}
                >
                  Order in for yourself or for the group, with no restrictions
                  on order value
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} xs={12} sm={12} style={{ padding: "0%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "lightgreen",
                  padding: "5%"
                }}
              >
                <img
                  src={require("../images/route.png")}
                  alt="order_tracking"
                  height="100px"
                  width="100px"
                />
                <br />

                <h5> Live Order Tracking</h5>
                <p
                  style={{
                    display: "flex",
                    padding: "5%"
                  }}
                >
                  Know where your order is at all times, from the restaurant to
                  your doorstep.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} xs={12} sm={12} style={{ padding: "0%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "lightgrey",
                  padding: "5%"
                }}
              >
                <img
                  src={require("../images/cycling.png")}
                  alt=" delivery"
                  height="100px"
                  width="100px"
                />
                <br />
                <h5>Lightning-Fast Delivery</h5>
                <p
                  style={{
                    display: "flex",
                    padding: "5%"
                  }}
                >
                  Experience Platoo's superfast delivery for food delivered
                  fresh and on time
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;
