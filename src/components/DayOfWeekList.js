import React from 'react';
import DayOfWeek from './DayOfWeek';

export default class DayOfWeekList extends React.Component{
  render(){
    return(
      <div>
        {this.props.daysOfWeek.map((day,i)=>{
          var dayName;
          switch(i){
            case 0: dayName='S'; break;
            case 1: dayName='M'; break;
            case 2: dayName='T'; break;
            case 3: dayName='W'; break;
            case 4: dayName='T'; break;
            case 5: dayName='F'; break;
            case 6: dayName='S'; break;
            default: break;
          }
          return(
            <DayOfWeek
              key={i}
              dayName={dayName}
              completed={day}
              toggleDayOfWeek={()=>{this.props.toggleDayOfWeek(i)}}
            />
          );
        })}
      </div>
    )
  }
}
