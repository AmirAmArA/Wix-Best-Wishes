const events = [
  {
    id: 1,
    name: "event1",
    avatar: "images/avatar.jpg",
    score: 24,
    description:
      "Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love AvatarsMarhaba, I love AvatarsMarhaba, I love Avatars",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 2,
    name: "event2",
    avatar: "images/avatar.jpg",
    score: 19,
    description: "Hello, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 3,
    name: "event3",
    avatar: "images/avatar2.png",
    score: 11,
    description: "Shalom, I love Avatars",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 4,
    name: "event4",
    avatar: "images/avatar2.png",
    score: 10,
    description: "Ahalan, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 5,
    name: "event5",
    avatar: "images/avatar2.png",
    score: 10,
    description: "Ahalan, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 6,
    name: "event6",
    avatar: "images/avatar2.png",
    score: 11,
    description: "Ahalan, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  }
];

export function userevents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(events), 1500);
  });
}

export function userwishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(wishes), 1500);
  });
}
// export function Login(username , password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(events), 1500);
//   });
// }




let exsistsEvent;
export function getMyEvents(eventID) {
  events.forEach(function(event) {
    if (eventID == event.id) {
      console.log("event exsists", event);
      exsistsEvent = event;
    }
  });
  return exsistsEvent;
}

const wishes = [
  {
    id: 1,
    name: "wish1",
    avatar: "images/avatar.jpg",
    score: 24,
    description:
      "Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love Avatars Marhaba, I love AvatarsMarhaba, I love AvatarsMarhaba, I love Avatars",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 2,
    name: "wish2",
    avatar: "images/avatar.jpg",
    score: 19,
    description: "Hello, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 3,
    name: "wish3",
    avatar: "images/avatar2.png",
    score: 11,
    description: "Shalom, I love Avatars",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 4,
    name: "wish4",
    avatar: "images/avatar2.png",
    score: 10,
    description: "Ahalan, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  },
  {
    id: 5,
    name: "wish5",
    avatar: "images/avatar2.png",
    score: 10,
    description: "Ahalan, I love Avatars...",
    lastUpdateTime: new Date().toLocaleString("he-IL")
  }
];

export function getMyWishes(eventID) {
  return wishes;
}

/* Add A function to add a wish to wishes array --- depending on which event and userid :/ */

/** Add A function to add a event depending on user id */

export function addevent({
  userid,
  eventid,
  category,
  startdate,
  enddate,
  location
}) {
  if (
    userid > 0 &&
    eventid > 0 &&
    category &&
    category != "" &&
    startdate &&
    startdate != "" &&
    enddate &&
    enddate != "" &&
    location != "" &&
    location
  ) {
    events.push({ eventid, category, startdate, enddate, location });
    return true;
  } //if
  else {
    return false;
  }
} //function

export function addwish({ userid, eventid, from, wishu, imgurl }) {
  if (userid > 0 && eventid > 0) {
    if (from != "" && wishu != "" && imgurl != "") {
      wishes.push({ eventid, from, wishu, imgurl });
      return true;
    } //if
  } //if
  if (userid <= 0 && eventid > 0) {
    //here we know that its a visitor who adding a wish
    if (from != "" && wishu != "" && imgurl != "") {
      wishes.push({ eventid, from, wishu, imgurl });
      return true;
    } //if
  } //if

  return false;
} //function
