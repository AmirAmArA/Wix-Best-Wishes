import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";
import WishCard from './WishCard';

export default class MyWishes extends React.Component {
  render() {
    return <>
        <div>
      <div className="row"><br /><br /></div>

      <div className="row">
        <div className="col-md-3">
          <div
            className="card border-info mb-3 wishcard"
            
          >
            <div className="card-header border-info colorwhite" >
              Event Info
            </div>
            <div className="card-body text-light">
              <div className="row">
                <div className="col-md-6">
                  <span>Title:</span>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <span>When:</span>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <span>Where:</span>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-outline-warning">
                Add a Best Wish !!
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-9 overyscrol " >
          <div className="row">
            <div className="col-md-4">
              <div className="card border-light mb-3 maxwidth18" >
                <div className="card-header">Wish1</div>
                <div className="card-body">
                  <img src="logo.PNG" className="card-img-top" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="row">
          {/* <WishCard />
          <WishCard />
          <WishCard /> */}
          </div>
          <div className="row">
          {/* <WishCard />
          <WishCard />
          <WishCard /> */}
          </div>
        </div>
      </div>
    </div>


    </>;
  }
}