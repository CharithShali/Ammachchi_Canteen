import React, { Component } from "react";
import SellerHeader from "../header/SellerHeader";
import SellerMenu from "../menu/SellerMenu";
import Manage from "../tables/ManageOrder";

class Seller extends Component {

  render() {
  return (
    <section id="seller">
      <SellerHeader />
      <SellerMenu />
      <Manage />
    </section>
    
  );
  }
};

export default Seller;