import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Auth from "../auth/Auth";

class NavBar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <nav className="navbar navbar-light" style={{ marginLeft: "50px" }}>
          <a className="navbar-brand" href="#">
            <span style={{ marginLeft: "15px" }}>Platoos</span>
          </a>
          <div
            style={{
              marginLeft: "550px"
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
                  Home
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
                  About Us
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
                  Partner With Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className="nav-link"
                  style={{
                    color: "blue"
                  }}
                >
                  <Auth />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
