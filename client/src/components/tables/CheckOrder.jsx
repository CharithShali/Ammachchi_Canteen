import React, { Component } from "react";
import styled from "./Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';

class Check extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
        }
      }

    componentDidMount(){
        axios.get('http://localhost:3001/api/customer/myorders/'+ window.location.pathname.split('/')[2])
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
        axios.get('http://localhost:3001/api/customer/myorders/'+ window.location.pathname.split('/')[2])
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
            My <span>Orders</span>
        </>
    );
    
    const order = this.state.data.map((item) => {
        return(
            <tr key={item.id} className={styled.tr}>
            <td className={styled.columns} >{item.name}</td>
            <td className={styled.columns} >{item.quantity}</td>
            <td className={styled.columns} >{item.total}</td>
            <th className={styled.columns} >{item.status}</th>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="check" className={styled.intro1}>
        <Heading text={text} className="heading-md" />
        <div className={styled.div} >
            <table className={styled.table}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                    <th scope="col" className={styled.firstRow}>Food Name</th>
                    <th scope="col" className={styled.firstRow}>Quantity</th>
                    <th scope="col" className={styled.firstRow}>Total Price</th>
                    <th scope="col" className={styled.firstRow}>Status</th>
                </tr>
                </thead>
                <tbody>
                    {order}    
                </tbody>
            </table>
        </div>
        </section>
        </Background>
    )
    }
};

export default Check;
