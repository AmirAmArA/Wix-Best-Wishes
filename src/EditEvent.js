import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'


import "./general.css";
import logo from "../assets/logo.PNG";
import { Card,Row,Col,Button,ButtonGroup,Dropdown,Form} from "react-bootstrap";

export default class EditEvent extends React.Component {
  
  constructor(){
    super();
    this.state={
      eventCategory: "" ,
      startDate:"" ,
      endDate:"",
      description : ""
    }//state
  }
  
  render() {
    return (
      <>
        <Row>
          <br />
          <br />
        </Row>

        <Row>
        <Col md={1} > </Col>
        <Col md={10} >
            <Card className="card mb-3  background-20060b4b">
               <Card.Body> 
                                 <Row>
                <Col md={4} > </Col>
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span >Category</span>
                      </Col>
                      <Col md={8} >
                        
                          <Dropdown as={ButtonGroup}>
  
  <Dropdown.Toggle split variant="light" id="dropdown-split-basic" >Choose Category</Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"> Birthday</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Wedding</Dropdown.Item>
    <Dropdown.Item href="#/action-3">New Born</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                            
                         
 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>

                <Row>
                <Col md={4} > </Col>
                <Col md={4} >
                    <br />
                    <Row>
                    <Col md={4} >
                        <span >Title</span>
                      </Col>
                      <Col md={8} >
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="write event title"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>
                <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Row>
                    <Col md={4}>
                        <span >Start Date </span>
                      </Col>
                      <Col md={8}>
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                        />
                        <br />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>
                <Row>
                <Col md={4} > </Col>
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span >End Date </span>
                      </Col>
                      <Col md={8} >
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                        />
                        <br />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>

                <Row>
                <Col md={4} > </Col>
                <Col md={4} >
                    <Row>
                    <Col md={4} >
                        <span >Where </span>
                      </Col>
                      <Col md={8} >
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Type Event Location"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>

                <Row>
                <Col md={4} > </Col>
                <Col md={4} >
                    <Row>
                    <Col md={7} >
                        
                        
                      </Col>
                      <Col md={5} >
                        <br />
                        <Button
                          id="searchEventbtn"
                          type="button"
                          className="btn btn-outline-info"
                        >
                        {/* <a href="/MyEvents">Save Changes</a> */}
                        <NavLink to="/MyEvents">Save Changes</NavLink>
                          
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} > </Col>
                </Row>
              </Card.Body>
            </Card>
            <Col md={1} > </Col>
          </Col>
        </Row>
      </>
    );
  }
}//class

EditEvent.propTypes = {
  eventCategory: PropTypes.string,
  startDate: PropTypes.string,
  lastUpdateTime: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string
};

//afterwards to add .isRequired