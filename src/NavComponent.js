import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";

export class NavComponent extends React.Component {
    constructor(){
      super();
      this.state ={
        loginFlag: false
      };
    }
 
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark navStyle">
          <a className="navbar-brand" href="#">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/MyEvents">
                  MyEvents
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/MyWishes">
                  MyWishes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/about"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  About
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* here  i need to add label and to hide it for now  */}
              {/* <Link to="/Login"> */}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                
              >
              <a href="/Login" className="colorgreen">
                SignIn
                </a>
              </button>
              {/* </Link> */}
              {/* <Link to="/Register"> */}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                
              >
              <a href="/Register" className="colorgreen">
              Register
                </a>
                
              </button>
              {/* </Link> */}
            </form>
          </div>
        </nav>
      </Router>
    );
  }
}
