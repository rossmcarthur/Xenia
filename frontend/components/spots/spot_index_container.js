import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { closeModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
