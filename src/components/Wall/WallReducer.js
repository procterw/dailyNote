import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  // TODO load this?
  calendars: [
    // { title: "Work", color: "#CCCCFF" },
    // { title: "Running", color: "#CCEEDD" }
  ],

  yearOptions: ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]

}

export default function wallReducer(state = initialState, action) {

  switch(action.type) {

    case "UPDATE_YEAR":
      return Object.assign({}, state, {
        yearOptions: action.yearOptions
      });

    case "CALENDAR_LIST_SUCCESS":
    console.log(action)
      return Object.assign({}, state, {
        calendars: action.data
      });


  }

  return state;
}
