import React from 'react';

require("./Month.scss");

import Day from "../Day/Day.js";

class Month extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const month = this.props.month;

    return(
      <div className="month">
        <h2>{month.monthString}</h2>
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
