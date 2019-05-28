import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App";

import { Dropdown,Button, Row, Card ,Col, Form} from "react-bootstrap";

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
      continueflag: false,
      navigatefroma: "/AddEvent",
      userid: 2
    }; //state
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
    dropdown.innerText = this.state.dropdownvalue;
    console.log(this.state.dropdownvalue);
  }

  createnewevent(e) {
    //checking the event fields and navigate depending on..
    e.preventDefault();
    console.log(eventtitle.value, where.value, enddate.value, startdate.value);

      if(this.state.dropdownvalue==""){
        categoryspan.innerText = "Please Choose Category";
      }//if  
      if(this.state.dropdownvalue!=""){
        categoryspan.innerText = "";
      }//if  

    if (eventtitle.value == "") {
      console.log("you should add event title ");
      spantitle.innerText = "Please Enter Title";
    } //if title
    if (eventtitle.value != "") {
      spantitle.innerText = "";
    } //if
    if (where.value == "") {
      console.log("you should add event location ");
      spanlocation.innerText = "Please Enter Event Location";
    } //ifwhere
    if (where.value != "") {
      spanlocation.innerText = "";
    } //if
    if (!enddate.value) {
      spanenddate.innerText = "Please Enter End Date";

      console.log("you should Add start and end event dates ");
    } //if end date
    if (enddate.value) {
      spanenddate.innerText = "";
    } //if
    // spantitle.innerText="Please Enter Title";

    if (!startdate.value) {
      spanstartdate.innerText = "Please Enter Event Start Date";
    } //if
    if (startdate.value) {
      spanstartdate.innerText = "";
    } //if

    if (
      eventtitle.value &&
      this.state.dropdownvalue &&
      enddate.value &&
      startdate.value &&
      where.value
    ) {
      this.state.continueflag = true;
      this.setState([(this.state.navigatefroma = "/MyEvents"), this.state]);
      console.log(this.state.continueflag);
    }///if
  } //createnewevent()

  navigateahref() {
    ///navigate according the fields -- if filled true -continue , else stay in this component
    if (this.state.continueflag) {
      return "/MyEvents";
    } //if
    else {
      return "/AddEvent";
    }
  }

  render() {
    let dropdown = document.getElementById("#dropdown");
    let eventtitle = document.getElementById("#eventtitle");
    let startdate = document.getElementById("#startdate");
    let enddate = document.getElementById("#enddate");
    let where = document.getElementById("#where");

    let createventref = this.state.continueflag ? "/MyEvents"  :"/AddEvent" ;

    let categoryspan =document.getElementById("#categoryspan"); 
    let spantitle = document.getElementById("#spantitle");
    let spanstartdate = document.getElementById("#spanstartdate");
    let spanenddate = document.getElementById("#spanenddate");
    let spanlocation = document.getElementById("#spanlocation");

    return (
      <>
        <Row>
          <br />
          <br />
        </Row>

        <Row>
        <Col md={1} />
        <Col md={10} >
            <Card className=" mb-3  background-20060b4b">
              <Card.Body>
                <Row>
                <Col md={4} />
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span className="colorWhite">Category</span>
                      </Col>
                      <Col md={8} >
                       
                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown">
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
                       
                        <br/>
                        <div>
                        <span id="categoryspan"> 
                        </span> 
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>

                <Row>
                <Col md={4} />
                <Col md={4} >
                    <br />
                    <Row>
                    <Col md={4} >
                        <span className="colorWhite">Title</span>
                      </Col>
                      <Col md={8} >
                        <Form.Group>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="write event title"
                            id="eventtitle"
                          />

                          <div>
                            <span id="spantitle" />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>
                <Row>
                <Col md={4} />
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span className="colorWhite">Start Date </span>
                      </Col>
                      <Col md={8} >
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          id="startdate"
                        />

                        <Row>
                          <span id="spanstartdate">
                          
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>
                <Row>
                <Col md={4} />
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span className="colorWhite">End Date </span>
                      </Col>
                      <Col md={8} >
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          id="enddate"
                        />
                        <div>
                          <span id="spanenddate">
                          
                          </span>
                        </div>
                        <br />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>

                <Row>
                <Col md={4} />
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span className="colorWhite">Where </span>
                      </Col>
                      <Col md={8} >
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Type Event Location"
                          id="where"
                        />
                        <div>
                          <span id="spanlocation">
                          
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>

                <Row>
                <Col md={4} />
                <Col md={4} >
                    <Row>
                    <Col md={7} />
                    <Col md={5} >
                        <br />
                        <Button
                          id="searchEventbtn"
                          type="button"
                          variant="outline-info"
                          onClick={this.createnewevent}
                        >
                          {/* <a href={this.state.navigatefroma}>Create event box</a> */}
                          {/* "/MyEvents" */}
                          
                          <NavLink to={createventref}>
                          Create New Event{" "}
                          </NavLink>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} />
                </Row>
              </Card.Body>
            </Card>
            <Col md={1} />
          </Col>
        </Row>
      </>
    );
  }
}