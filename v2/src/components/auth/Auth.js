import React, { Component } from "react";
import LoginModal from "../modals/LoginModal";

class Auth extends Component {
  state = {
    displayModal: false
  };
  showModal = () => {
    this.setState({ displayModal: true });
  };
  closeModal = () => {
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "0px"
        }}
      >
        <div>
          <LoginModal
            displayModal={this.state.displayModal}
            hideModal={this.closeModal}
          />
          <button
            className="btn btn-outline-info "
            style={{
              padding: "5px 55px",
              boxShadow: "0px 0px 5px 0px grey"
            }}
            onClick={this.showModal}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
