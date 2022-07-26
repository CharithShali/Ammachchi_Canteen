import React from "react";
import styled from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Wrapper from "../helpers/Wrapper";
import Button from "../button/Button";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className={styled.header} id="home">
      <Wrapper>
        <Navbar />

        <article className={styled["header-intro"]}>
          <h1>
            <span> AMMACHI</span> Unavagam 
          </h1>
          <p className="paragraph">
            If you are ever in the mood for some organic vegetarian food, Ammachi is the
            place for you. We offer a variety mouth-watering meals that are sure
            to please even the pickiest of eaters. Come on! Lets checkout the available foods and place order NOW!
          </p>

          <Button>
            <Link to="#menu" smooth>
              Order Foods
            </Link>
          </Button>
        </article>
      </Wrapper>
    </header>
  );
};

export default Header;
