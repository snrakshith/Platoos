import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RadioSelector from "./components/RadioSelector";
import Card from "./components/Card";
import { getPlans } from "./api/api";

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: null,
      selectedPlan: null
    };
    this.planner();
  }

  async planner() {
    const response = await getPlans();
    // console.log(response);
    this.setState({
      plans: response,
      selectedPlan: response[0]
    });
  }

  setSelectedPlan = plan => {
    this.setState({ selectedPlan: plan });
  };

  render() {
    // All Plans
    // console.log(this.state.plans);
    // console.log(this.state.selectedPlan);

    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card selectedPlan={this.state.selectedPlan} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <RadioSelector
              plans={this.state.plans}
              setSelectedPlan={this.setSelectedPlan}
              selectedPlan={this.state.selectedPlan}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Section3;
