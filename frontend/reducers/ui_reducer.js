import merge from 'lodash/merge';
import filters from './filters_reducer';
import modals from './session_modals_reducer';
import { combineReducers } from 'redux';

// const initialState = {
//   session_modal: null
// };
//
// const modalReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case LOGIN_MODAL:
//     return merge({}, state, { session_modal: 'login' });
//     case SIGNUP_MODAL:
//     return merge({}, state, { session_modal: 'signup' });
//     case CLOSE_MODAL:
//     return initialState;
//     default:
//     return state;
//   }
// };

export default combineReducers({ modals, filters });
