import React, { Component } from "react";
// import "../styles/Content.css";
import "../../../../styles/customFonts/fonts.css";

class Content extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          // fontFamily: "'Nunito', sans-serif",
          margin: "0%"
        }}
        // className="context-body"
      >
        <div>
          <p
            style={{
              margin: "0%"
            }}
            className="title-lg"
          >
            Food subscription
            <br />
            at <b className="currency">&#x20B9; 50</b> per meal
          </p>
          <p
            style={
              {
                // margin: "0%"
              }
            }
            // className="paragraph"
          >
            Subscribe to our meal plans and forget to have to worry about
            <br />
            getting clean, nutritious and delicious food!
          </p>
        </div>
        <div className="btn">
          <a href="https://www.google.com" target="_blank">
            <img
              src={require("../images/google_icon.png")}
              alt="google_icon"
              width="200px"
              height="65px"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Content;
