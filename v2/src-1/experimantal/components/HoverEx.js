import React, { Component } from "react";
import "../css/HoverEx.css";

class HoverEx extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div className="HoverEx-btn">
          <div className="side default-side">
            <img
              src={require("../images/hover/fake_icon.jpeg")}
              alt="icon"
              width="190px"
              height="110px"
            />
          </div>
          <div
            className="side hover-side"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <img
                  src={require("../images/hover/food-labels/veg.png")}
                  alt="vegitarian"
                  width="15px"
                  height="15px"
                />
              </div>

              {/* Content */}
              <div>
                <h6
                  style={{
                    marginLeft: "10px"
                  }}
                >
                  Special Combo Idli
                </h6>
              </div>
            </div>
            <div>
              <h6
                style={{
                  display: "flex",

                  color: "grey"
                }}
              >
                2 Idli with voda &nbsp;<b>+</b> &nbsp; Chutney
              </h6>
            </div>
            {/* Rating */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={require("../images/hover/rating/full-star.svg")}
                alt="rating"
                style={{ width: "18px" }}
              />
              <img
                src={require("../images/hover/rating/full-star.svg")}
                alt="rating"
                style={{ width: "18px" }}
              />
              <img
                src={require("../images/hover/rating/full-star.svg")}
                alt="rating"
                style={{ width: "18px" }}
              />
              <img
                src={require("../images/hover/rating/half-star.svg")}
                alt="rating"
                style={{ width: "18px" }}
              />
              <img
                src={require("../images/hover/rating/empty-star.svg")}
                alt="rating"
                style={{ width: "18px" }}
              />
              <div style={{ marginLeft: "10px" }}>
                <p style={{ marginBottom: "0px" }}>41 votes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HoverEx;
