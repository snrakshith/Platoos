import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class LoginModal extends Component {
  // state = {
  //   show: false
  // };
  // handleShow = () => {
  //   this.setState({ show: true });
  // };
  // handleClose = () => {
  //   this.setState({ show: false });
  // };
  render() {
    return (
      <div>
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleShow}
        >
          Log in
        </button> */}

        <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email" id="label">
                  Platoo's Email Id
                </label>
                <input type="email" id="email" required />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="btn btn-danger btn-block btn-lg"
                  onClick={() => this.handleClose}
                >
                  Log in
                </button>
              </div>
            </form>
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

export default LoginModal;
