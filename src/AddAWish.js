import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./general.css";

export default class AddAWish extends React.Component {

  constructor() {
    super();
    this.state = {
      from: " ",
      wishu: " ",
      imageurl: " ",
      validafields: false,
      ahref: "/AddAWish ",
      usernameerror: "",
      wishuerror: "",
      urlerror: ""
    };
    this.validatefields = this.validatefields.bind(this);
    this.is_url = this.is_url.bind(this);
    // this.validURL= this.validURL.bind(this);
  } //constructor

  is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  } //isrul? func

  validatefields(e) {
    // let linktosend = "/MyWishes/" + this.props.match.params.eventid
    console.log("hello from validate fields");
    e.preventDefault();
    console.log(this.is_url(imageurl.value));

    if (this.is_url(imageurl.value) == false || imageurl.value=="" ) {
      this.setState({
        urlerror: "u should add image link",
        ...this.state
      });
      urlspan.innerText = "u should add  Image Url";
    } //if
    if(this.is_url(imageurl.value) == true || imageurl.value==""){
      urlspan.innerText = "";

    }//if

    if (fromname.value==""  ) {
      this.setState({
        from: fromname.value,
        wishu: wishbody.value,
        imageurl: imageurl.value,
        validafields: false,
        ahref: "/MyWishes ",
        usernameerror: "u should add your name",
        wishuerror: this.state.wishuerror,
        urlerror: this.state.urlerror
      });

      fromspan.innerText = "u should add  your name!!!";
    } //if
    if(fromname.value!=""  ){
      fromspan.innerText = "";

    }
    if (wishbody.value == "") {
      this.setState({
        from: fromname.value,
        wishu: wishbody.value,
        imageurl: imageurl.value,
        validafields: false,
        ahref: "/MyWishes ",
        usernameerror: this.state.usernameerror,
        wishuerror: "u should add A Wish Description",
        urlerror: this.state.urlerror
      });
      wishuspan.innerText = "u should add  Wish Body!!!";
    } //if
    if(wishbody.value != ""){
      wishuspan.innerText = "";
    }


    if (
      this.is_url(imageurl.value) &&
      wishbody.value != "" &&
      fromname.value != ""
    ) {
      // this.state.validafields =true
      this.setState({
        from: fromname.value,
        wishu: wishbody.value,
        imageurl: imageurl.value,
        validafields: true,
        ahref: "/MyWishes ",
        usernameerror: "",
        wishuerror: "",
        urlerror: ""

        //  [this.state.ahref ="/MyWishes" , ...this.state]
      });
      // this.state.ahref="/MyWishes";
      // myanchor.href = "/MyWishes";
      // console.log(this.state.from ,this.state.wishu , this.state.imageurl );
      console.log(fromname.value, wishbody.value, imageurl.value);
      console.log(linktosend && true);
    } //if
  } //validate...

  render() {
    console.log(this.props.match.params.eventid);
    let imageurl = document.getElementById("#imageurl");
    let wishbody = document.getElementById("#wishbody");
    let fromname = document.getElementById("#fromname");
    let myanchor = document.getElementById("#myanchor");
    let linktosend = "/MyWishes/" + this.props.match.params.eventid;
    let linktosend2=  "/AddAWish/" + this.props.match.params.eventid


    let fromspan = document.getElementById("#fromspan");
    let urlspan = document.getElementById("#urlspan");
    let wishuspan = document.getElementById("#wishuspan");


    return (
      <>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <span className="colorWhite">From </span>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter you're name"
                  id="fromname"
                  // defaultValue={this.state.from}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
        <div className="row">
          <div className="col-md-5" />
          <span id="fromspan">{/* {this.state.usernameerror} */}</span>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <br />
            <div className="row">
              <div className="col-md-3">
                <span className="colorWhite">Wish you </span>
              </div>
              <div className="col-md-9">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea3"
                    rows="7"
                    placeholder="Write you're wish"
                    id="wishbody"
                    // defaultValue={this.state.wishu}
                  />
                  <br/>
                  <span id="wishuspan"></span>
                  
              
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </div>

        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <span className="colorWhite">Image </span>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="URL"
                  id="imageurl"
                  // defaultValue={this.state.imageurl}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </div>

        <div className="row">
          <div className="col-md-4">
            
          </div>
          <div className="col-md-4" >
          <span id="urlspan"></span>
          </div>
          <div className="col-md-4">
            <button
              id="searchEventbtn"
              type="button"
              className="btn btn-outline-warning"
              onClick={this.validatefields}
            >
            
              {/* <a id="myanchor">Add a wish</a> */}
              <NavLink to={this.state.validafields ?  linktosend :linktosend2   }>Add a wish</NavLink>
            </button>
          </div>
        </div>
      </>
    );
  }
} //cllass

AddAWish.propTypes = {
  from: PropTypes.string,
  wishu: PropTypes.string,
  imageurl: PropTypes.string
};
