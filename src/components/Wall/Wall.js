import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Wall from './WallComponent.js';

import * as actions from './WallActions.js';

function mapStateToProps(state) {
	return state.wall;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
