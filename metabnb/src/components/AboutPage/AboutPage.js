import React from "react";
import "./AboutPage.css";
import image7 from "../../static/AboutPage/image7.png";
import image8 from "../../static/AboutPage/image8.png";
import image9 from "../../static/AboutPage/image9.png";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="left">
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="about-btn">Learn more</button>
      </div>
      <div className="right">
        <img src={image9} alt="" />
        <img src={image8} alt="" />
        <img src={image7} alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
