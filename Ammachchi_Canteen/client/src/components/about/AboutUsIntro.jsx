import React from "react";
import styled from "./AboutUsIntro.module.css";
import squarePlate from "../../images/plate.png";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";

const AboutUsIntro = () => {
  return (
    <section className={styled["about-us-intro"]}>
      <Wrapper>
        <div className={styled["intro-content"]}>
          <figure>
            <img
              src={squarePlate}
              alt="Black plate"
            />
          </figure>
          <article>
            <Heading
              text={
                <>
                  about <span>us</span>
                </>
              }
              className="heading-md"
            />
            <p className="paragraph">
            Ammachi Unavagam, a government-run chain of low-cost vegetarian organic eateries in northern Sri Lanka, 
            gives women a platform for financial and social independence.
            </p>

            <p className="paragraph">
              You can always expect to find fresh, made-from-scratch dishes that
              will tantalize your taste buds. Whether it's a quick bite or a
              leisurely meal, The Good Food is the perfect spot for you.
            </p>
          </article>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsIntro;
