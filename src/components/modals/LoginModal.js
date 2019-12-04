import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginModal extends Component {
  state = {
    show: false
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleShow}
        >
          Show
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>Email / Platoo's Username</label>
              <input />
              <button
                type="button"
                className="btn btn-secondary btn-block btn-lg"
                onClick={this.handleClose}
              >
                Log in
              </button>
            </form>
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
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
