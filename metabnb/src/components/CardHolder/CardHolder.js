import React from "react";
import "./CardHolder.css";
import card1 from "../../static/cards/card1.png";
import card2 from "../../static/cards/card2.png";
import card3 from "../../static/cards/card3.png";
import card4 from "../../static/cards/card4.png";
import card5 from "../../static/cards/card5.png";
import card6 from "../../static/cards/card6.png";
import card7 from "../../static/cards/card7.png";
import card8 from "../../static/cards/card8.png";

function CardHolder() {
  return (
    <>
      <h1>Inspiration for your next adventure</h1>
      <div className="card-holder">
        <div className="card">
          <div className="upper">
            <img src={card1} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card2} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card3} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card4} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card5} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card6} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card7} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <img src={card8} alt="" />
          </div>
          <div className="lower">
            <div className="left">
              <h5>Desert king</h5>
              <p>2345km away</p>
            </div>
            <div className="right">
              <h4>1MBT per night</h4>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHolder;
