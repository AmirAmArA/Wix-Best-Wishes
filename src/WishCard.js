import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class WishCard extends React.Component {
 
    constructor(){
      super();
      this.state={};
    }
  render() {
    
    if(this.props.callercomp=="ShowUserWishes"){
      // console.log("calling components is" ,this.props.callercomp)
        console.log("calling components is : ShowUserWishes" );
        return (
        <div className="col-md-4">
              <div className="card border-light mb-3  maxwidth18 colorblack"  >
                <div className="card-header">{this.props.name } {this.props.lastUpdateTime}</div>
                <div className="card-body">
                  <img src={logo} className="card-img-top wishcard" />
                  <p className="card-text">
                    {/* Some quick example text to build on the card title and make
                    up the bulk of the card's content. */}
                    {this.props.description} <br/>
                    <button> edit</button>
                    <button> delete</button>
                    
                    
                  </p>
                </div>
              </div>
            </div>
            );
    }//if
    else{
      return (
      <div className="col-md-4">
            <div className="card border-light mb-3  maxwidth18 colorblack"  >
              <div className="card-header">{this.props.name } {this.props.lastUpdateTime}</div>
              <div className="card-body">
                <img src={logo} className="card-img-top wishcard" />
                <p className="card-text">
                  {/* Some quick example text to build on the card title and make
                  up the bulk of the card's content. */}
                  {this.props.description} <br/>
                  
                  
                  
                </p>
              </div>
            </div>
          </div>
          );
      
    }
    

    
  }
}
