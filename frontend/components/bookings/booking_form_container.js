import { connect } from 'react-redux';
import { fetchBookings, createBooking } from '../../actions/booking_actions';
import Bookings from './booking_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const spotId = parseInt(ownProps.match.params.spotId);
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    spot: state.entities.spots[spotId],
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings));
