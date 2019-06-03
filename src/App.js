import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavComponent } from "./NavComponent";
import About from "./About";
import AddAWish from "./AddAWish";
import AddEvent from "./AddEvent";
import EventCard from "./EventCard";
import HomeComponent from "./HomeComponents";
import MyEvents from "./MyEvents";
import Login from "./Login";
import MyWishes from "./MyWishes";
import Register from "./Register";
import WishCard from "./WishCard";
import SearchEvent from "./SearchEvent";
import ShowUserWishes from "./ShowUserWishes";
import EditEvent from "./EditEvent";
import EventCardToView from "./EventCardToView";

//the context we R going to use
import WishContext from './WishContext';
//then we also need a provider to the context


import {login} from './WishContext'

export class App extends React.Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.login = WishContext.login; 
    // this.login.bind(this);


    this.state = {
      userId: -1,
      username: '',
      events : [{
        id: 1,
        name: "event1",
        avatar: "images/avatar.jpg",
        score: 24,
        description: "Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love AvatarsMarhaba, I love AvatarsMarhaba, I love Avatars",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      },
      {
        id: 2,
        name: "event2",
        avatar: "images/avatar.jpg",
        score: 19,
        description: "Hello, I love Avatars...",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      },
      {
        id: 3,
        name: "event3",
        avatar: "images/avatar2.png",
        score: 11,
        description: "Shalom, I love Avatars",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      },
      {
        id: 4,
        name: "event4",
        avatar: "images/avatar2.png",
        score: 10,
        description: "Ahalan, I love Avatars...",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      },
      {
        id: 5,
        name: "event5",
        avatar: "images/avatar2.png",
        score: 10,
        description: "Ahalan, I love Avatars...",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      },
      {
        id: 6,
        name: "event6",
        avatar: "images/avatar2.png",
        score: 11,
        description: "Ahalan, I love Avatars...",
        lastUpdateTime: new Date().toLocaleString("he-IL")
      }] ,
      login: this.login,
    logout: this.logout

    };
    console.log("context" ,WishContext._currentValue  );
  }

  // login(username, password) {
  //   this.setState({
  //     username
  //   });
  // }




  logout(){

    this.setState({
      username:''
    });

    // return <Redirect to="/"/>
    this.props.history.push('/');

  }

  render() {
    return (
      <WishContext.Provider value={this.state}>
        <Router>
          <NavComponent />
          
          {/* <Route 
          path='/'
          render={ props => <MyComponent {...props} />}
        /> */}

          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route path="/addawish/:eventid" component={AddAWish} />
            <Route path="/AddEvent" component={AddEvent} />
            <Route path="/EventCard" component={EventCard} />
            <Route path="/Login" component={Login} />
            {/*  */}
            {/* <Route path="/MyWishes" component={MyWishes} /> */}

            <Route path="/MyWishes/:eventid" component={MyWishes} />
            <Route path="/Register" component={Register} />
            <Route path="/WishCard" component={WishCard} />
            <Route path="/MyEvents" component={MyEvents} />
            <Route path="/SearchEvent" component={SearchEvent} />
            <Route path="/ShowUserWishes" component={ShowUserWishes} />
            <Route path="/EditEvent/:eventid" component={EditEvent} />
            <Route path="/EventCardToView" component={EventCardToView} />
          </Switch>
        </Router>
      </WishContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
