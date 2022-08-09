import React, { Component } from "react";
import styled from "./CustomerFavourites.module.css";
import Controls from "../../components/button/Controls";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import Popup from "../../components/popup/Popup";
import Order from "../popup/Order";
import { foods } from "./foods";
import axios from 'axios';

class CustomerFavourites extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      recordForEdit: null,
      openPopup: false,
      openSPopup: false,
    }

    this.addValue = this.addValue.bind(this);
    this.openInPopup = this.openInPopup.bind(this);
    this.setOpenPopup = this.setOpenPopup.bind(this);
    this.setOpenSPopup = this.setOpenSPopup.bind(this);
  }

  addValue(){
    this.setState({
      openPopup: false,
      openSPopup: true,
    })
  }

  setOpenSPopup(bool){
    this.setState({
      openSPopup: bool,
    })
  }

  setOpenPopup(bool){
    this.setState({
      openPopup: bool,
    })
  }

  openInPopup(id){
    this.setState({
      recordForEdit: id,
      openPopup: true,
    })
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
            <Controls.OrderButton
                    text="Order"
                    onClick={() => { this.openInPopup(item.id); }}
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
            openPopup={this.state.openPopup}
            setOpenPopup={this.setOpenPopup}
      >
        <Order
              recordForEdit={this.state.recordForEdit}
              addValue={this.addValue} 
        />
      </Popup>
      <Popup
          title = "Your order has been placed successfully"
          openPopup={this.state.openSPopup}
          setOpenPopup={this.setOpenSPopup}
      ></Popup>
    </section>
  );
  }
};

export default CustomerFavourites;
