import React from "react";

function BodyContainer({ type, variant, className, id, onClick, children }) {
  return (
    <div>
      <div
        type={type ? type : "text"}
        variant={variant}
        className={className ? `text ${className}` : "text"}
        id={id}
      >
        {children}
      </div>
    </div>
  );
}

export default BodyContainer;
