import React, { Component } from "react";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/brown.jpg";
import SellerNavbar from "../navbar/SellerNavbar";
import Wrapper from "../helpers/Wrapper";
// import Button from "../button/Button";
// import { HashLink as Link } from "react-router-hash-link";

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