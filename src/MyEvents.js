import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import EventCard from './EventCard'

export default class MyWishes extends React.Component {
  render() {
    return <>

        
<div>
      <div className="row"><br /><br /></div>
      <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-10"><h3 className="colorWhite" >Event List:</h3></div>
            <div className="col-md-1"></div>
        
        </div>
      <div className="row">
        <div className="col-md-1">
                
        </div>
        <div className="col-md-10 colorWhite" >
          <div className="row">
            <div className="col-md-4">
            
                    
            </div>
            
            
          </div>
          <div className="row">
          <EventCard     />
          <EventCard     />
          <EventCard     />


            
            
            
          </div>
          <div className="row">
          <EventCard     />
          <EventCard     />
          <EventCard     />
          <EventCard     />
          <EventCard     />
          <EventCard     />
            
            
            
          </div>
        </div>
      </div>

      <div className="col-md-1"></div>
    </div>
    <div className="row"><br /><br /></div>

    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <button className="btn btn-outline-info " type="submit">
          Add new event box
        </button>
      </div>
    </div>

    </>;
  }
}


