import React from "react";
import Background from "../helpers/Background";
import DemoFavourites from "./DemoFavourites";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

const DemoMenu = () => {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <DemoFavourites />
      </Background>
    </section>
  );
};

export default DemoMenu;