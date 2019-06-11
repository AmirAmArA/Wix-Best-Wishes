import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Navbar, Nav, Form, Button } from "react-bootstrap";

import "./general.css";
import logo from "../assets/logo.PNG";

import ShowUserWishes from "./ShowUserWishes";

import WishContext from "./WishContext";

export class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    localStorage.clear();
    this.logout2 = this.logout2.bind(this);
    this.state = {
      loginFlag: false,
      username: localStorage.getItem("username"),
      userid: this.props.userid || localStorage.getItem("userId")
    };
    // console.log(localStorage.getItem("loginflag"));
    // localStorage.setItem("loginflag", this.state.loginFlag);
    // this.checkIfLogedIn = this.checkIfLogedIn.bind(this);
    console.log(props);
  }

  componentDidMount() {
    let uid = localStorage.getItem("userId");
    if (uid) this.context.setuserid(uid);
    console.log(this.state);
  }
  logout2() {
    this.context.logout();
    this.setState({
      username: ""
    });
  }
  render() {
    let loginflag = false;
    if(this.context.userId!=0 && this.context.userId!=-1 && this.context.userId){
      loginflag = true
    }
    let uid = localStorage.getItem("userId") ? true : false;
    // if(uid)
    // this.context.setuserid(uid);
    console.log("userid in the context =", this.context.userId);

    // console.log("from nav componet user id at localstorage = " ,localStorage.getItem("userId"));
    // console.log(this.context.userId, "userid is");
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
              to={loginflag ? "/MyEvents" : "/Login"}
            >
              {" "}
              MyEvents
            </NavLink>
            <NavLink
              className="nav-link"
              to={loginflag ? "/ShowUserWishes" : "/Login"}
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
            {loginflag ? 
              <>
                Hi {this.state.username}
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  onClick={this.logout2}
                >
                  <NavLink to="/">Logout</NavLink>

                  {/* <a href="/Register">Create event Box</a> */}
                </button>
              </>
             : 
              <>
                <NavLink className="nav-link" to="/Login">
                  Sign In
                </NavLink>
                <NavLink className="nav-link" to="/Register">
                  Register
                </NavLink>
              </>
            }
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
