import React, { Component } from "react";
import './Login.css';
import loginImg from "../../images/ammachi_logo.png";
import Button from "../button/Button";
import Background from "../helpers/Background";
import darkGreyBg from "../../images/dark-grey-bg.png";
import axios from 'axios';
import Swal from 'sweetalert2';

class AdminLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id:'',
      name:'',
      password:'',
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
      const password = this.state.password;

      const user = {name,password};

        axios.post('http://localhost:3001/api/admin/login', user)
                    .then(response => {
                      
                        if (response.status === 200) {
                          this.setState({
                            id:response.data[0].id,
                          })
                            Swal.fire({
                                title: 'Login Successful',
                                type: 'success',
                                confirmButtonText: 'OK!',
                            }).then((result) => {

                                if (result.value) {
                                    window.location.assign('/admin/'+this.state.id);
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
    <section id="adminlogin">
      <Background url={darkGreyBg}>
        <form id="adminlogin" onSubmit={this.onFormSubmit}>
        <div className="base-container" >
          <div className="header1"> Admin Login
          </div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt='logo'/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">User name</label>
                <input type="text" name="name" placeholder="enter your username" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.name}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="enter your password" className="form-control form-control-lg" 
                onChange={this.onValueChange}
                value={this.state.password}
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
            Seller? <a href="sellerlogin">Login Here</a>
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
}

export default AdminLogin