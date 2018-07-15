import React from "react";
import "./Navbar.css";
import "./Login.css";
import { GoogleLogin } from "react-google-login";
// import { Report1 } from "SwitchBtn";


export const Nav = ({ children }) => {
  return (
    // <Nav>
    <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">
      Reporting Platform
    </a>
    {/* <List> */}
      {/* <ul 
      className="list-group">
        {children}
      </ul> */}
      {/* </List> */}
      <GoogleLogin
          className="googleButton" />
      {/* <Report1
          className="switchreportButton" /> */}
          </nav>
  );
};


export default Nav;



        