import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  calendar: []

}

export default function calendarReducer(state = initialState, action) {

  switch(action.type) {

    case "NEW_CALENDAR":
      return Object.assign({}, state, {
        calendar: action.calendar
      });

  }

  return state;
}
