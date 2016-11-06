
import { quantile } from 'd3';

// Useful functions for parsing time and making calendars

export class Calendar {

	// Build a calendar for the given year
	constructor(year, activeCalendar, notes = []) {

		let lengths = notes.map(note => note.length);

		let quantiles = {
			lower: 	quantile(lengths, 0.25),
			mid: 		quantile(lengths, 0.5),
			upper:  quantile(lengths, 0.75)
		};

		this.notes = notes.filter(note => {
			return +year === parseDDBYear(note.date)
		}).filter(note => {
			return activeCalendar === note.calendar;
		});



		this.year = year;
		this.activeCalendar = activeCalendar;
		this.months = [0,1,2,3,4,5,6,7,8,9,10,11].map(n => {
			return new Month(year, n, activeCalendar, this.notes);
		});
	}

	getMonth(n) {
		return this.months[n];
	}
}



class Month {

	// Year and month number, 0-11
	constructor(year, month, activeCalendar, notes = []) {

		this.notes = notes.filter(note => {
			return +month === parseDDBMonth(note.date);
		});

		this.year = year;
		this.activeCalendar = activeCalendar;

		this.month = month;
		this.monthString = monthNumberToString(month);
		this.nDays = daysInMonth(year, month);

		this.days = [];
		for (let i=0; i<this.nDays; i++) {
			this.days.push(new Day(year, month, i, activeCalendar, this.notes));
		}

		let date = new Date(`${month+1}/${1}/${year}`)

		this.isCurrentMonth = isCurrentMonth(date, year, month);
	}

	getDay(n) {
		return this.days[n];
	}
}


class Day {

	constructor(year, month, day, activeCalendar, notes = []) {

		let filteredNotes = notes.filter(note => {
			return +day === parseDDBDay(note.date);
		});

		this.note = filteredNotes[0] || null;

		this.hasNote = filteredNotes.length > 0;

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

function parseDDBYear(date) {
	return +date.substr(0,4);
}

function parseDDBMonth(date) {
	return +date.substr(4,2) - 1;
}

function parseDDBDay(date) {
	return +date.substr(6,2) - 1;
}
