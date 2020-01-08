import React, { Component } from "react";

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
              <input type="radio" />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p>
                &#x20B9;3,500 @ &#x20B9;50 per meal
                <br />
                68 meals, valid for 90 days
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
              <input type="radio" />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p>
                &#x20B9;1,800 @ &#x20B9;60 per meal
                <br />
                30 meals, valid for 30 days
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
              <input type="radio" />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p>
                &#x20B9;490 @ &#x20B9;70 per meal
                <br />7 meals, valid for 15 days
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Selector;
