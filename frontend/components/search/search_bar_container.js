import { connect } from 'react-redux';
import { fetchMapLocation } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => {
  return {
    fetchMapLocation: location => dispatch(fecthMapLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
