import React, { Component } from "react";
import "../css/RadioEx.css";

class RadioEx extends Component {
  state = {};
  render() {
    return (
      <div
        className="cc-selector"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input id="visa" type="radio" name="credit-card" value="visa" />
            <label className="drinkcard-cc visa" htmlFor="visa"></label>
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
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input
              id="mastercard"
              type="radio"
              name="credit-card"
              value="mastercard"
            />
            <label
              className="drinkcard-cc mastercard"
              htmlFor="mastercard"
            ></label>
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
        </div>
      </div>
    );
  }
}

export default RadioEx;
