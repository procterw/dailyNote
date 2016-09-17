import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// import userReducer from './components/Navbar/NavbarReducer.js';
import wallReducer from './components/Wall/WallReducer.js';
import calendarReducer from './components/Calendar/CalendarReducer.js';
import noteReducer from './components/Note/NoteReducer.js';

const initialState = {

  accessToken: "",
  name: "",
  photoUrl: "",
  userID: "",
  isAuthenticated: false

};

function rootReducer(state = initialState, action) {

  switch(action.type) {

    case "FACEBOOK_RESPONSE":
      console.log(action)
      return Object.assign({}, state, {
        accessToken: action.response.accessToken,
        name: action.response.name,
        photoUrl: action.response.picture.data.url,
        userID: action.response.userID
      });

    case "AWS_RESPONSE":
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated
      });

  }

  return state;
}

export default combineReducers({
  root: rootReducer,
  routing: routerReducer,
  wall: wallReducer,
  note: noteReducer,
  calendar: calendarReducer
});
