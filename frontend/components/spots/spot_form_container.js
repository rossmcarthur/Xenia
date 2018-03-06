import { connect } from 'react-redux';
import {
  fetchSpot,
  createSpot,
  deleteSpot,
  updateSpot
} from '../../actions/spot_actions';
import SpotForm from './spot_form';


const mapStateToProps = (state, ownProps) => {
  let formType;
  let spot;
  if (ownProps.match.path.slice(1) === 'spots/create') {
    return {
      formType: 'Create',
      spot: {
        title: '',
        address: '',
        body: '',
        guests: 1,
        price: 0,
        spot_type: '',
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
      },
      user: state.session.currentUser
    };
  } else {
    return {
    formType: 'Edit',
    spot: state.session.spots[ownProps.match.params.spotId],
    user: state.session.currentUser
    };
  }
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
    createSpot: spot => dispatch(createSpot(spot)),
    deleteSpot: id => dispatch(deleteSpot(id)),
    updateSpot: spot => dispatch(updateSpot(spot))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
