import React from 'react';
import '../../css/buttons/DevFoxButton.css';

export default class DevFoxButton extends React.Component{
  render(){
    return(
      <div className="fox-icon-container">
        <a href="http://donovanso.com" target="_blank" rel="noopener noreferrer">
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            <path className="fox" d="M100,192.8c-24.2-47.9-75.3-71.2-75.3-71.2V15.2c0,0,46.8,4.5,46.8,42.2h57c0-37.6,46.8-42.2,46.8-42.2v106.5 C175.3,121.6,124.2,145,100,192.8z"/>
          </svg>
        </a>
      </div>
    )
  }
}
