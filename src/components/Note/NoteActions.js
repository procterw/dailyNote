import { Lambda } from '../../utils/awsUtils.js';

// Make a calendar for the given year
export function loadNote(date) {

	console.log("loading note")

	return (dispatch, getState) => {

		dispatch({
			type: "LOAD_NOTE_PENDING"
		});

		Lambda({
			FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "get",
				type: "note",
				date
			})
		}, (err, response) => {
			console.log("loaded note")
			console.log(response)
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

export function saveNote(content, date) {

	return (dispatch, getState) => {

		Lambda({
			FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "put",
				type: "note",
				content,
				date
			})
		}, (err, response) => {

			console.log(err, response);

		});

	}


}
