
const initialState = {
  activeYear: "2016",
  calendar: {
    months: []
  },
  username: "Will",
  notes: []
}

function rootReducer(state = initialState) {

  console.log(state);

  return state;
}

export default rootReducer;
