import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


const initialState = {

  editorState: EditorState.createEmpty(),
  noteLoading: false

}

export default function noteReducer(state = initialState, action) {

  switch(action.type) {

    case "CLEAR_NOTE":
      return {
        ...state,
        editorState: EditorState.createEmpty()
      }

    case "LOAD_NOTE_PENDING":
      return {
        ...state,
        noteLoading: true
      };

    case "LOAD_NOTE_RESOLVED":
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
