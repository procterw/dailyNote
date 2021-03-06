

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
				operation: "query",
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

export function updateYear(year) {
	return {
		type: "UPDATE_YEAR",
		yearOptions: makeYearOptions(year, 3)
	}
}

export function setCalendar(calendar) {
	return {
		type: "SET_CALENDAR",
		calendar
	}
}

function makeYearOptions(year, n) {

  year = +year;

  var options = [];

  for (var i=year-n; i<=year+n; i++) {
    options.push(i);
  }

  return options;

}
