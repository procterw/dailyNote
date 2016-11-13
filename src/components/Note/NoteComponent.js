import React from 'react';
import createFocusPlugin from 'draft-js-focus-plugin';
import TextEditor from './TextEditorComponent';

import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
require("./Note.scss");

const focusPlugin = createFocusPlugin();
const plugins = [ focusPlugin ]

class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.clearNote();
    this.props.loadNote(this.props.params.day, this.props.params.activeCalendar);
  }

  save(content) {
    this.props.saveNote(JSON.stringify(content),
      this.props.params.day, this.props.params.activeCalendar);
  }

  render() {
    return (
      <div className="note-component">
        { this.props.noteLoading ? "NOTE LOADING" :
          <TextEditor editorState={this.props.editorState}
            save={this.save.bind(this)}/> }
      </div>
    )
  }

}

export default Note;
