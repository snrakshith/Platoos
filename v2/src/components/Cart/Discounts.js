import React from "react";
import "./Cart.css";

function Discounts() {
  return (
    <div className="Cart-container">
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h4>Everyday Value Offer</h4>
      </div>
      <div
        className="image-container"
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
            // marginTop: "15px"
          }
        }
      >
        <div style={{ marginRight: "15px" }}>
          <div>
            <img
              src={require("./images/image1.jpg")}
              alt="image1"
              width="350px"
              height="250px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "15px"
            }}
          >
            <p>Image 1</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <svg height="50" width="100">
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="0"
              style={{ stroke: "#999966", strokeWidth: "15" }}
            />
          </svg>
        </div>
        <div style={{ margin: "0px 15px" }}>
          <div>
            <img
              src={require("./images/image2.jpg")}
              alt="image2"
              width="350px"
              height="250px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "15px"
            }}
          >
            <p>Image 2</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <svg height="50" width="100">
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="0"
              style={{
                stroke: "#999966",
                strokeWidth: "15"
              }}
            />
          </svg>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <div>
            <img
              src={require("./images/image3.jpg")}
              alt="image3"
              width="350px"
              height="250px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "15px"
            }}
          >
            <p>Image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
