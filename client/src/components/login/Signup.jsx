import React, { Component } from "react";
import './Login.css';
import Button from "../button/Button";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';
import Swal from 'sweetalert2';
// import { withRouter } from "react-router";

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id:'',
      name:'',
      email:'',
      password:'',
      cpassword:'',
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

    onValueChange(e){
        this.setState({
          [e.target.name] : e.target.value
        })
    }
    
    onFormSubmit(e){
      e.preventDefault();
      const name = this.state.name;
      const email = this.state.email;
      const password = this.state.password;
      const cpassword = this.state.cpassword;

      const user = {name,email,password,cpassword};

        axios.post('http://localhost:3001/api/customer/add', user)
                    .then(response => {
                      
                        if (response.status === 200) {
                          this.setState({
                            id:response.data[0].id,
                          })
                            Swal.fire({
                                title: 'Sign up Successful',
                                type: 'success',
                                confirmButtonText: 'OK!',
                            }).then((result) => {

                                if (result.value) {
                                    // sessionStorage.setItem('userToken', response.data.token);
                                    // sessionStorage.setItem('tokenTime', response.data.tokenLifeInSeconds);
                                    window.location.assign('/customer/'+this.state.id);
                                }
                            });
                        } else {
                            Swal.fire('Oops...', 'Invalid Password or User Id', 'error');
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    });

  }
 
  render() {
    return (
        <Background url={darkGreyBg}>
        <form id="sign-up" onSubmit={this.onFormSubmit}>
        <div className="base-container" >
          <div className="header1"> Sign Up
          </div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="enter your name" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.name}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="enter your email" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.email}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="enter a strong password" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.password}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" name="cpassword" placeholder="enter the password again" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.cpassword}
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
}

export default Signup;