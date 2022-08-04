import React from "react";
import Login from "../login/Login";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";

const LoginPage = () => {
    return (
      <section id="login">
      <Background url={darkGreyBg}>
        <Login />   
      </Background>
      </section>
    );
  };

export default LoginPage;