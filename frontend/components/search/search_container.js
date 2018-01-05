import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { updateBounds } from '../../actions/filter_actions';
import Search from './search';


const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    updateBounds: (filter, value) => dispatch(updateBounds(filter, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
