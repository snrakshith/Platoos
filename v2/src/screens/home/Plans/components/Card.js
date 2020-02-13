import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = { daysLeft: 0, mealPoints: 0 };
  render() {
    if (this.props.selectedPlan === null) {
      // console.log("loading");
    } else {
      // console.log("From Card Component:", this.props.selectedPlan);
    }

    const daysLeft =
      this.props.selectedPlan && this.props.selectedPlan.benefits.validity / 24;
    const mealPoints =
      this.props.selectedPlan && this.props.selectedPlan.benefits.meal_points;
    // console.log("From Card Component:", mealPoints, daysLeft);
    return (
      <div
        style={{
          // border: "2px solid blue",
          borderRadius: "20px",
          backgroundColor: "rgb(91, 47, 173)",
          boxShadow: "8px 5px 15px grey",
          height: "200px",
          width: "400px",
          marginRight: "70px"
        }}
      >
        {/* {this.props.selectedPlan.perks} */}
        <Container>
          <Row className=" rowalign-items-end">
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                  // justifyContent: "center",
                  // alignItems: "center"
                }}
              >
                <div style={{ margin: "25px 50px" }}>
                  <p
                    style={{
                      fontSize: "25px",
                      fontFamily: "Nunito",
                      color: "white"
                    }}
                  >
                    Platoos
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "18px"
                  }}
                >
                  {/* Card Details */}
                  <div style={{ display: "flex", marginRight: "55px" }}>
                    <div
                      style={{
                        display: "flex"
                        //   justifyContent: "center",
                        //   alignItems: "center"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "34px",
                          fontFamily: "Nunito",
                          color: "white"
                        }}
                      >
                        {mealPoints}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: "Nunito",
                          fontWeight: "lighter",
                          color: "white",
                          marginLeft: "5px"
                        }}
                      >
                        MEAL <br />
                        POINTS
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "34px",
                          fontFamily: "Nunito",
                          color: "white"
                        }}
                      >
                        {daysLeft}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          fontFamily: "Nunito",
                          color: "white",
                          marginLeft: "5px"
                        }}
                      >
                        DAYS <br />
                        LEFT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Card;
