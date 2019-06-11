import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Card ,Alert } from "react-bootstrap";
import "./general.css";
import WishCard from "./WishCard";
import WishContext from './WishContext';
import axios from 'axios';
import { userwishes } from './EventsApi'
import {getWishes} from './Api'

import {getUserWishesByUserID} from './api'


export default class ShowUserWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      wishes: [{
        "userID": "1",
        "ID": "1",
        "from": "Shahar",
        "wishContent": "Happy birthday wish you all the best",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "2",
        "from": "Shahar",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "3",
        "from": "Shahar",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    }] ,
      isLoading: false,
      wishes2:[]

    };
    this.updateWishes = this.updateWishes.bind(this);
// console.log("context" ,WishContext._currentValue.userId)
  }

  updateWishes(wishesarr) {
    this.setState({
      wishes: [this.state.wishes, ...wishesarr]
        .sort((wish1, wish2) => wish2.lastUpdateTime - wish1.lastUpdateTime)
    });
  }
  componentDidMount(){
    let helparr=[];
    this.setState({isLoading:true});
    // this.context.userId
    getWishes()
    .then(wishes => {
      console.log(wishes)
      wishes.userID==="1" && wishes.from==="Shahar"?( 
        helparr.push(wishes)
      ) :
      this.setState({isLoading: false})

    }
      );
      this.setState({isLoading: false, wishes2 : helparr})
  
    console.log("wishes from state =" ,this.state.wishes2)
    // getUserWishesByUserID(1)
    // .then(wishes2 => this.setState({ wishes2 : wishes2 }));
    // console.log("wishes2 from state=",this.state.wishes2);

  }
  render() {
    // console.log("wishes from state =" ,this.state.wishes2)

    return (
      <>
        <Container>
          <Row>
            <br />
            <br />
          </Row>
          <Row>
            <Col md={3}>
              <Card border="info" className="mb-3 wishcard">
                <Card.Header>My Wishes</Card.Header>
              </Card>
            </Col>
            <Col md={9}>
            {this.state.isLoading && <Alert variant="primary" className="text-center">Loading...</Alert>}

              <Row>
                {this.state.wishes.map(wish => (
                  <WishCard {...wish} callercomp = "ShowUserWishes" />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
