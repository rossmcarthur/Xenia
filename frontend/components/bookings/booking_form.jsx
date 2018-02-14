import React from 'react';
import ReactStars from 'react-stars';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      spot_id: this.props.spot.id,
      focusedInput: null,
      rendered: '',
      cost: null
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
     if (this.state.startDate && this.state.endDate) {
        let newState = Object.assign({}, this.state);
        newState.end_date = this.state.endDate.format();
        newState.start_date = this.state.startDate.format();
        delete newState.focusedInput;
        delete newState.startDate;
        delete newState.endDate;
        this.props.createBooking(newState).then(() => {
          this.setState({rendered: 'create'});
        },()=>{
          this.setState({rendered: 'errors'});
        });
      }
  }

  renderBooking() {
    if (this.state.rendered === 'create' && this.props.currentUser) {
      return (
        <div>
          <p className="booking-created">Booking created!</p>
        </div>
      );
    } else {
      return null;
    }
  }

  renderErrors() {
    if (this.state.rendered === 'errors') {
      if (this.props.loggedIn) {
        return(
          <p className="booking-errors">Booking slot unavailable</p>
        );
      } else {
        return (
          <p className="booking-errors">Must be logged in to create a booking!</p>
        );
      }
    }
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
              { this.renderBooking() }
              { this.renderErrors() }
              <p className="dates">Dates</p>
              <div className="calendar">
                <DateRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={ focusedInput => this.setState({ focusedInput })}
                  />
                </div>
            <button className="booking-request" disabled={!this.state.startDate || !this.state.endDate}>Request to Book</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingForm;
