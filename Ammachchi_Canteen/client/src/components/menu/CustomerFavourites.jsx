import React from "react";
import styled from "./CustomerFavourites.module.css";
import Button from "../button/Button";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import { favorites } from "./favourites";

const CustomerFavourites = () => {
  const text = (
    <>
      Available <span>Foods</span>
    </>
  );

  const faves = favorites.map((item) => {
    return (
      <article key={item.id} className={styled.faves}>
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>

        <div>
          <p className={styled.name}> {item.name}</p>

          <div>
            <p className={styled.price}>Rs {item.price}</p>
            <Button>order</Button>
          </div>
        </div>
      </article>
    );
  });
  return (
    <section className={styled.favourites}>
      <Wrapper>
        <article className={styled.intro}>
          <Heading text={text} className="heading-md" />
          <p className="paragraph">
            Here are the meals currently available in Ammachi. Order some and enjoy the meals.
          </p>
        </article>

        <section className={styled["faves-container"]}>{faves}</section>
      </Wrapper>
    </section>
  );
};

export default CustomerFavourites;
