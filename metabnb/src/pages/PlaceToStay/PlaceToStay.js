import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './PlaceToStay.css'
import './CardHolder.css'

function PlaceToStay() {
  return (
    <>
    <Navbar />
    <div className="filter">
    <ul>
    <li><a href="">Resturant</a></li>
    <li><a href="">Cottage</a></li>
    <li><a href="">Castle</a></li>
    <li><a href="">Fantast city</a></li>
    <li><a href="">Carbins</a></li>
    <li><a href="">Off-grid</a></li>
    <li><a href="">Farm</a></li>
    <button>Location</button>
    </ul>
    </div>
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
  )
}

export default PlaceToStay