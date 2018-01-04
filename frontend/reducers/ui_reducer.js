import merge from 'lodash/merge';
import {
  LOGIN_MODAL,
  SIGNUP_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions';


const initialState = {
  session_modal: null
};

export const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_MODAL:
    return merge({}, state, { session_modal: 'login' });
    case SIGNUP_MODAL:
    return merge({}, state, { session_modal: 'signup' });
    case CLOSE_MODAL:
    return initialState;
    default:
    return state;
  }
};

export default uiReducer;
