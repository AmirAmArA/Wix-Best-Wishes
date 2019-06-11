import React from 'react';
import axios from 'axios';

const WishContext = React.createContext({
    userId: 0,
    username: '',
    history: '',
    events : [] ,
    setusername: (name)=> { },
    login: ()=> {},
    logout: () => {} ,
    setuserid : (id)=>{
        this.userId = id
    }

});



export default WishContext;




