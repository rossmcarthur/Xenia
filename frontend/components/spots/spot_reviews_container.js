import { connect } from 'react-redux';
import { createReview, deleteReview } from '../../actions/review_actions';
import SpotReviews from './spot_reviews';

const mapStateToProps = (state, ownProps) => {
  debugger
  const spotId = state.entities.spot.id
  const reviewId = ownProps.match.params.reviewId;
  return {
    spot: state.entities.reviews.spotId[spotId],
    review: state.entities.reviews[reviewId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    deleteReview: id => dispatch(deleteReview(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotReviews);
