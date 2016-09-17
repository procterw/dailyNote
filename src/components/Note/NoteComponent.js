import React from 'react';

import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
// require("./Note.scss");

class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadNote(this.props.params.day);
  }

  save(content) {
    this.props.saveNote(JSON.stringify(content), this.props.params.day);
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

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.editorState,
      lastSaved: undefined
    };
    this.onChange = (editorState) => {
      console.log(editorState)
      this.setState({editorState})
      this.save();
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({editorState: newProps.editorState});
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

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }

}

export default Note;
