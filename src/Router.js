import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router  , Route} from "react-router-dom";
// import {Router,Route,BrowserHistory} from "react-router";



import {NavComponent}  from './NavComponent';
import About from './About';
import AddAWish from './AddAWish';
import AddEvent from './AddEvent';
import EventCard from './EventCard';
import HomeComponent from './HomeComponents';
import MyEvents from './MyEvents';
import Login from './Login';
import MyWishes from './MyWishes';
import Register from './Register';
import WishCard from './WishCard';
import App from "./App";


export class Router extends React.Component{
    render(){
            return(
                <></>
        //         <Router>
        //   <Route path="/" component={HomeComponent} exact={true} />
        //   <Route path="/about" component={About} />
        //   <Route path="/addawish" component={AddAWish} />
        //   <Route path="/AddEvent" component={AddEvent} />
        //   <Route path="/EventCard" component={EventCard} />
        //   <Route path="/Login" component={Login} />
        //   <Route path="/MyWishes" component={MyWishes} />
        //   <Route path="/Register" component={Register} />
        //   <Route path="/WishCard" component={WishCard} />
        //   <Route path="/MyEvents" component={MyEvents} />
        //   <Route path="/SearchEvent" component={SearchEvent} />
        //   <Route path="/ShowUserWishes" component={ShowUserWishes} />
        //   <Route path="/EditEvent" component={EditEvent} />

          
        // </Router>

                
            );
    }
}