import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndex from './booking_index';
import ReactStars from 'react-stars';


const BookingIndexItem = ({ booking }) => {
    return (
      <div className="booking-index-item">
        <ul>
          <img className='booking-index-spot-image' src={booking.spot.spot_image_url}/>
          <img className='booking-index-host-image' src={booking.host.host_image_url} />
          <li className='booking-index-title'> {booking.spot.title}</li>
          <li className='booking-index-date-range'>{booking.start_date} - {booking.end_date}</li>
        </ul>

      </div>
    );
  }


export default BookingIndexItem;
