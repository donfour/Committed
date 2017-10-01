import React from 'react';
import '../css/CalendarModal.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import ReactModal from 'react-modal';

export default class CalendarModal extends React.Component{

  render(){
    return(
      <div>
        <ReactModal
          isOpen={this.props.showCalendar}
          contentLabel="Calendar Modal"
          closeTimeoutMS={200}
          className="Modal"
        >
          <div
            className="Overlay"
            onClick={this.props.handleCloseCalendar}
          >

            <div className="calendar-container" onClick={(e)=>{e.stopPropagation()}}>
              <DayPicker
                onDayClick={day => this.props.selectDueDate(day)}
              />
              <button
                className="remove-duedate-button"
                onClick={()=>this.props.selectDueDate(null)}
              >
                remove duedate
              </button>
            </div>



          </div>
        </ReactModal>
      </div>
    )
  }
}
