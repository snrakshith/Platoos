import React, { Component } from "react";
import classNames from "classnames";
import "../styles/Pickup.css";
class Pickup extends Component {
  state = {
    points: [
      {
        locationName: "Near Reva University, Kattigenahalli",
        latitude: 14,
        longitude: 17
      },
      { locationName: "Near Manyatha, Hennur", latitude: 11, longitude: 12 },
      { locationName: "Near Xyz, Abcd", latitude: 0, longitude: 0 }
    ]
  };
  render() {
    let btnStyles = classNames({
      "btn btn-outline-secondary btn-text": true,
      "btn-text": false
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px"
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
          <h3 className="pickup-title">Pickup Points</h3>
          <p className="pickup-caption">Your dishes will be delivered here</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px"
            // width: "100%"
          }}
        >
          {/* {this.state.points.map(point => {
            return <button>{point.locationName}</button>;
          })} */}
          <button
            type="button"
            className="btn-txt"
            style={{
              padding: "10px",
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
            className="btn btn-outline-secondary btn-text"
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "50px"
            }}
          >
            Near Manyatha, Hennur
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-text"
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "50px"
            }}
          >
            Near Xyz, Abcd
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-text"
            style={{
              marginBottom: "20px",
              padding: "10px",
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
