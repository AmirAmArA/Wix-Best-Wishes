import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import Login from "./Login";

export default class Register extends React.Component {
  render() {
    return (
      <>
        <div className="signup-form">
          <form className="background-20060b4b">
            <h2>Join Now</h2>
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Join Now
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="/Login">Sign in</a>
          </div>
        </div>
      </>
    );
  }
}
