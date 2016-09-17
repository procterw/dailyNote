

import { Wall } from '../../utils/timeUtils.js';
import { Lambda } from '../../utils/awsUtils.js';

export function loadCalendars() {

	return (dispatch, getState) => {

		dispatch({
			type: "CALENDAR_LIST_LOADING"
		});

		Lambda({
      FunctionName: "DailyNote",
			Payload: JSON.stringify({
				operation: "scan",
				type: "calendar"
			})
		}, (err, response) => {

			if (err) {
				console.error(err);
			} else {

				console.log(response)

				dispatch({
					type: "CALENDAR_LIST_SUCCESS",
					data: JSON.parse(response.Payload).Items.map(calendar => {
						return {
							title: calendar.title,
							color: calendar.color
						}
					})
				});

			}
		});

	}
}

export function loadNotes() {

	return (dispatch, getState) => {

		setTimeout(function() {

			dispatch(setNotes(notes));

			dispatch(buildCalendar());

		}, 1000);
	}
}

export function updateYear(year) {
	return {
		type: "UPDATE_YEAR",
		yearOptions: makeYearOptions(year)
	}
}

export function setCalendar(calendar) {
	return {
		type: "SET_CALENDAR",
		calendar
	}
}

function makeYearOptions(year) {

  year = +year;

  var options = [];

  for (var i=year-5; i<=year+5; i++) {
    options.push(i);
  }

  return options;

}
