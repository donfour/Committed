import React from 'react';
import '../../css/AuthorsNoteModal.css';
import ReactModal from 'react-modal';

export default class AuthorsNoteModal extends React.Component{

  render(){
    return(
        <ReactModal
          isOpen={this.props.AuthorsNoteModalOpened}
          contentLabel="Authors Note Modal"
          closeTimeoutMS={200}
          className="authors-note-modal"
        >
        <div
          className="Overlay"
          onClick={this.props.onCloseAuthorsNoteClick}
        >
          <div className="authors-note-modal-content">
            <div className="header">Dear beautiful human being,</div>
            <div>
              Thank you for being one of the first users of Committed!
            </div>
            <div>
              This version brings two new features:
              <ol>
                <li>Theme selection</li>
                <li>Data sync across any Chrome browser that you're logged into</li>
              </ol>
            </div>
            <div>
              As I'm adding more and more features, I'm planning to start charging a small fee from new users in order to support Comitted's development, and also my tuition and living expenses.
            </div>
            <div>
              However, as a token of my appreciation, you'll be able to use Committed for free and receive all future updates forever.
            </div>
            <div>
              If you like Committed, now is a good time to tell your friends and families to get it while it's still free.
            </div>
            <div>
              Please also leave a review or feature suggestion on the Committed's Chrome web store page!
            </div>
            <div>
              Love,
              <br/>
              DevFox
            </div>
          </div>
        </div>
        </ReactModal>
    )
  }
}
