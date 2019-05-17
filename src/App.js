import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Router,Route,BrowserHistory} from "react-router";



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
 import ShowUserWishes from './ShowUserWishes';
 import EditEvent from "./EditEvent";
import EventCardToView from "./EventCardToView";


//the context we R going to use
//  const MyContext= React.createContext();

 //then we also need a provider to the context

//  class MyProvider extends React.Component {
// constructor(){
// super();
// this.state={
//   username:"", password:"" , loginFlag:""
// }

// }//constructor

// render(){
//   return (<MyContext.Provider value="Im the value"> 
//   {this.props.children}
//   </MyContext.Provider>)

// }

//  }//class myprovider 

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginFlag: false,
      username:"Visitor"
    };
    // localStorage.setItem("loginflag", this.state.loginFlag);
    // console.log(localStorage.getItem("loginflag"));
  }

  render() {
    return (
      <>
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
            <Route path="/EditEvent" component={EditEvent} />
            <Route path="/EventCardToView" component={EventCardToView} />

            
          </Switch>          
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
