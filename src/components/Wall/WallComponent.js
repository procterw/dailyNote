import React from 'react';

import { Link } from 'react-router';

import Calendar from '../Calendar/Calendar.js';

import './Wall.scss';

class Wall extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    if (this.props.params.activeYear) {
      this.props.updateYear(this.props.params.activeYear);
      this.props.loadCalendars();
    } else {
      this.props.history.push('/calendar/2016');
    }

  }

  componentWillReceiveProps(newProps) {

    let yearDidChange = newProps.params.activeYear !== this.props.params.activeYear;

    if (yearDidChange) {
      this.props.updateYear(newProps.params.activeYear);
    }

  }

  render() {

    const calendars = this.props.calendars;
    const activeYear = this.props.params.activeYear;
    const yearOptions = this.props.yearOptions;
    const activeCalendar = this.props.params.activeCalendar;

    return (
      <div className="wall-component">
        <ul className="calendar-list">
          { calendars.map(calendar => {
            return (
              <li
                style={{ background: calendar.color }}
                key={calendar.title}
                onClick={this.props.setCalendar.bind(this, calendar.title)}>
                <Link
                  to={`/calendar/${activeYear}/${calendar.title}`}>
                  {calendar.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <ul className="year-list">
          { yearOptions.map(year => {
            return (
              <li
                key={year}
                className={year == activeYear ? "active" : ""}>
                <Link to={`/calendar/${year}/${activeCalendar}`}>{year}</Link>
              </li>
            )
          })}
        </ul>

          <Calendar activeYear={activeYear} activeCalendar={activeCalendar}></Calendar>

      </div>
    );
  }
}


export default Wall;
