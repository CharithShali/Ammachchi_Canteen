import React, { useState } from "react";
import styled from "./CustomerFavourites.module.css";
import Controls from "../../components/button/Controls";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import Popup from "../../components/popup/Popup";
import Order from "../popup/Order";
import { favorites } from "./favourites";

const CustomerFavourites = () => {

  const [recordForEdit, setRecordForEdit] = useState(null)
  const [openPopup, setOpenPopup] = useState(false)
  const [openSPopup, setOpenSPopup] = useState(false)

  const addValue = () => {
    setOpenSPopup(true)
    setOpenPopup(false)
}

  const openInPopup = id => {
    setRecordForEdit(id)
    setOpenPopup(true)
 }

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
            <Controls.OrderButton
                    text="Order"
                    onClick={() => { setOpenPopup(true); openInPopup(item.id); }}
              />
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
      <Popup
            title="Order"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
      >
        <Order
              recordForEdit={recordForEdit}
              addValue={addValue} 
        />
      </Popup>
      <Popup
          title = "Your order has been placed successfully"
          openPopup={openSPopup}
          setOpenPopup={setOpenSPopup}
      ></Popup>
    </section>
  );
};

export default CustomerFavourites;
