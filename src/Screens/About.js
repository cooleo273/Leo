import React from "react";
import Navbar from "../components/Navbar";
import BodyContainer from "../components/BodyContainer";
import img from "../images/_117548721_nfts2 1.png"
import img1 from "../images/monkey-g412399084_1280 1.png"
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <div>
        <div className="circletwo"></div>
      </div>
      <Navbar />
      <BodyContainer>
        <div className="text-container">
          <h4>GET OUR APP</h4>
          <h2>Browse Nfts From Your Smartphone</h2>
          <p>
            Our Krypto app is the easiest way to keep track of your assets when
            you’re on the go.
          </p>
        </div>
        <div className="img-container">
            <img src={img} alt="nft"></img>
        </div>
      </BodyContainer>
      <BodyContainer className="first">
        <div className="img-container">
            <img src={img1} alt="monkey"/>
        </div>
        <div className="text-container">
          <h4>GET OUR APP</h4>
          <h2>Browse Nfts From Your Smartphone</h2>
          <p>
            Our Krypto app is the easiest way to keep track of your assets when
            you’re on the go.
          </p>
        </div>
      </BodyContainer>
      <Footer />
      <div className="radial-gradient-two"></div>
    </div>
  );
}

export default About;
