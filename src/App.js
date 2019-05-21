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
export const MyContext = React.createContext();

//then we also need a provider to the context

export class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginFlag: false,
      userid: 0,
      username: "Majde",
      age: 10
    };
  } //constructor

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
} //class myprovider

export class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MyProvider>
        <Router>
          <NavComponent />
          <div>
            <MyContext.Consumer>
              {context => (
                <React.Fragment>
                  {/* here we should return one elemenet which i refer to as react fragment */}

                  {/* <p> im inside the consumer {context.state.username}{context.state.age}</p> */}
                  {/* <button onClick={context.growAYearOlder}> + ++++</button> */}
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </div>
          {/* <Route 
          path='/'
          render={ props => <MyComponent {...props} />}
        /> */}

          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route path="/addawish/:eventid" component={AddAWish} />
            <Route path="/AddEvent/:userid" component={AddEvent} />
            <Route path="/EventCard" component={EventCard} />
            <Route path="/Login" component={Login} />
            {/*  */}
            {/* <Route path="/MyWishes" component={MyWishes} /> */}

            <Route path="/MyWishes/:eventid" component={MyWishes} />
            <Route path="/Register" component={Register} />
            <Route path="/WishCard" component={WishCard} />
            <Route path="/MyEvents/:userid" component={MyEvents} />
            <Route path="/SearchEvent" component={SearchEvent} />
            <Route path="/ShowUserWishes/:userid" component={ShowUserWishes} />
            <Route path="/EditEvent/:eventid" component={EditEvent} />
            <Route path="/EventCardToView" component={EventCardToView} />
          </Switch>
        </Router>
      </MyProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
