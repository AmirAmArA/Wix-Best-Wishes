import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom'


import EventCardToView from "./EventCardToView";

import { Dropdown, DropdownItem } from "react-bootstrap";
import MyWishes from "./MyWishes";
export default class SearchEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 1,
          name: "Mustafa",
          avatar: "images/avatar.jpg",
          startdate: "2019-01-01",
          enddate: "2019-01-01",
          description: "Marhaba, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        },
        {
          id: "2",
          name: "Suhir",
          avatar: "images/avatar.jpg",
          startdate: "2019-01-01",
          enddate: "2019-01-01",
          description: "Hello, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        },
        {
          id: 3,
          name: "Shahar",
          avatar: "images/avatar2.png",
          startdate: "2019-01-01",
          enddate: "2019-01-01",
          description: "Shalom, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        }
      ],
      eventsToShow: [],
      errorMessages: [],
      continueSearchFlag: false
    };
    this.updateEvents = this.updateEvents.bind(this);
    this.showEvents = this.showEvents.bind(this);
    this.addWishInSearchEventCompo = this.addWishInSearchEventCompo.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  } //constructor

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

  showEvents(e) {
    // e.preventDefault();

    console.log(eventid.value);
    console.log(where.value);
    console.log(enddate.value);
    console.log(startdate.value);
    this.state.events.map(event => {
      console.log("the event id is ", event.id);

      if (eventid.value == "" || eventid.value < 0) {
        console.log("eventid should be bigger  than 0 and not empty");
        this.state.errorMessages.push(
          "eventid should be bigger  than 0 and not empty"
        );
        // e.preventDefault();
      } //if
      else {
        this.state.continueSearchFlag = true;
      }
      if (where.value == "") {
        console.log("you should add event location ");
        this.state.errorMessages.push(
          "eventid should be bigger  than 0 and not empty"
        );
        // e.preventDefault();
      }
      if (!(enddate.value && startdate.value)) {
        console.log("you should Add start and end event dates ");
        this.state.errorMessages.push(
          "you should Add start and end event dates"
        );
        // e.preventDefault();
      }

      if (this.state.continueSearchFlag) {
        if (event.id == eventid.value) {
          this.state.eventsToShow.push(event);
        } else {
          if (
            event.startdate == startdate.value &&
            event.enddate == enddate.value &&
            event.where == where.value
          ) {
            this.state.eventsToShow.push(event);
          } //if
        } //else
      } //if continue flag
      console.log(this.state.eventsToShow);
    });

    ReactDOM.render(
      this.state.eventsToShow.map(event1 => (
        <EventCardToView {...event1} key={event1.id} />
      )),
      document.querySelector("#showeventcardsdiv")
    );
  } //showevents()

  addWishInSearchEventCompo() {
    console.log(this.state.eventsToShow[0].id)
    ReactDOM.render(<MyWishes eventid={this.state.eventsToShow[0].id}/>, document.querySelector("#mainrowdiv"));
  }

  onInputChange() {} //oninput...()

  render() {
    let eventid = document.getElementById("#eventid");
    let startdate = document.getElementById("#startdate");
    let enddate = document.getElementById("#enddate");
    let where = document.getElementById("#where");

    return (
      <>
        <div className="row" id="mainrowdiv">
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
                  id="eventid"
                />
                <br />
                <div className="btn-group  btn-group-md ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      onBlur={this.onInputChange}
                    >
                      Choose A Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Birthday</Dropdown.Item>
                      <Dropdown.Item>Wedding</Dropdown.Item>
                      <Dropdown.Item>New Born</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <br />
                <div>
                  <br />
                </div>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Start"
                  id="startdate"
                />
                <br />
                <input
                  className="form-control"
                  type="date"
                  placeholder="End"
                  id="enddate"
                />
                <br />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Event Location"
                  id="where"
                />
                <br />
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={this.showEvents}
                >
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

                  <div className="row" id="showeventcardsdiv">
                    {/* <EventCardToView /> */}
                    {this.state.eventsToShow.map(event => (
                      <EventCardToView
                        {...event}
                        key={event.id}
                        // click={this.addWishInSearchEventCompo()}
                      />
                    ))}

                    {/* <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView /> */}
                  </div>
                </div>
              </div>

              <div className="col-md-1" />
            </div>
            <div className="row">
              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
