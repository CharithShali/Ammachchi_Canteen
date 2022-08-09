import React from "react";
import "./Button.css";

const Button = (props) => {

    const { type, text, onClick, ...other } = props

  return (
    <button className="btn flash-slide flash-slide--green" onClick={onClick}  {...other} type={type}>
      {text}
    </button>
  );
};

export default Button;