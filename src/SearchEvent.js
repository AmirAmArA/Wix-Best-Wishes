import React from "react";
import ReactDOM from "react-dom";

import EventCardToView from "./EventCardToView";

export default class SearchEvent extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-left cardBackground width18rem ">
              <div className="card-body">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-outline-secondary  active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autoComplete="off"
                      checked
                    />{" "}
                    Event ID
                  </label>
                  <label className="btn btn-outline-secondary ">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autoComplete="off"
                    />{" "}
                    Others
                  </label>
                </div>
                <div>
                  <br />
                </div>

                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Event ID"
                />
                <br />
                <div className="btn-group  btn-group-md ">
                  <button
                    type="button"
                    className=" btn  btn-outline-light dropdown-toggle  "
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
                </div>
                <br />
                <div>
                  <br />
                </div>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Start"
                />
                <br />
                <input className="form-control" type="date" placeholder="End" />
                <br />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Event Location"
                />
                <br />
                <button type="button" class="btn btn-outline-warning">
                  Search Event
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <div className="row">
                <br />
                <br />
              </div>
              <div className="row">
                <div className="col-md-1"> </div>
                <div className="col-md-10">
                  <h3 className="colorWhite">Event List:</h3>
                </div>
                <div className="col-md-1" />
              </div>
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10 colorWhite">
                  <div className="row">
                    <div className="col-md-4" />
                  </div>
                  <div className="row">
                    {/* <EventCardToView  /> */}
                    <EventCardToView />
                    <EventCardToView />
                  </div>
                  <div className="row">
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                  </div>
                </div>
              </div>

              <div className="col-md-1" />
            </div>
            <div className="row">
              <br />
              <br />
            </div>

            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4" />
              <div className="col-md-4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
