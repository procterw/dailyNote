import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Note from './NoteComponent.js';

import './Note.scss';

import * as actions from './NoteActions.js';

function mapStateToProps(state) {
	return state.note;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
