import React from 'react';
import Checkbox from './Checkbox';
import { Collapse } from 'react-collapse';
import '../css/TodoItem.css';
import DayOfWeekList from './DayOfWeekList';

export default class TodoItem extends React.Component{
  state = {
    isOpened: false
  }

  toggleOpen(){
    const newState = !this.state.isOpened;
    this.setState({
      isOpened: newState
    })
  }

  render(){
    return(
      <div className="todo">
        <div className="todo-body">
          <div className="todo-checkbox">
            <Checkbox
              size={25}
              toggleTaskCompletion={this.props.toggleTaskCompletion}
              completed={this.props.completed}
            />
          </div>
          <div
            className="todo-content"
            onClick={()=>{this.toggleOpen()}}
            style={this.props.completed ? {color: 'darkgray'} : {color: 'black'}}
          >
            {this.props.name}
          </div>
        </div>
        <Collapse isOpened={this.state.isOpened}>
          <DayOfWeekList
            daysOfWeek={this.props.daysOfWeek}
            toggleDayOfWeek={this.props.toggleDayOfWeek}
          />
        </Collapse>
      </div>
    )
  }
}
