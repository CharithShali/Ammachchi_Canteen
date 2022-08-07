import React from "react";
import { orders } from "./orders";
import styled from "./Check.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png"
import Button from "../button/Button";

const Manage = () => {

    const text = (
        <>
          Take <span>Orders</span>
        </>
      );

    const order = orders.map((item) => {
        return(
            <tr key={item.id} className={styled.tr}>
            <td className={styled.columns} >{item.name}</td>
            <td className={styled.columns} >{item.quantity}</td>
            <td className={styled.columns} >{item.price}</td>
            <th className={styled.columns} >{item.status}</th>
            <Button type="submit" >Ready!</Button>
            </tr>
        );
    });

    return(
        <Background url={darkGreyBg}>
        <section id="manage" className={styled.intro2}>
        <Heading text={text} className="heading-md" />
        <div className={styled.div} >
            <table className={styled.table1}>
                <thead className="table-dark text-center" >
                <tr className={styled.tr1}>
                    <th scope="col" className={styled.firstRow}>Food Name</th>
                    <th scope="col" className={styled.firstRow}>Quantity</th>
                    <th scope="col" className={styled.firstRow}>Total Price</th>
                    <th scope="col" className={styled.firstRow}>Status</th>
                    <th scope="col" className={styled.firstRow}></th>
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
};

export default Manage;
