import React, { Component } from "react";
import styled from "../tables/Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';

class Complaint extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data:[],
        }
      }

    componentDidMount(){
        axios.get('http://localhost:3001/api/admin/Complaint')
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
            Customer <span>Feedbacks</span>
        </>
    );
    
    const order = this.state.data.map((item) => {
        return(
            <tr key={item.id} className={styled.tr}>
            <th className={styled.columns} >{item.name}</th>
            <td className={styled.columns1} >{item.C_date.split('T')[0]}</td>
            <td className={styled.columns1} >{item.subject}</td>
            <td className={styled.columns1} >{item.description}</td>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="feedback" className={styled.intro1}>
        <Heading text={text} className="heading-md" />
        <div className={styled.div} >
            <table className={styled.table}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Customer</th>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Date</th>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Subject</th>
                    <th scope="col" style={{textAlign: 'center'}} className={styled.firstRow}>Description</th>
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

export default Complaint;
