import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Note from '../../components/Note/Note.js';

import * as actions from './NoteActions.js';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
