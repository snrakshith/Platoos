import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class WhoAreWe extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "5%" }}>
        <Container
          style={{
            // display: "flex",
            height: "100%",
            // flexDirection: "row",
            backgroundColor: "lightgrey"
            // backgroundColor: "blue"
            // justifyContent: "center"
            // padding: "5%"
          }}
        >
          <Row style={{ height: "100%" }}>
            <Col lg={7} md={6}>
              <div
                style={{
                  padding: "5%",
                  height: "100%"
                  // justifyContent: "space-between"
                  // backgroundColor: "black",
                  // marginLeft: "5%"
                }}
              >
                <h2>Who are we?</h2>
                <hr />
                <p>
                  Launched in Delhi 11 years ago, Zomato has grown from a home
                  project to one of the largest food aggregators in the world.
                  We are present in 24 countries and 10000+ cities globally,
                  enabling our vision of better food for more people. We not
                  only connect people to food in every context but work closely
                  with restaurants to enable a sustainable ecosystem.
                </p>
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%"
                  // backgroundColor: "red",
                  // margin: "5%"
                  // padding: "20%"
                }}
              >
                <img
                  src="https://picsum.photos/id/1/5616/3744"
                  alt="Coding"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WhoAreWe;
