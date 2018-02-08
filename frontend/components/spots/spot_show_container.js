import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot, deleteSpot } from '../../actions/spot_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const spotId = ownProps.match.params.spotId;
  return {
    spot: state.entities.spots[spotId],
    spotId,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    deleteSpot: spotId => dispatch(deleteSpot(spotId)),
    fetchReviews: spotId => dispatch(fetchReviews(spotId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SpotShow);
