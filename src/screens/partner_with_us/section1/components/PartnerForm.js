import React, { Component } from "react";
import "./PartnerForm.css";
import "bootstrap/dist/css/bootstrap.css";

class PartnerForm extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightblue"
        }}
      >
        <form
          style={{
            boxShadow: "5px 5px 5px black"
          }}
        >
          <div className="div-container">
            <h3 className="title">Partner with us</h3>
            <div className="div-layout">
              <label htmlFor="pg_name">PG Name</label>
              <input type="text" id="pg_name" required />
            </div>
            <div className="div-layout">
              <label htmlFor="pg_email">PG Email ID</label>
              <input type="email" id="pg_email" required />
            </div>
            <div className="div-layout">
              <label htmlFor="contact">Contact Number</label>
              <input type="number" id="contact" required />
            </div>
            <div className="div-layout">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" required />
            </div>
            <div className="div-layout">
              <label htmlFor="city">City</label>
              <input type="text" id="city" required />
            </div>
            <div className="btn-join">
              <button className="btn  btn-outline-danger " type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PartnerForm;
