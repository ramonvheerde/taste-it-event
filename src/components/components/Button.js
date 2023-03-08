import React from "react";

function Button({ classname, type, title, onClick }) {
  return (
    <button className={classname} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
