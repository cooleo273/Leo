import React from "react";
import { useNavigate } from "react-router";

function Button({ type, variant, className, id, onClick, children, img }) {

  let navigate = useNavigate();
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      img={img}
      onClick={onClick}
    >

      {children}
    </button>
  );
}

export default Button;
