import { connect } from 'react-redux';
import { receiveMapLocation } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveMapLocation: location => dispatch(receiveMapLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
