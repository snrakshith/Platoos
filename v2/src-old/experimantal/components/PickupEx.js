import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { pickupEx } from "../api/api";
import "../css/PickupEx.css";


class PickupEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
    this.getlocations();
  }
  async getlocations() {
    let response = await pickupEx();
    // console.log(response.data.address);
    this.setState({
      address: response.data.address
    });
  }

  render() {
    console.log(this.getlocations);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px"
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
          }}
        >
          <div
            className="btn-group-vertical"
            role="group"
            ariaLabel="Basic example"
          >
            <button type="button" className="btn btn-secondary">
              {/* {console.log(this.getLocations())} */}
              {this.state.address}
            </button>

            <button type="button" className="btn btn-secondary">
              Middle
            </button>

            <button type="button" className="btn btn-secondary">
              Right
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PickupEx;
