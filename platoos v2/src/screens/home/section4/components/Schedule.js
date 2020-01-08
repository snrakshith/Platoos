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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "yellow",
                border: "1.5px solid yellow"
              }}
            >
              20
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Today</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              21
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Tomorrow</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              22
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Monday</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              23
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Tuesday</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              24
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Wednesday</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              25
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Thursday</p>
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
            <button
              style={{
                borderRadius: "50%",
                padding: "20px",
                backgroundColor: "white",
                border: "1.5px solid grey"
              }}
            >
              26
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>Friday</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
