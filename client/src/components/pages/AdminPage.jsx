import React, { Component } from "react";
import AdminHeader from "../admin/AdminHeader";
import Complaint from "../admin/Complaint";
import Revenue from "../admin/Revenue";

class Admin extends Component {

  render() {
  return (
    <section id="admin">
      <AdminHeader />
      <Complaint />
      <Revenue />
    </section>
    
  );
  }
};

export default Admin;