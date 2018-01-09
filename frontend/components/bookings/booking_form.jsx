import React from 'react';
import ReactStars from 'react-stars';

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
        <p className="booking-price">{this.props.spot.price} per night</p>
          <ReactStars className="rating-stars"
            count={ 5 }
            value={ this.props.spot.average_rating }
            edit={ false }
            color2='#008489' />
        <input type="date" placeholder="Check In" value=""/>
        <input type="date" placeholder="Check Out" value=""/>
        <button className="booking-request">Request to Book</button>
      </div>
    );
  }
}

export default BookingForm;
