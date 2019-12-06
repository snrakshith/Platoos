import React, { Component } from "react";
import PartnerForm from "./components/PartnerForm";

class Section1 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div>
          <PartnerForm />
        </div>
        <div>
          <img
            src={require("./images/partners.jpg")}
            alt="partners_meet"
            width="650px"
            height="450px"
          />
        </div>
      </div>
    );
  }
}

export default Section1;
