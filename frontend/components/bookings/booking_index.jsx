import React from 'react';
import { connect } from 'react-redux';
import { fetchBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: state.session.currentUser.bookings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooking: id => dispatch(fetchBooking(id))
  };
};

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  this.props.bookings.forEach( booking => {
     this.props.fetchBooking(booking.id);
  });
}

render() {
  return (
    <div>
    WHAT UP!!
  </div>
  )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
