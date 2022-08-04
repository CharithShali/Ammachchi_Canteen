import React from 'react'
import "./Button.css";
import { Button as MuiButton } from "@material-ui/core";

const OrderButton = (props) => {

  const { text, size, color, variant, onClick, ...other } = props

  return (
    <MuiButton
            variant={variant || "contained"}
            size={size || "small"}
            color={color || "secondary"}
            onClick={onClick}
            {...other}
            >
            {text}
    </MuiButton>
  );
};

export default OrderButton;