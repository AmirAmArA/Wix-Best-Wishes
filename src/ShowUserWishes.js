import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'
import { Row, Col, Container ,Card} from "react-bootstrap";
import "./general.css";
import logo from "../assets/logo.PNG";
import WishCard from './WishCard';

export default class ShowUserWishes extends React.Component {
  constructor(){
    super();
    this.state = {

        wishes: [{
            id: 1,
            name: 'Mustafa',
            avatar: 'images/avatar.jpg',
            score: 24,
            description: 'Marhaba, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        },
            {
            id: 2,
            name: 'Suhir',
            avatar: 'images/avatar.jpg',
            score: 19,
            description: 'Hello, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        },
        {
            id: 3,
            name: 'Shahar',
            avatar: 'images/avatar2.png',
            score: 11,
            description: 'Shalom, I love Avatars...',
            lastUpdateTime: new Date().toLocaleString('he-IL'),
            callercomp: "ShowUserWishes"
        }],
         
    }
    this.updateWishes = this.updateWishes.bind(this);
}

updateWishes(wishesarr){
    // const user = this.state.users.find(user => user.id === userId);

    this.setState({
        wishes: [this.state.wishes , ...wishesarr]                             
                        //  .push(wish => {
                        //     if(user.id === userId){
                        //         return {
                        //             ...user, 
                        //             score: user.score+1,
                        //             lastUpdateTime: new Date().toLocaleString('he-IL')
                        //         }//return
                        //     }//if
                        //     return user;
                        // })
                        .sort((wish1, wish2) => wish2.lastUpdateTime - wish1.lastUpdateTime)
                        
    
                      }
    
    );
}

  
  
  render() {
    
    // console.log("calling components is" ,this.state.callercomp)
    return <>
        <Container>
      <Row><br/><br/></Row>
      <Row>
      <Col md={3}>
          <Card  border="info" className="mb-3 wishcard" >
            <Card.Header  >
              My Wishes
            </Card.Header>
            
          </Card>
        </Col>
        <Col md={9}  >
          
          <Row>
          {this.state.wishes.map(wish => <WishCard  {...wish  }    />) }
          
          
          </Row>
          
        </Col>
      </Row>
    </Container>



    </>;
  }
}