import React, { Component } from "react";
import { GoogleMapReact } from "google-maps-react";
// import styleMap from "./styleMap";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30 },
    zoom: 11
  };
  mapOptions() {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        {
          stylers: [{ saturation: -100 }]
        }
      ]
    };
  }
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"Kreysr Avrora"}
        />
      </GoogleMapReact>
    );
  }
}
