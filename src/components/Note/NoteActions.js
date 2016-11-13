import { Lambda } from '../../utils/awsUtils.js';

export function clearNote() {
	return {
		type: "CLEAR_NOTE"
	};
}

export function saveNote(content, date, calendar) {

	return (dispatch) => {

		dispatch({
			type: "SAVE_NOTE_PENDING"
		});

		Lambda({
			FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "put",
				type: "note",
				calendar,
				date,
				content
			})
		}, (err, response) => {
			if (err) {
				console.error(err);
			} else {
				console.log(response)
				dispatch({
					type: "SAVE_NOTE_FULFILLED"
				});
			}
		})
	}

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
					type: "LOAD_NOTE_FULFILLED",
					item: JSON.parse(response.Payload).Item
				});
			}
		});
	}
}