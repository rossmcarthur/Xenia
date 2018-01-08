import { connect } from 'react-redux';
import { fetchBookings, receiveBooking } from '../../actions/booking_actions';
import Bookings from './booking_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.booking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    receiveBooking: booking => dispatch(receiveBooking()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
