
export function generateInitialMonths() {

  var date = new Date();
  var day = date.getDate();
  var dayOfWeek = date.getDay();
  var year = date.getFullYear();
  var month = date.getMonth();

  var currentMonth = generateMonth(month, year);

  return [
    generatePreviousMonth(month, year, 2),
    generatePreviousMonth(month, year),
    generateMonth(month, year),
    generateNextMonth(month, year),
    generateNextMonth(month, year, 2)
  ];

}

export function appendMonthToStart(months) {
  var month = generatePreviousMonth(months[0].month, months[0].year);
  months.unshift(month);
  return months;
}

export function appendMonthToEnd(months) {
  var month = generateNextMonth(months[0].month, months[0].year);
  months.push(month);
  return months;
}



function generatePreviousMonth(month, year, iter=1) {

  if (month === 0) {
    month = 11;
    year = year - 1;
  } else {
    month = month - 1;
  }

  iter = iter-1;

  if (iter > 0) {
    return generatePreviousMonth(month, year, iter);
  } else {
    return generateMonth(month, year);
  }
}

function generateNextMonth(month, year, iter=1) {

  if (month === 11) {
    month = 0;
    year = year + 1;
  } else {
    month = month + 1;
  }

  iter = iter-1;

  if (iter > 0) {
    return generateNextMonth(month, year, iter);
  } else {
    return generateMonth(month, year);
  }
}




function generateMonth(month, year) {

  let dayStrings = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let monthStrings = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let nDays = daysInMonth(month, year);

  let days = [];
  for (let i=0; i<nDays; i++) {
    let date = new Date(`${month+1}/${i+1}/${year}`);
    days.push({
      dayOfWeek: date.getDay(),
      dayOfWeekString: dayStrings[date.getDay()],
      date: i+1
    });
  }

  return {
    month: month,
    monthString: monthStrings[month],
    year: year,
    days: days
  }

}

// Given the month and year, get the number of days in that month
function daysInMonth(month, year) {
  return new Date(year, 
                  month+1, 
                  0).getDate();
}
