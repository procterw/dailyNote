import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  calendars: [
    // { title: "Work", color: "#CCCCFF" },
    // { title: "Running", color: "#CCEEDD" }
  ],
  calendarListLoading: false,
  yearOptions: []

}

export default function wallReducer(state = initialState, action) {

  switch(action.type) {

    case "UPDATE_YEAR":
      return {
        ...state,
        yearOptions: action.yearOptions
      };

    case "CALENDAR_LIST_LOADING":
      return {
        ...state,
        calendarListLoading: true
      }

    case "CALENDAR_LIST_SUCCESS":
      return {
        ...state,
        calendars: action.data,
        calendarListLoading: false
      };

  }

  return state;
}
