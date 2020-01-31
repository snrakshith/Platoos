import React, { Component } from "react";
import classNames from "classnames";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Schedule.css";

class Schedule extends Component {
  state = {
    clickStatus: false,
    isHovered: false,
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
  // onButtonClick() {
  //   this.setState({
  //     clickStatus: true
  //   });
  //   console.log("clicked");
  // }
  changeStyle = () => {
    this.setState({
      clickStatus: true
    });
    console.log("clicked");
  };
  onButtonHover() {
    this.setState({
      isHovered: true
    });
    console.log("Hovered from 20");
  }
  render() {
    const content = this.state.schedule.map(time => {
      return `Date: ${time.date} Day: ${time.day}`;
    });
    // console.log(content);

    // Dynamic Classnames
    let btnStyle = classNames({
      "selected-circular-btn": this.state.clickStatus,
      "circular-btn": !this.state.clickStatus
    });
    let paraStyle = classNames({
      "selected-paragraph-font": this.state.clickStatus,
      "paragraph-font": !this.state.clickStatus
    });

    // let btnType = this.onButtonClick ? "selected-circular-btn" : "circular-btn";
    // let paraType = this.onButtonClick
    //   ? "selected-paragraph-font"
    //   : "paragraph-font";
    return (
      <div
        className="btn-toolbar"
        ariaLabel="Combined group"
        role="toolbar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="btn-group" role="group" ariaLabel="Schedule">
          {/* <div style={{ marginLeft: "0px" }} className="container-schedule ">
            <div>
              <button
                type="button"
                className={btnStyle}
                onClick={this.onButtonClick.bind(this)}
                onMouseEnter={this.onButtonHover.bind(this)}
              >
                20
              </button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p className={paraStyle}>Today</p>
            </div>
          </div>
          <div className="container-schedule ">
            <div>
              <button
                type="button"
                className={btnStyle}
                onClick={this.onButtonClick.bind(this)}
                // onMouseEnter={this.onButtonHover.bind(this)}
              >
                21
              </button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p className={paraStyle}>Tomorrow</p>
            </div>
          </div> */}
          {this.state.schedule.map(time => {
            return (
              <div className="container-schedule">
                <div>
                  <button
                    type="button"
                    // className="circular-btn"
                    className={btnStyle}
                    onClick={this.changeStyle}
                  >
                    {time.date}
                  </button>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p className={paraStyle}>{time.day}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Schedule;
