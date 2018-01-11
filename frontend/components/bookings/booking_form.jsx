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
    let newState = Object.assign({}, this.state);
    newState.end_date = this.state.endDate.format();
    newState.start_date = this.state.startDate.format();
    delete newState.focusedInput;
    delete newState.startDate;
    delete newState.endDate;
    this.props.createBooking(newState);
  }

  // renderErrors() {
  //     return(
  //       <ul className="booking-errors-list">
  //         {this.props.errors.map((error, i) => (
  //           <li key={`error-${i}`}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  // }

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
