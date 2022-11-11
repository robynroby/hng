import React from "react";
import "./Navbar.css";
import logo from "../../static/logo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="btn"><button>Connect wallet</button></div>
    </div>
  );
}

export default Navbar;
