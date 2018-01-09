import React from 'react';
import ReactStars from 'react-stars';
import BookingFormContainer from '../bookings/booking_form_container';
import NavbarContainer from '../navbar/navbar_container';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spotId);
  }

  render() {
    if (this.props.spot) {
      return (
        <div>
          <h1>Welcome to the show page!</h1>
          <li> {this.props.spot.title}</li>
          <BookingFormContainer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
