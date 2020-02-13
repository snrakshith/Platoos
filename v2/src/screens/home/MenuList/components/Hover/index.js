import React, { Component } from "react";
import "./Hover.css";

class Hover extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // marginLeft: "100px",
          width: "290px",
          height: "280px",
          border: "1.5px solid grey",
          borderRadius: "3.5%",
          backgroundColor: "#EEF478"
        }}
      >
        <div style={{}}>
          <div>
            <img
              src={require("./images/fake_icon.jpeg")}
              alt="icon"
              width="280px"
              height="140px"
            />
          </div>
          <hr
            style={{
              borderTop: "2.5px dashed grey",
              width: "220px",
              display: "flex",
              justifyContent: "center"
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center"
              // marginRight: "25px " // TODO fix Layouts
            }}
          >
            <div style={{ marginLeft: "0px" }}>
              <img
                src={require("./images/food-labels/veg.png")}
                alt="vegitarian"
                width="18px"
                height="18px"
              />
            </div>
            <div>
              <h5
                style={{
                  marginLeft: "15px",
                  marginBottom: "4.5px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Special Combo Idli
              </h5>
            </div>
          </div>
          <div style={{}}>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5px",
                color: "grey"
              }}
            >
              2 Idli with voda &nbsp;<b>+</b> &nbsp; Chutney
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
                // alignItems: "center",
                // marginLeft: "15px"
                // width: "440px"
              }}
            >
              <div style={{ display: "flex", width: "20px", height: "18px" }}>
                <img
                  src={require("./images/rating/full-star.svg")}
                  alt="rating"
                  style={{ width: "22px" }}
                />
                <img
                  src={require("./images/rating/full-star.svg")}
                  alt="rating"
                  style={{ width: "22px" }}
                />
                <img
                  src={require("./images/rating/full-star.svg")}
                  alt="rating"
                  style={{ width: "22px" }}
                />
                <img
                  src={require("./images/rating/half-star.svg")}
                  alt="rating"
                  style={{ width: "22px" }}
                />
                <img
                  src={require("./images/rating/empty-star.svg")}
                  alt="rating"
                  style={{ width: "22px" }}
                />
              </div>
              <div style={{ marginLeft: "100px" }}>
                <p style={{ fontSize: "15px", width: "80px", height: "16px" }}>
                  41 votes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hover;
