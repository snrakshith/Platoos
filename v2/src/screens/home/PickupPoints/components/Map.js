import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { data } from "./stylesObject";
import "../styles/Marker.css";

const PickupPoint = ({ text }) => (
  <div className="marker">
    <p className="location-title">{text}</p>
  </div>
);

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        // lat: props.selectedPoint && props.selectedPoint.location.coordinates[0],
        // lng: props.selectedPoint && props.selectedPoint.location.coordinates[1]
        // lat: 13.1168866,
        // lng: 77.6324328
        lat: 13.0481519,
        lng: 77.6199997
        // lat: 0,
        // lng: 0
      },
      zoom: 16
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("From Props", props);
  //   console.log("From State", state);
  //   const latitude =
  //     props.selectedPoint && props.selectedPoint.location.coordinates[0];
  //   // this.setState({ lat: latitude }, () => console.log(state.center.lat));
  //   // Longitude
  //   const longitude =
  //     props.selectedPoint && props.selectedPoint.location.coordinates[1];
  //   // this.setState({ lng: longitude }, () => console.log(state.center.lng));
  //   const center = {
  //     latitude,
  //     longitude
  //   };
  //   if (center !== state.center) {
  //     return {
  //       lat: latitude,
  //       lng: longitude
  //     };
  //   }
  //   // Return null to indicate no change to state.
  //   return null;
  // }
  customMap = () => {
    return {
      panControl: true,
      scrollwheel: true,
      styles: data
    };
  };
  render() {
    if (this.props.selectedPoint === null) {
      console.log("Loading");
    } else {
      // console.log(this.state.center);
      // console.log(this.props.selectedPoint);
      // console.log(this.props.setSelectedPoint);
      // console.log(this.props.addressList);
    }

    const latitude =
      this.props.selectedPoint &&
      this.props.selectedPoint.location.coordinates[1];
    const longitude =
      this.props.selectedPoint &&
      this.props.selectedPoint.location.coordinates[0];
    // console.log(latitude, longitude);
    // const center = { latitude, longitude };
    // const locationName =
    //   this.props.selectedPoint && this.props.selectedPoint.name;

    return (
      <div style={{ height: "450px", width: "650px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          options={this.customMap}
        >
          {this.props.addressList &&
            this.props.addressList.map(item => {
              return (
                <PickupPoint
                  lng={item.location.coordinates[0]}
                  lat={item.location.coordinates[1]}
                  StyledMapType={data}
                  text={item.name}
                />
              );
            })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Track;
