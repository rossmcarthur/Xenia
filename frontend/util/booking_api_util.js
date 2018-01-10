export const fetchBookings = () => {
  return $.ajax({
    method: 'get',
    url: '/api/bookings'
  });
};

export const fetchBooking = id => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${id}`
  });
};

export const createBooking = booking => {
  debugger
  return $.ajax({
    method: 'post',
    url: `api/bookings`,
    data: { booking }
  });
};

export const removeBooking = id =>{
  return $.ajax({
    method: 'delete',
    url: `api/bookings/${id}`
  });
};
