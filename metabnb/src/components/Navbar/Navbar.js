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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/placetostay">Place to stay</a>
          </li>
          <li>
            <a href="#">NFTs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button>Connect wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
// modal implimentation