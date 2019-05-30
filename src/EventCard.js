import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'
import { Card , Button, Container, Row, Col } from "react-bootstrap";


import "./general.css";
import logo from "../assets/logo.PNG";
import App from "./App"

export default class EventCard extends React.Component {
  render() {
    let editnav = "/EditEvent/"+this.props.id
    let wishesnav = "/MyWishes/"+this.props.id;
    return <>
        <Card  className="card-body text-center  eventcards  col-md-4 ">
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
              variant="outline-danger"
              id="searchEventbtn"
              type="button"
              className="btn btn-outline-info"
            >
              Delete
            </Button>
            <Button
              variant="outline-primary"
              id="searchEventbtn"
              type="button"
              className="btn btn-outline-info"
            >
              <NavLink to={editnav}>Edit</NavLink>
            </Button>
            <Button
              variant="outline-primary"
              id="searchEventbtn"
              type="button"
              className="btn btn-outline-info"
            >
              <NavLink to={wishesnav}>View Wishes</NavLink>
            </Button>
          </Card.Body>
        </Card> 

    </>;
  }
}//class

EventCard.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  lastUpdateTime: PropTypes.string,
  description: PropTypes.string,
  startdate: PropTypes.string,
  enddate: PropTypes.string,
  where : PropTypes.string
 };
