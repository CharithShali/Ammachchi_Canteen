import React, { Component } from "react";
import styled from "./CustomerFavourites.module.css";
import Button from "../button/SellerButton";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import { foods } from "./foods";
import axios from 'axios';

class Seller extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      data1:[],
      recordForEdit: null,
    }

    this.setRecord = this.setRecord.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  setRecord(id){
    this.setState({
      recordForEdit: id,
    })
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/seller/getfoods/'+window.location.pathname.split('/')[2])
    .then(
        response=> {
            if (response.status === 200) {
                this.setState({
                  data:response.data,
                });
        }
    })

    axios.get('http://localhost:3001/api/home/todaymenu/'+window.location.pathname.split('/')[2])
    .then(
        response=> {
            if (response.status === 200) {
                this.setState({
                  data1:response.data,
                });
        }
    })
  }

  onFormSubmit(e){
    // e.preventDefault();
    const food_item_id = this.state.recordForEdit;
    const details = {food_item_id};

    let available = this.state.data1.some((item1) => {return (item1.id === food_item_id);})
    
    available ? axios.post('http://localhost:3001/api/todaymenu/remove', details) 
    :  axios.post('http://localhost:3001/api/todaymenu/add', details)  
  }


  render() {

  const text = (
    <>
      All <span>Foods</span>
    </>
  );

  const data = this.state.data;
  const data1 = this.state.data1;

  var result = foods.filter(function (o1) {
    return data.some(function (o2) {
        return o1.name === o2.name; 
    });
  });
  

  const faves = result.map((item) => {

    let active = data1.some((item1) => {return (item1.name === item.name);})

    return (
      <form onSubmit={this.onFormSubmit}>
      <article key={item.id} className={styled.faves}>
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>
        <div>
          <p className={styled.name}> {item.name}</p>
          <div>
            <p className={styled.price}>Rs {item.price}</p>
            <Button onClick={() => { this.setRecord(item.id); }} recordForEdit={this.state.recordForEdit}
            Active = {active}
            /> 
          </div>
        </div>
      </article>
      </form>
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
  }
};

export default Seller;