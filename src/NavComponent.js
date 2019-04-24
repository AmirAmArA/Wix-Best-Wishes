import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export  class NavComponent extends React.Component {
  render() {
    return (
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
              <a className="nav-link" href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MyEvents
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                MyWishes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                About
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              SignIn
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
