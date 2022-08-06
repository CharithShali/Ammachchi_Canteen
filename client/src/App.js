import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/pages/Home";
import Seller from "./components/pages/SellerPage";
import Signup from "./components/login/Signup";
import Customer from "./components/pages/CustomerPage";
import SellerLogin from "./components/login/SellerLogin";
import AdminLogin from "./components/login/AdminLogin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customer/:id" element={<Customer />} />
        <Route path="seller/:id" element={<Seller />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="sellerlogin" element={<SellerLogin />} />
      </Routes>
    </div>
  );
}

export default App;
