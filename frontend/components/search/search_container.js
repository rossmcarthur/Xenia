import { connect } from 'react-redux';
import { updateBounds } from '../../actions/filter_actions';
import { receiveMapLocation } from '../../actions/search_actions';
import Search from './search';


const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBounds: (filter, value) => dispatch(updateBounds(filter, value)),
    receiveMapLocation: location => dispatch(receiveMapLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
