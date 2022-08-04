import React from "react";
import "./App.css";
import Login from "./components/pages/LoginPage";
import Home from "./components/pages/Home";
import Seller from "./components/pages/SellerPage";
import Signup from "./components/login/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="seller" element={<Seller />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
