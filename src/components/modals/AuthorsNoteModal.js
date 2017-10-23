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
          Author's note
          Dear beautiful human being,
          Thank you for being Committed's one of first few hundred users.
          As I'm adding more and more features, I'm planning to start charging a small fee from new users soon to support Comitted's development, and also my tuition and living expenses (yes I'm a student).
          As a token of my appreciation, you'll be able to use Committed for free and receive all future updates forever.
          If you like Committed, this is a good time to tell your friends and families to get it while it's still free.
          Also leave a review or feature suggestion on the Chrome web store!
          Love,
          DevFox
        </ReactModal>
    )
  }
}
