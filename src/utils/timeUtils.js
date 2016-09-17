// Useful functions for parsing time and making calendars

export class Calendar {

	// Build a calendar for the given year
	constructor(year, activeCalendar, notes) {
		this.year = year;
		this.activeCalendar = activeCalendar;
		this.months = [0,1,2,3,4,5,6,7,8,9,10,11].map(n => {
			return new Month(year, n, activeCalendar);
		});
	}

	getMonth(n) {
		return this.months[n];
	}
}



class Month {

	// Year and month number, 0-11
	constructor(year, month, activeCalendar) {

		let date = new Date();

		this.year = year;
		this.activeCalendar = activeCalendar;

		this.month = month;
		this.monthString = monthNumberToString(month);
		this.nDays = daysInMonth(year, month);

		this.days = [];
		for (let i=0; i<this.nDays; i++) {
			this.days.push(new Day(year, month, i, activeCalendar));
		}

		this.isCurrentMonth = isCurrentMonth(date, year, month);
	}

	getDay(n) {
		return this.days[n];
	}
}


class Day {

	constructor(year, month, day, activeCalendar) {

		let date = new Date(`${month+1}/${day+1}/${year}`);

		this.ISO = date.toISOString().substr(0,10).replace(/-/g,"");

		this.year = year;
		this.activeCalendar = activeCalendar;
		this.month = month;
		this.monthString = monthNumberToString(month);

		this.dayOfMonth = day;
		this.dayOfWeek = date.getDay();
		this.dayOfWeekString = dayOfWeekString(date.getDay());

		this.isToday = isToday(date, year, month, this.dayOfMonth);
	}
}

// http://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
function daysInMonth(year, month) {
    return new Date(year, month+1, 0).getDate();
}

function monthNumberToString(i) {
	return ["January", "February", "March", "April",
	"May", "June", "July", "August", "September", "October",
	"November", "December"][i];
}

function dayOfWeekString(i) {
	return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][i];
}

function isCurrentMonth(date, year, month) {
	return date.getFullYear() == year && date.getMonth() == month;
}

function isToday(date, year, month, day) {
	return isCurrentMonth(date, year, month) && date.getDate() == day
}

function formatDate(year, month, day) {

}

function add0s(n, zeros) {

}
