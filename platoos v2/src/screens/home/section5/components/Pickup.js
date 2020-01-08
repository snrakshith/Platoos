import React, { Component } from "react";

class Pickup extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "450px"
          //   justifyContent: "center",
          //   alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3>Pickup Points</h3>
          <p>Your dishes will be delivered here</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%"
          }}
        >
          <button
            type="button"
            // className="btn btn-outline-secondary "
            style={{
              padding: "15px",
              backgroundColor: "#fbaf02",
              color: "white",
              borderRadius: "50px",
              marginBottom: "20px"
            }}
          >
            {/* <p>Near Reva University, Kattigenahalli</p> */}
            Near Reva University, Kattigenahalli
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "50px"
            }}
          >
            Near Manyatha, Hennur
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "50px"
            }}
          >
            Near Xyz, Abcd
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "50px"
            }}
          >
            Near Xyz, Abcd
          </button>
        </div>
      </div>
    );
  }
}

export default Pickup;
