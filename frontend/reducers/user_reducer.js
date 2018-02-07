import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user);
    case RECEIVE_SPOT:
      return merge({}, state, action.user);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    default:
      return state;
  }
};

export default userReducer;
