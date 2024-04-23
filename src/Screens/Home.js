import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

import img from "../images/Other 07.png";
import img1 from "../images/image 5.png";
import img2 from "../images/image 6.png";

import img4 from "../images/image 8.png";
import img5 from "../images/Other 18.png";
import img6 from "../images/Other 17.png";
import img7 from "../images/Screen Shot 2022-05-09 at 10.28.png";

import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


function Home() {

let navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="circletwo"></div>
      </div>
      <Navbar navlistone="About" path1="/about" navlisttwo="Pricing" path2 ="/pricing" navlistthree="contact" path3="/contact" navlistfour="Buy NFTs" path4="/Buynfts"/>
      <div className="Hero-section">
        <div className="text-hero-section">
          <h1>Discover And Collect Rare Nfts</h1>
          <p>
            The most secure market place for buying and selling unique crypto
            assets.
          </p>
          <div className="buttons">
            <Button className="first">Buy Nfts</Button>
            <Button className="second">Sell Nfts</Button>
          </div>
        </div>
        <div className="image-hero-section ">
          <img src={img} alt="hreo" />
        </div>
      </div>
      <div className="logo-container">
        <h4>FEATURED ON</h4>
        <div className="logos">
          <img src={img1} alt="forbes" />
          <img src={img2} alt="fast company" />
          <img src={img4} alt="PH" />
        </div>
      </div>
      <BodyContainer className="first">
        <div className="img-container ">
          <img src={img5} alt="Analytics" />
        </div>
        <div className="text-container">
          <h4>ANALYTICS</h4>
          <h2>Built-In Analytics To Track Your Nfts</h2>
          <p>
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <Button type='button' className="first" onClick={()=>
            navigate('/pricing')
          }>VIEW OUR PRINCING</Button>
        </div>
      </BodyContainer>
      <BodyContainer>
        <div className="text-container second">
          <h4>GET OUR APP</h4>
          <h2>Browse Nfts From Your Smartphone</h2>
          <p>
            Our Krypto app is the easiest way to keep track of your assets when
            you’re on the go.
          </p>
          <Button className="first"> DOWNLOAD ON IOS</Button>
        </div>
        <div className="img-container">
          <img src={img6} alt="Analytics" />
        </div>
      </BodyContainer>
      <div className="testimony">
        <div className="testimony-text">
          <h4>TESTIMONY</h4>
          <h2>Read What Others Have To Say</h2>
        </div>
        <div className="testimony-container">
          <div className="testimony-people">
            <div className="testimonials">
              <div className="olivia">
                <img className="girl" src={img7} alt="girl" />
                <h5>OLIVIA COLE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                </p>
              </div>
            </div>
          </div>
          <div className="testimony-people">
            <div className="testimonials">
              <div className="olivia">
                <img className="girl" src={img7} alt="girl" />
                <h5>OLIVIA COLE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                </p>
              </div>
            </div>
          </div>
          <div className="testimony-people">
            <div className="testimonials">
              <div className="olivia">
                <img className="girl" src={img7} alt="girl" />
                <h5>OLIVIA COLE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="radial-gradient">
        <p>ARE YOU READY?</p>
        <h2>BE PART OF THE NEXT BIG THING</h2>
        <Button className="third">GET STARTED</Button>
      </div>
      <Footer />
      <div className="radial-gradient-two"></div>
    </div>
  );
}

export default Home;
