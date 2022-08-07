import React, { Component } from "react";
import styled from "./Contact.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import Wrapper from "../helpers/Wrapper";
import greyBg from "../../images/greybg.png";
import spices from "../../images/spices.png";
import Button from "../button/Button";
import axios from 'axios';

class Contact extends Component {

  constructor(props) {
    super(props);
    let today = new Date(Date.now());

    this.state = {
      C_date: today.toISOString().split('T')[0],
      subject:'',
      description:'',
    }
    
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

    onValueChange(e){
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onFormSubmit(e){
      e.preventDefault();
      const C_date = this.state.C_date;
      const subject = this.state.subject;
      const description = this.state.description;
      const customer_id = window.location.pathname.split('/')[2];
    
      const addcomplaint = {C_date,subject,description,customer_id}
      
    
        axios.post('http://localhost:3001/api/complaint/add', addcomplaint)
          .then(res => {
            if (res.status === 200) {
              this.setState({
                subject:'',
                description:'',
      
              });
              window.location.assign('/customer/'+window.location.pathname.split('/')[2]);
            }
          })
    }

  text = (
    <>
      get in <span>touch</span> with us
    </>
  );

  render() {
  return (
    <Background url={greyBg}>
      <Wrapper>
        <section className={styled.contact} id="contact" >
          <div>
            <figure>
              <img src={spices} alt="Three small containers of spices" />
            </figure>
            <article>
              <Heading text={this.text} className="heading-md" />
              <p className="paragraph">
                If you're looking for a vegetarian delicious meal, you can contact us via email. We would love to hear
                from you and answer any questions you may have.
              </p>
            </article>
          </div>
          <form id="contact" className={styled.form} onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" />

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" 
            onChange={this.onValueChange}
            value={this.state.subject}
            required
            />

            <label htmlFor="description">Message</label>
            <textarea name="description" rows="5" 
            onChange={this.onValueChange}
            value={this.state.description}
            required
            />
            <br />
            <Button type="submit">
              Send
            </Button>
          </form>
        </section>
      </Wrapper>
    </Background>
  );
  }
};

export default Contact;
