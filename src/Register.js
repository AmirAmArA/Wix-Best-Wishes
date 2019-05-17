import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import {
  Form,
  InputGroup,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

import validator, { field } from "./RegisterVaildator";
import * as api from "./RegisterApi";
import "./general.css";
export default class App extends Component {
   
  constructor() {
    super();
    this.state = {
      
      name: field({ name: "name", minLength: 2 }),
      email: field({
        name: "email",
        pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
      }),
      password: field({ name: "password", pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ ,minLength: 8})
      
      
     
    };
    
    this.registerErr = '';
    this.successRegister = false;
    this.emailExists = false;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
     console.log(this.successRegister);
     
  }

  onInputChange({ target: { name, value } }) {
    console.log(name, value);

    //Each value should be validated each time it changes!
    //For example: username should be
    //1- required and
    //2- more than 2 characters

    //So we did required...
    //How can we do #2?
    //How can we know we need to check this value for minimum length?
    //We need to further change our state...
    
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        ...validator(value, name, this.state[name].validations)
      }
    });
  }
  
  
  
  onSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, this.state);
    let counter = 0;
    for (let key in user) {
      const { value, validations } = user[key];
      
      const { valid, errors } = validator(value, key, validations);

      if (!valid) {
        counter++;
        console.log(counter);
        user[key].valid = valid;
        user[key].errors = errors;
      }

      
    }

    this.setState({ ...user });
    //Send data to somewhere
    //...
    const { name,  email, password } = this.state;
    const result = api.registerUser(name,  email, password);
    if(counter == 0 ){
    if (result.userId){      
      this.successRegister = true;
      this.emailExists = false ; 
    }
    else if(result.error){

      this.successRegister = false;
      this.emailExists = true;
      this.registerErr = result.error.msg;
      console.log(`this is error account ${this.registerErr}`);
    }
    
  }
    
  }

  render() {
    return (
      
        <Container >
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h1>Registration</h1>
              <hr />
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>
              <Row>
          <Alert show={this.successRegister} variant="success">Your account was created successfully</Alert>
          </Row>
          <Row>
          <Alert show={this.emailExists}  variant="danger">{this.registerErr}</Alert>
          </Row>
              <Row>
                  <Col>
                    <Form.Group controlId="formControlName">
                      
                      <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="name"
                          placeholder="Enter your display Name"
                          aria-label="Name"
                          defaultValue={this.state.name.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.name.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
                    </Form.Group>
                  </Col>
                   </Row>     
                  
               <Row>
                  <Col>
                    <Form.Group controlId="formBasicEmail">
                      
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faMailBulk} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                          name="email"
                          placeholder="Enter your Username(Email)"
                          aria-label="email"
                          defaultValue={this.state.email.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.email.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}

                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faKey} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                          
                          name="password"
                          type="password"
                          placeholder="Password"
                          aria-label="password"
                          defaultValue={this.state.password.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.password.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
                    </Form.Group>
                  </Col>

                 
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      
    );
  }
}
