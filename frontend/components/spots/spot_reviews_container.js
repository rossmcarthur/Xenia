import { connect } from 'react-redux';
import SpotReviews from './spot_reviews';
import { createReview } from '../../actions/review_actions';

const mapStateToProps =  (state, ownProps) => {

  const spot = Object.values(state.entities.spots).map(spot => {
    return spot.id;
  });
  const bookingIds = Object.values(state.session.currentUser.bookings).map(booking => {
    return booking.spot_id;
  });
  const reviewIds = Object.values(state.session.currentUser.reviews).map(review => {
    return review.spot_id;
  });

  return {
    spotId: parseInt(spot),
    currentUser: state.session.currentUser,
    reviewIds: reviewIds,
    bookingIds: bookingIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotReviews);
