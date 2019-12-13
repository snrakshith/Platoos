import React, { Component } from "./node_modules/react";
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
          marginLeft: "150px"
        }}
      >
        <div>
          <LoginModal
            displayModal={this.state.displayModal}
            hideModal={this.closeModal}
          />
          <button
            className="btn btn-outline-info btn-lg"
            style={{ padding: "2.5px 40px" }}
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
