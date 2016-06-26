import React from 'react';

import Month from '../Month/Month.js';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setYear(this.props.params.year);
    this.props.buildCalendar();
  }

  render() {

    const calendar = this.props.calendar;

    return (
      <div>
        { calendar.months.map((month,i) => {
          return(
            <Month month={month} key={i}>
            </Month>
          )
        })}
      </div>
    );
  }
}


export default Calendar;
