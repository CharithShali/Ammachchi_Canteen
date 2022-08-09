import React, { Component } from "react";
import styled from "../tables/Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';

class Cost extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
        }
      }

      componentDidMount(){
        axios.get('http://localhost:3001/api/admin/orders')
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
            <tr key={item.token} className={styled.tr}>
            <td className={styled.columns} >{item.token}</td>
            <td className={styled.columns} >{item.total}</td>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="cost" className={styled.intro3}>
        <Heading text={text} className="heading-md" />
        <div className={styled.div} >
            <table className={styled.table2}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                <th scope="col" className={styled.firstRow}>Token No</th>     
                <th scope="col" className={styled.firstRow}>Total Price</th>
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

export default Cost;
