import React, { Component } from "react";
// import PartnerForm from "./components/PartnerForm";

class Section1 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
          // marginTop: "5%"
        }}
      >
        <div>{/* <PartnerForm /> */}</div>
        <div
          style={{
            marginLeft: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={require("./images/partners.jpg")}
            alt="partners_meet"
            width="650px"
            height="450px"
          />
          <h4>Join us for building up a better tomorrow</h4>
        </div>
      </div>
    );
  }
}

export default Section1;
