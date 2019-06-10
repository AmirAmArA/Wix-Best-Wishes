import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from 'prop-types';
import axois from 'axios'

// import {login} from './EventsApi'
import {login} from './Api'

import "./general.css";
import logo from "../assets/logo.PNG";

import WishContext from './WishContext';


export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email :"",
      password: ""
    };

    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);
  }

  validate(e){
    const { name, value } = e.target;
    if(name === "email"){
      // var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/gim;
      if (value == "" ) {
        // || !re.test(value)
        alert("Please enter a valid email address.");
        return;
      }
      }
      
    else if (name == "password") {
      // alert("Please enter a valid password .");
      if(value==""){
        return;
      }
      
    }
   
    this.setState({
      [name]: value
    });
  }
  
  // submit(e) {
  //   e.preventDefault();
  //   this.context.login(this.state.email, this.state.password);
  // }
  // async
   submit(event) {
    event.preventDefault();
    // const {email,password}=this.state;
    const email = this.state.email;
    const password = this.state.password;
    console.log(email);
    console.log("username and password" ,email , password )
    if(email != "" && password !="" ){
    const result=  login(email, password);
    // await
   console.log(result.userId);
   localStorage.setItem('userId', result.userId);
  }//if
}



  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      defaultValue={this.state.email}
                      onBlur={this.validate}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      defaultValue={this.state.password}
                      onBlur={this.validate}

                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-info"
                    onClick={this.submit}
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </>
    );
  }
} //class

// Login.contextType = WishContext;