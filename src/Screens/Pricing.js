import React from 'react'
import Navbar from '../components/Navbar'
import img from "../images/0_6gjr_gO6aFbwlXYF.jpg"
import img1 from "../images/1_7orM8WFU744TGVcA8piOxw.jpg"
import img2 from "../images/1_h6Nd2i8wOpCaGqiOZCY-aA.png"
import img3 from "../images/how-nfts-work.webp"
import img4 from "../images/werewolf_0906202214345963175a93e32c7.webp"
import img5 from "../images/turn-digital-arti-into-nft.webp"
import img6 from "../images/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1.webp"
import img7 from "../images/monkey-g412399084_1280.webp"
import img8 from "../images/metaverse-ai-generated-1775.jpg"
import img9 from "../images/acaf98d.png"


function Pricing() {
  return (
    <div>
        <div>
        <div className="circletwo"></div>
      </div>
      <Navbar/>
      <div className='top-collections-wrapper'>
        <div className='nft-pics'>
          <div className='nft-img-wrapper'>
          <img src={img} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img1} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img2} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img3} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img4} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img5} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img6} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img7} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img8} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
          <div className='nft-img-wrapper'>
          <img src={img9} alt='nft-img'></img>
          <p>Dark Lion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing