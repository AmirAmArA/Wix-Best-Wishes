import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from 'prop-types';


import "./general.css";
import logo from "../assets/logo.PNG";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fieldsvalidated: false ,
      email :""
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/gim;
    if (exampleInputEmail1.val() == "" || !re.test(exampleInputEmail1.val())) {
      alert("Please enter a valid email address.");
      // return false;
    }
    if (exampleInputPassword1.value == "") {
      alert("Please enter a valid password .");
    }
  } //submit()

  render() {
    let exampleInputEmail1 = document.getElementById("#exampleInputEmail1");
    let exampleInputPassword1 = document.getElementById(
      "#exampleInputPassword1"
    );

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
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      defaultValue={this.state.email}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      defaultValue={this.state.password}

                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-info"
                    onClick={this.submit}
                  >
                    Submit
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

