import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      delete newState[action.booking.id];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
