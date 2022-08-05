import React, { useState } from "react";
// import { foods } from "../menu/foods";

const SellerButton = (props) => {

  const [Active, setActive] = useState(false);

  const handleClick = () => {
    setActive(current => !current);
  };


  return (
    <button 
      style={{
        backgroundColor: Active ? 'green' : 'salmon',
        color: Active ? 'white' : '',
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        }}
      onClick={handleClick}
    >
      {Active ? 'Available' : 'Not Available'}
    </button>
  );
};

export default SellerButton;