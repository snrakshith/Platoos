import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// import "../../../../styles/customFonts/fonts.css";

function Banner() {
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
                alignItems: "center"
                // backgroundColor: "skyblue",
                // padding: "5% 10%"
              }}
            >
              <img
                src={require("./images/couch.png")}
                alt="couch"
                height="250px"
                width="300px"
              />
              <br />
              <h5 className="title-sm">Subcribe to a plan</h5>
              <p
                style={{
                  display: "flex"
                  // padding: "5%"
                }}
                className="paragraph-font"
              >
                Subcribe to one of our plan and choose <br />
                your preferred type of food
              </p>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12} sm={12} style={{ padding: "0%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
                // backgroundColor: "lightgreen",
                // padding: "5%"
              }}
            >
              <img
                src={require("./images/kitchen.png")}
                alt="kitchen"
                height="250px"
                width="300px"
              />
              <br />

              <h5 className="title-sm">We prepare the food </h5>
              <p
                style={{
                  display: "flex"
                  // padding: "5%"
                }}
                className="paragraph-font"
              >
                Our hand selected chefs prepare <br /> your meals in our state
                of the art kitchens
              </p>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12} sm={12} style={{ padding: "0%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
                // backgroundColor: "lightgrey",
                // padding: "5%"
              }}
            >
              <img
                src={require("./images/map.png")}
                alt=" map"
                height="250px"
                width="300px"
              />
              <br />
              <h5 className="title-sm">Food at pickup points</h5>
              <p
                style={{
                  display: "flex"
                  // padding: "5%"
                }}
                className="paragraph-font"
              >
                Collect your food by visiting the <br />
                pickup points that are located near you
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
