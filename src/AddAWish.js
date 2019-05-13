import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";


export default class AddAWish extends React.Component {

  constructor(){
    super();
    this.state={
      from :"" ,
      wishu : "" ,
      imageurl :"",
      validafields : false ,
      ahref: "/AddAWish "

    }
    this.validatefields = this.validatefields.bind(this);
    this.is_url =this.is_url.bind(this);
  }//constructor

   is_url(str){
   let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (regexp.test(str))
          {
            return true;
          }
          else
          {
            return false;
          }
  }//isrul? func



  validatefields(e){
    e.preventDefault();
    if(this.is_url(imageurl.value) && wishbody.value && fromname.value){
      // this.state.validafields =true
      this.setState({
        from :fromname.value ,
      wishu : wishbody.value ,
      imageurl :imageurl.value,
      validafields : true ,
      ahref: "/MyWishes "

      //  [this.state.ahref ="/MyWishes" , ...this.state] 
      });
      // this.state.ahref="/MyWishes";
      myanchor.href="/MyWishes";
    }//if

  }//validate...


    render() {

      let imageurl=document.getElementById("#imageurl");
      let wishbody=document.getElementById("#wishbody");
      let fromname=document.getElementById("#fromname");
      let myanchor=document.getElementById("#myanchor");

      
      
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
                id="fromname"
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
                id="wishbody"
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
            <input className="form-control" type="text" placeholder="URL" id="imageurl" />
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <button id="searchEventbtn" type="button" className="btn btn-outline-warning" onClick={this.validatefields}>
          
          <a id="myanchor">Add a wish</a>
          
        </button>
      </div>
    </div>
    

      </>);
    }
}