import React from "react";
import Background from "../helpers/Background";
import CustomerFavourites from "./CustomerFavourites";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

const Menu = () => {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <CustomerFavourites />
      </Background>
    </section>
  );
};

export default Menu;
