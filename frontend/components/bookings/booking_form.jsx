import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
    };
  }

  render() {
    return (
      <div className="booking-container">
        <p> BOOKING FORM HERE </p>
        <input type="date" placeholder="Check In" value=""/>
        <input type="date" placeholder="Check Out" value=""/>
      </div>
    );
  }
}

export default BookingForm;
