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
    booking,
    spot: booking.spot
  };
};

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const fetchBookings = spotId => dispatch => (
APIUtil.fetchBookings(spotId).then(bookings => (
    dispatch(receiveBookings(bookings)),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const fetchUserBookings = userId => (dispatch, getState) => (
  APIUtil.fetchUserBookings(userId).then(bookings => (
    dispatch(receiveBookings(bookings)),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  ))

);

export const fetchBooking = id => dispatch => (
APIUtil.fetchBooking(id).then(booking => (
    dispatch(receiveBooking(booking)),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking).then(booking => {
    return dispatch(receiveBooking(booking)),
     errors => dispatch(receiveBookingErrors(errors.responseJSON));
  });
};

export const removeBooking = bookingId => dispatch => (
  APIUtil.removeBooking(bookingId).then(booking => (
    dispatch(removeBooking(bookingId))
  ))
);
