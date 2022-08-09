import React, { Component } from "react";
import styled from "../tables/Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';

class Revenue extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
        }
      }

    componentDidMount(){
        axios.get('http://localhost:3001/api/admin/income')
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
            Total <span>Revenue</span>
        </>
    );
    
    const order = this.state.data.map((item) => {
        return(
            <tr key={item.id} className={styled.tr}>
            <th className={styled.columns} >{item.name}</th>
            <td className={styled.columns} >{item.revenue}</td>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="feedback" className={styled.intro3}>
        <Heading text={text} className="heading-md" />
        <div className={styled.div} >
            <table className={styled.table2}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Seller</th>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Revenue</th>
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

export default Revenue;
