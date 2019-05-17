import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'


import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";

import { Dropdown, DropdownItem } from "react-bootstrap";

export default class AddEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 1,
          title: "event1",
          startdate: new Date().toLocaleString("he-IL"),
          enddate: new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 2,
          title: "event2",
          startdate: new Date().toLocaleString("he-IL"),
          enddate: new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 3,
          title: "event3",
          startdate: new Date().toLocaleString("he-IL"),
          enddate: new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 4,
          title: "event4",
          startdate: new Date().toLocaleString("he-IL"),
          enddate: new Date().toLocaleString("he-IL"),
          avatar: "images/avatar.jpg",
          where: "place1",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        }
      ],
      dropdownvalue: "",
      continueflag:false ,
      navigatefroma : "/AddEvent"
    }//state
    ;
    this.updateEvents = this.updateEvents.bind(this);
    this.handledropdown = this.handledropdown.bind(this);
    this.createnewevent = this.createnewevent.bind(this);
    this.navigateahref = this.navigateahref.bind(this);
  }

  updateEvents(eventsarr) {
    // const user = this.state.users.find(user => user.id === userId);

    this.setState({
      events: [this.state.events, ...eventsarr]
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
    });
  }

  handledropdown(e) {
    // e.preventDefault();
    this.state.dropdownvalue = e.target.innerText;
    dropdown.innerText=this.state.dropdownvalue;
  }

  createnewevent(e) { //checking the event fields and navigate depending on..
      e.preventDefault();
      console.log( eventtitle.value ,where.value , enddate.value , startdate.value );
    if (eventtitle.value == "") {
      console.log("you should add event title ");
      this.state.errorMessages=[...this.state.errorMessages , "you should add event title "];
        
      
    } //if title
    if (where.value == "") {
      console.log("you should add event location ");
      this.state.errorMessages=[...this.state.errorMessages , "you should add event location "];

    
    } //ifwhere
    if (!(enddate.value && startdate.value)) {
      console.log("you should Add start and end event dates ");
      this.state.errorMessages=[...this.state.errorMessages , "you should Add start and end event dates"];

    } //ifstart and end date

    if(eventtitle.value && this.state.dropdownvalue && enddate.value && startdate.value && where.value){
      this.state.continueflag=true 
      this.setState(
          [this.state.navigatefroma ="/MyEvents", this.state]
      )
      console.log(this.state.continueflag);
    }


  } //createnewevent()

  navigateahref(){///navigate according the fields -- if filled true -continue , else stay in this component
    if(this.state.continueflag){
      return "/MyEvents";
    }//if
    else{
      return ("/AddEvent");
    }
    
  }

  render() {
    let dropdown = document.getElementById("#dropdown");
    let eventtitle = document.getElementById("#eventtitle");
    let startdate = document.getElementById("#startdate");
    let enddate = document.getElementById("#enddate");
    let where = document.getElementById("#where");

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
                            <Dropdown.Toggle
                              variant="secondary"
                              id="dropdown"
                            >
                              Choose A Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item onClick={this.handledropdown}>
                                Birthday
                              </Dropdown.Item>
                              <Dropdown.Item onClick={this.handledropdown}>
                                Wedding
                              </Dropdown.Item>
                              <Dropdown.Item onClick={this.handledropdown}>
                                New Born
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <span ref={this.state.dropdownvalue} />
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
                            id="eventtitle"
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
                          id="startdate"
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
                          id="enddate"
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
                          id="where"
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
                      <div className="col-md-7" />
                      <div className="col-md-5">
                        <br />
                        <button
                          id="searchEventbtn"
                          type="button"
                          className="btn btn-outline-info"
                          onClick={this.createnewevent}
                        > 
                          {/* <a href={this.state.navigatefroma}>Create event box</a> */}
                           <NavLink to="/MyEvents">Create event box</NavLink>
                          
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
