import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import WishCard from "./WishCard";
import { NavLink } from "react-router-dom";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { getMyWishes } from "./EventsApi";
import {getWishes} from './Api'
export default class MyWishes extends React.Component {
  constructor() {
    super();
     

    this.state = {
      eventDetails: [this.props] ,
      wishes :[{
        "userID": "1",
        "ID": "1",
        "from": "Majde",
        "wishContent": "Happy birthday wish you all the best",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "2",
        "from": "Sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    }]
    };
    this.updateWishes = this.updateWishes.bind(this);
    // this.getwishes2=this.
  }//constructor

  // this.setState({wishes : [...a]})
// 
// getwishes2=()=>{
//   getWishes().then(function(result){
//     console.log(result)
//     return result;
//   })
//  }
  updateWishes(wishesarr) {
    this.setState({
      wishes: [this.state.wishes, ...wishesarr].sort(
        (wish1, wish2) => wish2.lastUpdateTime - wish1.lastUpdateTime
      )
    });
  }
  
  componentDidMount(){
    
    console.log(this.state.wishes);
  }
  render() {
    let eventid = this.props.match.params.eventid;
   
    let properties = localStorage.getItem('eventInfo');
    console.log(this.props.match.params.eventid); //here we recieve the eventid
    let linktosend = "/AddAWish/" + this.props.match.params.eventid;
    let wishes = getMyWishes(eventid);
    return (
      <>
        <Container>
          <Row>
            <br />
            <br />
          </Row>

          <Row>
            <Col md={3}>
              <Card border="info" className=" mb-3 wishcard">
                <Card.Header className=" border-info colorwhite">
                  Event Info
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <span>ID : {eventid}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>Name:{localStorage.getItem('title')}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>When: {localStorage.getItem('startDate')}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>Where: {localStorage.getItem('location')}</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <Col>
                  <Button
                    type="button"
                    className="btn btn-outline-primary whiteto"
                  >
                    <NavLink className="whiteto" to={linktosend}>
                      Add a Best Wish !!
                    </NavLink>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <Row />
              <Row>
                {this.state.wishes.map(wish => (
                  <WishCard {...wish} key={wish.id} callercomp={"aaa"} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
