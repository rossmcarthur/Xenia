import { combineReducers } from 'redux';
import spots from './spots_reducer';
import bookings from './booking_reducer';
import reviews from './reviews_reducer';

export default combineReducers({ spots, bookings, reviews});
