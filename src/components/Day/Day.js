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

  componentDidMount() {
    if (!this.props.day.hasNote) return;
    this.renderNotePreview(this.props.day.note);
  }

  renderNotePreview(note) {
    const canvas = this.refs.canvas;
    const height = canvas.scrollHeight;
    const width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
    canvas.width = canvas.scrollWidth;
    
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "rgb(79, 195, 247)"; 

    const lineHeight = 1;
    const lineSpacing = 3;
    const padding = 5;

    for (let i=0; i<note.nLines; i++) {
      const rX = padding;
      const rY = padding + i * ( lineHeight + lineSpacing );
      const rW = i < note.nLines-1 ?
        width - 2 * padding :
        (Math.random() * width) - 2 * padding;
      const rH = lineHeight;
      ctx.fillRect(rX,rY,rW,rH);  
    }
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
          <div className="day-of-month">
            <i> {day.dayOfMonth +1} </i>
          </div>
          { day.hasNote ? <canvas ref="canvas"/> : null }
        </div>
      </div>
    )
  }

}

export default Day;
