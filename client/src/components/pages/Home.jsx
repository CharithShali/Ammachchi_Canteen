import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../contact/Footer";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Check from "../tables/CheckOrder";

const Home = () => {
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
};

export default Home;