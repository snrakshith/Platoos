import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import * as data from "./styles.json";
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
  // handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  //   const styles = new google.maps.StyledMapType(data);
  //    const styles = new google.maps.
  // };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "450px", width: "650px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
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
