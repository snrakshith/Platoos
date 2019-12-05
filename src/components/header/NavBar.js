import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import LoginModal from "../modals/LoginModal";
import { Button } from "react-bootstrap";

class NavBar extends Component {
  state = {
    show: false
  };
  render() {
    let handleShow = () => {
      this.setState({ show: true });
    };
    let handleClose = () => {
      this.setState({ show: false });
    };
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
              marginLeft: "450px"
            }}
          >
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
                <NavLink to="/about" className="nav-link">
                  ABOUT US
                </NavLink>
              </li>
              <span>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    <LoginModal show={handleShow} hide={handleClose} />
                    <Button
                      onClick={() => this.setState({ handleShow: false })}
                    >
                      Log in
                    </Button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Create an Account
                  </NavLink>
                </li>
              </span>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
