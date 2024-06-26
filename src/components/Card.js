import React from "react";
import Button from "./Button";
import "../App.css";

import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Card(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="card-wrapper">
      <div className="nft-image-wrapper">
        <img src={props.image} alt="nft" />
      </div>
      <div className="nft-description-wrapper">
        <p>{props.nftName}</p>
        <p className="description">{props.nftDescription}</p>
        <div className="creator-wrapper">
          <div>
            <p className="description">creator</p>
            <p>{props.creator}</p>
          </div>
          <div>
            <p className="description">price</p>
            <p>{props.currentBid}</p>
          </div>
        </div>
        <Button className="first card" type="button" onClick={openModal}>
          Place Bet
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>

          <div className="modal-content-wrapper">
            <img src={props.image} alt="modal-nft"></img>
            <div>
              <div className="nft-description-wrapper modal">
                <p>{props.nftName}</p>
                <p className="description">{props.nftDescription}</p>
                <div className="creator-wrapper">
                  <div>
                    <p className="description">creator</p>
                    <p>{props.creator}</p>
                  </div>
                  <div>
                    <p className="description">price</p>
                    <p>{props.currentBid}</p>
                  </div>
                </div>
              </div> 
              <div className="highest-bid">
                <span>HIGHEST BID BY<p>leul teferi</p></span>
                <p>16ETH or <span>2456$</span></p>
            </div>
            </div>
           
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Card;
