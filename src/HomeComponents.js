import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import WishContext from "./WishContext";


import "./general.css";
import logo from "../assets/logo.PNG";
import { App, MyContext, MyProvider } from "./App";
import SearchEvent from "./SearchEvent";
export default class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      loginFlag: true,
      username: "",
      userid: 2
    };
    this.checklogin = this.checklogin.bind(this);
  }

  checklogin(flag) {
    console.log("login flag from checklogin() : "  ,flag)
    let addeventlink = "/AddEvent/" + this.state.userid;
    const isLoggedIn = this.state.loginFlag;
    if (flag == true) {
      return (
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" />

                  <div className="col-md-4">
                    <button className="btn btn-outline-info my-2 my-sm-0">
                      <NavLink to={addeventlink}>Create event Box</NavLink>
                    </button>
                    <button className="btn btn-outline-info my-2 my-sm-0">
                      {/* should navigate to search event */}

                      <NavLink to="/SearchEvent">Add a best wish!!</NavLink>
                    </button>
                  </div>
                  <div className="col-md-4" />
                </div>
              </div>

              <div className="col-md-4" />
            </div>
          </div>
        </div>
      );
    } //if true
    if (flag == false) {
      return (
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" />

                  <div className="col-md-4">
                    <button className="btn btn-outline-info my-2 my-sm-0">
                      <NavLink to="/Login">Create event Box</NavLink>

                      {/* <a href="/Register">Create event Box</a> */}
                    </button>
                    <button className="btn btn-outline-info my-2 my-sm-0">
                      <NavLink to="/SearchEvent">Add a best wish!!</NavLink>
                    </button>
                  </div>
                  <div className="col-md-4" />
                </div>
              </div>

              <div className="col-md-4" />
            </div>
          </div>
        </div>
      );
    } //if false
  }

  render() {
    return (
        this.checklogin(this.context.username? true : false)
    );
  } //render
} //class

