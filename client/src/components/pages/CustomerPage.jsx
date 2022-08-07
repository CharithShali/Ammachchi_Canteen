import React, { Component } from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../contact/Footer";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Check from "../tables/CheckOrder";

class Customer extends Component {

  render() {
  return (
    <section id="home">
      <Header />
      <Menu />
      <Check />
      <About />
      <Contact />
      <Footer />
    </section>
  );
  }
};

export default Customer;