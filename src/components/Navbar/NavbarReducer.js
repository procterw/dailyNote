import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  authToken: null,
  isAuthenticated: false

}

export default function userReducer(state = initialState, action) {

  switch(action.type) {

    // case "FACEBOOK_RESPONSE":
    //   return Object.assign({}, state, {
    //     authToken: action.authToken
    //   });
    //
    // case "AWS_RESPONSE":
    //   return Object.assign({}, state, {
    //     isAuthenticated: action.isAuthenticated
    //   });

  }

  return state;
}
