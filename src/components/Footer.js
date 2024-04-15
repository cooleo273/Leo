import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="footer">
      <div className="krypto">
        <p>Krypto</p>
      </div>
      <div className="lists">
        <div className="list-one">
          <p>krypto</p>
          <li>Home</li>
          <li>About</li>
          <li>Buy Nfts</li>
          <li>Sell Nfts</li>
        </div>
        <div className="list-one">
          <p>Market</p>
          <li>Browse NFTs</li>
          <li>Buy NFTs</li>
          <li>Sell NFTs</li>
        </div>
        <div className="list-one">
          <p>Contact</p>
          <li>Email</li>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </div>
        <div className="list-two">
          <h5>Join our new settlers</h5>
          <input type="email" placeholder="Email Adress"></input>
          <Button className="fourth">submit</Button>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
