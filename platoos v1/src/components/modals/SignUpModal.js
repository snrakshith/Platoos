import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class SignUpModal extends Component {
  state = {};
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title> Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="name" id="label">
                  Full Name
                </label>
                <input type="text" id="name" required />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px"
                }}
              >
                <label htmlFor="email" id="label">
                  Email Address
                </label>
                <input type="email" id="email" required />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px"
                }}
              >
                <div>
                  <input
                    id="policy"
                    type="checkbox"
                    required
                    style={{ margin: "5px" }}
                  />
                </div>
                <div>
                  <p id="policy" style={{ padding: "0% 2%", fontSize: "15px" }}>
                    I agree to Platoo's <b>Terms of Service </b>,
                    <b>Privacy Policy</b> and <b>Content Policies</b>
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-danger btn-lg btn-block"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ margin: "0px 20px" }}>
              <p style={{ color: "#89959B", fontSize: "14px" }}>
                By logging in, you agree to Platoo's
                <a href=""> Terms of Service </a> ,<a href=""> Cookie Policy</a>
                ,<a href=""> Privacy Policy</a> and
                <a href=""> Content Policies</a>.
              </p>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
