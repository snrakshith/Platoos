import React, { Component } from "react";

import "../styles/Selector.css";

class Select extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "80px",
            border: "white",
            backgroundColor: "#e8f4f9"
          }}
        >
          <div>
            <img
              src={require("../images/selectors/checked.png")}
              alt=""
              width="25px"
              height="25px"
            />
          </div>

          <div style={{ marginLeft: "10px" }}>
            <p className="selector-title">
              &#x20B9;3,500 @
              <span className="selector-currency"> &#x20B9;50</span> per meal
            </p>
            <p className="selector-paragraph">68 meals, valid for 90 days</p>
          </div>
          {/* Entier Container*/}
        </button>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <hr style={{ width: "85px", height: "5px" }} />
        </div> */}
      </div>
    );
  }
}

export default Select;
