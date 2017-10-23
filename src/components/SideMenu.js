import React from 'react';
import '../css/SideMenu.css';
import DevFoxButton from './buttons/DevFoxButton';
import { Collapse } from 'react-collapse';

export default class SideMenu extends React.Component{
  state = {
    isOpened: false
  }
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
            <button onClick={()=>{this.setState({isOpened:!this.state.isOpened})}}>
              test
            </button>
            <Collapse isOpened={this.state.isOpened}>
              testing
            </Collapse>
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
