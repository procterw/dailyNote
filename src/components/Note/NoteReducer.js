import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  editorState: EditorState.createEmpty(),
  noteLoading: true

}

export default function noteReducer(state = initialState, action) {

  switch(action.type) {

    case "CLEAR_NOTE":
      return {
        ...state,
        editorState: EditorState.createEmpty()
      }

    case "SAVE_NOTE_PENDING":
      return {
        ...state,
        noteSaving: true
      }

    case "SAVE_NOTE_REJECTED":
      return {
        ...state,
        noteSaving: false
      }
    case "SAVE_NOTE_FULFILLED":
      return {
        ...state,
        noteSaving: false
      }

    case "LOAD_NOTE_PENDING":
      return {
        ...state,
        noteLoading: true
      };

    case "LOAD_NOTE_FULFILLED":
      let editorState = action.item ? EditorState.createWithContent(
        convertFromRaw(JSON.parse(action.item.content))
      ) : state.editorState;
      return {
        ...state,
        noteLoading: false,
        editorState
      };

  }

  return state;
}
