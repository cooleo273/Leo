import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <h3>KRYPTO</h3>
      </div>
      <div className="list">
        <a href={props.path1}>{props.navlistone}</a>
        <a href={props.path2}>{props.navlisttwo}</a>
        <a href={props.path3}>{props.navlistthree}</a>
        <a href={props.path4}>{props.navlistfour}</a>
      </div>
    </div>
  );
}

export default Navbar;
