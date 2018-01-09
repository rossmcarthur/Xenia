import { connect } from 'react-redux';
import { fetchBookings, createBooking } from '../../actions/booking_actions';
import Bookings from './booking_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.booking,
    spot: Object.values(state.entities.spots)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: booking => dispatch(createBooking(booking))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
