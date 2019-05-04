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


export class App extends React.Component{
    render(){
            return(
                
                <Router>
                 
                 <Route path="/" Component={HomeComponent} ></Route>
                </Router>

                
            );
    }
}