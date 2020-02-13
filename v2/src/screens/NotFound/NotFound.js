import React from "react";
import "./NotFound.css";
import "bootstrap/dist/css/bootstrap.css";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: "10%"
      }}
    >
      <h2 className="NotFound-title-lg">Oops!</h2>
      <h5 className="NotFound-title-md">404 - PAGE NOT FOUND</h5>
      <div>
        <p className="NotFound-paragraph-font">
          The page you are looking for might have been removed
          <br />
          had its name changed or is temporarily unavailable.
        </p>
      </div>
      <button type="button" className="NotFound-btn">
        GO TO HOME PAGE
      </button>
    </div>
  );
}

export default NotFound;
