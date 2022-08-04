import React from "react";
import './Login.css';
import Button from "../button/Button";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";

const Signup = () => {
    return (
        <Background url={darkGreyBg}>
        <form id="login" >
        <div className="base-container" >
          <div className="header1"> Sign Up
          </div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="enter your name" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.email}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input type="number" name="contact" placeholder="enter your contact number" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.email}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="text" name="username" placeholder="enter a username" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.email}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="enter a strong password" className="form-control form-control-lg" 
                // onChange={this.onValueChange}
                // value={this.state.password}
                required
                />
              </div>
            </div>
          </div>
          <div className="footer">
          <Button type="submit">
            Sign Up
          </Button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="login">Sign In?</a>
          </p>
          <p className="forgot-password text-right">
           No need to Register? <a href="/">Back to home</a>
          </p>
        </div>
        </form>
        </Background>
      );
}

export default Signup