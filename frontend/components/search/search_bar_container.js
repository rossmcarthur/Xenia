import { connect } from 'react-redux';
import { receiveMapLocation } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => {
  return {
    receiveMapLocation: location => dispatch(receiveMapLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
