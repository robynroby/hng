import React from "react";
import "./MiniFooter.css";
import mbtoken from "../../static/MiniFooter/mbtoken.svg";
import metamask from "../../static/MiniFooter/metamask.svg";
import opensea from "../../static/MiniFooter/opensea.svg";

function MiniFooter() {
  return (
    <div className="minifooter">
      <div className="container">
       <a href="#"> <img src={mbtoken} alt="" /></a>
      </div>
      <div className="container">
        <a href="#"><img src={metamask} alt="" /></a>
      </div>
      <div className="container">
        <a href="#"><img src={opensea} alt="" /></a>
      </div>
    </div>
  );
}

export default MiniFooter;
