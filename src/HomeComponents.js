import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import App from './App';
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
                      
                    >
                    <a href="/AddEvent" >
                    Create event Box
                </a>
                      
                    </button>
                    <button
                      className="btn btn-outline-info my-2 my-sm-0"
                      
                    >
                    {/* should navigate to search event */}
                    <a href="/addawish" >
                    Add a best wish!!
                </a>
                      
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
