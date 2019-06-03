
import React from 'react';
import axios from "axios";
const URL = 'http://localhost:3080';

const events = [
    {
        ID: "1",
        title: "Ebraheem Birthday",
        catagory: "Birthday",
        date: "25/6/2019",
        where: "sakhnin"
    },
    {
        ID: "2",
        title: "Ebraheem New Born",
        catagory: "New Born",
        date: "2019-06-25",
        where: "sakhnin"
    },
    {
        ID: "3",
        title: "Ebraheem Wedding",
        catagory: "Wedding",
        date: "25/6/2026",
        where: "sakhnin"
    },
    {
        ID: "4",
        title: "Ebraheem Grraduation",
        catagory: "Party",
        date: "25/6/2020",
        where: "sakhnin"
    }
];
const wishes = [
    {
        "userID": "1",
        "ID": "1",
        "from": "Ameer",
        "wishContent": "Happy birthday wish you all the best",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "2",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "3",
        "from": "Samah seh",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "4",
        "from": "Ibraheem",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "5",
        "from": "Arkan",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "6",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "7",
        "from": "Ameer",
        "wishContent": "Best wishes on this wonderful journey, as you build your new lives together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "3",
        "ID": "8",
        "from": "sally",
        "wishContent": "Wishing you joy, love and happiness on your wedding day and as you begin your new life together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "1",
        "ID": "9",
        "from": "Ibraheem",
        "wishContent": "May God grant you all of life's blessings and love's joys",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "2",
        "ID": "10",
        "from": "Ameer",
        "wishContent": "Welcome to the world little one, it is a place full of delights and wonders",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "2",
        "ID": "11",
        "from": "Sally",
        "wishContent": "Wishing you much happiness as you welcome your new little bundle of joy into your family",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "3",
        "ID": "12",
        "from": "Sleman",
        "wishContent": "Congratulations! Now is the time to enjoy your baby’s little feet and baby smell. It will not be there forever, and you should take as many pictures as possible. You will want to miss a single precious moment!",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "13",
        "from": "Basel",
        "wishContent": "Wishing you joy and happiness, and plently of wonderful moments together.",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "14",
        "from": "Basel",
        "wishContent": "Congratulations on your well-deserved success.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "3",
        "ID": "15",
        "from": "sleman",
        "wishContent": "I’m sure today will be only the first of many proud, successful moments for you",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "16",
        "from": "Arkan",
        "wishContent": "Congratulations today and best wishes for all your tomorrows.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "17",
        "from": "Mohamad",
        "wishContent": "Can’t wait to see where life will take you next. Wherever it is, our prayers go with you!",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    }
]
const Users = [
    {
        userId: 1,
        userName: 'sally@gmail.com',
        name: 'sally',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"

            },
            {
                ID: "3",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            }]
    },
    {
        userId: 2,
        userName: '2@gmail.com',
        name: '2',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Ebraheem Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "3",
                title: "Ebraheem Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            }]
    }
]
const getUserWishesByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const userWishes = wishes.filter(wish => wish.userID == userId);
            resolve(userWishes);
        }, 500);
    })
}
const getUserEventsByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const events = Users.filter(user => (user.userId == userId))[0].events;
            resolve(events);
            console.log(events)
        }, 500);
    })

}

const getEvents = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(events);
        }, 500);
    })
}
const getWishes = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(wishes);
        }, 500);
    });
}
const getEvent = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            const event = events.find(e => e.ID === id);
            resolve(event);
        }, 500);
    });
}
const getUsers = () => {
    return Users;
}
const checkUser = (userName, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName == 'saeed@gmail.com' && password == '123456') {
                resolve({
                    status: {
                        code: 200
                    },
                    userId: 1
                });
            } else {
                resolve({
                    status: {
                        code: 404
                    },
                    error: 'Invalid username or password'
                });
            }
        }, 1000);
    })
}
const login = async (email, password) => {
try {
        const result =await  axios.post(URL + '/login', {
            email,
            password
        });
        const { data } = result;
        if (data.status.code == 200) {
            return { userId: data.userId }
        } else {
            return { erorr: data.error }
        }
    } catch (error) {
    console.dir("login error:"+error)
    return {error}
    }
}
const myEvents= async()=>{
    try{
        const result= await axios.get(URL+'/events',{
            headers:{
                
                Authorization: 'Bearer userId:a3c66333-9016-42a9-a5d2-fa432bda0519'
            }
        });
        const{data}=result;
            return data;
    }catch(error){
        console.dir(error);
        return { error };
    }


}

export {
    getUsers,
    myEvents,
    getWishes,
    getEvents,
    getEvent,
    getUserEventsByUserID,
    getUserWishesByUserID,
    checkUser,
    login
};

