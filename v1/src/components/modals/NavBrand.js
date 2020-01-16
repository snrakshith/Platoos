import React, { Component } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import SignupOrLogin from "./SignupOrLogin";

class NavBrand extends Component {
  state = {
    show: false
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  // componentDidMount() {}
  // componentDidUpdate() {}
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
          <LoginModal show={this.state.show} hide={this.handleClose} />
          <button
            className="btn btn-outline-info btn-lg"
            style={{ padding: "2.5px 25px" }}
            onClick={this.handleShow}
          >
            Log in
          </button>
        </div>

        {/* <div>
          <SignUpModal show={this.state.show} hide={this.handleClose} />
          <button
            style={{ width: "200px", padding: "5px", marginLeft: "10px" }}
            onClick={this.handleShow}
          >
            Create an Account
          </button>
        </div> */}
        <div>
          <SignupOrLogin show={this.state.show} hide={this.handleClose} />
          <button
            className="btn btn-outline-secondary btn-lg"
            style={{ padding: "2.5px 25px", marginLeft: "10px" }}
            onClick={this.handleShow}
          >
            Create an Account
          </button>
        </div>
      </div>
    );
  }
}

export default NavBrand;
