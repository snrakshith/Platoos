import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import MenuList from "./MenuList";
import Plans from "./Plans";
import PickupPoints from "./PickupPoints";

// import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100%",
          flexDirection: "row",
          // backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          margin: "0% 6%"
        }}
      >
        <main>
          <div style={{ marginTop: "5%" }}>
            <Header />
          </div>
          <div style={{ marginTop: "5%" }}>
            <Banner />
          </div>
          <div style={{ marginTop: "10%" }}>
            <MenuList />
          </div>
          <div style={{ marginTop: "10%" }}>
            <Plans />
          </div>
          <div style={{ margin: "10% 0% 10% 0%" }}>
            <PickupPoints />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
