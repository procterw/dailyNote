import { Calendar } from '../../utils/timeUtils.js';
import { Lambda } from '../../utils/awsUtils.js';

export function loadNotes(year, activeCalendar) {

	return (dispatch, getState) => {

		Lambda({
			FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "query",
				type: "note"
			})
		}, (err, response) => {
			if (err) {
				console.error(err);
			} else {
				// TODO find relative length of notes
				let notes = JSON.parse(response.Payload).Items;
				dispatch({
					type: "SET_NOTES",
					notes
				});
				dispatch(buildCalendar(year, activeCalendar, notes));
			}
		});
	}
}

// Make a calendar for the given year
export function buildCalendar(year, activeCalendar, notes) {

	return (dispatch, getState) => {

		let calendar = new Calendar(year, activeCalendar, notes);

		dispatch({
			type: "NEW_CALENDAR",
			calendar: calendar.months
		});
	}
}
