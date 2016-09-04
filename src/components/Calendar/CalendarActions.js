import { Calendar } from '../../utils/timeUtils.js';

export function loadNotes() {

	return (dispatch, getState) => {

		setTimeout(function() {

			let notes = [

			]

			dispatch(setNotes(notes));

			dispatch(buildCalendar());

		}, 1000);
	}
}

// Make a calendar for the given year
export function buildCalendar(year, calendar) {

	return (dispatch, getState) => {

		let calendar = new Calendar(year, calendar, []);

		console.log(calendar)

		dispatch({
			type: "NEW_CALENDAR",
			calendar: calendar.months
		});
	}
}