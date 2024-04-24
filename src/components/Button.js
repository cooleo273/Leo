import React from "react";


function Button({ type, variant, className, id, onClick, children, img }) {

  
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
