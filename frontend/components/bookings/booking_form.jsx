import React from 'react';
import ReactStars from 'react-stars';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      booker_id: this.props.currentUser.id,
      spot_id: this.props.spot.id,
      focusedInput: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
  }

  render() {
    return (
      <div className="booking-container">
        <div className="booking-content">
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <p className="booking-price">${this.props.spot.price} per night</p>
              <ReactStars className="booking-rating"
                count={ 5 }
                value={ this.props.spot.average_rating }
                edit={ false }
                color2='#008489' />
              <p className="dates">Dates</p>
              <div className="calendar">
                <DateRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  />
                </div>
            <button className="booking-request">Request to Book</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingForm;
