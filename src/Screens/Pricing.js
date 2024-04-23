import React from "react";
import Navbar from "../components/Navbar";
import img from "../images/0_6gjr_gO6aFbwlXYF.jpg";
import img1 from "../images/1_7orM8WFU744TGVcA8piOxw.jpg";
import img2 from "../images/1_h6Nd2i8wOpCaGqiOZCY-aA.png";
import img3 from "../images/how-nfts-work.webp";
import img4 from "../images/werewolf_0906202214345963175a93e32c7.webp";
import img5 from "../images/turn-digital-arti-into-nft.webp";
import img6 from "../images/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1.webp";
import img7 from "../images/monkey-g412399084_1280.webp";
import img8 from "../images/metaverse-ai-generated-1775.jpg";
import img9 from "../images/acaf98d.png";
import img10 from "../images/pngwing.com (8).png";
import TopCollections from "../components/topCollections";

import Card from "../components/Card";
import About from "./About";
function Pricing() {
  return (
    <div>
      <div>
        <div className="circletwo"></div>
      </div>
      <Navbar navlistone="Home" path1 ="/" navlisttwo="About" path2="/about" navlistthree="contact" path3="/about" navlistfour="Buy NFTs" path4="/Buynfts"/>
      <div className="top-collections-wrapper">
        <h3>Top Collections</h3>
        <div className="nft-pics">
          <TopCollections
            image={img}
            image1={img10}
            name="Love"
            alt="Dark Love Nft"
          />
          <TopCollections image={img1} image1={img10} name="Love" />
          <TopCollections image={img2} image1={img10} name="Love" />
          <TopCollections image={img3} image1={img10} name="Love" />
          <TopCollections image={img4} image1={img10} name="Love" />
          <TopCollections image={img5} image1={img10} name="Love" />
          <TopCollections image={img6} image1={img10} name="Love" />
          <TopCollections image={img7} image1={img10} name="Love" />
          <TopCollections image={img8} image1={img10} name="Love" />
          <TopCollections image={img9} image1={img10} name="Love" />
        </div>
      </div>
      <div className="nft-cards">
        <h3>NFT CARDS</h3>
      <div className="cards">
        <div className="card-one">
        <Card
          image={img}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img1}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img2}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img4}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        </div>
        <div className="card-one">
        <Card
          image={img}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img1}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img2}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img4}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        </div>
        <div className="card-one">
        <Card
          image={img}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img1}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img2}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        <Card
          image={img4}
          nftName="Astronaut"
          nftDescription="Astronaut, designation, derived from the 
          Greek words for "
          creator="undead  space apes"
          currentBid="$25"
        />
        </div>
      </div>
      </div>
    </div>

  );
}

export default Pricing;
