import React from 'react';

require("./Day.scss");

class Day extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const day = this.props.day;

    let dayClass = "day";
    dayClass += day.isToday ? " today" : "";
    dayClass += day.dayOfMonth === 0 ? " first-day" : "";
    dayClass += (" " + day.dayOfWeekString);

    return(
      <div className={dayClass}>
        <div className="content">
          {day.dayOfMonth}
        </div>
      </div>
    )
  }

}

export default Day;
