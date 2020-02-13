import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Card extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          // border: "2px solid blue",
          borderRadius: "20px",
          backgroundColor: "rgb(91, 47, 173)",
          boxShadow: "8px 5px 15px grey",
          height: "200px",
          width: "400px"
        }}
      >
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
                  <p style={{ fontSize: "25px", color: "white" }}>Platoos</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "25px"
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
                      <p style={{ fontSize: "32px", color: "white" }}>68</p>
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
                          fontSize: "12px",
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
                      <p style={{ fontSize: "32px", color: "white" }}>21</p>
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
                          fontSize: "12px",
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
