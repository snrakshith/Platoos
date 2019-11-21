import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "flex", justifyContent:"center" }}>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">
              SERVICES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              CONTACT US
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
