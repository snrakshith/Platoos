import React, { Component } from "react";

class Schedule extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div>
            <button className="circular-btn">20</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Today</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "30px"
          }}
        >
          <div>
            <button className="circular-btn">21</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Tomorrow</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "30px"
          }}
        >
          <div>
            <button className="circular-btn">22</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Monday</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "35px"
          }}
        >
          <div>
            <button className="circular-btn">23</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Tuesday</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "30px"
          }}
        >
          <div>
            <button className="circular-btn">24</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Wednesday</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "30px"
          }}
        >
          <div>
            <button className="circular-btn">25</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Thursday</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "30px"
          }}
        >
          <div>
            <button className="circular-btn">26</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Friday</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
