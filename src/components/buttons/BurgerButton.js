import React from 'react';
import '../../css/buttons/BurgerButton.css';

export default class BurgerButton extends React.Component{
  render(){
    return(
          <div
            className="burger-click-region"
            onClick={this.props.onSetSidebarOpen}
          >
            <span className="burger-menu-piece"></span>
            <span className="burger-menu-piece"></span>
            <span className="burger-menu-piece"></span>
          </div>
    )
  }
}
