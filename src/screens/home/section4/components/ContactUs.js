import React, { Component } from "react";
import Map from "../../../../components/Map";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          flexDirection: "column"
        }}
      >
        {/* Display Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%"
          }}
        >
          <h1>Get In Touch</h1>
          <h4>We would love to collaborate and work with you</h4>
        </div>
        {/* Body Container for Map and Address */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "lightgrey",
            height: "100%"
          }}
        >
          {/* Map  */}
          <div style={{}}>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuE3mgiE7DM3D1pO-7hCHyABK8wGcinrQ&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={
                <div style={{ height: "100%", width: "900px" }} />
              }
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
          {/* Address */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8% 5%",
              width: "100%",
              // margin: " 4% 0%",
              backgroundColor: "red",
              height: "100%"
            }}
          >
            <div>
              <h4>Capdice LLP</h4>
            </div>
            <div
              style={{
                display: "flex"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                  // backgroundColor: "red"
                }}
              >
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div
                style={{
                  marginLeft: "5%"
                }}
              >
                <p>
                  Capdice LLP,
                  <br />
                  No.307, 3rd Floor ,<br />
                  Sri Vasavi Arcade 100 Feet Road,
                  <br />
                  HRBR Layout 1st Block,
                  <br />
                  Kalyan Nagar Bangalore - 560043
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div>
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div
                style={{
                  marginLeft: "5%"
                }}
              >
                <p>+91 9513669995</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div>
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div
                style={{
                  marginLeft: "5%"
                }}
              >
                <a href="mailto:info@capdice.com" target="">
                  <p>info@capdice.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
