import React from 'react'


function TopCollections(props) {
  return (
    <div>
        <div className="nft-img-wrapper">
            <img src={props.image} alt={props.alt}></img>
            
            <div className="content">
            <img src={props.image1 } alt='verified'/>
              <p>{props.name}</p>
            </div>
          </div>
    </div>
  )
}

export default TopCollections