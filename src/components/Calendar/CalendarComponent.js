import React from 'react';

import Month from '../Month/Month.js';

import { Link } from 'react-router';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.buildCalendar(this.props.activeYear, this.props.activeCalendar);

  }

  componentWillReceiveProps(newProps) {

    const oldProps = this.props;

    let yearDidChange = newProps.activeYear !== oldProps.activeYear;
    let calendarDidChange = newProps.activeCalendar !== oldProps.activeCalendar;

    if (yearDidChange || calendarDidChange) {
        this.props.buildCalendar(newProps.activeYear, newProps.activeCalendar);
    }

  }

  render() {

    const calendar = this.props.calendar;

    return (
      <div>
        { this.props.activeYear && this.props.activeCalendar ? (
          <div>
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
