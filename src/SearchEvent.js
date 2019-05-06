import React from "react";
import ReactDOM from "react-dom";

import EventCardToView from "./EventCardToView";

import {Dropdown , DropdownItem} from 'react-bootstrap';
export default class SearchEvent extends React.Component {
  constructor(){
    super();
    this.state = {

        events: [{
            id: 1,
            name: 'Mustafa',
            avatar: 'images/avatar.jpg',
            score: 24,
            description: 'Marhaba, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        },
            {
            id: 2,
            name: 'Suhir',
            avatar: 'images/avatar.jpg',
            score: 19,
            description: 'Hello, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        },
        {
            id: 3,
            name: 'Shahar',
            avatar: 'images/avatar2.png',
            score: 11,
            description: 'Shalom, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        }],
         
    }
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
                <button type="button" className="btn btn-outline-warning">
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
                    <EventCardToView />
                    <EventCardToView />
                    <EventCardToView />
                  </div>
                  <div className="row">
                    {/* <EventCardToView /> */}
          {this.state.events.map(event => <EventCardToView  {...event  }  key={event.id}  />) }

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
