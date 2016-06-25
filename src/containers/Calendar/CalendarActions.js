import { Calendar } from '../../utils/timeUtils.js';

// Make a calendar for the given year
export function buildCalendar(year) {

	return (dispatch, getState) => {

		let calendar = new Calendar(year);

		dispatch({
			type: "NEW_CALENDAR",
			calendar: calendar
		});
	}
}