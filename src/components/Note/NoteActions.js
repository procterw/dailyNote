import { Lambda } from '../../utils/awsUtils.js';

export function clearNote() {
	return {
		type: "CLEAR_NOTE"
	};
}

// Make a calendar for the given year
export function loadNote(date, calendar) {

	return (dispatch, getState) => {

		dispatch({
			type: "LOAD_NOTE_PENDING"
		});

		Lambda({
			FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "get",
				type: "note",
				calendar,
				date
			})
		}, (err, response) => {
			if (err) {
				console.error(err);
			} else {
				dispatch({
					type: "LOAD_NOTE_RESOLVED",
					item: JSON.parse(response.Payload).Item
				});
			}
		});
	}
}
