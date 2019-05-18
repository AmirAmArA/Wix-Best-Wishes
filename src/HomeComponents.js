import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

import { NavLink } from 'react-router-dom'

import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";
import SearchEvent from "./SearchEvent";
export default class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      loginFlag: true,
      username: "",
      userid:2
    };
  }

  render() {
   let  addeventlink = "/AddEvent/"+ this.state.userid;
    // const isLoggedIn = localStorage.getItem("loginflag");
    const isLoggedIn = this.state.loginFlag;
    console.log("loginflag = ", isLoggedIn);
    //
    if (this.state.loginFlag) {
      return (
        <>
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
                        {/* <a href="/AddEvent">Create event Box</a> */}
                      </button>
                      <button className="btn btn-outline-info my-2 my-sm-0">
                        {/* should navigate to search event */}

                        {/* <a href="/SearchEvent">Add a best wish!!</a> */}
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
        </>
      );
    } //if
    else {
      return (
        <>
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
              <NavLink to="/Register">Create event Box</NavLink>

                        {/* <a href="/Register">Create event Box</a> */}
                      </button>
                      <button className="btn btn-outline-info my-2 my-sm-0">
                        {/* should navigate to search event */}
              <NavLink to="/SearchEvent">Add a best wish!!</NavLink>

                        {/* <a href="/SearchEvent">Add a best wish!!</a> */}
                      </button>
                    </div>
                    <div className="col-md-4" />
                  </div>
                </div>

                <div className="col-md-4" />
              </div>
            </div>
          </div>
        </>
      );
    } //else
  } //render
} //class

HomeComponent.propTypes = {
  loginFlag: PropTypes.boolean,
  username: PropTypes.string
};
