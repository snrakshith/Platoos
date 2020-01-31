import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { data } from "./styles.js";
// const data = require("./style.json");
import "./Marker.css";

const PickupPoint = ({ text }) => (
  <div className="marker">
    <p className="location-title">{text}</p>
  </div>
);
class Track extends Component {
  static defaultProps = {
    center: {
      lat: 13.0479673,
      lng: 77.6124347
    },
    zoom: 10
  };
  customMapStyles = () => {
    return {
      // styles: JSON.stringify(data)
      styles: data
    };
  };
  render() {
    // console.log(JSON.stringify(data));
    // console.log(JSON.parse(data));
    console.log(data);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "450px", width: "650px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.customMapStyles}
          // yesIWantToUseGoogleMapApiInternals={true}
          // onGoogleApiLoaded={map => handleApiLoaded(map)}
        >
          <PickupPoint
            lat={13.0479673}
            lng={77.6124347}
            StyledMapType={data}
            text="Manayata Teck Park"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Track;
