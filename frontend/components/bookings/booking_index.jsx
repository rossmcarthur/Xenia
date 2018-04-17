import React from 'react';
import { connect } from 'react-redux';
import { fetchUserBookings } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    userId: state.session.currentUser.id,
    bookings: state.session.currentUser.bookings,
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

componentDidMount() {
  this.props.fetchUserBookings(this.props.userId);
}

render() {
  return (
    <div>
    WHAT UP!!
  </div>
);
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
