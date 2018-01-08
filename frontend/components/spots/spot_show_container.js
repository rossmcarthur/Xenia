import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot, deleteSpot } from '../../actions/spot_actions';

const mapStateToProps = state => {
  return {
    spot: state.entities.spots[state.ui.spotDisplay]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SpotShow);
