import React, { Component } from "react";
import "../styles/Schedule.css";

class Schedule extends Component {
  state = {
    schedule: [
      { date: 20, day: "Today" },
      { date: 21, day: "Tommorow" },
      { date: 22, day: "Monday" },
      { date: 23, day: "Tuesday" },
      { date: 24, day: "Wednesday" },
      { date: 25, day: "Thursday " },
      { date: 26, day: "Friday " }
    ]
  };
  render() {
    const content = this.state.schedule.map(date => {
      <li>{date}</li>;
    });
    console.log(content);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ marginLeft: "0px" }} className="container-schedule">
          <div>
            <button className="selected-circular-btn">20</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="selected-paragraph-font">Today</p>
          </div>
        </div>
        <div className="container-schedule">
          <div>
            <button className="circular-btn">21</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Tomorrow</p>
          </div>
        </div>
        <div className="container-schedule">
          <div>
            <button className="circular-btn">22</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Monday</p>
          </div>
        </div>
        <div className="container-schedule">
          <div>
            <button className="circular-btn">23</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Tuesday</p>
          </div>
        </div>
        <div className="container-schedule">
          <div>
            <button className="circular-btn">24</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Wednesday</p>
          </div>
        </div>
        <div className="container-schedule">
          <div>
            <button className="circular-btn">25</button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className="paragraph-font">Thursday</p>
          </div>
        </div>
        <div className="container-schedule">
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
