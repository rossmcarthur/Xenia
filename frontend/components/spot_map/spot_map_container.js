import { connect } from 'react-redux';
import SpotMap from './spot_map';
import { receiveMapLocation } from '../../actions/search_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBounds: (bounds, value) => dispatch(updateBounds(bounds, value)),
    receiveMapLocation: location => dispatch(receiveMapLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotMap);
