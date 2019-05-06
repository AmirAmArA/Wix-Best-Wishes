import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import EventCard from "./EventCard";

export default class MyWishes extends React.Component {
  constructor() {
    super();
    this.state = {

      events: [
        {
          id: 1,
          name: "event1",
          avatar: "images/avatar.jpg",
          score: 24,
          description: "Marhaba, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 2,
          name: "event2",
          avatar: "images/avatar.jpg",
          score: 19,
          description: "Hello, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 3,
          name: "event3",
          avatar: "images/avatar2.png",
          score: 11,
          description: "Shalom, I love Avatars.................................................................................................................................................................................................................................................................",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 4,
          name: "event4",
          avatar: "images/avatar2.png",
          score: 10,
          description: "Ahalan, I love Avatars...",
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
                {/* <EventCard  /> */}
              {this.state.events.map(event => <EventCard {...event} key={event.id}  />)} 

                {/* <EventCard />
                <EventCard /> */}
              </div>
              <div className="row">
                {/* <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard /> */}
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
          <div className="col-md-4">
            <button className="btn btn-outline-info " type="submit">
              <a href="/AddEvent">Add new event box</a>
            </button>
          </div>
        </div>
      </>
    );
  }
}
