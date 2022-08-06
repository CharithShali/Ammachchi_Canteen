import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../contact/Footer";
import Header from "../header/DemoHeader";
import Menu from "../menu/DemoMenu";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;