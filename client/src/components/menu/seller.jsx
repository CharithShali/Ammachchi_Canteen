import React, { useState } from "react";
import styled from "./CustomerFavourites.module.css";
// import Button from "../button/Button";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import { foods } from "./foods";

const Seller = () => {
  const text = (
    <>
      All <span>Foods</span>
    </>
  );

  const [Active, setActive] = useState(true);

  const handleClick = () => {
    setActive(current => !current);
  };

  const faves = foods.map((item) => {
    return (
      <article key={item.id} className={styled.faves}>
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>

        <div>
          <p className={styled.name}> {item.name}</p>
          <div>
            <p className={styled.price}>Rs {item.price}</p>
            <button
              style={{
                backgroundColor: Active ? 'green' : 'salmon',
                color: Active ? 'white' : '',
              }}
              onClick={handleClick}
            >
              {Active ? 'Available' : 'Not Available'}
            </button>
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
           You can select available meals.
          </p>
        </article>

        <section className={styled["faves-container"]}>{faves}</section>
      </Wrapper>
    </section>
  );
};

export default Seller;