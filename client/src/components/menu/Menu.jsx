import React, { Component } from "react";
import Background from "../helpers/Background";
import CustomerFavourites from "./CustomerFavourites";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

class Menu extends Component {
  render() {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <CustomerFavourites />
      </Background>
    </section>
  );
};
}

export default Menu;
