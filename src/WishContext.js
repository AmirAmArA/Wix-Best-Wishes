import React from 'react';
import axios from 'axios';

const WishContext = React.createContext({
    userId: 5,
    username: "",
    events : [] ,
    login: ()=> {},
    logout: () => {}

});

export default WishContext;




