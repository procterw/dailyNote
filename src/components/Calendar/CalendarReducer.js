import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {
  calendar: [],
  notes: []
}

export default function calendarReducer(state = initialState, action) {

  switch(action.type) {

    case "NEW_CALENDAR":
      return {
        ...state,
        calendar: action.calendar
      };

    case "SET_NOTES":
      return {
        ...state,
        notes: action.notes
      };

  }

  return state;
}
