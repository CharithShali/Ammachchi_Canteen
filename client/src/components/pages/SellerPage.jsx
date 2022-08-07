import React from "react";
import SellerHeader from "../header/SellerHeader";
import SellerMenu from "../menu/SellerMenu";
import Manage from "../tables/ManageOrder";

const Seller = () => {
  return (
    <section id="seller">
      <SellerHeader />
      <SellerMenu />
      <Manage />
    </section>
    
  );
};

export default Seller;