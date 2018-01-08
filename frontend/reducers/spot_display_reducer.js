import { RECEIVE_SPOT } from '../actions/spot_actions';

const SpotDisplayReducer = (state = null, action) => {
  switch(action.type) {
    case RECEIVE_SPOT:
      return action.spot.spot.id;
      default:
      return state;
  }
};

export default SpotDisplayReducer;
