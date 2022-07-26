import React from "react";
import styled from "./AboutUsContent.module.css";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import whitePlate from "../../images/white-plate.png";
import plate from "../../images/food4.jpg";

const AboutUsContent = () => {
  return (
    <section className={styled["about-us-content"]}>
      <Wrapper>
        <div className={styled.content}>
          <figure className={styled.plate}>
            <img src={whitePlate} alt="A plate of salad with sauce " />
          </figure>

          <article>
            <Heading
              text={
                <>
                  serving you <span> good food</span> fast
                </>
              }
              className="heading-md"
            />
            <p className="paragraph">
              We're always serving quality food fast that is always cooked on-spot. 
              With variety of organic meals, and friendly staff
              preparing for you if you are looking for a great meal.
            </p>
            <p className="paragraph">
              Serving good food fast is our game. You can be sure that your order will be prepared within time.
            </p>
            <figure className={styled.pizza}>
              <img src={plate} alt="food-plate" />
            </figure>{" "}
          </article>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsContent;
