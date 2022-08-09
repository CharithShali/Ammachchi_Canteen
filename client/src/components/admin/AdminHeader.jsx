import React, { Component } from "react";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/brown.jpg";
import AdminNavbar from "../navbar/AdminNavbar";
import Wrapper from "../helpers/Wrapper";

class Header extends Component {

  render() {
  return (
    <header id="home">
    <Background url={darkGreyBg}>
      <Wrapper>
        <AdminNavbar />

      </Wrapper>
      </Background>
    </header>
  );
  }
};

export default Header;