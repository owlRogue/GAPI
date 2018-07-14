import React from "react";
import "./Navbar.css";
import "./SignInBtn.css";
// import { List, ListItem } from "../../components/List";
// import API from "../../utils/API";
// import ___ from "../../utils/OAuth";
// import Sheets from "../../pages/Sheets/Sheets";
import { GoogleLogin } from "../../../../node_modules/react-google-login";



// console.log(sheet.title)
const Nav = () => (
  <nav className="navbar navbar-dark">
    <a className="navbar-brand" href="/">
      Reporting Platform
    </a>

    <GoogleLogin
        className="googleButton" />
    
        
        


  </nav>
);

export default Nav;


