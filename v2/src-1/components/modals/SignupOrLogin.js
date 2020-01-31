import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
class SignupOrLogin extends Component {
  state = {};
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up or log in to Platoo's</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                title="Log in with Google"
                style={{
                  display: "flex",
                  border: "0.5px solid black",
                  height: "65px",
                  margin: "10px 15px 0px 15px"
                }}
              >
                <a
                  href=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <span
                    style={{
                      marginLeft: "25px"
                    }}
                  >
                    <img src={require("./images/google.png")} height="35px" />
                  </span>
                  <span
                    style={{
                      color: "#89959B",
                      fontSize: "18px",
                      marginLeft: "75px"
                    }}
                  >
                    Continue with Google
                  </span>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "15px"
                }}
              >
                <h5>Or use your email address</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px"
                }}
              >
                <div style={{}}>
                  <button
                    style={{
                      width: "175px",
                      height: "50px"
                    }}
                    type="submit"
                    className="btn btn-danger btn-lg active"
                  >
                    Log in
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      marginLeft: "15px",
                      width: "175px",
                      height: "50px"
                    }}
                    type="submit"
                    className="btn btn-danger btn-lg"
                  >
                    Sign up
                  </button>
                </div>
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

export default SignupOrLogin;
