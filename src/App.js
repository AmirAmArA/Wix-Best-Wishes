import React from 'react';
import ReactDOM from 'react-dom';
import {NavComponent}  from './NavComponent';
export class App extends React.Component{
    render(){
            return(
                <NavComponent />
            );
    }
} 

ReactDOM.render(
    <App />,
    document.querySelector('#container')
);