
const initialState = {
  activeYear: "2016",
  calendar: {
    months: []
  },
  username: "Will",
  notes: [
    {
      year: 2016,
      month: 0,
      day: 0,
      content: ""
    },
    {
      year: 2016,
      month: 0,
      day: 0,
      content: ""
    }
  ]
}

function rootReducer(state = initialState, action) {

  switch(action.type) {

    case "SET_YEAR":
      return Object.assign({}, state, {
        activeYear: action.year
      });

    case "NEW_CALENDAR":
      return Object.assign({}, state, {
        calendar: action.calendar
      });
  }

  return state;
}

export default rootReducer;
