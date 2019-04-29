import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" />

                  <div className="col-md-4">
                    <button
                      className="btn btn-outline-info my-2 my-sm-0"
                      type="submit"
                    >
                      Create event Box
                    </button>
                    <button
                      className="btn btn-outline-info my-2 my-sm-0"
                      type="submit"
                    >
                      Add a best wish!!
                    </button>
                  </div>
                  <div className="col-md-4" />
                </div>
              </div>

              <div className="col-md-4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
