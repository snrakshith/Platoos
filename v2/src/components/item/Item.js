import React, { Component } from "react";
import "../styles/Item.css";

class Item extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
          marginLeft: "50px",
          width: "440px",
          height: "440px",
          border: "1.5px solid grey"
        }}
      >
        <div style={{}}>
          <div>
            <img
              src={require("../images/fake_icon.jpeg")}
              alt="icon"
              width="400px"
              height="220px"
            />
          </div>
          <hr
            style={{
              borderTop: "2.5px dashed grey",
              width: "300px",
              //   marginLeft: "45px",
              //   marginTop: "0px",
              margin: "0px 45px 15px 45px"
            }}
          />
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={require("../images/veg-icon.png")}
                alt="vegitarian"
                width="20px"
                height="20px"
              />
            </div>
            <h5 style={{ marginLeft: "10px" }}>Special Combo Idli</h5>
            <button
              //   className="btn btn-outline-secondary"
              style={{
                width: "110px",
                height: "35px",
                marginLeft: "80px",
                color: "black",
                borderColor: "grey",
                borderRadius: "10px",
                backgroundColor: "white"
              }}
            >
              <b>ADD </b>
              <b style={{ color: "#ff6347", fontSize: "18px" }}>+</b>
            </button>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <p>In Thali and Meals</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", width: "15px", height: "15px" }}>
                <img
                  src={require("../images/full-star.svg")}
                  alt="rating"
                  style={{ width: "20px" }}
                />
                <img
                  src={require("../images/full-star.svg")}
                  alt="rating"
                  style={{ width: "20px" }}
                />
                <img
                  src={require("../images/full-star.svg")}
                  alt="rating"
                  style={{ width: "20px" }}
                />
                <img
                  src={require("../images/half-star.svg")}
                  alt="rating"
                  style={{ width: "20px" }}
                />
                <img
                  src={require("../images/empty-star.svg")}
                  alt="rating"
                  style={{ width: "20px" }}
                />
              </div>
              <div style={{ marginLeft: "90px", fontSize: "13px" }}>
                <p>41 votes</p>
              </div>
            </div>
            {/* Insert Here */}
            <p>
              <s style={{ color: "grey" }}>&#x20B9;140 </s> &#160;
              <b> &#x20B9;126 </b>
            </p>
            <b>
              <p style={{ color: "#ff6347" }}>Save &#x20B9;15</p>
            </b>
            <p>2 Idli with voda + Chutney </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
