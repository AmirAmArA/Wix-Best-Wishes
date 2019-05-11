import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import Login from "./Login";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fieldsvalidated: false
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/gim;
    if (exampleInputEmail1.val() == "" || !re.test(exampleInputEmail1.val())) {
      alert("Please enter a valid email address.");
      // return false;
    }
    if (password.value == "" || confirmpassword.value == "" ||confirmpassword.value !=password.value ) {
      alert("passwords error!");
    }
  } //submit()
  
  
  
  render() {
    let exampleInputEmail1=document.getElementById("#exampleInputEmail1");
    let fname=document.getElementById("#fname");
    let lname=document.getElementById("#lname");
    let password=document.getElementById("#password");
    let confirmpassword=document.getElementById("#confirmpassword");
    return (
      <>
        <div className="signup-form">
          <form className="background-20060b4b">
            <h2>Join Now</h2>
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required="required"
                    id="fname"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required="required"
                    id="lname"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                id="exampleInputEmail1"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                id="password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
                id="confirmpassword"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
                onClick={this.submit}
              >
                Join Now
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="/Login">Sign in</a>
          </div>
        </div>
      </>
    );
  }
}
