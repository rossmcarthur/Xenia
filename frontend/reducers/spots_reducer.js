import merge from 'lodash/merge';

import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT,
  REMOVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
    return action.spots;
    case RECEIVE_SPOT:
    return merge({}, state, { [action.spot.id]: action.spot });
    case REMOVE_SPOT:
    delete newState[action.spot.id];
    return newState;
    default:
    return state;
  }
};

export default spotsReducer;
