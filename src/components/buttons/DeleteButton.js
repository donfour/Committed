import React from 'react';
import '../../css/buttons/DeleteButton.css';

export default class DeleteButton extends React.Component{
  render(){
    return(
      <div
        className="delete-button"
        onClick={this.props.deleteTask}
      >
        <span className="lib"></span>
        <span className="can"></span>
      </div>
    )
  }
}
