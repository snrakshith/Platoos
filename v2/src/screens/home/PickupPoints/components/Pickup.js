import React, { Component } from "react";
import classNames from "classnames";
import "../styles/Pickup.css";

class Pickup extends Component {
  state = {
    clicked: false
  };
  onClickChangeStyles = () => {
    this.setState({
      clicked: true
    });
  };

  btnClass = () => {
    if (!this.state.clicked === false) {
      return "selected-btn-styles";
    } else {
      return "btn btn-outline-secondary  unselected-btn-styles";
    }
  };
  // let btnClass = classNames({
  //   "selected-btn-styles": this.state.clicked,
  //   "btn btn-outline-secondary  unselected-btn-styles": !this.state.clicked
  // });

  render() {
    // console.log(this.state.clicked);

    if (this.props === null) {
      console.log("loading");
    } else {
      // console.log(this.props);
      // console.log(this.props.addressList);
      // console.log(this.props.setSelectedPoint);
      // console.log(this.props.selectedPoint);
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3 className="pickup-title">Pickup Points</h3>
          <p className="pickup-caption">Your dishes will be delivered here</p>
        </div>
        <div
          className="btn-toolbar"
          role="toolbar"
          ariaLabel="group"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px"
            // width: "100%"
          }}
        >
          {/* <div className="btn-group" role="group" ariaLabel="groups"> */}
          {this.props.addressList &&
            this.props.addressList.map(point => {
              return (
                <button
                  type="button"
                  className={`btn-text ${() => this.btnClass}`}
                  onClick={() => {
                    this.props.setSelectedPoint(point);
                    this.onClickChangeStyles;
                    // this.zoomEffect;
                  }}
                >
                  {point.name}
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Pickup;
