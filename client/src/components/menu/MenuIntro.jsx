import React, { Component } from "react";
import styled from "./MenuIntro.module.css";
// import wings from "../../images/food.jpeg";

class MenuIntro extends Component {
  render() {
  return (
    <section className={styled["menu-intro"]}>
      <figure>
        {/* <img
          src={wings}
          alt="Hot wings created by timolina - www.freepik.com"
        /> */}
      </figure>
    </section>
  );
  }
};

export default MenuIntro;
