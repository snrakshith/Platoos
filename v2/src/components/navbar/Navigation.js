import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Auth from "../Auth";

function Navigation() {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand
        href="/"
        style={{
          marginLeft: "50px",
          fontSize: "35px",
          fontFamily: "Nunito",
          textDecoration: "none",
          color: "#463fb5"
        }}
      >
        Platoos
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginLeft: "70px" }}>
          <NavLink
            className="nav-link"
            style={{
              color: "blue"
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="nav-link" style={{ color: "blue" }} to="/about">
            About Us
          </NavLink>
          <NavLink
            className="nav-link"
            style={{ color: "blue" }}
            to="/partners"
          >
            Partner With Us
          </NavLink>
          <NavLink
            to="/pricing"
            className="nav-link"
            style={{
              color: "blue"
            }}
          >
            Pricing
          </NavLink>
        </Nav>
        <span style={{ marginLeft: "300px" }}>
          {/* <span> */}
          <Auth />
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
