import React from 'react';

require("./Month.scss");

import Day from "../Day/Day.js";

class Month extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const month      = this.props.month;
    const daysOfWeek = ["Su","Mo","Tu","Wd","Th","Fr","Sa"];

    return(
      <div className="month">
        <h2>{month.monthString}</h2>
        <ul className="days-of-week">
          { daysOfWeek.map(day => {
            return <li key={day}>{day}</li>
          })}
        </ul>
        { month.days.map((day,i) => {
          return(
            <Day day={day} key={i}>

            </Day>
          )
        })}
      </div>
    )
  }

}


export default Month
