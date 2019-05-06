import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class EventCardToView extends React.Component {
  render() {
    return <>
        <div className="col-md-4">
                    <div className="card-body text-center  eventcards" >
                            <p><img className=" img-fluid" src={"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"} alt="card image"/></p>
                            <h4 className="card-title">{this.props.name}{this.props.lastUpdateTime}</h4>
                            <p className="card-text">{this.props.description}</p>
                            <button  id="searchEventbtn" type="button" className="btn btn-outline-info"> <a href="/MyWishes">Add A Wish</a> </button>
        
                            
        
        
                        </div>
            </div>

    </>;
  }
}
