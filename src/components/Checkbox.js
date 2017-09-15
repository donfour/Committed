import React from 'react';
import '../css/Checkbox.css';

export default class Checkbox extends React.Component{
  state = {
    isChecked: this.props.completed
  }

  handleClick(){
    this.props.toggleTaskCompletion();
    var self = this;
    if(!this.props.completed){
      for(var i=0; i<205; i++){
        setTimeout(()=>{
          self.setState({
            strokeDashoffset: this.state.strokeDashoffset - 1
          })
        }, 0)
      }
    } else {
      for(var i=0; i<205; i++){
        setTimeout(()=>{
          self.setState({
            strokeDashoffset: this.state.strokeDashoffset + 1
          })
        }, 0)
      }
    }
  }

  componentDidMount(){
    if(this.props.completed){
      this.setState({
        strokeDashoffset: 295
      })
    } else {
      this.setState({
        strokeDashoffset: 500
      })
    }
  }

  render(){
    return(
      <div id="checkbox"
        onClick={this.handleClick.bind(this)}
      >
        <svg id="tick"  width="100%" height="100%" viewBox="0 0 200 200">
          <polyline ref="tick" className="st0" points="25.1,101 76.9,154 177,45.9" style={{strokeDashoffset: this.state.strokeDashoffset}}/>
        </svg>
      </div>
    )
  }
}
