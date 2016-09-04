import React from 'react';

import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
// require("./Note.scss");

class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <TextEditor inputChange={this.inputChange}></TextEditor>
      </div>
    )
  }

}

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      console.log(convertToRaw(editorState.getCurrentContent()))
      this.setState({editorState})
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
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

// 
//
// console.error = (function() {
//     var error = console.error
//
//     return function(exception) {
//         if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
//             error.apply(console, arguments)
//         }
//     }
// })()
