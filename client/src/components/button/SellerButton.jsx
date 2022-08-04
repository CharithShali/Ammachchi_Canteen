import React, { useState } from "react";

const SellerButton = (props, Color, Colors) => {

  const [color, setColor] = useState(Color);

  const handleChange = (e) => {
    e.preventDefault();
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  };

  const style = {
    backgroundColor: color
  };

  return (
    <button onClick={handleChange} style={style}>
      {props.children}
    </button>
  );
};

export default SellerButton;