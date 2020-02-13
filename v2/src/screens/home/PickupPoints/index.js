import React, { Component } from "react";
import Pickup from "./components/Pickup";
import Map from "./components/Map";
import { getKitchens } from "./api/api";

class Section5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      selectedPoint: null
      // zoom: 5
    };
    this.pickupPoints();
  }
  async pickupPoints() {
    const response = await getKitchens();
    // console.log(response);
    this.setState({
      address: response,
      selectedPoint: response[0]
    });
  }
  setSelectedPoint = point => {
    this.setState({
      selectedPoint: point
    });
  };
  // setZoomLevel = () => {
  //   this.setState({
  //     zoom: 11
  //   });
  // };
  render() {
    // if (this.state.deliveryPoints === null) {
    //   console.log("loading");
    // } else {
    // console.log(this.state.zoom);
    // }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <Pickup
            addressList={this.state.address}
            setSelectedPoint={this.setSelectedPoint}
            selectedPoint={this.state.selectedPoint}
          />
          {/* <button onClick={this.setZoomLevel}>Zoom</button>  */}
        </div>
        <div style={{ marginLeft: "75px" }}>
          <Map
            selectedPoint={this.state.selectedPoint}
            addressList={this.state.address}
            // zoomEffect={this.state.zoom}
          />
        </div>
      </div>
    );
  }
}

export default Section5;
