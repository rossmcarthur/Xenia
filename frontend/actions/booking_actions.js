import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS =  'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
  };
};

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const fetchBookings = () => dispatch => (
APIUtil.fetchBookings().then(bookings => (
    dispatch(receiveBookings(bookings)),
    err => dispatch(receiveBookingErrors(errors.responseJSON))
  ))
);


export const createBooking = booking => (
  APIUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking)),
    err => dispatch(receiveBookingErrors(errors.responseJSON))
  ))
);

export const removeBooking = bookingId => (
  APIUtil.removeBooking(bookingId).then(booking => (
    dispatch(removeBooking(bookingId))
  ))
);
