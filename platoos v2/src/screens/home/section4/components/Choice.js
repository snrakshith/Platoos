import React, { Component } from "react";

class Choice extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <h3>Your Choice</h3>
        </div>
        <div>
          <p>Choose your preferred dish daily</p>
        </div>
        <div>
          <form>
            <select
              style={{
                padding: "10px 25px 10px 25px",
                borderRadius: "25px",
                textAlignLast: "center"
              }}
            >
              <option>Near Reva University, Kattigenahalli</option>
              <br />
              <option>Near Manyatha, Hennur</option>
              <option>Near Xyz, Abcd</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Choice;