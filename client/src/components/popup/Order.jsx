import React, { useEffect } from 'react'
import Controls from "../button/Controls";
import { favorites } from "../menu/favourites";
import styled from "../menu/CustomerFavourites.module.css";
import { useOrder, Form } from "./useOrder";

const initialFValues = {
  quantity: 0,
  
}

const Order = (props) => {
    const { addValue, recordForEdit } = props;

    const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('quantity' in fieldValues)
          temp.quantity = fieldValues.quantity ? "" : "This field is required."
      
      setErrors({
          ...temp
      })

      if (fieldValues === values)
          return Object.values(temp).every(x => x === "")
  }

    const {
      values,
      // setValues,
      errors,
      setErrors,
      handleInputChange,
  } = useOrder(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
          addValue();
      }
       
    }

    useEffect(() => {
    }, [recordForEdit])

    const food = favorites
    .filter((item) => item.id === recordForEdit)
    .map((item) => {
      return (
        <article key={item.id} className={styled.faves}>
          <figure>
            <img src={item.url} alt={item.name} />
          </figure>
          <div>
          <p className={styled.name}> {item.name}</p>
          <div>
            <p className={styled.price}>Rs {item.price}</p>
          </div>
          <div>
          <p className={styled.name}> Quantity</p>
          <input type="number" className={styled.input} id="quantity" name="quantity" value={values.quantity} onChange={handleInputChange} min={0}>
          </input>
          </div>
        </div>
        </article>
      );
    });

    return (
      <Form onSubmit={handleSubmit}>
          <section >{food}
          <div>
              <Controls.OrderButton
                type="submit"
                text="Submit" />
          </div>
          </section> 
          
      </Form>
    )
};

export default Order;

