import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";

import {Dropdown , DropdownItem} from 'react-bootstrap';

export default class AddEvent extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <br />
          <br />
        </div>

        <div className="row">
          <div className="col-md-1"> </div>
          <div className="col-md-10">
            <div className="card mb-3  background-20060b4b">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4"> </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="colorWhite">Category</span>
                      </div>
                      <div className="col-md-8">
                        <div className="btn-group  btn-group-md ">
                          <button
                            type="button"
                            className="btn btn-light  btn dropdown-toggle "
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Choose Category
                          </button>
                          <div className="dropdown-menu dropdown-menu-center">
                            <button className="dropdown-item" type="button">
                              Birthday
                            </button>
                            <button className="dropdown-item" type="button">
                              Wedding
                            </button>
                            <button className="dropdown-item" type="button">
                              New Born
                            </button>

                          </div>
                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>

                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <span className="colorWhite">Title</span>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="write event title"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="colorWhite">Start Date </span>
                      </div>
                      <div className="col-md-8">
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                        />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="colorWhite">End Date </span>
                      </div>
                      <div className="col-md-8">
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                        />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>

                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="colorWhite">Where </span>
                      </div>
                      <div className="col-md-8">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Type Event Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>

                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-7">
                        
                        
                      </div>
                      <div className="col-md-5">
                        <br />
                        <button
                          id="searchEventbtn"
                          type="button"
                          className="btn btn-outline-info"
                        >
                        <a href="/MyEvents">Create event box</a>
                          
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </>
    );
  }
}
