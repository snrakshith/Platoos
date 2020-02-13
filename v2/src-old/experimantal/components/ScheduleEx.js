import React, { Component } from "react";

class ScheduleEx extends Component {
  state = {};

  render() {
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
        <div className="container-schedule ">
          <div>
            <button
              type="button"
              // className={}
              onClick={this.onButtonClick.bind(this)}
              // onMouseEnter={this.onButtonHover.bind(this)}
            >
              21
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            {/* <p className={}>Tomorrow</p> */}
            <p>Tomorrow</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleEx;
