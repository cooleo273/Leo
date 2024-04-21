import React from 'react'
import Button from './Button'
import "../App.css"

function Card(props) {
  return (
    <div className='card-wrapper'>
        <div className='nft-image-wrapper'>
            <img src={props.image} alt='nft'/>
        </div>
        <div className='nft-description-wrapper'>
            <p>{props.nftName}</p>
            <p>{props.nftDescription}</p>
            <div className='creator-wrapper'>
            <div>
                <p>creator</p>
                <p>{props.creator}</p>
            </div>
            <div>
                <p>creator</p>
                <p>{props.currentBid}</p>
            </div>
            </div>
            <Button className="first card">Place Bet</Button>
        </div>
        
    </div>
  )
}

export default Card