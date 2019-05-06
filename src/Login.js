import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class Login extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-info">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </>
    );
  }
}
