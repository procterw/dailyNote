import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Calendar from './CalendarComponent.js';

import * as actions from './CalendarActions.js';

function mapStateToProps(state) {
	return {
		...state.calendar
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
