<<<<<<< HEAD
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SpotIndex from './spot_index';
// import SpotMap from './spot_map/spot_map';

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
=======
// import { connect } from 'react-redux';
// import { fetchSpots } from '../../actions/spot_actions';
// import SpotIndex from './spot_index';
//
// const mapStateToProps = state => {
//   return {
//     spots: Object.values(state.entities.spots)
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSpots: () => dispatch(fetchSpots())
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SpotIndex);
>>>>>>> spot-function
