import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndex from './booking_index';
import ReactStars from 'react-stars';
import moment from 'moment';


const BookingIndexItem = ({ booking }) => {
    return (
      <div className="booking-index-item">
        <Link to={`/spots/${booking.spot.id}`}>
        <ul>
          <div className='booking-index-image-container'>
            <img className='booking-index-spot-image' src={booking.spot.spot_image_url}/>
            <img className='booking-index-host-image' src={booking.host.host_image_url} />
          </div>
          <div className='booking-index-text-container'>
            <li className='booking-index-title'> {booking.spot.title}</li>
            <div className='booking-index-dates'>
              <li className='booking-index-date-range'>{moment(booking.start_date).format('MMM, D')} - {moment(booking.end_date).format('MMM, D, YYYY')}</li>
              <span className='bullet'>&bull;</span>
              <li className='booking-index-guests'>{booking.spot.guests} guests</li>
            </div>
          </div>
        </ul>
      </Link>
      </div>
    );
  }


export default BookingIndexItem;
