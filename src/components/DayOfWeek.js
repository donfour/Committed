import React from 'react';
import '../css/DayOfWeek.css';

export default class DayOfWeek extends React.Component{
  render(){
    return(
        <div
          className="underline"
          onClick={()=>{this.props.toggleDayOfWeek()}}
          style={this.props.completed ? {color: 'black'} : {'color': 'darkgray'}}
        >
          {this.props.dayName}
        </div>
    )
  }
}
