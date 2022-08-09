import React, { Component } from "react";
import styled from "./Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png"
import Button from "../button/ManageButton";
import axios from 'axios';

class Manage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
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
        axios.get('http://localhost:3001/api/seller/myorders/'+ window.location.pathname.split('/')[2])
        .then(
            response=> {
                if (response.status === 200) {
                    this.setState({
                      data:response.data,
                    });
            }
      })
    }

    componentDidUpdate(){
      axios.get('http://localhost:3001/api/seller/myorders/'+ window.location.pathname.split('/')[2])
      .then(
          response=> {
              if (response.status === 200) {
                  this.setState({
                    data:response.data,
                  });
          }
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    const id = this.state.recordForEdit;
    const order = {id}
    
    axios.post('http://localhost:3001/api/seller/confirmorder', order)
        
  }

    render() {

    const text = (
        <>
          Take <span>Orders</span>
        </>
      );

    const order = this.state.data.map((item) => {
        return(
            <tr key={item.id} className={styled.tr}>
            <td className={styled.columns} >{item.id}</td>
            <td className={styled.columns} >{item.name}</td>
            <td className={styled.columns} >{item.quantity}</td>
            <th className={styled.columns} >{item.status}</th>
            <Button type="submit" onClick={() => { this.setRecord(item.id); }} text="Ready!"/>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="manage" className={styled.intro2}>
        <form onSubmit={this.onFormSubmit}>
        <Heading text={text} className="heading-md"/>
        <div className={styled.div} >
            <table className={styled.table1}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                    <th scope="col" className={styled.firstRow}>Token No</th>
                    <th scope="col" className={styled.firstRow}>Food Name</th>
                    <th scope="col" className={styled.firstRow}>Quantity</th>
                    <th scope="col" className={styled.firstRow}>Status</th>
                    <th scope="col" className={styled.firstRow}></th>
                </tr>
                </thead>
                <tbody>
                    {order}    
                </tbody>
            </table>
        </div>
        </form>
        </section>
        </Background>
    )
};
}

export default Manage;
