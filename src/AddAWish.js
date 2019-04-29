import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";


export default class AddAWish extends React.Component {
    render() {
      return ( <>
        <div className="row">
        <div className="col-md-4"></div>
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
              />
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
          <br/>
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
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-3">
            <span className="colorWhite">Image </span>
          </div>
          <div className="col-md-9">
            <input className="form-control" type="text" placeholder="URL" />
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <button id="searchEventbtn" type="button" className="btn btn-outline-warning">
          Add a wish
        </button>
      </div>
    </div>
    

      </>);
    }
}