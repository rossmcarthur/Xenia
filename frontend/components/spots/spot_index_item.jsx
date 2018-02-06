import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndex from './spot_index';
import ReactStars from 'react-stars';


const SpotIndexItem = ({ spot }) => {

    return (
      <div className="spot-index-item">
        <ul>
          <Link className="spot-link" to={`/spots/${spot.id}`}>
            <img className="spot-image" src={spot.image_url}/>
            <li className="spot-type">{spot.spot_type}</li>
            <li className="spot-title truncate">{spot.title}</li>
            <li className="spot-price">From ${spot.price} per night</li>
          </Link>
        </ul>
        <ReactStars className="rating-stars"
          count={ 5 }
          value={ spot.average_rating }
          edit={ false }
          color2='#008489' />
      </div>
    );
  }


export default SpotIndexItem;
