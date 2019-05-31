import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import logo from "../assets/logo.PNG";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="card mb-3 cardBackground">
              <img src={logo} className="card-img-top" />
              <div className="card-body">
                <p>
                  One word to describe us: Passion. We're passionate about
                  making awesome websites <br /> We believe that websites can be
                  more than 5-minute stress reliefs - it can make your life
                  better. To do so, we follow our one and only rule - only make
                  what we would use ourselves
                  <br />
                  We don't accept mediocrity, and neither should our customers.
                  To share your beautiful events create an account on our
                  website to tell your friends about all beautiful events and
                  let them wish you the best wishes
                </p>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </>
    );
  }
}
