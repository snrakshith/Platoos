import React, { Component } from "react";
import classNames from "classnames";
import "../styles/Pickup.css";

// const api = require("../api/api");
class Pickup extends Component {
  state = {
    clickStatus: false,
    address: "",
    points: [
      {
        locationName: "Near Reva University, Kattigenahalli",
        latitude: 14,
        longitude: 17
      },
      { locationName: "Near Manyatha, Hennur", latitude: 11, longitude: 12 },
      { locationName: "Near Xyz, Abcd", latitude: 0, longitude: 0 },
      { locationName: "Near Xyz, Abcd", latitude: 0, longitude: 0 }
    ]
  };
  onButtonChange() {
    this.setState({
      clickStatus: true
    });
  }
  render() {
    let btnClass = classNames({
      "selected-btn-styles": this.state.clickStatus,
      "btn btn-outline-secondary  unselected-btn-styles": !this.state
        .clickStatus
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
          className="btn-toolbar"
          role="toolbar"
          ariaLabel="group"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px"
            // width: "100%"
          }}
        >
          {/* <div className="btn-group" role="group" ariaLabel="groups"> */}
          {this.state.points.map(point => {
            return (
              <button
                type="button"
                className={`btn-text ${btnClass}`}
                onClick={this.onButtonChange.bind(this)}
              >
                {/* {point.locationName} */}
                {/* {this.state.address} */}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pickup;
