import { connect } from 'react-redux';
import SpotReviews from './spot_reviews';
import { updateReview } from '../../actions/review_actions';

const mapStateToProps =  (state, ownProps) => {
  const spot = Object.values(state.entities.spots).map(spot => {
    return spot.id;
  });
  let selectedReview = state.entities.reviews[ownProps.currentReview.id];
  selectedReview.show = true;
  return {
    review: selectedReview,
    formType: 'edit',
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateReview: review => dispatch(updateReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotReviews);
