import React from 'react';
import BookingIndex from './booking_index';
import NavbarContainer from '../navbar/navbar_container';

const BookingPage = () => {
  return (
    <div className='booking-index-page'>
      <div className='booking-index-navbar'>
        <NavbarContainer />
      </div>
    <div className='booking-index-grid'>
      <p className='booking-index-header'>Past Trips</p>
      <BookingIndex />
    </div>
    </div>
  );
};

export default BookingPage;
