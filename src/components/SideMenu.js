import React from 'react';
import '../css/SideMenu.css';
import DevFoxButton from './buttons/DevFoxButton';
import AuthorsNoteModal from './modals/AuthorsNoteModal';
import { Collapse } from 'react-collapse';

export default class SideMenu extends React.Component{
  state = {
    themeOptionsOpened: false,
    AuthorsNoteModalOpened: false
  }
  onChooseThemeClick(){
    this.setState({
      themeOptionsOpened: !this.state.themeOptionsOpened
    })
  }
  onAuthorsNoteClick(){
    this.setState({
      AuthorsNoteModalOpened: !this.state.AuthorsNoteModalOpened
    })
  }
  onCloseAuthorsNoteClick(){
    this.setState({
      AuthorsNoteModalOpened: false
    })
  }
  render(){
    return(
        <div className="SideMenu">
          <div className="menu-header">
            <div className="extension-name">
              Committed
            </div>
            <div className="extension-version">
              v1.1.1
            </div>
          </div>

          <div
            className="menu-item"
            onClick={this.onChooseThemeClick.bind(this)}
          >
            Choose theme
          </div>
          <Collapse isOpened={this.state.themeOptionsOpened}>
            <div className="themes">
              <div className="row">
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-0")}}>C</div>
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-1")}}>C</div>
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-2")}}>C</div>
              </div>
              <div className="row">
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-3")}}>C</div>
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-4")}}>C</div>
                <div className="theme-option" onClick={()=>{this.props.handleSelectTheme("theme-5")}}>C</div>
              </div>
            </div>
          </Collapse>


          <div
            className="menu-item"
            onClick={this.onAuthorsNoteClick.bind(this)}
          >
            Author's note
          </div>
          <AuthorsNoteModal
            AuthorsNoteModalOpened={this.state.AuthorsNoteModalOpened}
            onCloseAuthorsNoteClick={this.onCloseAuthorsNoteClick.bind(this)}
          />
          <div className="menu-footer">
            <DevFoxButton />
          </div>
        </div>
    )
  }
}
