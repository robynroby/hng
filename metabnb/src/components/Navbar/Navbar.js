import React from "react";
import { useState } from "react";
import "./Navbar.css";
// import Button from "react-bootstrap/Button";
import logo from "../../static/logo.png";
// import Modal from "react-bootstrap/Modal";
import Modal from "./Modal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

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
            <a href="">NFTs</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Connect wallet
        </button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Navbar;
