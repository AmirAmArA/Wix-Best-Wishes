import React from 'react';
import axios from 'axios';


// const URL= 'http://localhost:3080';

// const  login= async (email , password) => {
//     try{
//         const result = await axios.post(URL +'/login' , {
//           email ,password
//         });
//         const {data} =result;
//         if(data.status.code == 200){
//           return {userId : data.userId};
//         }//if
//         else{
//           return {error :data.error }
//         }
//     }//try
//     catch(error){
//       console.dir(error);
//       return {error};
//     }//catch
//   }//login()


const WishContext = React.createContext({
    userId: -1,
    username: '',
    events : [] ,
    login: ()=> {},
    logout: () => {}

});

export default WishContext;




