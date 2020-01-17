import React, { Component } from "react";

import "../styles/Selector.css";

class Selector extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <label>
                <input
                  type="radio"
                  name="price"
                  id="50_meal"
                  style={{ width: "25px", height: "25px" }}
                />
              </label>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="selector-title">
                &#x20B9;3,500 @
                <span className="selector-currency"> &#x20B9;50</span> per meal
                <p className="selector-paragraph">
                  68 meals, valid for 90 days
                </p>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                type="radio"
                name="price"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="selector-title">
                &#x20B9;1,800 @{" "}
                <span className="selector-currency"> &#x20B9;60 </span>
                per meal
                <p className="selector-paragraph">
                  30 meals, valid for 30 days
                </p>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                type="radio"
                name="price"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="selector-title">
                &#x20B9;490 @{" "}
                <span className="selector-currency">&#x20B9;70 </span>
                per meal
                <p className="selector-paragraph">7 meals, valid for 15 days</p>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Selector;
