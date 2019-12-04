import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class SignupOrLogin extends Component {
  state = {};
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Sign up or log in to Platoo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <button>Continue with Google</button>
              </div>
              <div>
                <h4>Or use your email address</h4>
              </div>
              <div>
                <div>
                  <button>Log in</button>
                </div>
                <div>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <p>
                By logging in, you agree to Platoo's
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

export default SignupOrLogin;
