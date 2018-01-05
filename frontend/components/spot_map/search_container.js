import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SpotIndex from '../spots/spot_index';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
