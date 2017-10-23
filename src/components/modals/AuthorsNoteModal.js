import React from 'react';
import '../../css/AuthorsNoteModal.css';
import ReactModal from 'react-modal';

export default class AuthorsNoteModal extends React.Component{

  render(){
    return(
        <ReactModal
          isOpen={this.props.showAuthorsNoteModal}
          contentLabel="Choose Theme Modal"
          closeTimeoutMS={200}
          className="Modal"
        >

        </ReactModal>
    )
  }
}
