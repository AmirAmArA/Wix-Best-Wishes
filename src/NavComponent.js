import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

import { App, MyContext, MyProvider } from "./App";
import ShowUserWishes from "./ShowUserWishes";

export class NavComponent extends React.Component {
  // Loginbtn  Registerbtn  hellousernameid
  //  loginbtn= document.getElementById("#Loginbtn");
  //  registerbtn= document.querySelector("#Registerbtn");
  //  hellousernameid= document.querySelector("#hellousernameid");

  constructor() {
    super();
    localStorage.clear();
    this.state = {
      loginFlag: true,
      username: "Majde",
      userid: 22,
      counter: 0 //if counter ==1 then dont update the state => in order to render just one time after updating the loginflag
    };
    this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
  } //constructor

  checkIfLoggedIn(flag, username) {
    if (flag == true) {
      return (
        <>
          <form className="form-inline my-2 my-lg-0">
            {/* <Link to="/Login"> */}

            <div className={this.state.divhellousername} id="hellousernameid">
              <span className="colorwhite ">Hi:{username}</span>
            </div>
            {/* </Link> */}
          </form>
        </>
      );
    } //if
    if (flag == false) {
      return (
        <form className="form-inline my-2 my-lg-0">
          {/* <Link to="/Login"> */}
          <button
            id="Loginbtn"
            className="btn btn-outline-success my-2 my-sm-0"
          >
            <NavLink className="nav-link" to="/Login">
              SignIn
            </NavLink>
          </button>
          <button
            id="Registerbtn"
            className="btn btn-outline-success my-2 my-sm-0"
          >
            <NavLink className="nav-link" to="/Register">
              Register
            </NavLink>
          </button>

        </form>
      );
    } //if
  } //checkIfLoggedIn()

  //inside render: if loggedin => run function that return the label , else run func. that retu. 2 buttons
  render() {
    const style = this.state.loginFlag ? { display: "none" } : {};
    const style1 = this.state.loginFlag ? {} : { display: "none" };
    
    let myeventslink = "/MyEvents/" + this.state.userid;
    let ShowUserWishes = "/ShowUserWishes/" + this.state.userid;
    // const isLoggedIn = localStorage.getItem("loginflag");
    if (this.state.loginFlag) {
      console.log("user is logged in");
      return (
        // <Router>
        <MyContext.Consumer>
          {context => (
            <nav className="navbar navbar-expand-lg navbar-dark navStyle">
              <a className="navbar-brand">
                <img src={logo} className="logo" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <NavLink className="nav-link" exact to="/">
                      Home
                    </NavLink>

                    {/* <a className="nav-link" href="/"></a> */}
                  </li>
                  <li className="nav-item">
                    {/* /MyEvents */}
                    <NavLink className="nav-link" to={myeventslink}>
                      MyEvents
                    </NavLink>

                    {/* <a className="nav-link" href="/MyEvents"></a> */}
                  </li>
                  <li className="nav-item ">
                    {/* /ShowUserWishes */}
                    <NavLink className="nav-link" to={ShowUserWishes}>
                      MyWishes
                    </NavLink>

                    {/* <a className="nav-link" href="/ShowUserWishes"></a> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
                {this.checkIfLoggedIn(
                  context.state.loginFlag,
                  context.state.username
                )}
              </div>
            </nav>
          )}
        </MyContext.Consumer>
        // </Router>
      );
    } else {
      console.log("user is not logged in");
      return (
        // <Router>
        <MyContext.Consumer>
          {context => (
            <nav className="navbar navbar-expand-lg navbar-dark navStyle">
              <a className="navbar-brand">
                <img src={logo} className="logo" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">
                      MyEvents
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/Register">
                      MyWishes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
                {this.checkIfLoggedIn(
                  context.state.loginFlag,
                  context.state.username
                )}
              </div>
            </nav>
          )}
        </MyContext.Consumer>

        // </Router>
      );
    } //else
    // this.checkIfLogedIn(isLoggedIn);
  } //render
} //class

// NavComponent.propTypes = {
//   username: PropTypes.string,
//   loginFlag: PropTypes.boolean
//  }
