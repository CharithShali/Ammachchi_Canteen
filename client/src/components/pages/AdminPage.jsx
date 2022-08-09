import React, { Component } from "react";
import AdminHeader from "../admin/AdminHeader";
import Complaint from "../admin/Complaint";
import Revenue from "../admin/Revenue";
import Cost from "../admin/CostTable";

class Admin extends Component {

  render() {
  return (
    <section id="admin">
      <AdminHeader />
      <Complaint />
      <Revenue />
      <Cost />
    </section>
    
  );
  }
};

export default Admin;