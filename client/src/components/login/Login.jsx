import React from "react";
import './Login.css';
import loginImg from "../../images/ammachi_logo.png";
import Button from "../button/Button";

const Login = () => {
    return (
        <form id="login" >
        <div className="base-container" >
          <div className="header1"> Sign In
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
              New to the website? <a href="sign-up">Sign Up?</a>
          </p>
          <p className="forgot-password text-right">
            No need to Login? <a href="/">Back to home</a>
          </p>
        </div>
        </form>
       
      );
}

export default Login