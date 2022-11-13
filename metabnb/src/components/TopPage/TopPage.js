import React from "react";
import "./TopPage.css";
import image3 from "../../static/image3.png";
import image4 from "../../static/image4.png";
import image5 from "../../static/image5.png";
import image6 from "../../static/image6.png";

function TopPage() {
  return (
    <div className="container">
      <div className="left">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the
          <span> Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search-bar">
          <input  type="text" placeholder="Search for location" />
          <button className="btn-landing">Search</button>
        </div>
      </div>
      <div className="right">
        <img src={image4} alt="page image1" />
        <img src={image3} alt="page image2" />
        <img src={image6} alt="page image3" />
        <img src={image5} alt="page image4" />
      </div>
    </div>
  );
}

export default TopPage;
