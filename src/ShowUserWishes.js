import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./general.css";
import WishCard from "./WishCard";
import WishContext from './WishContext';
export default class ShowUserWishes extends React.Component {
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
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        },
        {
          id: 2,
          name: "Suhir",
          avatar: "images/avatar.jpg",
          score: 19,
          description: "Hello, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        },
        {
          id: 3,
          name: "Shahar",
          avatar: "images/avatar2.png",
          score: 11,
          description: "Shalom, I love Avatars...",
          lastUpdateTime: new Date().toLocaleString("he-IL"),
          callercomp: "ShowUserWishes"
        }
      ]
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
