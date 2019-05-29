import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import WishCard from "./WishCard";
import { NavLink } from "react-router-dom";
import { Container, Row, Card, Col ,Button} from "react-bootstrap";
import { getMyWishes } from "./EventsApi";

export default class MyWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      eventDetails: [this.props]
    };
    this.updateWishes = this.updateWishes.bind(this);
  }

  updateWishes(wishesarr) {
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
                      <span>Name:{eventname}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>When: {startdate}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>Where: {where}</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <Col>
                  <Button type="button" className="btn btn-outline-warning">
                    <NavLink to={linktosend}>Add a Best Wish !!</NavLink>

                    {/* <a className="coloryellow" href="/AddAWish"></a> */}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <Row />
              <Row>
                {wishes.map(wish => (
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
