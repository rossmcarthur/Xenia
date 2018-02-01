import { connect } from 'react-redux';
import SpotReviews from './spot_reviews';

const mapStateToProps = (state, ownProps) => {
  const spotId = ownProps.match.params.spotId
  return {
    spot: state.entities.reviews.spotId[spotId],
    
  };
};
