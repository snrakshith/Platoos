import React, { Component } from "react";
import GoogleMapReact, { google, handleApiLoaded } from "google-map-react";
import * as data from "./styles.json";
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
  // handleApiLoaded = (map, maps) => {
  //   console.log(map, maps);
  //   // use map and maps objects
  //   const styles = new google.maps.StyledMapType([
  //     {
  //       featureType: "water",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#e9e9e9"
  //         },
  //         {
  //           lightness: 17
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "landscape",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#f5f5f5"
  //         },
  //         {
  //           lightness: 20
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "road.highway",
  //       elementType: "geometry.fill",
  //       stylers: [
  //         {
  //           color: "#ffffff"
  //         },
  //         {
  //           lightness: 17
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "road.highway",
  //       elementType: "geometry.stroke",
  //       stylers: [
  //         {
  //           color: "#ffffff"
  //         },
  //         {
  //           lightness: 29
  //         },
  //         {
  //           weight: 0.2
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "road.arterial",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#ffffff"
  //         },
  //         {
  //           lightness: 18
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "road.local",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#ffffff"
  //         },
  //         {
  //           lightness: 16
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "poi",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#f5f5f5"
  //         },
  //         {
  //           lightness: 21
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "poi.park",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#dedede"
  //         },
  //         {
  //           lightness: 21
  //         }
  //       ]
  //     },
  //     {
  //       elementType: "labels.text.stroke",
  //       stylers: [
  //         {
  //           visibility: "on"
  //         },
  //         {
  //           color: "#ffffff"
  //         },
  //         {
  //           lightness: 16
  //         }
  //       ]
  //     },
  //     {
  //       elementType: "labels.text.fill",
  //       stylers: [
  //         {
  //           saturation: 36
  //         },
  //         {
  //           color: "#333333"
  //         },
  //         {
  //           lightness: 40
  //         }
  //       ]
  //     },
  //     {
  //       elementType: "labels.icon",
  //       stylers: [
  //         {
  //           visibility: "off"
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "transit",
  //       elementType: "geometry",
  //       stylers: [
  //         {
  //           color: "#f2f2f2"
  //         },
  //         {
  //           lightness: 19
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "administrative",
  //       elementType: "geometry.fill",
  //       stylers: [
  //         {
  //           color: "#fefefe"
  //         },
  //         {
  //           lightness: 20
  //         }
  //       ]
  //     },
  //     {
  //       featureType: "administrative",
  //       elementType: "geometry.stroke",
  //       stylers: [
  //         {
  //           color: "#fefefe"
  //         },
  //         {
  //           lightness: 17
  //         },
  //         {
  //           weight: 1.2
  //         }
  //       ]
  //     }
  //   ]);
  // };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "450px", width: "650px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          // onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
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
