import { connect } from 'react-redux';
import SpotReviews from './spot_reviews';
import { createReview } from '../../actions/review_actions';

const mapStateToProps =  (state, ownProps) => {
  const spot = Object.values(state.entities.spots).map(spot => {
    return spot.id;
  });
  return {
    review: {
      spot_id: parseInt(spot),
      body: '',
      rating: 1,
      show: false,
    },
    currentUser: state.session.currentUser,
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotReviews);
