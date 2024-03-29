import React, { Component } from "react";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/brown.jpg";
import SellerNavbar from "../navbar/SellerNavbar";
import Wrapper from "../helpers/Wrapper";

class Header extends Component {

  render() {
  return (
    <header id="home">
    <Background url={darkGreyBg}>
      <Wrapper>
        <SellerNavbar />

      </Wrapper>
      </Background>
    </header>
  );
  }
};

export default Header;