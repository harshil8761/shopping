import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {


  return (
    <div style={{ textAlign: "center", margin: "200px auto" }}>
      <h1>Page Not Found</h1>
      <NavLink to="/">
        <button className="add-btn">Back To Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
