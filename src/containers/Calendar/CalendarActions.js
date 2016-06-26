import { Calendar } from '../../utils/timeUtils.js';

export function setYear(year) {
	year = year || (new Date()).getFullYear().toString();
	return {
		type: "SET_YEAR",
		year
	}
}

// Make a calendar for the given year
export function buildCalendar(year) {

	return (dispatch, getState) => {

		let year = getState().activeYear;

		let calendar = new Calendar(year);

		dispatch({
			type: "NEW_CALENDAR",
			calendar: calendar
		});
	}
}
