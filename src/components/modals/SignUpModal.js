import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUpModal extends Component {
  state = {};
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title> Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Full Name</label>
                <input type="text" required />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" required />
              </div>
              <div>
                <input type="checkbox" required />
                <p>
                  I agree to Platoo's Terms of Service, Privacy Policy and
                  Content Policies
                </p>
              </div>

              <div>
                <button>Register</button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <p>
                By creating an account, you agree to Platoo's
                <a href="">Terms of Service</a>,<a href="">Cookie Policy</a>,
                <a href="">Privacy Policy </a>,and
                <a href="">Content Policies</a>.
              </p>
            </div>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SignUpModal;
