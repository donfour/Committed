import React from 'react';
import '../css/SideMenu.css';
import DevFoxButton from './buttons/DevFoxButton';

export default class SideMenu extends React.Component{
  render(){
    return(
        <div>
          <DevFoxButton
            themeNumber={this.props.themeNumber}
          />
        </div>
    )
  }
}
