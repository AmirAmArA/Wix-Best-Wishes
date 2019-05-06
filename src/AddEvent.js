import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";

import {Dropdown , DropdownItem} from 'react-bootstrap';

export default class AddEvent extends React.Component {

  constructor() {
    super();
    this.state = {

      events: [
        {
          id: 1,
          title: "event1",
          startdate : new Date().toLocaleString("he-IL"),
          enddate : new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 2,
          title: "event2",
          startdate : new Date().toLocaleString("he-IL"),
          enddate : new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 3,
          title: "event3",
          startdate : new Date().toLocaleString("he-IL"),
          enddate : new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 4,
          title: "event4",
          startdate : new Date().toLocaleString("he-IL"),
          enddate : new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        }
      ]
    };
    this.updateEvents = this.updateEvents.bind(this);
  }

  updateEvents(eventsarr){
    // const user = this.state.users.find(user => user.id === userId);

    this.setState({
      events: [this.state.events , ...eventsarr]                             
                        //  .push(wish => {
                        //     if(user.id === userId){
                        //         return {
                        //             ...user, 
                        //             score: user.score+1,
                        //             lastUpdateTime: new Date().toLocaleString('he-IL')
                        //         }//return
                        //     }//if
                        //     return user;
                        // })
                        .sort((event1, event2) => event2.lastUpdateTime - event1.lastUpdateTime)
    }
    );
}


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
                          
                          
                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              Choose A Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Birthday</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Wedding</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">New Born</Dropdown.Item>
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
                        <a href="/MyEvents" >Create event box</a>
                          
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
