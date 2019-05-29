import React from 'react';

const WishContext = React.createContext({
    userId: -1,
    username: '',
    events : [] ,
    login: (username, password) => {},
    logout: () => {}

});

export default WishContext;