import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBrand from "../modals/NavBrand";
// import "./NavBar.css";

// import { Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <nav className="navbar navbar-light" style={{ marginLeft: "20px" }}>
          <a className="navbar-brand" href="#">
            <img
              src={require("./Brand.jpeg")}
              width="35px"
              height="35px"
              class="d-inline-block align-top"
              alt=""
            />
            <span style={{ marginLeft: "15px" }}>Platoos</span>
          </a>
          <div
            style={{
              marginLeft: "350px"
            }}
          >
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  SERVICES
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/partners"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  PARTNER US
                </NavLink>
              </li>
            </ul>
          </div>
          <NavBrand />
        </nav>
      </div>
    );
  }
}

export default NavBar;
