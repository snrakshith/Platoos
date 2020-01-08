import React, { Component } from "react";

class Serve extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          type="button"
          // className="btn btn-outline-secondary"
          style={{
            // marginBottom: "20px",
            color: "white",
            backgroundColor: "rgb(91, 47, 173)",
            padding: "10px",
            borderRadius: "50px",
            width: "300px"
          }}
        >
          FOOD WE SERVE
        </button>
      </div>
    );
  }
}

export default Serve;
