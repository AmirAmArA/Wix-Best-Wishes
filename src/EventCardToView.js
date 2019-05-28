import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { Card , Button, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

import "./general.css";
import logo from "../assets/logo.PNG";

import {Link} from "react-router-dom";

import MyWishes from "./MyWishes";
export default class EventCardToView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageurl : "",
      name : "",
      lastUpdateTime : "" ,
      description : "",
      startdate: "",
      enddate: "",
      eventid: "" || this.props.eventid



    };
    // this.updateEvents = this.updateEvents.bind(this);
    // this.showEvents = this.showEvents.bind(this);
    console.log(this.props);
  }
  render() {
    let reference = "/MyWishes/" + this.props.id;
    console.log(this.props);
    console.log(reference);

    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    const aa = { ...this.props };
    
    // localStorage.setItem("eventname", this.props.name);
    return (
      <>
       <Card  className="card-body text-center  eventcards  col-md-4">
          <Card.Img
            className=" img-fluid img"
            src={
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              
            }
            alt="card image"
          />
          <Card.Body className="card-body text-center  eventcards ">
            <Card.Title>
              <h4>
                {this.props.name} <br />
                {this.props.lastUpdateTime}
              </h4>
            </Card.Title>
            <Card.Text className="colorgreen">
              <p className="card-text ">{this.props.description}</p>
            </Card.Text>
            <Button
             id="searchEventbtn"
              type="button"
              className="btn btn-outline-info"
            >
              <NavLink to={reference}>Add A Wish</NavLink>
            </Button>    
          
          </Card.Body>
        </Card> 
        
          {/* <div className="card-body text-center  eventcards col-md-4">
            <p>
              <img
                className=" img-fluid"
                src={
                  "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                }
                alt="card image"
              />
            </p>
            <h4 className="card-title">
              {this.props.name}
              {this.props.lastUpdateTime}
            </h4>
            <p className="card-text">{this.props.description}</p>
            <button
              id="searchEventbtn"
              type="button"
              className="btn btn-outline-info"
              //  onClick={() =>this.props.click}
            >
             
               <a href={reference}>Add A Wish</a> 
            </button>
          </div> */}
        
      </>
    );
  }
}//class

// EventCardToView.propTypes = {
//   key: PropTypes.string,
//   name: PropTypes.string,
//   lastUpdateTime: PropTypes.string,
//   description: PropTypes.string,
//   startdate: PropTypes.string,
//   enddate: PropTypes.string,
//   where : PropTypes.string
//  };
