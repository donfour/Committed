import React from 'react';
import Checkbox from './Checkbox';
import { Collapse } from 'react-collapse';
import '../css/TodoItem.css';
import DayOfWeekList from './DayOfWeekList';
import DeleteButton from './DeleteButton';
import { FONT_COLOR, COMPLETED_FONT_COLOR } from '../constants/constants';

export default class TodoItem extends React.Component{
  state = {
    isOpened: false,
    displayEditButton: false,
    value: this.props.name
  }

  toggleOpen(){
    if(window.innerWidth < 500){
      return;
    }
    const newState = !this.state.isOpened;
    this.setState({
      isOpened: newState
    })
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleSpanClick(e){
    if(window.innerWidth < 500){
      return;
    }
    this.props.startEditMode();
  }

  handleInputClick(e){
    e.stopPropagation();
  }

  handleBlur(){
    this.props.endEditMode(this.state.value);
  }

  componentDidMount(){
    if(this.props.editing){
      document.getElementById('edit').focus();
    }
  }

  render(){
    return(
      <div className="todo">
        <div className="todo-body">
          <div className="todo-checkbox">
            <Checkbox
              size={18}
              toggleTaskCompletion={this.props.toggleTaskCompletion}
              completed={this.props.completed}
            />
          </div>
          <div
            className="todo-content"
            onClick={()=>{this.toggleOpen()}}
            style={this.props.completed ? {color: COMPLETED_FONT_COLOR} : {color: FONT_COLOR}}
          >

            {
              this.props.editing ?
              <input
                id="edit"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onClick={this.handleInputClick.bind(this)}
                onBlur={this.handleBlur.bind(this)}
              ></input>
              :
              <span
                className="taskname"
                onClick={this.handleSpanClick.bind(this)}
                onMouseOver={()=>{
                  if(window.innerWidth < 500){
                    return;
                  }
                  this.setState({displayEditButton:true});
                }}
                onMouseOut={()=>{this.setState({displayEditButton:false})}}
              >
                {this.props.name}
              </span>
            }

            <div
              className="edit-button"
              style={ this.state.displayEditButton ? null : { display: 'none' } }
            >
              <svg width="100%" height="100%" viewBox="0 0 528.899 528.899">
                <g>
                	<path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/>
                </g>
              </svg>
            </div>

          </div>
        </div>
        <Collapse isOpened={this.state.isOpened}>
          <div className="todo-footer-container">
            <DayOfWeekList
              daysOfWeek={this.props.daysOfWeek}
              toggleDayOfWeek={this.props.toggleDayOfWeek}
            />
            <DeleteButton deleteTask={this.props.deleteTask}/>
          </div>
        </Collapse>
      </div>
    )
  }
}
