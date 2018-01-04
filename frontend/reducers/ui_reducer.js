import merge from 'lodash/merge';
import {
  LOGIN_MODAL,
  SIGNUP_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions';

const initialState = {
  login_modal: false,
  signup_modal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_MODAL:
    return merge({}, state, { login_modal: true, signup_modal: false });
    case SIGNUP_MODAL:
    return merge({}, state, { signup_modal: true, login_modal: false });
    case CLOSE_MODAL:
    return initialState;
    default:
    return state;
  }
};

export default uiReducer;
