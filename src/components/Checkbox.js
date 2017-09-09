import React from 'react';
import '../css/Checkbox.css';

export default class Checkbox extends React.Component{
  state = {
    isChecked: false,
    style: {
      width: this.props.size,
      height: this.props.size,
    }
  }

  handleClick(){
    this.props.toggleTaskCompletion();
    if(!this.state.isChecked){
      this.refs.tick.style.animation = 'tick 0.3s ease-in-out forwards';
      this.setState({
        isChecked: true
      })
    } else {
      this.refs.tick.style.animation = '';
      this.setState({
        isChecked: false
      })
    }
  }

  render(){
    return(
      <div id="checkbox"
        style={this.state.style}
        onClick={this.handleClick.bind(this)}
      >
        <svg id="tick"  width="100%" viewBox="0 0 200 200">
          <polyline ref="tick" className="st0" points="25.1,101 76.9,154 177,45.9"/>
        </svg>
      </div>
    )
  }
}
