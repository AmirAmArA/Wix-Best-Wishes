import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Navbar, Nav, Form, Button } from "react-bootstrap";

import "./general.css";
import logo from "../assets/logo.PNG";

import ShowUserWishes from "./ShowUserWishes";

import WishContext from "./WishContext";

export class NavComponent extends React.Component {
  constructor() {
    super();
    localStorage.clear();
    this.state = {
      loginFlag: false,
      username: "Majde",
      userid: 22
    };
    // console.log(localStorage.getItem("loginflag"));
    // localStorage.setItem("loginflag", this.state.loginFlag);
    // this.checkIfLogedIn = this.checkIfLogedIn.bind(this);
  }

  render() {
    const { username, logout } = this.context;
    let loginpath = ""
    if(!this.context.username){
      loginpath = "/Login";
      
    }
    
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Best Wishes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">


                      
            <NavLink className="nav-link" to="/">  Home</NavLink>
            
            <NavLink className="nav-link" to={this.context.userId? "/MyEvents" : loginpath}>  MyEvents</NavLink>
            <NavLink className="nav-link" to={this.context.userId? "/ShowUserWishes" : loginpath}>  MyWishes</NavLink>
            <NavLink className="nav-link" to="/about">  About</NavLink>
          </Nav>
          <Form inline>
            {this.context.userId ? (
              <>
                Hi {username}!
                <a
                  aria-current="page"
                  className="nav-link active"
                  href=""
                  onClick={() => this.context.logout()}
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/Login">
                  Sign In
                </NavLink>
                <NavLink className="nav-link" to="/Register">
                  Register
                </NavLink>
              </>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// NavComponent.propTypes = {
//   username: PropTypes.string,
//   loginFlag: PropTypes.boolean
//  }

NavComponent.contextType = WishContext;
