import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Auth from "../auth/Auth";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <nav
          className="navbar navbar-light navbar-expand-lg"
          style={{ marginLeft: "50px" }}
        >
          <a
            href="#"
            style={{
              marginLeft: "15px",
              fontSize: "35px",
              fontFamily: "Nunito",
              textDecoration: "none",
              color: "#463fb5"
            }}
          >
            Platoos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{
              marginLeft: "450px"
            }}
          >
            <div className="navbar-nav">
              >
              <ul className="nav">
                <li className="nav-item nav-link">
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

                <li className="nav-item nav-link">
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

                <li className="nav-item nav-link">
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
                <li className="nav-item nav-link">
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
                <li className="nav-item nav-link">
                  <NavLink
                    to="/auth"
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
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
