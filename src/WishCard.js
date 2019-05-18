import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'


import "./general.css";
import logo from "../assets/logo.PNG";
import AddAWish from "./AddAWish";

export default class WishCard extends React.Component {
  constructor() {
    super();
    this.state = {
      deleted: false
    };
    this.deleteWish = this.deleteWish.bind(this);
  }

  deleteWish({ target: { name, value } }) {
    console.log(this.props.name);
    this.state.deleted = true;
  }

  render() {
    let editbtnref="/AddAWish/"+this.props.id
    if (!this.state.deleted) {
      if (this.props.callercomp == "ShowUserWishes") {
        // console.log("calling components is" ,this.props.callercomp)
        console.log("calling components is : ShowUserWishes");
        return (
          <div className="col-md-4" name={this.props.key}>
            <div className="card border-light mb-3  maxwidth18 colorblack">
              <div className="card-header">
                {this.props.name} {this.props.lastUpdateTime}
              </div>
              <div className="card-body">
                <img src={logo} className="card-img-top wishcard" />
                <p className="card-text">
                  {/* Some quick example text to build on the card title and make
                    up the bulk of the card's content. */}
                  {this.props.description} <br />
                  <button>

                    <a href={editbtnref}> edit </a>
                  </button>
                  <button onClick={this.deleteWish}> delete</button>
                </p>
              </div>
            </div>
          </div>
        );
      } //if
      else {
        return (
          <div className="col-md-4">
            <div className="card border-light mb-3  maxwidth18 colorblack">
              <div className="card-header">
                {this.props.name} {this.props.lastUpdateTime}
              </div>
              <div className="card-body">
                <img src={logo} className="card-img-top wishcard" />
                <p className="card-text">
                  {/* Some quick example text to build on the card title and make
                  up the bulk of the card's content. */}
                  {this.props.description} <br />
                </p>
              </div>
            </div>
          </div>
        );
      } //else
    } //if deletedflag
  }
  
}//class

WishCard.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastUpdateTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["Male", "Female", "Other"]).isRequired,
  courses: PropTypes.arrayOf(PropTypes.string)
};


