import React from "react";
import { zuri, logo } from "../../assets";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <img className="footer-img" src={zuri} alt="zuri-logo" />
        <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img className="footer-img" src={logo} alt="IaG-logo" />
      </div>
    </footer>
  );
}

export default Footer;
