import React, { Component } from "react";
import "../../../../styles/customFonts/fonts.css";

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
          <h3 className="title-md">Your Choice</h3>
        </div>
        <div style={{}}>
          <p className="paragraph-font">Choose your preferred dish daily</p>
        </div>
        <div>
          <form>
            <select
              style={{
                padding: "10px 25px 10px 25px",
                borderRadius: "25px",
                textAlignLast: "center"
              }}
              className="paragraph-font"
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
