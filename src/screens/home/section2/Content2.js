import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Content2.css";

class Content2 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
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
                  src={require("./images/meal.png")}
                  alt="meals"
                  height="150px"
                  width="200px"
                />
                <br />
                <h5>No Minimum Order</h5>
                <p>
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
                  src={require("./images/route.png")}
                  alt="order_tracking"
                  height="150px"
                  width="200px"
                />
                <br />

                <h5> Live Order Tracking</h5>
                <p>
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
                  src={require("./images/cycling.png")}
                  alt=" delivery"
                  height="150px"
                  width="200px"
                />
                <br />
                <h5>Lightning-Fast Delivery</h5>
                <p>
                  Experience Platoo's superfast delivery for food delivered
                  fresh & on time
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Content2;
