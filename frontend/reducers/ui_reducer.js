import merge from 'lodash/merge';
import filters from './filters_reducer';
import modals from './session_modals_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ modals, filters });
