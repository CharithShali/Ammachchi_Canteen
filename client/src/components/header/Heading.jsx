import React from "react";
import styled from "./Heading.module.css";

const Heading = (props) => {
  return (
    <h1 style={{paddingTop: '10px'}} className={`${styled[`${props.className}`]} ${styled.heading}`}>
      {props.text}
    </h1>
  );
};

export default Heading;
