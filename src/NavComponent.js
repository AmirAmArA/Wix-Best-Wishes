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
      username: "Majde"
    };
    // console.log(localStorage.getItem("loginflag"));
    // localStorage.setItem("loginflag", this.state.loginFlag);
    // this.checkIfLogedIn = this.checkIfLogedIn.bind(this);
  }

  render() {
    console.log(this.context.userId, "userid is");
    const { username, logout } = this.context;
    console.log("username from localstorage", localStorage.getItem("username"));

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Best Wishes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              {" "}
              Home
            </NavLink>

            <NavLink
              className="nav-link"
              to={username ? "/MyEvents" : "/Login"}
            >
              {" "}
              MyEvents
            </NavLink>
            <NavLink
              className="nav-link"
              to={username ? "/ShowUserWishes" : "/Login"}
            >
              {" "}
              MyWishes
            </NavLink>
            <NavLink className="nav-link" to="/about">
              {" "}
              About
            </NavLink>
          </Nav>
          <Form inline>
              {/* this.context.userId */}
            { username ? (
            
              <>
                Hi {username}
                <button className="btn btn-outline-info my-2 my-sm-0" onClick={ this.context.logout}>
                      <NavLink to="/">Logout</NavLink>

                      {/* <a href="/Register">Create event Box</a> */}
                    </button>
                
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
