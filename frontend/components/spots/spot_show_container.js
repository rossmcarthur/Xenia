import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot, deleteSpot } from '../../actions/spot_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const spotId = ownProps.match.params.spotId;
  const spot = state.entities.spots[spotId];
  return {
    spot,
    spotId,
    reviews: state.entities.reviews,
    bookings: state.entities.bookings,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    deleteSpot: spotId => dispatch(deleteSpot(spotId)),
    fetchReviews: spotId => dispatch(fetchReviews(spotId)),
    fetchBookings: spotId => dispatch(fetchBookings(spotId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SpotShow);
