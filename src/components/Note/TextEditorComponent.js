import React from 'react';
import createFocusPlugin from 'draft-js-focus-plugin';

import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
require("./Note.scss");

const focusPlugin = createFocusPlugin();
const plugins = [ focusPlugin ]

export default class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.editorState,
      lastSaved: undefined
    };
    this.onChange = (editorState) => {
      this.setState({editorState})
      this.save();
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  save() {
    const lastSaved = this.state.lastSaved;
    if (_.isUndefined(this.state.lastSaved)) {
      this.setState({lastSaved: new Date()});
    } else if ((new Date()) - this.state.lastSaved > 3000) {
      this.setState({lastSaved: new Date()});
      this.props.save(convertToRaw(this.state.editorState.getCurrentContent()));
    }
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  focusEnd() {
    this.setState({
      editorState: EditorState.moveFocusToEnd(this.state.editorState)
    });
  }

  render() {

    return (
      <div className="text-editor">
        { this.props.isSaving ? "SAVING" : null}
        <button>Save</button>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            plugins={plugins}
            ref="editor"/>
          <div className="focus-end" onClick={this.focusEnd.bind(this)} />
        </div>
      </div>
    );
  }

}
