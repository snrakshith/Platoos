import React, { Component } from "react";
import "../../../../styles/global.css";

class Verification extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h4
            // className="customFont"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "30px"
            }}
          >
            Get Listed on, India's online leading Bulk Food Delivery Platform
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "25px"
          }}
        >
          <div style={{}}>
            <img
              src={require("../images/details.jpg")}
              alt="Submit_Your_Details"
              height="300px"
              width="300px"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px"
              }}
            >
              <h5>Submit Your Details</h5>
            </div>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <img
              src={require("../images/agreement.jpg")}
              alt="Sign_The_Service_Agreement"
              height="300px"
              width="300px"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px"
              }}
            >
              <h5>Sign The Service Agreement</h5>
            </div>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <img
              src={require("../images/training.jpg")}
              alt="Product_Training"
              height="300px"
              width="300px"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px"
              }}
            >
              <h5>Product Training</h5>
            </div>
          </div>
          <div
            style={{
              marginLeft: "15px"
            }}
          >
            <img
              src={require("../images/started.jpg")}
              alt="Get_Started"
              height="300px"
              width="300px"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px"
              }}
            >
              <h5>Get Started</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Verification;
