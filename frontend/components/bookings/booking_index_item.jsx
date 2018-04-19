import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndex from './booking_index';
import ReactStars from 'react-stars';
import moment from 'moment';


const BookingIndexItem = ({ booking }) => {
    return (
      <div className="booking-index-item">
        <ul>
          <div className='booking-index-image-container'>
            <img className='booking-index-spot-image' src={booking.spot.spot_image_url}/>
            <img className='booking-index-host-image' src={booking.host.host_image_url} />
          </div>
          <li className='booking-index-title'> {booking.spot.title}</li>
          <li className='booking-index-date-range'>{booking.start_date} - {booking.end_date}</li>
          <li className='booking-index-guests'>{booking.spot.guests} </li>
        </ul>

      </div>
    );
  }


export default BookingIndexItem;
