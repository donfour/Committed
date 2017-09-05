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

          <div className="todo-move">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                <defs>
                    <path d="M0 0h24v24H0V0z" id="a"/>
                </defs>
                <clipPath id="b">
                    <use overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>
            </svg>
          </div>
        </div>

        <Collapse isOpened={this.state.isOpened}>
          <div>Set date</div>
        </Collapse>

      </div>
    )
  }
}
