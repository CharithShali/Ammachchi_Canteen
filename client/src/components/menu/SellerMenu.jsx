import Background from "../helpers/Background";
import React, { Component } from "react";
import Seller from "./seller";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

class SellerMenu extends Component {

  render() {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <Seller />
      </Background>
    </section>
  );
  }
};

export default SellerMenu;