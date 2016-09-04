import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navbar from './NavbarComponent.js';

import * as actions from './NavbarActions.js';

function mapStateToProps(state) {
	return state.root;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
