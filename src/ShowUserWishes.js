import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Card ,Alert } from "react-bootstrap";
import "./general.css";
import WishCard from "./WishCard";
import WishContext from './WishContext';
import axios from 'axios';
// import { userwishes } from './EventsApi'



export default class ShowUserWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      wishes: [] ,
      isLoading: false

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
    this.setState({isLoading:true});
    userwishes()
    .then(wishes => this.setState({isLoading: false, wishes}));
  }
  render() {
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
                  <WishCard {...wish} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
