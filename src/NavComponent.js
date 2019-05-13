import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";
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
      username: "Majde"

    };
    // console.log(localStorage.getItem("loginflag"));
    localStorage.setItem("loginflag", this.state.loginFlag);
    // this.checkIfLogedIn = this.checkIfLogedIn.bind(this);
  }
  

  //inside render: if loggedin => run function that return the label , else run func. that retu. 2 buttons
  render() {
    localStorage.setItem("loginflag", this.state.loginFlag);
    const style = this.state.loginFlag ? {display:'none'}:{};
    const style1 = this.state.loginFlag ? {}:{display:'none'};

    // const isLoggedIn = localStorage.getItem("loginflag");
      if(this.state.loginFlag ){
         console.log("user is logged in");
         return (
          <Router>
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
                    <a className="nav-link" href="/ShowUserWishes">
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
                  {/* <Link to="/Login"> */}
                  
    
                  <div className={this.state.divhellousername} id="hellousernameid" style={style1}>
                    <span className="colorwhite ">Hi:{this.state.username}</span>
                  </div>
                  {/* </Link> */}
                </form>
              </div>
            </nav>
          </Router>
        );
      }
      else {
      console.log("user is not logged in");
      return (
        <Router>
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
                  <a className="nav-link" href="/ShowUserWishes">
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
                {/* <Link to="/Login"> */}
                <button
                  id="Loginbtn"
                  className= {this.state.btn} style={style}
  
                  /* "btn btn-outline-success my-2 my-sm-0"*/
                >
                  <a href="/Login" className="colorgreen">
                    SignIn
                  </a>
                </button>
                {/* </Link> */}
                {/* <Link to="/Register"> */}
                <button
                  id="Registerbtn"
                  className={this.state.btn} style={style}
                  
                  //"btn btn-outline-success my-2 my-sm-0" 
                >
                  <a href="/Register" className="colorgreen">
                    Register
                  </a>
                </button>
                {/* "my-4 my-lg-0 displaynone"  */}
  
                {/* </Link> */}
              </form>
            </div>
          </nav>
        </Router>
      );
    }//else
    // this.checkIfLogedIn(isLoggedIn);
    
  }//render
}//class
