import React, { Component } from "react";
import GoogleMapReact, { google } from "google-map-react";
// import * as data from "./styles.json";
import "./Marker.css";

// const myMap = function (map, maps) {
//     const sty = new map.styles(
//         n
//     )
// }

const PickupPoint = ({ text }) => (
  <div className="marker">
    <p className="location-title">{text}</p>
  </div>
);

class Tracker extends Component {
  static defaultProps = {
    center: {
      lat: 13.0479673,
      lng: 77.6124347
    },
    zoom: 10
  };

  render() {
    // Styles a map in night mode.
    let nn = new google.maps.Sty();
    var map = new google.maps.Map(document.getElementById("my"), {
      center: { lat: 40.674, lng: -73.945 },
      zoom: 12,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
      ]
    });
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "450px", width: "650px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          className="my"
          onGoogleApiLoaded={map}
        >
          <PickupPoint
            id="my"
            lat={13.0479673}
            lng={77.6124347}
            // StyledMapType={}
            text="Manayata Teck Park"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Tracker;
