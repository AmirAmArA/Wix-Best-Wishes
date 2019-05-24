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
  }

  render() {
    const { username, logout } = this.context;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Best Wishes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            {username ? (
              <>
                Hi {username}!
                <a
                  aria-current="page"
                  className="nav-link active"
                  href=""
                  onClick={() => logout()}
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
