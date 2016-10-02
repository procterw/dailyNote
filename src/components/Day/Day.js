import React from 'react';

require("./Day.scss");

import { browserHistory } from 'react-router';


class Day extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(day) {
    browserHistory.push(`/note/${day.ISO}/${day.activeCalendar}`);
  }

  render() {

    const day = this.props.day;

    let dayClass = "day";
    dayClass += day.isToday ? " today" : "";
    dayClass += day.dayOfMonth === 0 ? " first-day" : "";
    dayClass += day.hasNote ? " has-note" : "";
    dayClass += (" " + day.dayOfWeekString);

    return(
      <div className={dayClass}>
        <div className="content" onClick={this.onClick.bind(this, day)}>
          <span className="day-of-month">{day.dayOfMonth}</span>
        </div>
      </div>
    )
  }

}

export default Day;
