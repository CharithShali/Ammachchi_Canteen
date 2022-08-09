import React, { Component } from 'react'
import Controls from "../button/Controls";
import { foods } from "../menu/foods";
import styled from "../menu/CustomerFavourites.module.css";
import { Form } from "./useOrder";
import axios from 'axios';


class Order extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      addValue: props.addValue,
      recordForEdit: props.recordForEdit,
      quantity: 1,
      status: 'Pending',

    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

    handleSubmit(e) {
      e.preventDefault()
      this.state.addValue();   

      const customer_id = window.location.pathname.split('/')[2];
      const food_id = this.state.recordForEdit;
      const quantity = this.state.quantity;
      const status = this.state.status;
    
      const addorder = {customer_id,food_id,quantity,status}
      
    
        axios.post('http://localhost:3001/api/orders/add', addorder)
          .then(res => {
            if (res.status === 200) {
              
              this.setState({
                quantity: 1,
      
              });
            }
          })
    }

    handleInputChange(e){
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  render() {

    // const initialFValues = {
    //   quantity: 0,
      
    // }

  //   const validate = (fieldValues = values) => {
  //     let temp = { ...errors }
  //     if ('quantity' in fieldValues)
  //         temp.quantity = fieldValues.quantity ? "" : "This field is required."
      
  //     setErrors({
  //         ...temp
  //     })

  //     if (fieldValues === values)
  //         return Object.values(temp).every(x => x === "")
  // }

  //   const {
  //     values,
  //     errors,
  //     setErrors,
  //     handleInputChange,
  // } = useOrder(initialFValues, true, validate);

    const food = foods
    .filter((item) => item.id === this.state.recordForEdit)
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
          <input type="number" className={styled.input} id="quantity" name="quantity" value={this.state.quantity} 
          onChange={this.handleInputChange} min={1}>
          </input>
          </div>
        </div>
        </article>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
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
}

export default Order;

