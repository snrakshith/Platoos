import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Selector from "./components/Selector";
import Select from "./components/Select";
import Card from "./components/Card";

class Section3 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div>
                <Card />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div>
                <Select />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Section3;
