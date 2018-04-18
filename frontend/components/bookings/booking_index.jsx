import React from 'react';
import { connect } from 'react-redux';
import { fetchUserBookings } from '../../actions/booking_actions';
import BookingIndexItem from './booking_index_item';
import NavbarContainer from '../navbar/navbar_container';

const mapStateToProps = state => {
  return {
    booker_id: state.session.currentUser.id,
    bookings: Object.values(state.entities.bookings)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBookings: userId => dispatch(fetchUserBookings(userId))
  };
};

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserBookings(this.props.booker_id);
  }

render() {
  let bookings;
  if (Object.values(this.props.bookings).length > 0) {
    bookings = this.props.bookings.map(booking => {
    return (
      <BookingIndexItem
        key={booking.id}
        booking={booking}
        />
    );
  });
}
  return (
    <div>
      <NavbarContainer />
      <p className='booking-page-header'>Your Bookings</p>
      { bookings }
    </div>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
