import React from 'react';
import '../css/DayOfWeek.css';
import { FONT_COLOR, COMPLETED_FONT_COLOR } from '../constants/constants';

export default class DayOfWeek extends React.Component{
  state = {
    onHover: false
  }
  render(){
    return(
        <div
          className="underline"
          onClick={()=>{this.props.toggleDayOfWeek()}}
          style={this.props.completed || this.state.onHover ? {color: FONT_COLOR} : {'color': COMPLETED_FONT_COLOR}}
          onMouseOver={()=>{this.setState({onHover: true})}}
          onMouseOut={()=>{this.setState({onHover: false})}}
        >
          {this.props.dayName}
        </div>
    )
  }
}
