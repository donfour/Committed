import React from 'react';
import Checkbox from './Checkbox';
import { Collapse } from 'react-collapse';
import '../css/TodoItem.css';

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
          <div className="todo-checkbox"><Checkbox size={25}/></div>

          <div className="todo-content" onClick={()=>{this.toggleOpen()}}>
            {this.props.name}
          </div>
        </div>

        <Collapse isOpened={this.state.isOpened}>
          <div>Set date</div>
        </Collapse>

      </div>
    )
  }
}
