import React from 'react';
import ReactDOM from 'react-dom';
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





export class App extends React.Component{
    render(){
            return(
                <>
                <NavComponent />
                <HomeComponent />
                <About />
                <AddAWish />
                <AddEvent />
                <EventCard />
                <Login />
                <MyWishes />
                <Register />
                <WishCard />
                
                
                <MyEvents />

                </>
            );
    }
} 

ReactDOM.render(
    <App />,
    document.querySelector('#container')
);