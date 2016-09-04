import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  editorState: {},
  editorContentRaw: {},

  openNote: {}

}



export default function calendarReducer(state = initialState, action) {

  switch(action.type) {

    

  }

  return state;
}
