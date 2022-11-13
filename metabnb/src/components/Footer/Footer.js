import React from "react";
import "./Footer.css";
import logo from "../../static/Footer/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="social-icons">
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="copyright">&copy; 2022 Metabnb</div>
      </div>
      <div className="container">
        <div className="heading">
          <h1>Community</h1>
        </div>
        <div className="links">
          <a href="">NFT</a>
          <a href="">Tokens</a>
          <a href="">Landlords</a>
          <a href="">Discord</a>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h1>Places</h1>
        </div>
        <div className="links">
          <a href="">Castle</a>
          <a href="">Farm</a>
          <a href="">Beach</a>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h1>About us</h1>
        </div>
        <div className="links">
          <a href="">Roadmap</a>
          <a href="">Creators</a>
          <a href="">Career</a>
          <a href="">Contact us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
