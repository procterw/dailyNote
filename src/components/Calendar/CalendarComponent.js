import React from 'react';

// import './Calendar.scss';

import Month from '../Month/Month.js';

import { Link } from 'react-router';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.props.loadNotes(this.props.activeYear, this.props.activeCalendar);
    // this.props.buildCalendar(this.props.activeYear, this.props.activeCalendar);

  }

  componentWillReceiveProps(newProps) {

    const oldProps = this.props;

    let yearDidChange = newProps.activeYear !== oldProps.activeYear;
    let calendarDidChange = newProps.activeCalendar !== oldProps.activeCalendar;

    if (yearDidChange || calendarDidChange) {
        this.props.buildCalendar(newProps.activeYear, newProps.activeCalendar, newProps.notes);
    }

  }

  render() {

    const calendar = this.props.calendar;

    return (
      <div className="calendar-component">
        { this.props.activeYear && this.props.activeCalendar ? (
          <div className="calendar">
            { calendar.map((month,i) => {
              return(
                <Month month={month} key={i}>
                </Month>
              )
            })}
          </div>
        ) : (
            <div>
              NO CALENDAR
            </div>
        )}
      </div>
    );
  }
}


export default Calendar;
