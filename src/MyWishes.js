import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import WishCard from "./WishCard";
import { NavLink } from 'react-router-dom'
import { Container, Row, Card, Col } from "react-bootstrap";


export default class MyWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      wishes: [
        {
          id: 1,
          name: "Mustafa",
          avatar: "images/avatar.jpg",
          score: 24,
          description: "Marhaba, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 2,
          name: "Suhir",
          avatar: "images/avatar.jpg",
          score: 19,
          description: "Hello, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 3,
          name: "Shahar",
          avatar: "images/avatar2.png",
          score: 11,
          description: "Shalom, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        },
        {
          id: 4,
          name: "Muhamad",
          avatar: "images/avatar2.png",
          score: 10,
          description: "Ahalan, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL")
        }
      ],
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
        }],
      eventDetails: [this.props]
    };
    // console.log(this.props);
    this.updateWishes = this.updateWishes.bind(this);
  }

  updateWishes(wishesarr) {
    // const user = this.state.users.find(user => user.id === userId);

    this.setState({
      wishes: [this.state.wishes, ...wishesarr].sort(
        (wish1, wish2) => wish2.lastUpdateTime - wish1.lastUpdateTime
      )
    });
  }

  render() {
    let eventid = this.props.match.params.eventid;
    let eventname = "";
    let where = "Location";
    let startdate = "";
    this.state.events.map(event => {
      if (event.id == eventid) {
        eventname = event.name
        // where = event.where
        startdate = event.startdate;

      }//if

    });
    // eventname= localStorage.getItem('eventname');
    // console.log(this.props.name)
    console.log(this.props.match.params.eventid);//here we recieve the eventid
    let linktosend = "/AddAWish/" + this.props.match.params.eventid;
    // console.log(this.props.eventid)
    return (
      <>
        <Container>
          <Row>
            <br /><br />
          </Row>

          <Row>
            <Col md={3}>
              <Card border="info" className=" mb-3 wishcard">
                <Card.Header className=" border-info colorwhite">
                  Event Info
                </Card.Header>
                <Card.Body >
                  <Row>
                    <Col >
                      <span>
                        ID : {eventid}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        Name:{eventname}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col >
                      <span>When: {startdate}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col >
                      <span>Where: {where}</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <Col >
                  <button type="button" className="btn btn-outline-warning">

                    <NavLink to={linktosend}>Add a Best Wish !!</NavLink>

                    {/* <a className="coloryellow" href="/AddAWish"></a> */}
                  </button>
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <Row>
                {/* <div className="col-md-4">
                  <div className="card border-light mb-3 maxwidth18">
                    <div className="card-header">Wish1</div>
                    <div className="card-body">
                      <img src="logo.PNG" className="card-img-top" />
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div> */}
              </Row>
              <Row>
                {this.state.wishes.map(wish => (
                  <WishCard {...wish} key={wish.id} />
                ))}
              </Row>

            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
