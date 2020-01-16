import React, { Component } from "./node_modules/react";
import { NavLink } from "./node_modules/react-router-dom";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import Auth from "../auth/Auth";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <nav className="navbar navbar-light" style={{ marginLeft: "50px" }}>
          <span
            style={{
              marginLeft: "15px",
              fontSize: "35px",
              fontFamily: "Nunito",
              color: "#463fb5"
            }}
          >
            Platoos
          </span>

          <div
            style={{
              marginLeft: "450px"
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
                    color: "blue",
                    marginLeft: "25px"
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
