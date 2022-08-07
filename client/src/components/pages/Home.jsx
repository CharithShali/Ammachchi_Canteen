import React from "react";
import About from "../about/About";
import Footer from "../contact/DemoFooter";
import Header from "../header/DemoHeader";
import Menu from "../menu/DemoMenu";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <Menu />
      <About />
      <Footer />
    </section>
  );
};

export default Home;