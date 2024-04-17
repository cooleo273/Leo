import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <h3>KRYPTO</h3>
      </div>
      <div className="list">
        <a href="/about">About</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
        <a href="/">Buy Nfts</a>
      </div>
    </div>
  );
}

export default Navbar;
