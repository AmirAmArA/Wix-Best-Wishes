import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import EventCard from "./EventCard";
import { NavLink } from 'react-router-dom'
import { Row, Col, Container, Alert } from "react-bootstrap";
import { userevents } from "./EventsApi";
import WishContext from './WishContext';
import { myEvents } from "./Api";

export default class MyWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      events: []
    };
    this.updateEvents = this.updateEvents.bind(this);

    console.log("contetx" , WishContext._currentValue.userId)
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
    }
    );
  }

  componentDidMount(){
    this.setState({isLoading:true});
    userevents()
    .then(events => this.setState({isLoading: false, events}));
  }

  render() {
    // localStorage.getItem
    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('username'));
    return (
      <>
        <Container>
          <Row>
            <br /><br />
          </Row>
          <Row>
            <Col md={1} />
            <Col md={10}>
              <h3 className="whiteto">Event List:</h3>
            </Col>
            <Col md={1} />
          </Row>
          <Row>
            <Col md={1} />
            <Col md={10}>
                {this.state.isLoading && <Alert variant="primary" className="text-center">Loading...</Alert>}
              <Row>
                {this.state.events.map(event => <EventCard key={event.id}{...event} />)}

                {/* {userevents().map(event => <EventCard key={event.id}{...event} />)} */}
              </Row>
            </Col>
          </Row>
          <Col md={1} />
        </Container>
        <Row>
          <br /><br />
        </Row>
        {/*   <Row>
          <Col md={4} />
          <Col md={4} />
     <Col md={4}>*/}
        {/* <button className="btn btn-outline-info " type="submit">
            <NavLink to="/AddEvent">Add new event box</NavLink>
             
              {/* <a href="/AddEvent"></a> */}
        {/* </button> */}
        {/* </Col>
        </Row>*/}
      </>
    );
  }
}
myEvents.contextType = WishContext;
