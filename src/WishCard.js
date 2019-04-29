import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class WishCard extends React.Component {
  render() {
    return <>
        <div className="col-md-4">
              <div className="card border-light mb-3  maxwidth18 colorblack"  >
                <div className="card-header">Wish1</div>
                <div className="card-body">
                  <img src={logo} className="card-img-top wishcard" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

    </>;
  }
}
