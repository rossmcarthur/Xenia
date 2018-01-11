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
  if (ownProps.match.path.slice(1) === 'spots/') {
    return { formType: 'Create',
    spot: {
      title: '',
      address: '',
      body: '',
      guests: 0,
      price: 0,
      spot_type: '',
      bathrooms: 0,
      bedrooms: 0,
      beds: 0
    }
  };
  } else {
    return {
    formType: 'Edit',
    spot: state.session.spots[ownProps.match.params.spotId]
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
