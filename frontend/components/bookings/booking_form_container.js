import { connect } from 'react-redux';
import { fetchBookings, createBooking } from '../../actions/booking_actions';
import Bookings from './booking_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    spot: Object.values(state.entities.spots)[0],
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
