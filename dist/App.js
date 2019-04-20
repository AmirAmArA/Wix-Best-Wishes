import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    render() {
        return <h1>Main Page</h1>
                 
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#container')
);