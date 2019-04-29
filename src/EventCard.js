import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class EventCard extends React.Component {
  render() {
    return <>
        <div className="col-md-4">
                    <div className="card-body text-center  eventcards" >
                            <p><img className=" img-fluid" src={"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"} alt="card image"/></p>
                            <h4 className="card-title">Sunlimetech</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                            <button  id="searchEventbtn" type="button" className="btn btn-outline-info">Delete</button>
        
                            <button  id="searchEventbtn" type="button" className="btn btn-outline-info">Edit</button>
        
        
                        </div>
            </div>

    </>;
  }
}
