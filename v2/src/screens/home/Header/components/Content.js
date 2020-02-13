import React from "react";
import "../styles/Content.css";
import "../../../../styles/customFonts/fonts.css";

function Content() {
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
          Food Subscription
          <br />
          at <span className="currency">&#x20B9;50</span> per meal.
        </p>
        <p
          style={{
            marginTop: "20px"
          }}
          className="content-paragraph"
        >
          Subscribe to our meal plans and forget to have to worry about
          <br />
          getting clean, nutritious and delicious food ! !
        </p>
      </div>
      <div
        className="btn"
        style={{ marginTop: "2px", marginLeft: "-60px", width: "400px" }}
      >
        <a href="https://www.google.com" target="_blank">
          <img
            style={{ marginRight: "75px" }}
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

export default Content;
