export const fetchBookings = spotId => {
  return $.ajax({
    method: 'get',
    url: `/api/spots/${spotId}/bookings`
  });
};

export const fetchUserBookings = userId => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${userId}/bookings`
  });
};

export const fetchBooking = id => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${id}`
  });
};

export const createBooking = booking => {
  return $.ajax({
    method: 'post',
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
};

export const removeBooking = id =>{
  return $.ajax({
    method: 'delete',
    url: `api/bookings/${id}`
  });
};
