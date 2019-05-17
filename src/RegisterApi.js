import axios from "axios";
import { faList } from "@fortawesome/free-solid-svg-icons";

let users = [
    {
        userid: 1,
        firstname: "firstname 1",
        lastname: "Last name 1",
        username: "username1",
        email: "email1@gmail.com",
        password: "pass1"
    },
    {
        userid: 2,
        firstname: "firstname 2",
        lastname: "Last name 2",
        username: "username1",
        email: "email2@gmail.com",
        password: "pass2"
    }
  ];

export const getUsers = () => {
    return 
    return axios.get('./db.json');
}

export const registerUser = (name, email, password) => {
    let exists = false;
    
    
    const success = {userId: 5};
    const fail = {error: {msg:"email exsits"}};
    //go to db with username, email, password
    //get result
    //return the result
    //BUT
    //stringfy
    //For now, you work with json file...
    //{userid: 
    //error}
   /* getUsers().then(res => res.data.users.map(user => {
        console.log(email);
        console.log(user.email);
    })
    )*/

    users.forEach(function(user) {
        console.log("forEach");
        console.log(`email is ${email.value}`);
        console.log(`email is ${user.email}`);
        console.log("forEach");
        if(email.value == user.email){
            console.log("email exsists");
            exists = true;            
        }
      });

      return exists ? fail : success;
}


