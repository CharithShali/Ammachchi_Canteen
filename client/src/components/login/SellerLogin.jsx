import React from "react";
import './Login.css';
import loginImg from "../../images/ammachi_logo.png";
import Button from "../button/Button";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";

const SellerLogin = () => {

    return (
    <section id="sellerlogin">
      <Background url={darkGreyBg}>
        <form id="sellerlogin" >
        <div className="base-container" >
          <div className="header1"> Seller Login
          </div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt='logo'/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="text" name="username" placeholder="enter your username" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.email}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="enter your password" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.password}
                required
                />
              </div>
            </div>
          </div>
          <div className="footer">
          <Button type="submit">
            Login
          </Button>
          </div>
          <p className="forgot-password text-right">
            No need to Login? <a href="/">Back to home</a>
          </p>
          <p className="forgot-password text-right">
              Admin? <a href="adminlogin">Login Here</a>
          </p>
          <p className="forgot-password text-right">
            Customer? <a href="login">Login Here</a>
          </p>
        </div>
        </form>
        </Background>
      </section>
      );
}

export default SellerLogin