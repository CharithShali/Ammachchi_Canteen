import React, { Component } from "react";
import styled from "./CustomerFavourites.module.css";
import Button from "../../components/button/Button";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
// import Popup from "../../components/popup/Popup";
// import Order from "../popup/Order";
import { Link } from "react-router-dom";
import { foods } from "./foods";
import axios from 'axios';

class CustomerFavourites extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/home/todaymenu')
    .then(
        response=> {
            if (response.status === 200) {
                this.setState({
                  data:response.data,
                });
        }
    })
  }

  render() {

  const text = (
    <>
      Available <span>Foods</span>
    </>
  );

  const data = this.state.data;

  var result = foods.filter(function (o1) {
    return data.some(function (o2) {
        return o1.name === o2.name; 
   });
 });

  const faves = result.map((item) => {
    return (
      <article key={item.id} className={styled.faves}>
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>

        <div>
          <p className={styled.name}> {item.name}</p>
          <div>
            <p className={styled.price}>Rs {item.price}</p>
            <Link to="login" >
                <Button>Order</Button>
            </Link>
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
}

export default CustomerFavourites;
