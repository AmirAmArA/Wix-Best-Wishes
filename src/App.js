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
import WishContext from "./WishContext";
//then we also need a provider to the context

import { login } from "./Api";

export class App extends React.Component {
  constructor() {
    super();
    this.setuserid=this.setuserid.bind(this);
    this.logout = this.logout.bind(this);
    this.setusername=this.setusername.bind(this)
    // this.login = login;
    // this.login.bind(this);
      this.setuserid = this.setuserid.bind(this)
    this.state = {
      userId: 0,
      username: '',
      history: '',
      setusername: (name)=> { },
      login: login,
      logout: this.logout ,
      setuserid : this.setuserid
    };
    console.log("context", WishContext._currentValue);
  }
  setusername (name) {
    this.setState({
      username: "Majde"})
      this.context.username="Majde";
}
  logout() {
    this.setState({
      username: "" ,
      userId : ''
    });
    // this.context.userId = -1;
    localStorage.setItem("userId" , '');
    // localStorage.removeItem(userId)
    // localStorage.clear();

    // return <Redirect to="/"/>
    this.props.history.push("/");

  }
   setuserid(id){
    this.setState({
      userId : id
    })
    console.log("user id was set successfully to local storage");

  }
  componentDidMount() {
   let uid= localStorage.getItem("userId");
    if (uid) {
      this.setState({
        userId: uid
      });
    } //if
    else {
      this.setState({
        userId: -1
      });
    }
  }
  render() {
    return (
      <WishContext.Provider value={this.state}>
        <Router>
          <NavComponent {...this.state} />

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
// App.contextType = WishContext;

ReactDOM.render(<App />, document.querySelector("#container"));
