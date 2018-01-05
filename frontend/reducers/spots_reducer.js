import merge from 'lodash/merge';

import {
  RECEIVE_SPOTS
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
    return action.spots;
    default:
    return state;
  }
};

export default spotsReducer;
