import React from 'react';
import '../css/SideMenu.css';
import DevFoxButton from './buttons/DevFoxButton';

export default class SideMenu extends React.Component{
  render(){
    return(
        <div className={this.props.themeNumber + " SideMenu"}>

          {/* toggle show button */}
          <div>
            <button
            className={this.props.themeNumber + " toggle-showall-button"}
            onClick={this.props.toggleShowAll}
            >
              {this.props.displayMode}
            </button>
          </div>

          <div>
            <DevFoxButton
              themeNumber={this.props.themeNumber}
            />
          </div>


        </div>
    )
  }
}
